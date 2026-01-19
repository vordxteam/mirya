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
  // Build params object to pass to axios (keeps URL clean)
  const axiosParams: Record<string, any> = {};

  // Add filters as filters[key]=value
  if (params?.filters) {
    Object.entries(params.filters).forEach(([key, value]) => {
      if (value) {
        axiosParams[`filters[${key}]`] = value;
      }
    });
  }

  // Add search only when length >= 3
  if (params?.search && params.search.length >= 3) {
    axiosParams.search = params.search;
  }

  // Pagination
  if (params?.page) axiosParams.page = params.page;
  if (params?.perPage) axiosParams.per_page = params.perPage;

  const url = `${base_url}/expert`;
  console.log('Fetching experts from:', url, 'params:', axiosParams);

  const response = await axios.get(url, { params: axiosParams });
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