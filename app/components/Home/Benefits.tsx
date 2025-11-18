import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="bg-[#00031C] overflow-hidden">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 md:px-20 py-[60px]">
        {/* Top Section */}
        <div className="relative flex flex-col items-center text-center">
          {/* Glow */}
          <div className="absolute -top-16">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>

          {/* Title */}
          <div className="pb-3 flex items-center justify-center gap-5">
            <Image
              src="/images/left-line.png"
              width={73}
              height={8}
              alt="line"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal">
              Benefits
            </h1>
            <Image
              src="/images/right-line.png"
              width={73}
              height={8}
              alt="line"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-[26px] sm:text-[40px] md:text-[48px] font-medium leading-tight tracking-[-1.44px] max-w-[668px] pb-3 sm:pb-6">
            See the difference intelligent automation makes
          </h1>

          {/* Subtitle */}
          <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] leading-6 max-w-[700px] pb-8 sm:pb-12">
            From time savings to error-free execution, MIRYA delivers measurable
            improvements across every part of your workflow—instantly and
            without complexity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card 1 */}
          <BenefitCard
            title="Automate Everything Without Changing Anything"
            description="No need to redesign workflows or rebuild systems. MIRYA works with what you already have."
            image="/images/benefit1.svg"
            imageWidth={380}
            imageHeight={238}
            glowPosition="left"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />

          {/* Card 2 */}
          <BenefitCard
            title="Save Hundreds of Hours"
            description="Free your team from repetitive work and let MIRYA handle all operational tasks instantly."
            image="/images/benefit2.svg"
            imageWidth={410}
            imageHeight={165}
            glowPosition="center"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />

          {/* Card 3 */}
          <BenefitCard
            title="Zero-Error Execution"
            description="Remove human errors and inconsistencies. Your processes run the same reliable way — every time."
            image="/images/benefit3.svg"
            imageWidth={410}
            imageHeight={165}
            glowPosition="right"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          />

          {/* Card 4 (full width on desktop) */}
          <BenefitCard
            title="Boost Efficiency & Productivity"
            description="MIRYA automates repetitive tasks instantly, allowing your team to focus on high-value work. Processes run faster, smoother, and with consistent accuracy."
            image="/images/benefit4.svg"
            imageWidth={623}
            imageHeight={219}
            glowPosition="left"
            className="col-span-12 md:col-span-6 xl:col-span-6"
          />

          {/* Card 5 (full width on desktop) */}
          <BenefitCard
            title="Actionable Insights"
            description="By understanding your workflows and data patterns, MIRYA highlights opportunities for improvement and provides clear insights that help you optimize performance."
            image="/images/benefit5.svg"
            imageWidth={623}
            imageHeight={219}
            glowPosition="left"
            className="col-span-12 md:col-span-6 xl:col-span-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;

/* -------------------- Reusable Card Component --------------------- */

interface CardProps {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  glowPosition?: "left" | "center" | "right";
  className?: string;
}

const BenefitCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  glowPosition = "center",
  className = "",
}) => {
  return (
    <div
      className={`p-px rounded-xl ${className}`}
      style={{
        background:
          "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
      }}
    >
      <div className="bg-[#050925] rounded-xl flex flex-col justify-between h-full overflow-hidden">
        <div className="relative p-4 sm:p-8 space-y-4">
          {/* Glow */}
          <div
            className={`absolute top-10 ${
              glowPosition === "left"
                ? "-left-24"
                : glowPosition === "right"
                ? "-right-24"
                : "left-1/2 -translate-x-1/2"
            }`}
          >
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>

          <h1 className="text-[#F4F7FF] text-[18px] sm:text-[20px] font-semibold leading-6 relative z-10">
            {title}
          </h1>
          <p className="text-[#CAC9D1] text-[14px] leading-5 relative z-10">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center pb-8">
          <Image
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt={title}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
