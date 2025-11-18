import Image from "next/image";
import React from "react";

const Chooseus = () => {
  return (
    <div className="bg-[#00031C] relative z-10">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 py-[60px] overflow-hidden relative">
        <div className="relative">
          <div className="flex items-center justify-center flex-col">
            <div className="absolute -top-20">
              <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
            </div>
            {/* Top Title Row */}
            <div className="pb-3 flex items-center justify-center gap-5">
              <Image
                src="/images/left-line.png"
                width={73}
                height={8}
                alt="line"
              />
              <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
                Why Choose Us
              </h1>
              <Image
                src="/images/right-line.png"
                width={73}
                height={8}
                alt="line"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-[30px] sm:text-[48px] font-medium leading-[38px] sm:leading-14 tracking-[-1.44px] max-w-[686px] text-center pb-3 sm:pb-6">
              The values that drive us
            </h1>

            {/* Subheading */}
            <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] font-normal leading-5 text-center max-w-[606px]">
              Unlike traditional automation tools, MIRYA doesn’t just follow
              instructions it understands, learns, and adapts. With MIRYA, you
              don’t need APIs, dashboards, or programming knowledge.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why1.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        No Interface Required
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        Works with your existing tools exactly as a human would
                        — no APIs, no integration limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why2.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        On-Premise Deployment
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        Keep your data private. MIRYA runs fully inside your
                        environment — no cloud dependency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why3.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        UI Recording
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        Teach MIRYA by simply performing the task. It learns,
                        records, and builds the automation intelligently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why4.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        Human-Like Intelligence
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        Understands screens, reads data, interprets patterns,
                        and makes decisions in real time.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why5.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        Zero Code Automation
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        If you know how to use your computer, you know how to
                        use MIRYA. No programming needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why6.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        Full White-Label
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        Brand MIRYA as your own: logo, colors, domain, and
                        experience — tailored for clients or internal teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why7.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        Multi-System Compatibility
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        Works across web apps, desktop apps, legacy systems, and
                        custom internal tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div
                className="rounded-xl h-[326px] p-0.5"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8">
                  <div className="absolute right-[-13px] top-[-7px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full">
                    <div>
                      <Image
                        src="/images/why8.svg"
                        width={72}
                        height={72}
                        alt="why"
                      />
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-[24px] sm:text-[32px] font-medium leading-7 sm:leading-8">
                        Transparent Pricing
                      </h1>
                      <p className="text-[14px] md:text-[16px] font-normal leading-5">
                        Clear, predictable pricing. No hidden costs or licensing
                        surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
