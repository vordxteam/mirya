// "use client";
// import Image from "next/image";
// import React from "react";
// import { useFeatureTranslation } from "@/app/hooks/useFeatureTranslation";

// const FeaturesSection = () => {
//   const { t } = useFeatureTranslation();

//   const cards = t("chooseus.cards", {
//     returnObjects: true,
//   }) as { title: string; desc: string }[];
//   return (
//     <div className="p-0.5">
//       <div className="bg-[#00031C] relative z-10">
//         <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 py-[60px] overflow-hidden relative">
//           <div className="relative">
//             <div className="flex items-center justify-center flex-col">
//               <div className="absolute -top-20 -z-10 pointer-events-none">
//                 {/* <div className="rounded-[68.75px] opacity-[0.6] bg-[#211F9CCC] blur-[50px] w-[181px] h-[94px]"></div> */}
//               </div>
//               {/* Top Title Row */}
//               <div className="pb-3 flex items-center justify-center gap-5">
//                 <Image
//                   src="/images/label2.svg"
//                   width={78}
//                   height={16}
//                   alt="line"
//                 />
//                 <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
//                   Features
//                 </h1>
//                 <Image
//                   src="/images/label.svg"
//                   width={78}
//                   height={16}
//                   alt="line"
//                 />
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-[30px] sm:text-[48px] font-medium leading-[38px] sm:leading-14 tracking-[-1.44px] max-w-[896px] text-center pb-3 sm:pb-6">
//                 Automation built to be powerful, secure, and reliable at every
//                 scale.
//               </h1>

//               {/* Subheading */}
//               <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] font-normal leading-5 text-center max-w-[675px]">
//                 Designed to connect systems, protect data, and govern automation
//                 with enterprise-grade reliability—without adding technical
//                 complexity.
//               </p>
//             </div>
//           </div>

//           <div className="mt-16">
//             <div className="grid grid-cols-12 gap-6">
//               <div className="col-span-12 md:col-span-6 lg:col-span-4">
//                 <div
//                   className="rounded-xl h-[326px] p-0.5"
//                   style={{
//                     background:
//                       "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
//                   }}
//                 >
//                   <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
//                     <div className="absolute right-[-383.191px] top-[-91.622px]">
//                       <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
//                     </div>
//                     <div className="relative z-20 flex flex-col items-start justify-between h-full">
//                       <div>
//                         <Image
//                           src="/images/f1.svg"
//                           width={72}
//                           height={72}
//                           alt="why"
//                         />
//                       </div>
//                       <div className="space-y-4">
//                         <h1 className="text-[24px] font-medium leading-7">
//                           Security & Compliance
//                         </h1>
//                         <p className="text-[14px] md:text-[16px] font-normal leading-5">
//                           Built for regulated environments, MIRYA runs on
//                           Microsoft Azure and follows EU AI Act and GDPR/DSGVO
//                           principles by design. Role-based access, audit logs,
//                           and encryption ensure that sensitive processes.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-span-12 md:col-span-6 lg:col-span-4">
//                 <div
//                   className="rounded-xl h-[326px] p-0.5"
//                   style={{
//                     background:
//                       "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
//                   }}
//                 >
//                   <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
//                     <div className="absolute right-[-383.191px] top-[-91.622px]">
//                       <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
//                     </div>
//                     <div className="relative z-20 flex flex-col items-start justify-between h-full">
//                       <div>
//                         <Image
//                           src="/images/f2.svg"
//                           width={72}
//                           height={72}
//                           alt="why"
//                         />
//                       </div>
//                       <div className="space-y-4">
//                         <h1 className="text-[24px] font-medium leading-7">
//                           Governance & Control
//                         </h1>
//                         <p className="text-[14px] md:text-[16px] font-normal leading-5">
//                           Enterprise operations are supported through structured
//                           roles, permissions, versioning, backup, and monitoring
//                           dashboards. Failover design and full traceability
//                           provide reliability and oversight
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-span-12 md:col-span-6 lg:col-span-4">
//                 <div
//                   className="rounded-xl h-[326px] p-0.5"
//                   style={{
//                     background:
//                       "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
//                   }}
//                 >
//                   <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
//                     <div className="absolute right-[-383.191px] top-[-91.622px]">
//                       <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
//                     </div>
//                     <div className="relative z-20 flex flex-col items-start justify-between h-full">
//                       <div>
//                         <Image
//                           src="/images/f3.svg"
//                           width={72}
//                           height={72}
//                           alt="why"
//                         />
//                       </div>
//                       <div className="space-y-4">
//                         <h1 className="text-[24px] font-medium leading-7">
//                           Citizen Developer Enablement
//                         </h1>
//                         <p className="text-[14px] md:text-[16px] font-normal leading-5">
//                           MIRYA empowers business users to automate their own
//                           processes without coding. Reusable templates, and
//                           best-practice training accelerate adoption across
//                           departments.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;

"use client";
import Image from "next/image";
import { useFeatureTranslation } from "@/app/hooks/useFeatureTranslation";

const FeaturesSection = () => {
  const { t } = useFeatureTranslation();

  const cards = t("features.cards", {
    returnObjects: true,
  }) as { title: string; description: string; icon: string }[];

  return (
    <div className="p-0.5">
      <div className="bg-[#00031C] relative z-10">
        <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 py-[60px]">
          {/* Header */}
          <div className="flex items-center justify-center flex-col text-center">
            <div className="pb-3 flex items-center justify-center gap-5">
              <Image
                src="/images/label2.svg"
                width={78}
                height={16}
                alt="line"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px]">
                {t("features.label")}
              </h1>
              <Image
                src="/images/label.svg"
                width={78}
                height={16}
                alt="line"
              />
            </div>

            <h1 className="text-[30px] sm:text-[48px] font-medium max-w-[896px] pb-3 sm:pb-6">
              {t("features.title")}
            </h1>

            <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] max-w-[675px]">
              {t("features.description")}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-12 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 flex"
              >
                <div
                  className="rounded-xl p-0.5 w-full min-h-[326px] flex"
                  style={{
                    background:
                      "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                  }}
                >
                  <div className="bg-[#050A29] relative overflow-hidden min-h-[322px] w-full px-7 py-8 rounded-xl flex flex-col justify-between">
                    <div className="absolute right-[-383.191px] top-[-91.622px] pointer-events-none">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex-shrink-0">
                        <Image
                          src={card.icon}
                          width={72}
                          height={72}
                          alt="feature"
                        />
                      </div>

                      <div className="space-y-4 mt-6">
                        <h2 className="text-[24px] font-medium leading-tight text-white">
                          {card.title}
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-[#CAC9D1]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
