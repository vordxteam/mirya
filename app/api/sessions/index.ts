import axios from 'axios';

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const getSession = async (): Promise<any> => {
  const response = await axios.get(`${base_url}/session`);
  return response.data;
};

export const getSessionDetail = async (id: string): Promise<any> => {
  const response = await axios.get(`${base_url}/session/${id}`);
  return response.data;
};

export const bookSesssion = async (data: any): Promise<any> => {
  const response = await axios.post(`${base_url}/session/book-session`, data);
  return response.data;
}