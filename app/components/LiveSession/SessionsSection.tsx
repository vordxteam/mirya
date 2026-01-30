// "use client";
// import React, { useEffect, useState } from "react";
// import GradientButton from "@/app/ui/GradientButton";
// import Image from "next/image";
// import { getSession } from "@/app/api/sessions";
// import { useTranslation } from "react-i18next";

// export default function SessionsSection() {
//   const { t } = useTranslation("live-session");
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const response = await getSession();

//         // Assuming your API returns data in the format you provided
//         if (response.success) {
//           // Transform the API data to match your component structure
//           const transformedSessions = response.data.map((session : any, index : any) => {
//             return {
//               id: session.id,
//               session: session.name,
//               title: session.title || session.name,
//               description: session.short_intro || "",
//               requirements: session.key_points || [],
//               footerDescription: session.short_description || "Choose your preferred date and join us.",
//               // Keep the second session as featured for design consistency
//               featured: index === 1,
//               // Store original API data for potential future use
//               apiData: session,
//             };
//           });

//           setSessions(transformedSessions);
//         } else {
//         console.error("Failed to fetch sessions:", response);
//         }
//       } catch (err) {
//         console.error("Error fetching sessions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessions();
//   }, []);

//   // Use API data if available, otherwise use fallback
//   const displaySessions : any = sessions.length > 0
//     ? sessions
//     : [
//       ];

//   if (loading) {
//     return (
//       <div className="py-15">
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
//           <div className="flex justify-center items-center h-64">
//             <div className="text-white heading-6">Loading sessions...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="py-15">
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
//           <div className="flex justify-center items-center h-64">
//             <div className="text-red-400 heading-6">{error}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="flex justify-center relative -z-10 pointer-events-none">
//         <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
//       </div>

//       <div className="py-3 sm:py-15 relative h-full">
//         <div className="absolute -top-2 sm:left-[45%] -z-10 pointer-events-none">
//           <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
//         </div>
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
//           {/* Header Section */}
//           <div className="flex flex-col items-center justify-center mb-16">
//             <div className="pb-3 flex items-center gap-5">
//               <Image
//                 src="/images/label2.svg"
//                 width={78}
//                 height={16}
//                 alt="line"
//               />
//               <h1 className="text-[#959EFE] heading-5 font-normal text-center">
//                 Sessions
//               </h1>
//               <Image
//                 src="/images/label.svg"
//                 width={78}
//                 height={16}
//                 alt="line"
//               />
//             </div>
//             <h1 className="heading-1 font-medium text-white text-center pb-3 sm:pb-6 max-w-[884px]">
//               Choose The Right MIRYA Session
//             </h1>
//             <p className="text-[#CAC9D1] heading-6 font-normal leading-5 text-center max-w-[624px]">
//               Select the format that matches your goals—from quick introduction
//               to advanced automation and industry-focused use cases.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 items-stretch">
//             <svg width="0" height="0" className="absolute">
//               <defs>
//                 <clipPath
//                   id="responsiveCardPath"
//                   clipPathUnits="objectBoundingBox"
//                 >
//                   <path d="M 0.48,0 L 0.95,0 C 0.98,0,1,0.015,1,0.035 L 1,0.96 C 1,0.98,0.98,1,0.95,1 L 0.05,1 C 0.02,1,0,0.98,0,0.96 L 0,0.18 C 0,0.14,0.03,0.12,0.08,0.12 L 0.34,0.12 C 0.37,0.12,0.4,0.1,0.4,0.07 L 0.4,0.06 C 0.4,0.03,0.43,0,0.48,0 Z" />
//                 </clipPath>
//               </defs>
//             </svg>

//             {displaySessions.map((session : any) => (
//               <div key={session.id} className="relative flex flex-col h-full">
//                 {/* Level Badge */}
//                 <div className="absolute top-3 -left-1 z-20">
//                   <div className="inline-block px-4 py-2 max-w-[170px] truncate">
//                     <span className="text-[#FFFFFF] heading-3 font-medium truncate">
//                       {session.session}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Main Border Container */}
//                 <div
//                   className="relative p-[1.5px] flex-1 flex flex-col"
//                   style={{
//                     background:
//                       "linear-gradient(200deg, #000000 0%, #686DDD 70%, #050A29 100%)",
//                     clipPath: "url(#responsiveCardPath)",
//                   }}
//                 >
//                   {/* Inner Content Container */}
//                   <div
//                     className="bg-[#050A29] pl-[18px] pr-[17.8px] pb-[41px] pt-[103px] flex-1 flex flex-col"
//                     style={{
//                       clipPath: "url(#responsiveCardPath)",
//                     }}
//                   >
//                     <div className="flex-1 flex flex-col">
//                       <h3 className="heading-3 font-semibold text-[#F4F7FF] mb-3">
//                         {session.title}
//                       </h3>
//                       <p className="text-[#CAC9D1] font-normal heading-6 mb-3">
//                         {session.description}
//                       </p>

//                       <div className="h-[1px] w-full bg-gradient-to-r from-[#1A1A3B] via-[#A68BEE] to-[#1A1A3B] mb-8"></div>

//                       {/* Highlights Section */}
//                       <div className="flex-1">
//                         <h4 className="font-normal text-[#FFFFFFB8] heading-6 mb-4">
//                           Key Highlights:
//                         </h4>
//                         <ul className="list-disc list-inside space-y-3">
//                           {session.requirements.map((req : any, index : any) => (
//                             <li
//                               key={index}
//                               className="text-[#F4F7FFCC] heading-6 font-medium"
//                             >
//                               {req}
//                             </li>
//                           ))}
//                         </ul>
//                         {session.footerDescription && (
//                           <p className="mt-8 text-white heading-6 font-normal max-w-[238px]">
//                             {session.footerDescription}
//                           </p>
//                         )}
//                       </div>

//                       {/* Button - Pushed to bottom by flex-1 */}
//                       <div className="mt-auto pt-6">
//                         <GradientButton
//                           label="Register Now"
//                           bgColor="#0274FE"
//                           href={`/registerSlug=${session.id}`}
//                           textColor="#FFFFFF"
//                           onClick={() => {
//                             // You can use session.apiData here if needed
//                             console.log("Registering for session:", session.title);
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import { getSession } from "@/app/api/sessions";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function SessionsSection() {
  const { t, i18n } = useTranslation("live-session");
  const router = useRouter(); // Add this
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      const currentLang =
        i18n.language || localStorage.getItem("language") || "en";

      console.log("🌐 Triggering fetch for language:", currentLang);
      setLoading(true);

      try {
        const response = await getSession();

        if (response.success && response.data) {
          const transformedSessions = response.data.map(
            (session: any, index: number) => ({
              id: session.id,
              session: session.name,
              title: session.title || session.name,
              description: session.short_intro || "",
              requirements: session.key_points || [],
              footerDescription:
                session.short_description || t("sessions.defaultFooter"),
              featured: index === 0,
              slug: session.slug,
              apiData: session,
            }),
          );

          setSessions(transformedSessions);
        } else {
          console.error("Failed to fetch sessions or data is empty:", response);
          setSessions([]); // Clear sessions if request fails
        }
      } catch (err) {
        console.error("Error fetching sessions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
    // Use i18n.language as the primary trigger
  }, [i18n.language, t]);

  if (loading) {
    return (
      <div className="py-15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
          <div className="flex justify-center items-center h-64">
            <div className="text-white heading-6">{t("sessions.loading")}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center relative -z-10 pointer-events-none">
        <div className="bg-linear-to-r from-[#00031C] via-[#8EA0E0] to-[#00031C] w-[50%] flex text-center h-[0.8px]"></div>
      </div>

      <div className="py-3 sm:py-15 relative h-full">
        <div className="absolute -top-2 sm:left-[45%] -z-10 pointer-events-none">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="pb-3 flex items-center gap-5">
              <Image
                src="/images/label2.svg"
                width={78}
                height={16}
                alt="line"
              />
              <h1 className="text-[#959EFE] heading-5 font-normal text-center">
                {t("sessions.label")}
              </h1>
              <Image
                src="/images/label.svg"
                width={78}
                height={16}
                alt="line"
              />
            </div>
            <h1 className="heading-1 font-medium text-white text-center pb-3 sm:pb-6 max-w-[884px]">
              {t("sessions.mainTitle")}
            </h1>
            <p className="text-[#CAC9D1] heading-6 font-normal leading-5 text-center max-w-[624px]">
              {t("sessions.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath
                  id="responsiveCardPath"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M 0.48,0 L 0.95,0 C 0.98,0,1,0.015,1,0.035 L 1,0.96 C 1,0.98,0.98,1,0.95,1 L 0.05,1 C 0.02,1,0,0.98,0,0.96 L 0,0.18 C 0,0.14,0.03,0.12,0.08,0.12 L 0.34,0.12 C 0.37,0.12,0.4,0.1,0.4,0.07 L 0.4,0.06 C 0.4,0.03,0.43,0,0.48,0 Z" />
                </clipPath>
              </defs>
            </svg>

            {sessions.length > 0 ? (
              sessions.map((session) => (
                <div key={session.id} className="relative flex flex-col h-full">
                  <div className="absolute top-3 -left-1 z-20">
                    <div className="inline-block px-4 py-2 max-w-[170px] truncate">
                      <span className="text-[#FFFFFF] heading-3 font-medium truncate">
                        {session.session}
                      </span>
                    </div>
                  </div>

                  <div
                    className="relative p-[1.5px] flex-1 flex flex-col"
                    style={{
                      background:
                        "linear-gradient(200deg, #000000 0%, #686DDD 70%, #050A29 100%)",
                      clipPath: "url(#responsiveCardPath)",
                    }}
                  >
                    <div
                      className="bg-[#050A29] pl-[18px] pr-[17.8px] pb-[41px] pt-[103px] flex-1 flex flex-col"
                      style={{ clipPath: "url(#responsiveCardPath)" }}
                    >
                      <div className="flex-1 flex flex-col">
                        <h3 className="heading-3 font-semibold text-[#F4F7FF] mb-3">
                          {session.title}
                        </h3>
                        <p className="text-[#CAC9D1] font-normal heading-6 mb-3">
                          {session.description}
                        </p>

                        <div className="h-[1px] w-full bg-gradient-to-r from-[#1A1A3B] via-[#A68BEE] to-[#1A1A3B] mb-8"></div>

                        <div className="flex-1">
                          <h4 className="font-normal text-[#FFFFFFB8] heading-6 mb-4">
                            {t("sessions.keyHighlights")}
                          </h4>
                          <ul className="list-disc list-inside space-y-3">
                            {session.requirements.map(
                              (req: string, index: number) => (
                                <li
                                  key={index}
                                  className="text-[#F4F7FFCC] heading-6 font-medium"
                                >
                                  {req}
                                </li>
                              ),
                            )}
                          </ul>
                          {session.footerDescription && (
                            <p className="mt-8 text-white heading-6 font-normal max-w-[238px]">
                              {session.footerDescription}
                            </p>
                          )}
                        </div>

                        <div className="mt-auto pt-6">
                          <GradientButton
                            label={t("sessions.registerNow")}
                            bgColor="#0274FE"
                            // Remove href and add onClick handler
                            href={`/register?sessionSlug=${session.slug}`}
                            textColor="#FFFFFF"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-white heading-6 py-10">
                {t("sessions.noSessionsFound") || "No sessions found"}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
