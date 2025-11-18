import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div
      className="p-0.5"
      style={{
        background:
          "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
      }}
    >
      <div className="bg-[#00031C] relative z-50">
        <div className="max-w-[1440px] m-auto relative z-50 px-5 xl:px-20 py-[60px]">
          <div className="relative flex flex-col items-center text-center">
            {/* Title */}
            <div className="pb-3 flex items-center justify-center gap-5">
              <Image
                src="/images/left-line.png"
                width={73}
                height={8}
                alt="line"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal">
                Our Team
              </h1>
              <Image
                src="/images/right-line.png"
                width={73}
                height={8}
                alt="line"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-[26px] sm:text-[40px] md:text-[48px] font-medium leading-tight tracking-[-1.44px] max-w-[616px] pb-3 sm:pb-6">
              Diverse minds one mission, our team
            </h1>

            {/* Subtitle */}
            <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] leading-6 max-w-[700px] pb-8 sm:pb-12">
              Together we achieve more by supporting each other through every
              challenge.
            </p>
          </div>

          {/* Team Cards */}
          <div className="mt-16 flex flex-col md:flex-row gap-5 xl:gap-12 items-stretch justify-center w-full">
            {/* ==== CARD COMPONENT (Reuse) ==== */}
            {[
              {
                img: "/images/team1.svg",
                name: "Alex Johnson",
                role: "Chief Executive Officer",
                desc: "Alex leads MIRYA with strategic vision, promoting growth, innovation, and high-performance teamwork across all departments.",
              },
              {
                img: "/images/team2.svg",
                name: "Sophia Martinez",
                role: "Chief Operating Officer",
                desc: "Sophia oversees daily operations and ensures smooth execution, efficiency, and alignment across all internal teams.",
              },
              {
                img: "/images/team3.svg",
                name: "Michael Chen",
                role: "Head of Product",
                desc: "Michael drives product innovation, crafting user-focused features and enhancing overall platform experience.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="rounded-[14.4px] p-0.5 flex flex-col h-full"
                style={{
                  background:
                    "linear-gradient(180deg, #463BBF 0.29%, #9C96E3 68.1%, #463BBF 100%)",
                }}
              >
                <div className="bg-[#00031C] rounded-[14.4px] px-5 py-8 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -top-10 -left-16">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>

                  <div className="flex items-center justify-center">
                    <Image
                      src={member.img}
                      width={356}
                      height={289}
                      alt="team"
                      className="flex items-center justify-center relative z-50"
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h1 className="text-[#F4F7FF] text-[20px] font-medium leading-6">
                        {member.name}
                      </h1>
                      <p className="text-[#FFFFFFCC] text-[16px] font-normal leading-5">
                        {member.role}
                      </p>
                    </div>

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/social.svg"
                        width={35}
                        height={30}
                        alt="facebook"
                      />
                    </a>
                  </div>

                  {/* Description - expands equally by using flex-grow */}
                  <div className="mt-8 p-3 rounded-2xl bg-[#050A29] flex-grow flex items-start">
                    <p className="text-[14px] font-normal leading-5">
                      {member.desc}
                    </p>
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

export default Team;
