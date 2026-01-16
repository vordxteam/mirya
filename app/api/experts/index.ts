import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// You can define interfaces for expert data if needed
export interface ExpertProfile {
  id: number;
  name: string;
  specialty: string;
  experience?: number;
  rating?: number;
}

interface GetExpertsApiResponse {
  success: boolean;
  message: string;
  data: ExpertProfile[] | ExpertProfile;
  status : any
}

export interface CreateRatingPayload {
  expert_id: number;
  rating: number;
  comment: string;
  name: string;
  role?: string;
}

export interface GetExpertsParams {
  filters?: Record<string, string>;
  page?: number;
  perPage?: number;
  search?: string; // Add this
}

export const getExperts = async (params?: GetExpertsParams): Promise<GetExpertsApiResponse> => {
  const queryParams = new URLSearchParams();
  
  // Add filters
  if (params?.filters) {
    Object.entries(params.filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(`filters[${key}]`, value);
      }
    });
  }

    if (params?.search && params.search.length >= 3) {
    queryParams.append('search', params.search);
  }
  
  // Add pagination
  if (params?.page) {
    queryParams.append('page', params.page.toString());
  }
  
  if (params?.perPage) {
    queryParams.append('per_page', params.perPage.toString());
  }
  
  const queryString = queryParams.toString();
  const url = `${base_url}/expert${queryString ? `?${queryString}` : ''}`;
  
  console.log('Fetching experts from:', url);
  const response = await axios.get(url);
  return response.data;
};


export const getExpertDetails = async (id: string | number): Promise<GetExpertsApiResponse> => {
  const response = await axios.get(`${base_url}/expert/${id}`);
  return response.data;
};

export const createRating = async (payload: CreateRatingPayload): Promise<GetExpertsApiResponse> => {
  const response = await axios.post(`${base_url}/expert/create-rating`, payload);
  return response.data;
};