import GradientBlackButton from "@/app/ui/GradientBlackButton";
import Image from "next/image";
import WorkFlowAnimation from "./HowtouseAnimations/WorkFlowAnimation";

const WorkFlow = () => {
  return (
    <div className="bg-[#00031C] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-5 lg:items-center max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-10 sm:py-[60px] relative z-10">
        {/* Main content with higher z-index */}
        <div className="max-w-[490px] mx-auto lg:mx-0 text-center lg:text-left relative z-20">
          <div className="pb-3 flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            <Image
              src="/images/label2.svg"
              width={73}
              height={16}
              alt="line"
              className="w-[50px] sm:w-[73px]"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal relative z-10">
              MIRYA Workflow
            </h1>
            <Image
              src="/images/label.svg"
              width={78}
              height={16}
              alt="line"
              className="w-[50px] sm:w-[73px]"
            />
          </div>

          <h1 className="heading-1 font-medium tracking-[-1.44px] pb-3 sm:pb-6 max-w-[433px] w-full relative z-10">
            Build flows visually. No learning curve. No complexity
          </h1>

          {/* Subheading */}
          <p className="text-[#CAC9D1] heading-6 font-normal max-w-[510px] pb-3 sm:pb-6 mx-auto lg:mx-0 relative z-10">
            Drag, drop, and connect steps like messages, conditions, actions,
            and checks — all powered by an AI assistant that helps you build
            faster.
          </p>
          
          <div className="w-fit mx-auto lg:mx-0 relative z-20">
            <GradientBlackButton
              label="Get Started"
              href="/contact"
              bgColor="#00031C"
            />
          </div>
        </div>

        {/* Animation */}
        <div className="w-full lg:w-auto hidden md:flex justify-center relative z-10">
          <WorkFlowAnimation />
        </div>

        {/* Background blur elements - placed after content but with lower z-index */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#1D2759] blur-[90px] w-[445px] h-[540px] pointer-events-none"></div>
        </div>
        
        {/* Small gradient blur - positioned to not overlap content */}
        <div className="absolute top-0 right-1/4 transform -translate-y-1/2 pointer-events-none z-0">
          <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[90px] w-[181px] h-[94px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;