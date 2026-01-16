// onboarding/index.ts - FIXED VERSION
import { apiClient } from "../client";
import { expertPayload } from "./types";

export const expertsAPI = {
  postExperts(payload: expertPayload) {
    console.log('📡 Sending POST to /api/expert with payload:', payload);
    
    return apiClient.post<any>(`/expert`, payload)
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
        throw error; // Re-throw to let the caller handle it
      });
  },

  postExpertsDetail(payload: any) {
    console.log('📡 Sending POST to /api/expert/record with payload:', payload);
    
    return apiClient.post<any>(`/expert/record`, payload)
      .then((response) => {
        console.log('✅ API Response:', response);
        return response;
      })
      .catch((error) => {
        console.error('❌ API Error:', error);
        throw error; // Re-throw to let the caller handle it
      });
  },
}