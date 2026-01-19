// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { categoryApi } from "@/app/api/academy";
// import { CardSkeleton } from "../../(pages)/articles/[category]/[slug]/SkeletonDetail";
// import { useTranslation } from "react-i18next";
// type CardItem = {
//   id: number;
//   slug: string;
//   category: string;
//   title: string;
//   description: string;
//   icon: string;
// };

// const Cards = () => {
//   const { i18n } = useTranslation(); // 1. Initialize hook
//   const router = useRouter();
//   const [cardsData, setCardsData] = useState<CardItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   const hasFetched = React.useRef(false);
//   const apiLangMap: Record<string, string> = {
//     en: "english",
//     tr: "turkish",
//     de: "german",
//   };

//   useEffect(() => {
//     if (hasFetched.current) return;

//     hasFetched.current = true;

//     categoryApi
//       .getAll()
//       .then((res) => {
//         const rawData = res.data?.data || [];
//         const mappedData = rawData.map((item: any) => ({
//           id: item.id,
//           slug: item.slug,
//           title: item.name,
//           description: item.description,
//           icon: item.icon,
//           category: "academy",
//         }));
//         setCardsData(mappedData);
//       })
//       .catch((err) => console.error("Failed to fetch:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleLearnMore = (card: CardItem) => {
//     router.push(`/articles/${card.category}/${card.id}`);
//   };

//  return (
//   <div className="bg-[#00031C] relative z-10 min-h-[80vh]">
//     <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 pb-[60px] sm:pt-[60px] pt-0 overflow-hidden relative">

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[60px]">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <CardSkeleton key={i} />
//           ))}
//         </div>
//       ) : (
//         /* 3. ACTUAL DATA STATE */
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[60px]">
//           {cardsData.map((card) => (
//             <div
//               key={card.id}
//               className="block h-full group cursor-pointer"
//               onClick={() => handleLearnMore(card)}
//             >
//               <div
//                 className="rounded-xl p-0.5 h-full transition-transform duration-300 hover:scale-[1.02]"
//                 style={{
//                   background:
//                     "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
//                 }}
//               >
//                 <div className="bg-[#050A29] overflow-hidden relative p-5 h-full rounded-xl">
//                    <div className="absolute right-[-70px] bottom-[21px]">
//                      <div className="rounded-[68.75px] opacity-[0.6] bg-[#211F9C] blur-[50px] w-[181px] h-[94px]" />
//                    </div>
//                    <div className="relative z-20 flex flex-col items-start justify-between h-full space-y-6">
//                      <Image src={card.icon} width={56} height={56} alt={card.title} />
//                      <div className="space-y-3">
//                        <h1 className="text-[#F4F7FF] text-[20px] sm:text-[24px] font-medium leading-6 sm:leading-[30px]">
//                          {card.title}
//                        </h1>
//                        <p className="text-[14px] font-normal leading-5 text-[#F4F7FF99]">
//                          {card.description}
//                        </p>
//                      </div>
//                      <div className="flex items-center justify-between w-full">
//                        <span className="text-[#0F73FE] text-[16px] font-normal leading-5 group-hover:underline">
//                          Learn More
//                        </span>
//                        <div className="transition-transform group-hover:translate-x-1">
//                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0F73FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                          </svg>
//                        </div>
//                      </div>
//                    </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
// );
// };

// export default Cards;
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { categoryApi } from "@/app/api/academy";
import { CardSkeleton } from "../../(pages)/articles/[category]/[slug]/SkeletonDetail";
import { useTranslation } from "react-i18next";

type CardItem = {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  icon: string;
};

const Cards = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [cardsData, setCardsData] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);

  const apiLangMap: Record<string, string> = {
    en: "english",
    tr: "turkish",
    de: "german",
  };

  useEffect(() => {
    setLoading(true);

    const currentLang = apiLangMap[i18n.language] || "english";

    categoryApi
      .getAll(currentLang)
      .then((res) => {
        const rawData = res.data?.data || [];
        const mappedData = rawData.map((item: any) => ({
          id: item.id,
          slug: item.slug,
          title: item.name,
          description: item.description,
          icon: item.icon,
          category: "academy",
        }));
        setCardsData(mappedData);
      })
      .catch((err) => console.error("Failed to fetch:", err))
      .finally(() => setLoading(false));
  }, [i18n.language]);

  const handleLearnMore = (card: CardItem) => {
    if (card.title == 'Hire an Expert') {
      router.push(`/all-experts`);
    } else {
      router.push(`/articles/${card.category}/${card.slug}`);
    }
  };

  return (
    <div className="bg-[#00031C] relative z-10 min-h-[80vh]">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 pb-[60px] sm:pt-[60px] pt-0 overflow-hidden relative">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[60px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[60px]">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="block h-full group cursor-pointer"
                onClick={() => handleLearnMore(card)}
              >
                <div
                  className="rounded-xl p-0.5 h-full transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                  }}
                >
                  <div className="bg-[#050A29] overflow-hidden relative p-5 h-full rounded-xl">
                    <div className="absolute right-[-70px] bottom-[21px]">
                      <div className="rounded-[68.75px] opacity-[0.6] bg-[#211F9C] blur-[50px] w-[181px] h-[94px]" />
                    </div>
                    <div className="relative z-20 flex flex-col items-start justify-between h-full space-y-6">
                      <Image
                        src={card.icon}
                        width={56}
                        height={56}
                        alt={card.title}
                      />
                      <div className="space-y-3">
                        <h1 className="text-[#F4F7FF] text-[20px] sm:text-[24px] font-medium leading-6 sm:leading-[30px]">
                          {card.title}
                        </h1>
                        <p className="text-[14px] font-normal leading-5 text-[#F4F7FF99]">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[#0F73FE] text-[16px] font-normal leading-5 group-hover:underline">
                          Learn More
                        </span>
                        <div className="transition-transform group-hover:translate-x-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="#0F73FE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
