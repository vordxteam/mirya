

import axios from 'axios';

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const getApiLang = (): string => {
  if (typeof window !== "undefined") {
    const code = localStorage.getItem("language") || "en";
    const mapping: Record<string, string> = {
      en: "english",
      tr: "turkish",
      de: "german",
    };
    return mapping[code] || "english";
  }
  return "english";
};

const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
});

apiClient.interceptors.request.use((config) => {
  const timestamp = new Date().getTime();
  
  config.params = {
    ...config.params,
    _t: timestamp
  };
  
  const fullUrl = `${config.baseURL}${config.url}?_t=${timestamp}`;
  console.log('🌐 API REQUEST:', fullUrl);
  
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API RESPONSE:', response.config.url, response.status);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getSession = async (): Promise<any> => {
  if (typeof window === "undefined") {
    return { success: false, data: [] };
  }
  
  const lang = getApiLang();
  console.log(' Fetching sessions for language:', lang);
  
  try {
    const response = await apiClient.get(`/session/${lang}`);
    console.log(' Sessions response:', response.data);
    return response.data;
  } catch (error) {
    console.error(' Sessions API error:', error);
    return { success: false, data: [] };
  }
};

export const getSessionDetail = async (slug: string): Promise<any> => {
  if (typeof window === "undefined") {
    return null;
  }
  
  if (!slug || slug === "undefined") {
    console.warn(' getSessionDetail: Invalid slug provided:', slug);
    return null;
  }
  
  const lang = getApiLang();
  console.log(' Fetching session detail:', { slug, lang });
  
  try {
    const response = await apiClient.get(`/session/${slug}/${lang}`);
    console.log(' Session detail response:', response.data);
    return response.data;
  } catch (error) {
    console.error(' Session detail API error:', error);
    throw error;
  }
};

// Book session
export const bookSession = async (data: any): Promise<any> => {
  const response = await apiClient.post(`/book-session`, data);
  return response.data;
};