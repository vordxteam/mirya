import axios from 'axios';

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const getSession = async (): Promise<any> => {
  const response = await axios.get(`${base_url}/session/${lang}`);
  return response.data;
};

export const getSessionDetail = async (slug: string): Promise<any> => {
  const response = await axios.get(`${base_url}/session/${slug}/${lang}`);
  return response.data;
};

export const bookSesssion = async (data: any): Promise<any> => {
  const response = await axios.post(`${base_url}/session/book-session`, data);
  return response.data;
}