"use client";

import React from "react";

const AboutSession = () => {
  return (
    <section className="relative overflow-hidden bg-[#00031C]">
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-[#5935E9]/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-[#1C6BFF]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="flex items-center gap-2 text-sm text-[#7EA1FF] tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7EA1FF]" />
              About Session
            </p>

            <h1 className="text-[#F4F7FF] text-[36px] md:text-[44px] font-medium leading-tight max-w-[520px]">
              What You Will Experience
            </h1>

            <p className="text-[#CAC9D1] text-[15px] leading-6 max-w-[520px]">
              Join a live MIRYA online session to:
            </p>

            <ul className="space-y-4 text-[#CAC9D1] text-[14px]">
              {[
                "Watch MIRYA automate real workflows live",
                "See Intelligent Document Processing and Reinforcement Learning in action",
                "Learn practical use cases from experts",
                "Ask your questions and get immediate answers",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-4 w-4 flex items-center justify-center rounded-full border border-[#7EA1FF] text-[#7EA1FF] text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div
            style={{
              backgroundImage: `
                linear-gradient(#00031C, #00031C),
                linear-gradient(180deg, #343754 0%, #AAB1EC 50%, #343754 100%)
              `,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              border: "1.5px solid transparent",
            }}
            className="rounded-2xl p-px max-w-[420px] w-full mx-auto"
          >
            <div className="relative rounded-2xl bg-[#00031C] p-8 h-full">
              {/* subtle grid */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-[#F4F7FF] text-[22px] font-medium">
                  MIRYA Live Online Session
                </h3>

                <p className="text-[#CAC9D1] text-[14px] leading-6">
                  See MIRYA in action with a guided live demonstration of
                  no-code automation, Intelligent Document Processing, and
                  self-optimizing workflows.
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-[#7EA1FF] to-transparent opacity-40" />

                <p className="text-[#CAC9D1] text-[14px]">
                  Choose your preferred date and join us.
                </p>

                <button
                  className="
                    mt-4 w-fit
                    rounded-full bg-[#0274FE]
                    px-6 py-3 text-sm font-medium text-white
                    transition hover:bg-[#1C6BFF]
                  "
                >
                  Register for a Session
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSession;
