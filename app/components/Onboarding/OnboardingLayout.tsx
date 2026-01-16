"use client";
import GradientButton from "@/app/ui/GradientButton";
import React from "react";
import { OnboardingLayoutProps } from "./types";

export const OnboardingLayout = ({
  currentStep,
  totalSteps,
  onBack,
  onContinue,
  onSkip,
  children,
  showProgress = true,
  showSkipButton = false,
}: OnboardingLayoutProps) => {
  return (
    <div className="h-[86vh] bg-[#020817] flex flex-col bg-[url('/images/main-gradient.png')] bg-no-repeat bg-bottom bg-contain">
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="relative z-10 w-full max-w-2xl px-6">
          <div className="flex gap-22"></div>
          {/* Progress bar */}
          {showProgress && (
            <div className="mb-3 sm:mb-24 flex items-center gap-22">
              <div className="relative w-full">
                {/* Track with 4 segments */}
                <div className="flex gap-2 items-center">
                  {[...Array(4)].map((_, i) => {
                    const segmentStart = (i * totalSteps) / 4;
                    const segmentEnd = ((i + 1) * totalSteps) / 4;
                    const segmentProgress = Math.max(
                      0,
                      Math.min(
                        1,
                        (currentStep - segmentStart) /
                          (segmentEnd - segmentStart)
                      )
                    );
                    const isCompleted = currentStep > segmentEnd;
                    const isActive =
                      currentStep > segmentStart && currentStep <= segmentEnd;

                    return (
                      <div key={i} className="flex-1 relative h-1">
                        {/* Background */}
                        <div className="absolute inset-0 bg-[#3d3f52] rounded-full" />
                        {/* Progress */}
                        {(isCompleted || isActive) && (
                          <div
                            className="absolute inset-0 bg-blue-500 rounded-full transition-all duration-300"
                            style={{
                              width: isCompleted
                                ? "100%"
                                : `${segmentProgress * 100}%`,
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Slider handle with tooltip */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 transition-all duration-300 group"
                  style={{
                    left: `calc(${(currentStep / totalSteps) * 100}% - 6px)`,
                  }}
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />

                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity pointer-events-none">
                    <div className="bg-[#1f2137] z-10 text-white heading-6 font-normal px-3 py-1 rounded whitespace-nowrap">
                      {currentStep}/{totalSteps}
                    </div>
                    <div className="absolute  -bottom-1.5 left-1/2 -translate-x-1/2 rotate-180 -z-20 -mt-px">
                      <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                        <path d="M6 0L12 6H0L6 0Z" fill="#1f2137" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                {showSkipButton && onSkip && (
                  <button
                    onClick={onSkip}
                    className="text-[#0274FE] cursor-pointer text-sm font-medium transition-colors"
                  >
                    Skip
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step content */}
          {children}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-10">
            <div
              className="rounded-full p-[1.5px]"
              style={{
                background:
                  "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              <button
                onClick={onBack}
                className="inline-block cursor-pointer text-[16px] font-normal text-white py-3 px-6 bg-[#00031C] rounded-full hover:bg-[#0a0d2e] transition-colors"
              >
                Back
              </button>
            </div>

            <div className="flex items-center gap-4">
              <GradientButton
                onClick={onContinue}
                label="Continue"
                bgColor="#0274FE"
                textColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - now at bottom using flexbox */}
      <div className="mt-auto max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="heading-6 font-normal text-[#FFFFFFCC] text-xs mb-2 sm:mb-0">
            © 2024 Copyright - MIRYA AI Tech GmbH
          </div>
          <div className="flex gap-3 text-[#FFFFFFCC] text-xs">
            <a href="#" className="border-r pr-2 border-[#FFFFFF33]">
              Privacy Policy
            </a>
            <a href="#" className="border-r pr-2 border-[#FFFFFF33]">
              Security
            </a>
            <a href="#" className="">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
