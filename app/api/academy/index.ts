
import { apiClient } from "../client";
import { CategoryListResponse, PageResponse } from "./types";
export type { Page } from "./types";

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

export const categoryApi = {
  /**
   * @param lang Optional override. If not provided, it reads automatically from Local Storage.
   */
  getAll(lang: string = getApiLang()) {
    return apiClient.get<CategoryListResponse>(`/api/category/${lang}`);
  },


  getById(id: number, lang: string = getApiLang()) {
    return apiClient.get<PageResponse>(`/api/pages/${id}/${lang}`);
  },

 
  getDetailBySlug(slug: string, lang: string = getApiLang()) {
    return apiClient.get<PageResponse>(`/api/pages/detail/${slug}/${lang}`);
  },
};