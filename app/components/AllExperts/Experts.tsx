"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getExperts } from "@/app/api/experts";
import { useTranslation } from "react-i18next";

const filters = {
  countries: ["United States", "United Kingdom", "Canada", "Germany", "France"],
  cities: ["New York", "London", "Toronto", "Berlin", "Paris"],
  services: [
    "Process Automation",
    "Digital Transformation",
    "AI Consulting",
    "Cloud Services",
  ],
  budgets: ["< $10K", "$10K - $50K", "$50K - $100K", "> $100K"],
  languages: ["English", "German", "French", "Spanish", "Chinese"],
  companyTypes: ["Startup", "Enterprise", "SMB", "Agency"],
};

interface TransformedExpert {
  id: number;
  name: string;
  logo: string;
  description: string;
  rating: number;
  reviewCount: number;
  acceptingClients: boolean;

  text: string;
}

interface ExpertApiResponse {
  success?: boolean;
  status?: boolean;
  data: {
    expert: {
      data: any[];
      current_page?: number;
      last_page?: number;
    };
  };
}

// Filter state interface
interface FilterState {
  country: string;
  city: string;
  service: string;
  budget: string;
  language: string;
  companyType: string;
}

export default function Experts({
  searchQuery: initialSearch,
}: { searchQuery?: string } = {}) {
  const [experts, setExperts] = useState<TransformedExpert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState(initialSearch || "");
  const removeQuotes = (text) => {
    if (!text) return "";
    return text.replace(/^"|"$/g, "");
  };
  const { t } = useTranslation("experts");

  // Filter states
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    country: "",
    city: "",
    service: "",
    budget: "",
    language: "",
    companyType: "",
  });

  // Helper function to parse metadata from API
  const parseMetadata = (metadata: string): string => {
    if (!metadata) return "";

    try {
      // Remove outer quotes and unescape
      let parsed = metadata.trim();

      // Remove surrounding quotes
      if (parsed.startsWith('"') && parsed.endsWith('"')) {
        parsed = parsed.slice(1, -1);
      }

      // Handle escaped quotes
      parsed = parsed.replace(/\\"/g, '"');

      // If it looks like JSON, try to parse it
      if (
        (parsed.startsWith("[") && parsed.endsWith("]")) ||
        (parsed.startsWith("{") && parsed.endsWith("}"))
      ) {
        try {
          const jsonParsed = JSON.parse(parsed);
          if (Array.isArray(jsonParsed)) {
            return jsonParsed.join(", ");
          }
          return JSON.stringify(jsonParsed);
        } catch {
          // If JSON parsing fails, return as is
          return parsed;
        }
      }

      return parsed;
    } catch {
      return metadata || "";
    }
  };

  // Transform API data to match component structure
  const transformExpertData = (data: any[]): TransformedExpert[] => {
    if (!Array.isArray(data)) {
      console.warn("transformExpertData: data is not an array", data);
      return [];
    }

    return data.map((item) => {
      const records = item.expert_records || [];

      // Create a map of records for easy access
      const recordMap: Record<string, string> = {};
      records.forEach((record: any) => {
        if (record.key && record.metadata) {
          recordMap[record.key] = parseMetadata(record.metadata);
        }
      });

      // Get company name from records, fallback to first_name + last_name
      const companyName =
        recordMap["company_name"] ||
        `${item.first_name || ""} ${item.last_name || ""}`.trim() ||
        "Unknown";
      const description =
        recordMap["company_description"] || "No description available.";

      return {
        id: item.id || 0,
        name: companyName,
        logo: "/images/logo1.png",
        description:
          description.length > 100
            ? description.substring(0, 100) + "..."
            : description,
        rating: item.expert_rating_avg_rating || 4.2,
        reviewCount: item.expert_rating_count || 0,
        acceptingClients:
          item.status === "active" || item.status === "pending" || true,
      };
    });
  };

  // Fetch experts from API
  const fetchExperts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Prepare filters for API
      const apiFilters: Record<string, string> = {};

      // Only add filters that have values
      if (selectedFilters.country) apiFilters.country = selectedFilters.country;
      if (selectedFilters.city) apiFilters.city = selectedFilters.city;
      if (selectedFilters.service) apiFilters.service = selectedFilters.service;
      if (selectedFilters.budget) apiFilters.budget = selectedFilters.budget;
      if (selectedFilters.language)
        apiFilters.language = selectedFilters.language;
      if (selectedFilters.companyType)
        apiFilters.companyType = selectedFilters.companyType;

      console.log(
        "Fetching experts with filters:",
        apiFilters,
        "search:",
        searchQuery,
      );

      const response = await getExperts({
        filters: apiFilters,
        page: currentPage,
        perPage: 9,
        search:
          searchQuery && searchQuery.length >= 3 ? searchQuery : undefined,
      });

      console.log("Full API response:", response);

      // Check if response has the expected structure (API uses 'status' not 'success')
      if (response && (response.success || response.status)) {
        // Access the data based on your API structure
        const expertData = response.data as any;
        console.log("Expert data from response:", expertData);

        // Check if expert data exists in the response
        if (
          expertData &&
          typeof expertData === "object" &&
          "expert" in expertData
        ) {
          // Your API returns: response.data.expert.data
          const rawData = expertData.expert.data;
          console.log("Raw expert data:", rawData);

          if (Array.isArray(rawData)) {
            const transformed = transformExpertData(rawData);
            console.log("Transformed experts:", transformed);

            setExperts(transformed);

            // Set pagination if available
            if (expertData.expert.current_page && expertData.expert.last_page) {
              setCurrentPage(expertData.expert.current_page);
              setTotalPages(expertData.expert.last_page);
            }
          } else {
            console.warn("Expert data is not an array:", rawData);
            setExperts([]);
          }
        } else if (Array.isArray(expertData)) {
          // If data is directly an array
          const transformed = transformExpertData(expertData);
          setExperts(transformed);
        } else {
          console.warn("Unexpected API structure - expertData:", expertData);
          setError("Unexpected API response format");
          setExperts([]);
        }
      } else {
        console.warn("API returned unsuccessful response:", response);
        setError(response?.message || "Failed to load experts");
        setExperts([]);
      }
    } catch (err: any) {
      console.error("API Error:", err);
      console.error("Error details:", err.response?.data || err.message);
      setError(err.message || "Failed to load experts");
      setExperts([]);
    } finally {
      setLoading(false);
    }
  };

  // Listen for search events from HeroSection
  useEffect(() => {
    const handler = (e: any) => {
      const q = e?.detail ?? "";
      setSearchQuery(q || "");
      setCurrentPage(1);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("allExpertsSearch", handler as EventListener);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(
          "allExpertsSearch",
          handler as EventListener,
        );
      }
    };
  }, []);

  // Fetch experts on component mount and when filters/page/search change
  useEffect(() => {
    fetchExperts();
  }, [currentPage, selectedFilters, searchQuery]);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      country: "",
      city: "",
      service: "",
      budget: "",
      language: "",
      companyType: "",
    });
    setCurrentPage(1);
  };

  // Check if any filter is active
  const hasActiveFilters = Object.values(selectedFilters).some(
    (value) => value !== "",
  );

  const StarRating = ({ rating, count }: any) => (
    <div className="inline-flex items-center gap-2 bg-[#FFFFFF1F] px-2 py-1 rounded-full">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= Math.floor(rating);
          const isPartiallyFilled = star > rating && star < rating + 1;

          return (
            <div key={star} className="relative">
              {/* Base star (always gray) */}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="#374151"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.57662 1.704C4.21012 0.568 4.52662 0 5.00012 0C5.47362 0 5.79012 0.568 6.42362 1.704L6.58762 1.998C6.76762 2.321 6.85762 2.4825 6.99762 2.589C7.13762 2.6955 7.31262 2.735 7.66262 2.814L7.98062 2.886C9.21062 3.1645 9.82512 3.3035 9.97162 3.774C10.1176 4.244 9.69862 4.7345 8.86012 5.715L8.64312 5.9685C8.40512 6.247 8.28562 6.3865 8.23212 6.5585C8.17862 6.731 8.19662 6.917 8.23262 7.2885L8.26562 7.627C8.39212 8.9355 8.45562 9.5895 8.07262 9.88C7.68962 10.1705 7.11362 9.9055 5.96262 9.3755L5.66412 9.2385C5.33712 9.0875 5.17362 9.0125 5.00012 9.0125C4.82662 9.0125 4.66312 9.0875 4.33612 9.2385L4.03812 9.3755C2.88662 9.9055 2.31062 10.1705 1.92812 9.8805C1.54462 9.5895 1.60812 8.9355 1.73462 7.627L1.76762 7.289C1.80362 6.917 1.82162 6.731 1.76762 6.559C1.71462 6.3865 1.59512 6.247 1.35712 5.969L1.14012 5.715C0.301618 4.735 -0.117383 4.2445 0.0286175 3.774C0.174617 3.3035 0.790118 3.164 2.02012 2.886L2.33812 2.814C2.68762 2.735 2.86212 2.6955 3.00262 2.589C3.14312 2.4825 3.23262 2.321 3.41262 1.998L3.57662 1.704Z" />
              </svg>

              {/* Filled overlay (for full stars) */}
              {isFilled && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="absolute top-0 left-0"
                  fill="#F6BF09"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.57662 1.704C4.21012 0.568 4.52662 0 5.00012 0C5.47362 0 5.79012 0.568 6.42362 1.704L6.58762 1.998C6.76762 2.321 6.85762 2.4825 6.99762 2.589C7.13762 2.6955 7.31262 2.735 7.66262 2.814L7.98062 2.886C9.21062 3.1645 9.82512 3.3035 9.97162 3.774C10.1176 4.244 9.69862 4.7345 8.86012 5.715L8.64312 5.9685C8.40512 6.247 8.28562 6.3865 8.23212 6.5585C8.17862 6.731 8.19662 6.917 8.23262 7.2885L8.26562 7.627C8.39212 8.9355 8.45562 9.5895 8.07262 9.88C7.68962 10.1705 7.11362 9.9055 5.96262 9.3755L5.66412 9.2385C5.33712 9.0875 5.17362 9.0125 5.00012 9.0125C4.82662 9.0125 4.66312 9.0875 4.33612 9.2385L4.03812 9.3755C2.88662 9.9055 2.31062 10.1705 1.92812 9.8805C1.54462 9.5895 1.60812 8.9355 1.73462 7.627L1.76762 7.289C1.80362 6.917 1.82162 6.731 1.76762 6.559C1.71462 6.3865 1.59512 6.247 1.35712 5.969L1.14012 5.715C0.301618 4.735 -0.117383 4.2445 0.0286175 3.774C0.174617 3.3035 0.790118 3.164 2.02012 2.886L2.33812 2.814C2.68762 2.735 2.86212 2.6955 3.00262 2.589C3.14312 2.4825 3.23262 2.321 3.41262 1.998L3.57662 1.704Z" />
                </svg>
              )}

              {/* Partially filled star */}
              {isPartiallyFilled && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    style={{ width: `${(rating - Math.floor(rating)) * 100}%` }}
                    fill="#F6BF09"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.57662 1.704C4.21012 0.568 4.52662 0 5.00012 0C5.47362 0 5.79012 0.568 6.42362 1.704L6.58762 1.998C6.76762 2.321 6.85762 2.4825 6.99762 2.589C7.13762 2.6955 7.31262 2.735 7.66262 2.814L7.98062 2.886C9.21062 3.1645 9.82512 3.3035 9.97162 3.774C10.1176 4.244 9.69862 4.7345 8.86012 5.715L8.64312 5.9685C8.40512 6.247 8.28562 6.3865 8.23212 6.5585C8.17862 6.731 8.19662 6.917 8.23262 7.2885L8.26562 7.627C8.39212 8.9355 8.45562 9.5895 8.07262 9.88C7.68962 10.1705 7.11362 9.9055 5.96262 9.3755L5.66412 9.2385C5.33712 9.0875 5.17362 9.0125 5.00012 9.0125C4.82662 9.0125 4.66312 9.0875 4.33612 9.2385L4.03812 9.3755C2.88662 9.9055 2.31062 10.1705 1.92812 9.8805C1.54462 9.5895 1.60812 8.9355 1.73462 7.627L1.76762 7.289C1.80362 6.917 1.82162 6.731 1.76762 6.559C1.71462 6.3865 1.59512 6.247 1.35712 5.969L1.14012 5.715C0.301618 4.735 -0.117383 4.2445 0.0286175 3.774C0.174617 3.3035 0.790118 3.164 2.02012 2.886L2.33812 2.814C2.68762 2.735 2.86212 2.6955 3.00262 2.589C3.14312 2.4825 3.23262 2.321 3.41262 1.998L3.57662 1.704Z" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <span className="heading-7 font-normal text-[#FFFFFF]">
        {rating} ({count})
      </span>
    </div>
  );

  // If it's still loading after a few seconds, show an error
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        console.error("Loading timeout - check API connection");
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <div className=" text-white pb-4 md:px-20 px-3 relative z-0 pb-[56px]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-15">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-5">
            {/* Country/Territory */}
            <div>
              <label className="heading-5 mb-3 font-normal block pt-8 sm:pt-0">
                {t("filters.country_label")}{" "}
              </label>
              <div className="rounded-lg border border-[#FFFFFF33] rounded px-3 py-2 text-sm text-gray-400">
                <select
                  className="w-full focus:outline-none cursor-pointer bg-[#00031c]"
                  value={selectedFilters.country}
                  onChange={(e) => {
                    setSelectedFilters((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }));
                    setCurrentPage(1); // Reset to page 1 when filter changes
                  }}
                >
                  <option value="">{t("filters.country_placeholder")}</option>
                  {filters.countries.map((item) => (
                    <option key={item} value={item}>
                      {t(`filters_data.countries.${item}`, item)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* City */}
            <div>
              <label className="heading-5 mb-3 font-normal block">
                {t("filters.city_label")}
              </label>
              <div className="rounded-lg border border-[#FFFFFF33] rounded px-3 py-2 text-sm text-gray-400">
                <select
                  className="w-full focus:outline-none cursor-pointer bg-[#00031c]"
                  value={selectedFilters.city}
                  onChange={(e) => {
                    setSelectedFilters((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }));
                    setCurrentPage(1);
                  }}
                >
                  <option value="">{t("filters.city_placeholder")}</option>
                  {filters.cities.map((item) => (
                    <option key={item} value={item}>
                      {t(`filters_data.cities.${item}`, item)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="heading-5 mb-3 font-normal block">
                {t("filters.service_label")}
              </label>
              <div className="rounded-lg border border-[#FFFFFF33] rounded px-3 py-2 text-sm text-gray-400">
                <select
                  className="w-full focus:outline-none cursor-pointer bg-[#00031c]"
                  value={selectedFilters.service}
                  onChange={(e) => {
                    setSelectedFilters((prev) => ({
                      ...prev,
                      service: e.target.value,
                    }));
                    setCurrentPage(1);
                  }}
                >
                  <option value="">{t("filters.service_placeholder")}</option>
                  {filters.services.map((item) => (
                    <option key={item} value={item}>
                      {t(`filters_data.services.${item}`, item)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Budget */}
            <div>
              <label className="heading-5 mb-3 font-normal block">
                {t("filters.budget_label")}
              </label>
              <div className="rounded-lg border border-[#FFFFFF33] rounded px-3 py-2 text-sm text-gray-400">
                <select
                  className="w-full focus:outline-none cursor-pointer bg-[#00031c]"
                  value={selectedFilters.budget}
                  onChange={(e) => {
                    setSelectedFilters((prev) => ({
                      ...prev,
                      budget: e.target.value,
                    }));
                    setCurrentPage(1);
                  }}
                >
                  <option value="">{t("filters.budget_placeholder")}</option>
                  {filters.budgets.map((item) => (
                    <option key={item} value={item}>
                      {t(`filters_data.budgets.${item}`, item)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Languages */}

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <div className="pt-2">
                <button
                  onClick={clearAllFilters}
                  className="w-full py-2 px-4 heading-6 font-normal bg-[#0274FE] hover:bg-[#0260d4] rounded-lg transition-colors"
                >
                  {t("filters.clear_btn")}
                </button>
              </div>
            )}
          </div>

          {/* Experts Grid */}
          <div className="flex-1">
            {/* Loading State */}
            {loading && experts.length === 0 && (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-[#0274FE] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-400 heading-5">
                    {t("states.loading")}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {t("states.timeout_msg")}{" "}
                  </p>
                </div>
              </div>
            )}
            {/* Adjusted Error / Empty State */}
            {(error || (!loading && experts.length === 0)) && (
              <div className="flex flex-col justify-center items-center min-h-[400px] w-full text-center p-6">
                {/* 1st Line: Image */}
                <div className="mb-10">
                  <Image
                    src="/images/expert-empty-state.png"
                    width={163}
                    height={163}
                    alt="No experts found"
                    className="mx-auto"
                  />
                </div>

                {/* 2nd Line: H1 */}
                <h1 className="text-[18px] sm:text-[24px] leading-8 font-medium text-white mb-2">
                  {t("states.no_match_title")}{" "}
                </h1>

                {/* 3rd Line: P Text */}
                <p className="text-[#FFFFFFB8] text-[12px] sm:text-[14px] leading-[18px]  font-normal mb-4">
                  {t("states.no_match_subtitle")}{" "}
                </p>

                {/* 4th Line: Reset Action */}
                <button
                  onClick={clearAllFilters}
                  className="text-[16px] font-medium leading-5 text-[#0274FE] hover:text-[#0274FE] border-none  "
                >
                  {t("states.reset_btn")}{" "}
                </button>
              </div>
            )}
            {/* Empty State */}
            {!loading && !error && experts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 heading-4 mb-2">No experts found</p>
                <p className="text-gray-500 heading-6">
                  Try adjusting your filters
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="mt-4 py-2 px-6 heading-6 font-normal bg-[#0274FE] hover:bg-[#0260d4] rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}

            {/* Experts Grid - Only show when not loading and has data */}
            {!loading && experts.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-0">
                  {experts.map((expert) => (
                    <div
                      // href={`/all-experts/${expert.id}`}
                      key={expert.id}
                      className="relative rounded-xl p-[1px] overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                      }}
                    >
                      <div className="absolute top-10 -right-33">
                        <div className="opacity-60 bg-[#211F9CCC] blur-[50px] w-[181px] h-[90px]"></div>
                      </div>

                      <div className="bg-[#050A29] rounded-xl py-6 px-5 h-full">
                        {/* Logo */}
                        <div className="h-16 w-16 rounded-full flex items-center justify-center mb-6 border border-[#9A9DC1]">
                          <Image
                            src={expert.logo}
                            alt={expert.name}
                            width={56}
                            height={56}
                            className="object-contain"
                          />
                        </div>

                        {/* Accepting Badge */}
                        {expert.acceptingClients && (
                          <div className="inline-flex items-center gap-2 bg-[#E1F9E11F] rounded-full p-2 mb-4 border border-[#E1F9E166]">
                            <div className="w-4 h-4 bg-[#08CD05] rounded-full flex items-center justify-center">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="16"
                                  height="16"
                                  rx="8"
                                  fill="#08CD05"
                                />
                                <path
                                  d="M4.875 7.91432L6.63375 9.67307C6.69561 9.73576 6.76931 9.78553 6.85056 9.81951C6.93182 9.85348 7.01901 9.87098 7.10708 9.87098C7.19515 9.87098 7.28235 9.85348 7.3636 9.81951C7.44486 9.78553 7.51856 9.73576 7.58042 9.67307L11.125 6.12891"
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <span className="heading-7 font-normal text-[#E1F9E1]">
                              {t("states.accepting_clients")}
                            </span>
                          </div>
                        )}

                        {/* Company Name */}
                        <h3 className="text-[24px] leading-[30px] font-medium mb-2 text-[#F4F7FF] ">
                          {removeQuotes(expert.name)}
                        </h3>
                        {/* Description */}
                        <div className="flex items-center gap-2 w-full  mb-6">
                          <Image
                            src="/images/all-expert-icon.svg"
                            width={14}
                            height={14}
                            alt="line"
                          />

                          <p className="heading-6 font-normal text-[#FFFFFF99] flex-1 w-full">
                            {removeQuotes(expert.description)}
                          </p>
                        </div>

                        {/* Rating */}
                        {/* <div className="mt-6">
                          <StarRating
                            rating={expert.rating}
                            count={expert.reviewCount}
                          />
                        </div> */}
                        <div
                          className="rounded-full p-[1.5px]"
                          style={{
                            background:
                              "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)    ",
                          }}
                        >
                          <Link
                            href={`/all-experts/${expert.id}`}
                            className="block sm:inline-block text-center text-[16px] font-normal text-white py-2 px-6 bg-[#00031C] rounded-full w-full"
                          >
                            {t("states.view_profile")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination - Only show when not loading and has multiple pages */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10 relative">
                    <div className="absolute -top-25">
                      <div className="rounded-[68.75px] opacity-60 bg-[#211F9C] blur-[50px] w-[181px] h-[94px]"></div>
                    </div>

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                      className="h-10 w-10 flex items-center justify-center border border-[#171936] rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.135713 5.40089L5.01209 10.0471C5.09345 10.1247 5.20155 10.168 5.31396 10.168C5.42637 10.168 5.53447 10.1247 5.61584 10.0471L5.62109 10.0419C5.66067 10.0043 5.69219 9.95902 5.71372 9.90886C5.73526 9.85869 5.74637 9.80467 5.74637 9.75007C5.74637 9.69548 5.73526 9.64146 5.71372 9.59129C5.69219 9.54112 5.66067 9.49586 5.62109 9.45826L1.02909 5.08326L5.62109 0.710011C5.66067 0.672409 5.69219 0.627148 5.71372 0.576982C5.73526 0.526815 5.74637 0.472792 5.74637 0.418198C5.74637 0.363604 5.73526 0.309581 5.71372 0.259415C5.69219 0.209248 5.66067 0.163987 5.62109 0.126386L5.61584 0.121135C5.53447 0.0435705 5.42637 0.000301361 5.31396 0.000301361C5.20155 0.000301361 5.09345 0.0435705 5.01209 0.121135L0.135713 4.76739C0.092827 4.80824 0.0586853 4.85739 0.0353571 4.91184C0.012029 4.96628 0 5.0249 0 5.08414C0 5.14337 0.012029 5.20199 0.0353571 5.25643C0.0586853 5.31088 0.092827 5.36003 0.135713 5.40089Z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </button>

                    {Array.from(
                      { length: Math.min(5, totalPages) },
                      (_, i) => i + 1,
                    ).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`h-10 w-10 flex items-center justify-center border border-[#171936] rounded-full cursor-pointer heading-16 font-medium ${
                          currentPage === page
                            ? "bg-[#0274FE] text-white"
                            : "text-gray-400 hover:text-[#FFFFFF99]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="h-10 w-10 flex items-center justify-center border border-[#171936] rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.29397 6.6831L4.4176 2.03685C4.33624 1.95928 4.22814 1.91602 4.11572 1.91602C4.00331 1.91602 3.89522 1.95928 3.81385 2.03685L3.8086 2.0421C3.76902 2.0797 3.7375 2.12496 3.71596 2.17513C3.69443 2.22529 3.68332 2.27932 3.68332 2.33391C3.68332 2.38851 3.69443 2.44253 3.71596 2.4927C3.7375 2.54286 3.76902 2.58812 3.8086 2.62572L8.4006 7.00072L3.8086 11.374C3.76902 11.4116 3.7375 11.4568 3.71596 11.507C3.69443 11.5572 3.68332 11.6112 3.68332 11.6658C3.68332 11.7204 3.69443 11.7744 3.71596 11.8246C3.7375 11.8747 3.76902 11.92 3.8086 11.9576L3.81385 11.9628C3.89522 12.0404 4.00331 12.0837 4.11572 12.0837C4.22814 12.0837 4.33624 12.0404 4.4176 11.9628L9.29397 7.3166C9.33686 7.27574 9.371 7.2266 9.39433 7.17215C9.41766 7.1177 9.42969 7.05908 9.42969 6.99985C9.42969 6.94061 9.41766 6.882 9.39433 6.82755C9.371 6.7731 9.33686 6.72396 9.29397 6.6831Z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
