"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Star, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getExpertDetails, createRating } from "@/app/api/experts";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

interface ErrorState {
  name?: string;
  role?: string;
  comment?: string;
  rating?: string;
}

interface NewReviewState {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

interface ReviewData {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

const defaultCompanyData = {
  name: "",
  logo: "/images/detail-logo.png",
  location: "",
  rating: 0,
  reviewCount: 0,
  website: "#",
  breadcrumb: ["Hire a MIRYA Expert", "Expert Details"],

  about: [] as string[],
  resources: [] as Array<{ name: string; link: string }>,
  services: [] as string[],
  average_project_size: [] as string[],
  languages: [] as string[],
  reviews: [] as ReviewData[],
};

interface StarRatingProps {
  rating: number;
  interactive?: boolean;
  onRate?: ((rating: number) => void) | null;
}

//   interactive = false,
//   onRate = null,
// }: StarRatingProps) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;

//   const handleClick = (index: number) => {
//     if (interactive && onRate) {
//       onRate(index + 1);
//     }
//   };

//   return (
//     <div className="flex items-center">
//       {[...Array(5)].map((_, i) => {
//         if (i < fullStars) {
//           return (
//             <Star
//               key={i}
//               className={`w-4 h-4 fill-yellow-400 text-yellow-400 ${
//                 interactive
//                   ? "cursor-pointer hover:scale-110 transition-transform"
//                   : ""
//               }`}
//               onClick={() => handleClick(i)}
//             />
//           );
//         } else if (i === fullStars && hasHalfStar) {
//           return (
//             <div key={i} className="relative w-4 h-4">
//               <Star
//                 className={`w-4 h-4 text-yellow-400 absolute ${
//                   interactive ? "cursor-pointer" : ""
//                 }`}
//               />
//               <div className="overflow-hidden w-1/2 absolute">
//                 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//               </div>
//             </div>
//           );
//         } else {
//           return (
//             <Star
//               key={i}
//               className={`w-4 h-4 text-yellow-400 ${
//                 interactive
//                   ? "cursor-pointer hover:fill-yellow-200 hover:scale-110 transition-all"
//                   : ""
//               }`}
//               onClick={() => handleClick(i)}
//             />
//           );
//         }
//       })}
//     </div>
//   );
// };

const StarRating = ({
  rating,
  interactive = false,
  onRate = null,
}: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const handleClick = (index: number) => {
    if (interactive && onRate) {
      onRate(index + 1);
    }
  };

  // Custom SVG component for the unchecked/background star
  const UnfilledStar = ({ className = "" }: { className?: string }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.76882 2.272C5.61349 0.757334 6.03549 0 6.66682 0C7.29816 0 7.72016 0.757334 8.56482 2.272L8.78349 2.664C9.02349 3.09467 9.14349 3.31 9.33016 3.452C9.51682 3.594 9.75016 3.64667 10.2168 3.752L10.6408 3.848C12.2808 4.21933 13.1002 4.40467 13.2955 5.032C13.4902 5.65867 12.9315 6.31267 11.8135 7.62L11.5242 7.958C11.2068 8.32934 11.0475 8.51534 10.9762 8.74467C10.9048 8.97467 10.9288 9.22267 10.9768 9.718L11.0208 10.1693C11.1895 11.914 11.2742 12.786 10.7635 13.1733C10.2528 13.5607 9.48482 13.2073 7.95016 12.5007L7.55216 12.318C7.11616 12.1167 6.89816 12.0167 6.66682 12.0167C6.43549 12.0167 6.21749 12.1167 5.78149 12.318L5.38416 12.5007C3.84882 13.2073 3.08082 13.5607 2.57082 13.174C2.05949 12.786 2.14416 11.914 2.31282 10.1693L2.35682 9.71867C2.40482 9.22267 2.42882 8.97467 2.35682 8.74534C2.28616 8.51534 2.12682 8.32934 1.80949 7.95867L1.52016 7.62C0.402157 6.31334 -0.15651 5.65934 0.0381567 5.032C0.232823 4.40467 1.05349 4.21867 2.69349 3.848L3.11749 3.752C3.58349 3.64667 3.81616 3.594 4.00349 3.452C4.19082 3.31 4.31016 3.09467 4.55016 2.664L4.76882 2.272Z"
        fill="#FFFFFF52"
      />
    </svg>
  );

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          // Full Yellow Star (using Lucide)
          return (
            <Star
              key={i}
              className={`w-4 h-4 fill-yellow-400 text-yellow-400 ${
                interactive
                  ? "cursor-pointer hover:scale-110 transition-transform"
                  : ""
              }`}
              onClick={() => handleClick(i)}
            />
          );
        } else if (i === fullStars && hasHalfStar) {
          // Half Star Logic
          return (
            <div
              key={i}
              className="relative w-4 h-4"
              onClick={() => handleClick(i)}
            >
              <UnfilledStar
                className={`w-4 h-4 absolute ${interactive ? "cursor-pointer" : ""}`}
              />
              <div className="overflow-hidden w-1/2 absolute">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          // Unfilled Star (using your custom SVG and color)
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={
                interactive
                  ? "cursor-pointer hover:scale-110 transition-transform"
                  : ""
              }
            >
              <UnfilledStar className="w-4 h-4" />
            </div>
          );
        }
      })}
    </div>
  );
};
export default function Details() {
  const params = useParams();
  const id = params?.id as string;
  const { t } = useTranslation("experts");

  const [companyData, setCompanyData] = useState(defaultCompanyData);
  const [reviews, setReviews] = useState<ReviewData[]>(
    defaultCompanyData.reviews,
  );
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState<NewReviewState>({
    name: "",
    role: "",
    comment: "",
    rating: 0,
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const [loading, setLoading] = useState(true);

  // Fetch expert details from API
  useEffect(() => {
    const fetchExpertDetails = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response: any = await getExpertDetails(id);
        console.log("Expert details response:", response);

        if (response && (response.success || response.status)) {
          const expertData = response.data?.expert;

          const apiReviews = expertData.expert_rating || [];
          const formattedReviews: ReviewData[] = apiReviews.map(
            (review: any) => ({
              id: review.id,
              name: review.name || "Anonymous",
              role: review.occupation || "User",
              avatar: "/images/review.jpg",
              rating: parseInt(review.rating) || 0,
              date: new Date(review.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              comment: review.comment || "",
            }),
          );

          // Set reviews
          setReviews(formattedReviews);

          if (expertData) {
            // Parse metadata from expert_records
            const parseMetadata = (metadata: string): string => {
              if (!metadata) return "";
              try {
                let parsed = metadata.trim();

                // Remove outer quotes only if the ENTIRE string is wrapped in quotes
                if (
                  (parsed.startsWith('"') && parsed.endsWith('"')) ||
                  (parsed.startsWith("'") && parsed.endsWith("'"))
                ) {
                  parsed = parsed.slice(1, -1);
                }

                // Remove escaped quotes (like \")
                parsed = parsed.replace(/\\"/g, "").replace(/\\'/g, "");

                // Handle JSON arrays
                if (parsed.startsWith("[") && parsed.endsWith("]")) {
                  try {
                    const jsonParsed = JSON.parse(parsed);
                    if (Array.isArray(jsonParsed)) {
                      // Clean each item in the array
                      return jsonParsed
                        .map((item) =>
                          String(item).replace(/^["']+|["']+$/g, ""),
                        )
                        .join(", ");
                    }
                    return String(jsonParsed).replace(/^["']+|["']+$/g, "");
                  } catch {
                    // If JSON parsing fails, clean the brackets and quotes
                    parsed = parsed.replace(/^\[|\]$/g, "");
                    parsed = parsed.replace(/["']/g, "");
                  }
                }

                // Handle escaped backslashes
                parsed = parsed.replace(/\\\\/g, "");

                // Handle escaped unicode like \u003C
                parsed = parsed.replace(/\\u([\dA-F]{4})/gi, (match, grp) =>
                  String.fromCharCode(parseInt(grp, 16)),
                );

                // Remove any remaining quotes that might be inside the string
                parsed = parsed.replace(/"([^"]*)"/g, "$1"); // Remove "text" quotes
                parsed = parsed.replace(/'([^']*)'/g, "$1"); // Remove 'text' quotes

                return parsed.trim();
              } catch {
                return metadata || "";
              }
            };

            // Extract data from expert_records
            const records = expertData.expert_records || [];
            const recordMap: Record<string, string> = {};
            records.forEach((record: any) => {
              if (record.key && record.metadata) {
                recordMap[record.key] = parseMetadata(record.metadata);
              }
            });

            const socialChannel = recordMap["social_channel_id"];
            const resources = socialChannel
              ? [{ name: "YouTube", link: socialChannel }]
              : [];

            // Build location from city and country
            const city = recordMap["city"] || "";
            const country = recordMap["country"] || "";
            const location = [city, country].filter(Boolean).join(", ");

            // Build about from company_description
            const about = recordMap["company_description"]
              ? [recordMap["company_description"]]
              : [];

            // Build services list
            const servicesStr = recordMap["services_provided"];
            const services = servicesStr ? servicesStr.split(", ") : [];

            // Update company data with extracted API data
            const projectSizeStr = recordMap["average_project_size"];
            const average_project_size = projectSizeStr ? [projectSizeStr] : [];

            // Then update setCompanyData to include average_project_size:
            setCompanyData((prev) => ({
              ...prev,
              name:
                recordMap["company_name"] ||
                (expertData.first_name && expertData.last_name
                  ? `${expertData.first_name} ${expertData.last_name}`
                  : prev.name),
              location: location || prev.location,
              website: recordMap["company_website"] || prev.website,
              breadcrumb: [
                t("details.breadcrumb_home"),
                recordMap["company_name"] ||
                  (expertData.first_name && expertData.last_name
                    ? `${expertData.first_name} ${expertData.last_name}`
                    : "Expert Details"),
              ],
              rating: expertData.expert_rating_avg_rating
                ? parseFloat(expertData.expert_rating_avg_rating)
                : prev.rating,
              reviewCount: expertData.expert_rating_count
                ? parseInt(expertData.expert_rating_count)
                : prev.reviewCount,
              about: about,
              services: services,
              average_project_size: average_project_size,
              resources: resources,
            }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch expert details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpertDetails();
  }, [id, t]);

  const handleAddReview = async () => {
    // Validate form
    const newErrors: ErrorState = {};
    if (!newReview.name.trim())
      newErrors.name =
        t("details.modal.name_label") + " " + t("details.modal.required");
    if (!newReview.role.trim())
      newErrors.role =
        t("details.modal.role_label") + " " + t("details.modal.required");
    if (!newReview.comment.trim())
      newErrors.comment =
        t("details.modal.review_label") + " " + t("details.modal.required");
    if (newReview.rating === 0)
      newErrors.rating = t("details.modal.rating_required");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Call API to create rating with correct field names
      const response: any = await createRating({
        expert_id: parseInt(id),
        rating: newReview.rating,
        comment: newReview.comment,
        name: newReview.name,
        role: newReview.role,
      });

      if (response && (response.success || response.status)) {
        toast.success("Review submitted successfully!");

        // Add new review locally
        const review: ReviewData = {
          id: reviews.length + 1,
          name: newReview.name,
          role: newReview.role,
          avatar: "/images/review.jpg",
          rating: newReview.rating,
          date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          comment: newReview.comment,
        };

        setReviews([review, ...reviews]);

        // Update company rating (average)
        const totalRating =
          reviews.reduce((sum, r) => sum + r.rating, 0) + newReview.rating;
        const newRating = Number(
          (totalRating / (reviews.length + 1)).toFixed(1),
        );

        setCompanyData((prev) => ({
          ...prev,
          rating: newRating,
          reviewCount: prev.reviewCount + 1,
        }));

        // Reset form
        setNewReview({ name: "", role: "", comment: "", rating: 0 });
        setErrors({});
        setShowReviewModal(false);
      } else {
        toast.error(response?.message || "Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Error submitting review. Please try again.");
    }
  };

  const handleRatingSelect = (rating: number) => {
    setNewReview({ ...newReview, rating });
    if (errors.rating) {
      setErrors({ ...errors, rating: "" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
    if (errors[name as keyof ErrorState]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name as keyof ErrorState];
      setErrors(updatedErrors);
    }
  };

  return (
    <div className="text-white p-8">
      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div
            className="rounded-2xl p-px w-full max-w-md"
            style={{
              background:
                "linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)",
            }}
          >
            <div className="bg-[#0A0B1E] rounded-2xl p-8 max-h-[75vh] overflow-auto relative hide-scrollbar">
              <button
                onClick={() => setShowReviewModal(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="heading-2 font-medium mb-8 text-[#F4F7FF]">
                {t("details.modal.title")}
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block heading-6 font-medium mb-3 text-[#F4F7FF]">
                    {t("details.modal.name_label")}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    className={`w-full bg-[#111827] border ${
                      errors.name ? "border-red-500" : "border-[#FFFFFF33]"
                    } rounded-lg px-4 py-3 heading-6 font-normal text-white placeholder-[#FFFFFF66] focus:outline-none focus:border-[#0274FE] transition-colors`}
                    placeholder={t("details.modal.placeholder_name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 heading-7 font-normal mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block heading-6 font-medium mb-3 text-[#F4F7FF]">
                    {t("details.modal.role_label")}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={newReview.role}
                    onChange={handleInputChange}
                    className={`w-full bg-[#111827] border ${
                      errors.role ? "border-red-500" : "border-[#FFFFFF33]"
                    } rounded-lg px-4 py-3 heading-6 font-normal text-white placeholder-[#FFFFFF66] focus:outline-none focus:border-[#0274FE] transition-colors`}
                    placeholder={t("details.modal.placeholder_role")}
                  />
                  {errors.role && (
                    <p className="text-red-500 heading-7 font-normal mt-2">
                      {errors.role}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block heading-6 font-medium mb-3 text-[#F4F7FF]">
                    {t("details.modal.rating_label")}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <StarRating
                      rating={newReview.rating}
                      interactive={true}
                      onRate={handleRatingSelect}
                    />
                    {newReview.rating > 0 && (
                      <span className="ml-2 heading-6 font-medium text-yellow-400">
                        {newReview.rating.toFixed(1)}
                      </span>
                    )}
                  </div>
                  {errors.rating && (
                    <p className="text-red-500 heading-7 font-normal mt-2">
                      {errors.rating}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block heading-6 font-medium mb-3 text-[#F4F7FF]">
                    {t("details.modal.review_label")}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    name="comment"
                    value={newReview.comment}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full bg-[#111827] border ${
                      errors.comment ? "border-red-500" : "border-[#FFFFFF33]"
                    } rounded-lg px-4 py-3 heading-6 font-normal text-white placeholder-[#FFFFFF66] focus:outline-none focus:border-[#0274FE] resize-none transition-colors`}
                    placeholder={t("details.modal.placeholder_comment")}
                  />
                  {errors.comment && (
                    <p className="text-red-500 heading-7 font-normal mt-2">
                      {errors.comment}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 border border-[#FFFFFF33] text-white heading-6 font-medium py-3 rounded-lg hover:border-[#FFFFFF66] hover:bg-[#FFFFFF05] transition-all"
                  >
                    {t("details.modal.cancel")}
                  </button>
                  <button
                    onClick={handleAddReview}
                    className="flex-1 bg-[#0274FE] text-white heading-6 font-medium py-3 rounded-lg hover:bg-[#0160CC] transition-all"
                  >
                    {t("details.modal.submit")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* First Box - Company Info */}
          <div
            className="rounded-3xl transition-all"
            style={{
              backgroundImage: `linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%), 
                      linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              border: "1px solid transparent",
            }}
          >
            <div className="p-6 space-y-6">
              {/* Logo and Company Name */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={companyData.logo}
                    alt={companyData.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                  <div className="inline-flex items-center gap-2 bg-[#E1F9E11F] rounded-full p-2 mb-4 border border-[#E1F9E166]">
                    <div className="w-4 h-4 bg-[#08CD05] rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="16" height="16" rx="8" fill="#08CD05" />
                        <path
                          d="M4.875 7.91432L6.63375 9.67307C6.69561 9.73576 6.76931 9.78553 6.85056 9.81951C6.93182 9.85348 7.01901 9.87098 7.10708 9.87098C7.19515 9.87098 7.28235 9.85348 7.3636 9.81951C7.44486 9.78553 7.51856 9.73576 7.58042 9.67307L11.125 6.12891"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="heading-7 font-normal text-[#E1F9E1]">
                      MIRYA Certified Expert 
                    </span>
                  </div>

                <h2 className="text-[24px] leading-[30px] font-medium mb-5 text-[#F4F7FF] ">
                  {companyData.name}
                </h2>
                <div className="flex items-center mb-3 gap-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99742 1.66699C13.2191 1.66699 15.8308 4.27867 15.8308 7.50031C15.8308 8.56297 15.5474 9.55867 15.0502 10.4173C14.7187 10.9898 13.0344 13.9063 9.99742 19.167C6.96039 13.9063 5.27615 10.9898 4.94469 10.4173C4.44742 9.55867 4.16406 8.56297 4.16406 7.50031C4.16406 4.27867 6.77574 1.66699 9.99738 1.66699M9.99742 5.00031C8.61672 5.00031 7.49742 6.11961 7.49742 7.50031C7.49742 8.88102 8.61672 10.0003 9.99742 10.0003C11.3781 10.0003 12.4974 8.88105 12.4974 7.50031C12.4974 6.11961 11.3782 5.00031 9.99742 5.00031Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <span className="text-[#FFFFFF99] heading-5 font-normal">
                    {companyData.location}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-[#FFFFFF] heading-5 font-normal">
                    {companyData.rating}
                  </span>
                  <span className="text-[#FFFFFF] heading-5 font-normal ml-1">
                    ({companyData.reviewCount})
                  </span>
                </div>
                <Link
                  href={
                    companyData.website?.includes("://")
                      ? companyData.website
                      : `https://${companyData.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0274FE] hover:underline mb-6 flex items-center heading-5 font-normal gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1.5H14.5V5M13.75 2.25L10 6M8.5 2.5H4C3.60218 2.5 3.22064 2.65804 2.93934 2.93934C2.65804 3.22064 2.5 3.60218 2.5 4V12C2.5 12.3978 2.65804 12.7794 2.93934 13.0607C3.22064 13.342 3.60218 13.5 4 13.5H12C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12V7.5"
                      stroke="#0274FE"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t("details.view_website")}
                </Link>
                <GradientButton
                  label={t("details.contact")}
                  bgColor="#0274FE"
                  textColor="#FFFFFF"
                  href="/contact"
                  width="w-full"
                />
              </div>
            </div>
          </div>

          {/* Second Box - Resources, Services, Budget, Language */}
          <div
            className="rounded-3xl transition-all"
            style={{
              backgroundImage: `linear-gradient(176deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%), 
                      linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              border: "1px solid transparent",
            }}
          >
            <div className="p-6 space-y-6">
              {/* Resources */}
              {companyData.resources.length > 0 && (
                <div>
                  <h3 className="heading-4 font-medium text-[#F4F7FF] mb-2">
                    {t("details.resources")}
                  </h3>
                  <div className="space-y-1.5">
                    {companyData.resources.map((resource, index) => (
                      <Link
                        key={index}
                        href={
                          resource.link.includes("://")
                            ? resource.link
                            : `https://${resource.link}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        passHref
                        legacyBehavior
                      >
                        <a className="flex items-center heading-6 font-normal text-[#0274FE] gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1.5H14.5V5M13.75 2.25L10 6M8.5 2.5H4C3.60218 2.5 3.22064 2.65804 2.93934 2.93934C2.65804 3.22064 2.5 3.60218 2.5 4V12C2.5 12.3978 2.65804 12.7794 2.93934 13.0607C3.22064 13.342 3.60218 13.5 4 13.5H12C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12V7.5"
                              stroke="#0274FE"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {resource.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {companyData.services.length > 0 && (
                <div>
                  <h3 className="heading-4 font-medium text-[#F4F7FF]">
                    {t("details.services")}
                  </h3>
                  <ul className="flex flex-wrap flex-col gap-3 text-sm text-[#FFFFFFCC]">
                    {companyData.services.map((serviceItem, index) => {
                      const services = serviceItem.includes(",")
                        ? serviceItem
                            .split(",")
                            .map((s) => s.trim())
                            .filter((s) => s)
                        : [serviceItem];

                      return services.map((service, serviceIndex) => (
                        <li
                          key={`${index}-${serviceIndex}`}
                          className="flex items-start gap-2 rounded-lg mt-2 min-w-0 w-full sm:w-auto sm:flex-1"
                        >
                          <span className="flex-shrink-0 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                            >
                              <path
                                d="M7.5 5.125C8.12989 5.125 8.73398 5.37522 9.17938 5.82062C9.62478 6.26602 9.875 6.87011 9.875 7.5C9.875 8.12989 9.62478 8.73398 9.17938 9.17938C8.73398 9.62478 8.12989 9.875 7.5 9.875C6.87011 9.875 6.26602 9.62478 5.82062 9.17938C5.37522 8.73398 5.125 8.12989 5.125 7.5C5.125 6.87011 5.37522 6.26602 5.82062 5.82062C6.26602 5.37522 6.87011 5.125 7.5 5.125Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span className="break-words flex-1 overflow-hidden">
                            {service}
                          </span>
                        </li>
                      ));
                    })}
                  </ul>
                </div>
              )}

              {/* Project Budget */}
              {companyData.average_project_size.length > 0 && (
                <div>
                  <h3 className="heading-4 font-medium text-[#F4F7FF] mb-2">
                    {t("details.project_budget")}
                  </h3>
                  <ul className="space-y-1 text-sm text-[#FFFFFFCC]">
                    {companyData.average_project_size.map((budget, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M7.5 5.125C8.12989 5.125 8.73398 5.37522 9.17938 5.82062C9.62478 6.26602 9.875 6.87011 9.875 7.5C9.875 8.12989 9.62478 8.73398 9.17938 9.17938C8.73398 9.62478 8.12989 9.875 7.5 9.875C6.87011 9.875 6.26602 9.62478 5.82062 9.17938C5.37522 8.73398 5.125 8.12989 5.125 7.5C5.125 6.87011 5.37522 6.26602 5.82062 5.82062C6.26602 5.37522 6.87011 5.125 7.5 5.125Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <span>{budget}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-400 gap-3">
            <Link
              href="/all-experts"
              className="heading-6 font-normal text-[#FFFFFF99] hover:text-[#0274FE]"
            >
              {t("details.breadcrumb_home")}
            </Link>
            <Image
              src="/images/gap.svg"
              alt="gap"
              height={10}
              width={5}
            ></Image>
            <span className="heading-6 font-normal text-[#FFFFFF]">
              {companyData.breadcrumb[1]}
            </span>
          </div>

          {/* Title */}
          <h1 className="heading-1 font-medium mt-3 ">{companyData.name}</h1>

          {/* About Company */}
          {companyData.about.length > 0 && (
            <div>
              <h2 className="text-[32px] font-medium mb-4 mt-12 text-[#FFFFFF]">
                {t("details.about_company")}
              </h2>
              <div className="space-y-8 text-[#FFFFFFCC] heading-5 pb-8 border-b border-[#FFFFFF3D]">
                {companyData.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Section */}
          <div>
            {/* Reviews Header with Add Button - Always Visible */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 mt-12">
              <div className="flex items-center">
                <h2 className="text-[32px] leading-10 font-medium mr-3">
                  {t("details.reviews")}
                </h2>
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className=" heading-4 font-normal text-[#FFFFFF]">
                    {companyData.rating}
                  </span>
                  <span className=" heading-4 font-normal text-[#FFFFFF]">
                    ({companyData.reviewCount})
                  </span>
                </div>
              </div>
              <div
                className="rounded-full p-px"
                style={{
                  background:
                    "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="inline-block text-[16px] bg-[#00031C] font-normal text-white py-3 px-6  rounded-full z-10 relative cursor-pointer"
                >
                  {t("details.add_review")}
                </button>
              </div>
            </div>

            {/* Review Cards - Only show if there are reviews */}
            {reviews.length > 0 && (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-xl p-3 sm:p-6 border border-[#FFFFFF3D] bg-[#14172e]"
                  >
                    <div className=" rounded-xl">
                      <div className="flex items-start">
                        <div className="pr-6 border-r border-[#FFFFFF3D] mr-6">
                          <Image
                            src={review.avatar}
                            alt="Review"
                            width={40}
                            height={40}
                            className="rounded-full object-cover w-10 h-10"
                          />
                          <div className="space-y-0.5 mt-3">
                            <div className="heading-5 text-[#FFFFFF] font-normal ">
                              {review.name}
                            </div>
                            <div className="heading-7 font-normal text-[#FFFFFF99]">
                              {review.role}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <p className="heading-6 text-[#FFFFFF] font-normal max-w-[110px] truncate">
                            {review.comment}
                          </p>
                          <div className="flex items-center text-sm">
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                              <StarRating rating={review.rating} />
                              <div className="flex gap-4 items-center">
                                <span className="heading-5 font-normal text-[#FFFFFF]">
                                  {review.rating?.toFixed(1)}
                                </span>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                className="hidden sm:block"
                              >
                                <path
                                  d="M7.5 5.125C8.12989 5.125 8.73398 5.37522 9.17938 5.82062C9.62478 6.26602 9.875 6.87011 9.875 7.5C9.875 8.12989 9.62478 8.73398 9.17938 9.17938C8.73398 9.62478 8.12989 9.875 7.5 9.875C6.87011 9.875 6.26602 9.62478 5.82062 9.17938C5.37522 8.73398 5.125 8.12989 5.125 7.5C5.125 6.87011 5.37522 6.26602 5.82062 5.82062C6.26602 5.37522 6.87011 5.125 7.5 5.125Z"
                                  fill="white"
                                  fill-opacity="0.8"
                                />
                              </svg>
                              <span className="heading-5 font-normal text-[#FFFFFFCC]">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No reviews message */}
            {reviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 heading-5 mb-4">No reviews yet</p>
                <p className="text-gray-500 heading-6">
                  Be the first to share your experience
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
