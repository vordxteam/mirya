import { apiClient } from "../client";
import { expertPayload } from "./types";
import toast from 'react-hot-toast';

// onboarding/index.ts
export const expertsAPi = {
  postExperts(payload: expertPayload) {
    console.log('📡 Sending POST to /api/expert with payload:', payload);
    
    return apiClient.post<expertPayload>(`https://9621492d4143.ngrok-free.app/api/expert`, payload)
      .then((response) => {
        console.log('✅ API Response:', response);
        console.log('✅ Response data:', response.data);
        console.log('✅ Response status:', response.status);
        return response;
      })
      .catch((error) => {
        console.error('❌ API Error:', error);
        console.error('❌ Error response:', error.response);
        console.error('❌ Error message:', error.message);
        
        const errorMessage = error.response?.data?.errors?.email?.[0] || 
                            error.response?.data?.message || 
                            'An error occurred';
        toast.error(errorMessage);
        throw error; // Make sure to re-throw so submitExpertCreation can catch it
      });
  },

  postExpertsDetail(payload: any) {
    console.log('📡 Sending POST to /api/expert/record with payload:', payload);
    
    return apiClient.post<expertPayload>(`https://9621492d4143.ngrok-free.app/api/expert/record`, payload)
      .then((response) => {
        console.log('✅ API Response:', response);
        return response;
      })
      .catch((error) => {
        console.error('❌ API Error:', error);
        const errorMessage = error.response?.data?.message || 'An error occurred';
        toast.error(errorMessage);
        throw error;
      });
  },
};