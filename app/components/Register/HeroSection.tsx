// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import IntroductorySession from "./IntroductorySession";
// import { getSessionDetail } from "@/app/api/sessions";
// import { useSearchParams } from "next/navigation";
// import { useTranslation } from "react-i18next";

// const HeroSection = () => {
//   const paragraphRef = useRef<HTMLDivElement>(null);
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   const searchParams = useSearchParams();
//   const sessionId = searchParams.get("sessionId");
//   const { t } = useTranslation("live-session");

//   const fetchSessionDetail = async () => {
//     try {
//       setLoading(true);
//       if (sessionId) {
//         const result = await getSessionDetail(sessionId);
//         setData(result);
//       }
//     } catch (error) {
//       console.error("Error fetching session details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSessionDetail();
//   }, [sessionId]);

//   useEffect(() => {
//     const element = paragraphRef.current;
//     if (!element || !data) return;

//     const text = element.textContent || "";
//     const words = text.split(" ");

  //   element.innerHTML = "";
  //   const spans: HTMLSpanElement[] = words.map((word, i) => {
  //     const span = document.createElement("span");
  //     span.textContent = word + (i < words.length - 1 ? " " : "");
  //     span.style.color = "#FFFFFF";
  //     span.style.display = "inline";
  //     element.appendChild(span);
  //     return span;
  //   });

  //   ScrollTrigger.create({
  //     trigger: element,
  //     start: "top 10%",
  //     end: "bottom 40%",
  //     scrub: true,
  //     onUpdate: (self) => {
  //       const progress = self.progress;
  //       const totalSpans = spans.length;

  //       spans.forEach((span, index) => {
  //         const spanProgress = index / totalSpans;
  //         if (progress >= spanProgress) {
  //           span.style.color = "#73799B";
  //         } else {
  //           span.style.color = "#FFFFFF";
  //         }
  //       });
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [data]);

  // const dashVariants: Variants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       delay: 0.3,
  //     },
  //   },
  // };

  // const pointerVariants: Variants = {
  //   hidden: { opacity: 0, x: 100, y: 100 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       delay: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  // };

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="px-3 sm:px-20 flex items-center justify-center min-h-screen">
//         <div className="text-white">Loading session details...</div>
//       </div>
//     );
//   }

//   // Handle no data case
//   if (!data) {
//     return (
//       <div className="px-3 sm:px-20 flex items-center justify-center min-h-screen">
//         <div className="text-white">No session data found.</div>
//       </div>
//     );
//   }

//   return (
//     <div className="px-3 sm:px-20 max-w-[1440px] m-auto">
//       <div className="flex flex-col items-start justify-center pt-8 relative">
//         <div className="absolute top-15 pointer-events-none z-0">
//           <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
//         </div>
//         <div className="pb-3 flex items-center gap-5">
//           <Image src="/images/label2.svg" width={78} height={16} alt="line" />
//           <Link href="/live-session" className="flex gap-1 items-center z-10">
//             <Image
//               src="/images/left-blue.svg"
//               alt="Go back"
//               height={24}
//               width={24}
//             />
//             <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-left">
//               Go Back
//             </h1>
//           </Link>
//           <Image src="/images/label.svg" width={78} height={16} alt="line" />
//         </div>
//         <h1 className="heading-1 font-medium tracking-[-1.44px] max-w-[972px] w-full text-left pb-3 sm:pb-6">
//           Introductory Session
//         </h1>
//         <p className="text-[#CAC9D1] text-[16px] font-normal leading-5 pb-5 sm:pb-[72px] text-left max-w-[580px]">
//           {data?.data?.description || "No description available"}
//         </p>
//       </div>

//       <IntroductorySession data={data} />
//     </div>
//   );
// };

// export default HeroSection;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroductorySession from "./IntroductorySession";
import { getSession, getSessionDetail } from "@/app/api/sessions";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const paragraphRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const { t } = useTranslation("live-session");

  const slug = searchParams.get("slug");
  const sessionId = searchParams.get("sessionId");

  // Fetch session details
  const fetchSessionDetail = async () => {
    try {
      setLoading(true);

      let result: any = null;

      // 1. If slug exists, fetch by slug
      if (slug) {
        result = await getSessionDetail(slug);
      } 
      // 2. Else if sessionId exists, fetch all sessions, then find session by ID
      else if (sessionId) {
        const sessionsList = await getSession(); // fetch all sessions
        const sessionData = sessionsList.data.find(
          (item: any) => item.id.toString() === sessionId
        );
        if (sessionData) {
          result = await getSessionDetail(sessionData.slug);
        }
      } 
      // 3. Else, fallback: fetch first session from all sessions
      else {
        const sessionsList = await getSession();
        if (sessionsList.data.length > 0) {
          const firstSession = sessionsList.data[0];
          result = await getSessionDetail(firstSession.slug);
        }
      }

      setData(result);
    } catch (error) {
      console.error("Error fetching session details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessionDetail();
  }, [slug, sessionId]);

  // Scroll-triggered text effect
  useEffect(() => {
    const element = paragraphRef.current;
    if (!element || !data) return;

    const text = element.textContent || "";
    const words = text.split(" ");

      element.innerHTML = "";
    const spans: HTMLSpanElement[] = words.map((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + (i < words.length - 1 ? " " : "");
      span.style.color = "#FFFFFF";
      span.style.display = "inline";
      element.appendChild(span);
      return span;
    });

    // ScrollTrigger.create({
    //   trigger: element,
    //   start: "top 10%",
    //   end: "bottom 40%",
    //   scrub: true,
    //   onUpdate: (self) => {
    //     const progress = self.progress;
    //     const totalSpans = spans.length;

    //     spans.forEach((span, index) => {
    //       const spanProgress = index / totalSpans;
    //       if (progress >= spanProgress) {
    //         span.style.color = "#73799B";
    //       } else {
    //         span.style.color = "#FFFFFF";
    //       }
    //     });
    //   },
    // });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  const dashVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const pointerVariants: Variants = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Loading & empty states
  if (loading) {
    return (
      <div className="px-3 sm:px-20 flex items-center justify-center min-h-screen">
        <div className="text-white">{t("hero.loading")}</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="px-3 sm:px-20 flex items-center justify-center min-h-screen">
        <div className="text-white">{t("hero.noData")}</div>
      </div>
    );
  }

  return (
    <div className="px-3 sm:px-20 max-w-[1440px] m-auto">
      <div className="flex flex-col items-start justify-center pt-8 relative">
        <div className="absolute top-15 pointer-events-none z-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
        </div>

        <div className="pb-3 flex items-center gap-5">
          <Image src="/images/label2.svg" width={78} height={16} alt="line" />
          <Link href="/live-session" className="flex gap-1 items-center z-10">
            <Image src="/images/left-blue.svg" alt="Go back" height={24} width={24} />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-left">
              {t("hero.goBack")}
            </h1>
          </Link>
          <Image src="/images/label.svg" width={78} height={16} alt="line" />
        </div>

        <h1 className="heading-1 font-medium tracking-[-1.44px] max-w-[972px] w-full text-left pb-3 sm:pb-6 text-white">
          {data?.data?.title || t("hero.introTitle")}
        </h1>
        <p
          ref={paragraphRef}
          className="text-[#CAC9D1] text-[16px] font-normal leading-5 pb-5 sm:pb-[72px] text-left max-w-[580px]"
        >
          {data?.data?.description || t("hero.noDescription")}
        </p>
      </div>

      <IntroductorySession data={data} />
    </div>
  );
};

export default HeroSection;
