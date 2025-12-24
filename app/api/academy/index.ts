// academy/index.ts

import { apiClient } from "../client";
import { CategoryListResponse, PageResponse } from "./types";
export type { Page } from "./types";

export const categoryApi = {

    getAll() {
        return apiClient.get<CategoryListResponse>("/api/category/english");
    },

    getById(id: number) {
        return apiClient.get<PageResponse>(`/api/pages/${id}/english`);
    },

    
      getDetailBySlug(slug: string) {
    return apiClient.get<PageResponse>(`/api/pages/detail/${slug}/english`);
  },

};
