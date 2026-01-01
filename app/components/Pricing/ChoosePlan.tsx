import GradientButton from "@/app/ui/GradientButton";
import Link from "next/link";
import React from "react";

const ChoosePlan = () => {
  return (
    <div className="max-w-[1440px] m-auto px-2 md:px-20">
      {/* SECTION 1 */}
      <div
        style={{
          background:
            "linear-gradient(180deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%)",
        }}
        className="p-px rounded-2xl relative overflow-hidden"
      >
        {/* Main Content Container - We put everything inside here so the bg-color doesn't hide the lights */}
        <div className="relative bg-[#00031C] px-8 py-6 flex flex-col lg:flex-row gap-5 lg:items-center justify-between rounded-2xl overflow-hidden">
          {/* Background Lights - Moved INSIDE the dark blue div */}
          <div className="absolute top-7 left-40 pointer-events-none z-0">
            <div className="rounded-[68.75px] bg-[#5935E999] blur-[50px] w-[181px] h-[71px]"></div>
          </div>
          <div className="absolute bottom-0 right-10 pointer-events-none z-0">
            <div className="rounded-[68.75px] bg-[#5935E999] blur-[50px] w-[181px] h-[71px]"></div>
          </div>

          {/* Text Content - Added 'relative z-10' to stay ABOVE the lights */}
          <div className="relative z-10 space-y-3">
            <h1 className="text-[#F4F7FF] text-[24px] font-semibold leading-7">
              Automation that scales with your workflow
            </h1>
            <p className="max-w-[709px] text-[#CAC9D1] text-[14px] font-normal leading-5">
              Run smarter automation without per-step charges. Pay only for what
              delivers real value, not for every tiny interaction inside your
              workflow.
            </p>
          </div>

          {/* Button - Added 'relative z-10' to stay ABOVE the lights */}
          <div className="relative z-10 w-fit flex items-end justify-end">
            <GradientButton
              label="Discover How it Works"
              href="#"
              bgColor="#0274FE"
              textColor="#fff"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2 (Existing Layout preserved) */}
      <div className="mt-12 pb-[60px] overflow-hidden bg-[#00031c] relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[#F4F7FF] text-[40px] font-medium leading-12 max-w-[500px] w-full capitalize">
            Need a plan that fits you better?
          </h1>
        </div>
        <div></div>
        <div>
          <div
           style={{
  background:
    "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
  border: "1px solid #00031C",
}}

            className="rounded-xl p-px h-[235px] max-w-[493px] w-full"
          >
            <div className="px-8 py-6 bg-[#11238F] rounded-2xl flex flex-col justify-between h-full">
              <div>
                <h1 className="text-[#F4F7FF] text-[28px] font-medium leading-8">
                  Start-up Plan - 25% off
                </h1>
                <p className="text-[#CAC9D1] text-[14px] font-normal leading-5">
                  Growing team under 20 employees? See if you qualify for our
                  Start-up Plan and get 25% off the Pro Plan.
                </p>
              </div>
              <div
                className="rounded-full p-px w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <Link
                  href="/start-up"
                  className="font-normal py-3 px-6 rounded-full w-full flex items-center justify-center"
                  style={{
                    background: "#00031C",
                    color: "white",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
