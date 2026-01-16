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

export const getExperts = async (): Promise<GetExpertsApiResponse> => {
  const response = await axios.get(`${base_url}/expert`);
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