// "use client";
// import React from "react";
// import { usePathname } from "next/navigation";
// import GradientButton from "../ui/GradientButton";
// import { useLayoutTranslation } from "@/app/hooks/useLayoutTranslation";

// const CTA = () => {
//   const pathname = usePathname();

//    const { t } = useLayoutTranslation();

//   const isArticleDetailPage =
//     pathname.startsWith("/articles/") && pathname !== "/articles";

//   if (isArticleDetailPage) return null;

//   const content = {
//     industries: {
//       h1: (
//         <>
//           Are you ready to automate <br /> with MIRYA?
//         </>
//       ),
//       p: "Let’s build your first automated workflow and unlock results within days. Book your free consultation today.",
//     },
//     default: {
//       h1: (
//         <>
//           Make Your Productivity <br /> More Efficient. From This Time.
//         </>
//       ),
//       p: "Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.",
//     },
//   };

//   const isIndustriesPage = pathname.startsWith("/industries");
//   const currentContent = isIndustriesPage
//     ? content.industries
//     : content.default;

//   return (
//     <div className="bg-[url('/images/ctabg.png')] bg-cover bg-center bg-no-repeat">
//       <div className="flex flex-col items-center justify-between gap-3 sm:gap-6 text-center px-3 sm:px-20 pt-[134px] pb-[152px]">
//         <h1 className="text-[28px] md:text-[48px] font-medium leading-9 sm:leading-14 tracking-[-1.44px]">
//           {currentContent.h1}
//         </h1>

//         <p className="max-w-[510px] text-[14px] font-normal leading-5 text-[#CAC9D1]">
//           {currentContent.p}
//         </p>

//         <GradientButton
//           label={t("cta.button")}
//           href="/contact"
//           bgColor="#fff"
//           textColor="#0274FE"
//         />
//       </div>
//     </div>
//   );
// };

// export default CTA;
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import GradientButton from "../ui/GradientButton";
import { useLayoutTranslation } from "@/app/hooks/useLayoutTranslation";

const CTA = () => {
  const pathname = usePathname();
  const { t } = useLayoutTranslation();

  // 1. Existing Logic: Hide on Article Detail Pages
  const isArticleDetailPage = pathname.startsWith("/articles/") && pathname !== "/articles";
  if (isArticleDetailPage) return null;

  // 2. Identify the current route
  const isIndustriesPage = pathname.startsWith("/industries");
  const isFeaturesPage = pathname.startsWith("/features");

  // 3. Determine the translation prefix or hardcoded content
  let prefix = "cta.default";
  
  if (isIndustriesPage) {
    prefix = "cta.industries";
  } else if (isFeaturesPage) {
    prefix = "cta.features";
  }

  // Define content for Features specifically (as a fallback or override)
  const featuresContent = {
    h1: "Are you ready to automate with MIRYA?",
    p: "Let’s build your first automated workflow and unlock results within days. Book your free consultation today."
  };

  return (
    <div className="bg-[url('/images/ctabg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-between gap-3 sm:gap-6 text-center px-3 sm:px-20 pt-[134px] pb-[152px]">
        <h1
          className="text-[28px] md:text-[48px] font-medium leading-9 w-full max-w-[694px] sm:leading-14 tracking-[-1.44px]"
          // If it's features page, use hardcoded text; otherwise, use translation
          dangerouslySetInnerHTML={{ 
            __html: isFeaturesPage ? featuresContent.h1 : t(`${prefix}.h1` as any) 
          }}
        />

        <p className="max-w-[510px] text-[14px] font-normal leading-5 text-[#CAC9D1]">
          {isFeaturesPage ? featuresContent.p : t(`${prefix}.p` as any)}
        </p>

        <GradientButton
          label={t("cta.button")}
          href="/contact"
          bgColor="#fff"
          textColor="#0274FE"
        />
      </div>
    </div>
  );
};

export default CTA;