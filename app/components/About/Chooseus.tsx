"use client";
import Image from "next/image";
import React from "react";
import { useAbout } from "@/app/hooks/useAboutTranslation";

const Chooseus = () => {
  const { t } = useAbout();

  const cards = t("chooseus.cards", {
    returnObjects: true,
  }) as { title: string; desc: string }[];
  return (
    <div
      className="p-0.5"
      style={{
        background:
          "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
      }}
    >
      <div className="bg-[#00031C] relative z-10">
        <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 py-[60px] overflow-hidden relative">
          <div className="relative">
            <div className="flex items-center justify-center flex-col">
              <div className="absolute -top-20 -z-10 pointer-events-none">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#211F9CCC] blur-[50px] w-[181px] h-[94px]"></div>
              </div>
              {/* Top Title Row */}
              <div className="pb-3 flex items-center justify-center gap-5">
                <Image
                  src="/images/label2.svg"
                  width={78}
                  height={16}
                  alt="line"
                />
                <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
                  {t("chooseus.badge")}
                </h1>
                <Image
                  src="/images/label.svg"
                  width={78}
                  height={16}
                  alt="line"
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-[30px] sm:text-[48px] font-medium leading-[38px] sm:leading-14 tracking-[-1.44px] max-w-[686px] text-center pb-3 sm:pb-6">
                {t("chooseus.title")}
              </h1>

              {/* Subheading */}
              <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] font-normal leading-5 text-center max-w-[606px]">
                {t("chooseus.subtitle")}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                    <div className="absolute right-[-383.191px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[0]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[0]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                    <div className="absolute right-[-383.191px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[1]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[1]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                    <div className="absolute right-[-383.191px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[2]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[2]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                  <div className="absolute right-[-163.025px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[3]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[3]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                    <div className="absolute right-[-163.025px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[4]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[4]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                    <div className="absolute right-[-383.191px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[5]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[5]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                    <div className="absolute right-[-383.191px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[6]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[6]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                    <div className="absolute right-[-383.191px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
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
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[7]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[7]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                   <div className="absolute right-[-163.025px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
                    </div>
                    <div className="relative z-20 flex flex-col items-start justify-between h-full">
                      <div>
                        <Image
                          src="/images/why9.svg"
                          width={72}
                          height={72}
                          alt="why"
                        />
                      </div>
                      <div className="space-y-4">
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[8]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[7]?.desc}
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
                  <div className="bg-[#050A29] overflow-hidden relative h-[322px] px-7 py-8 rounded-xl">
                   <div className="absolute right-[-163.025px] top-[-91.622px]">
                      <div className="rounded-[493px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[493px] h-[213px]"></div>
                    </div>
                    <div className="relative z-20 flex flex-col items-start justify-between h-full">
                      <div>
                        <Image
                          src="/images/why10.svg"
                          width={72}
                          height={72}
                          alt="why"
                        />
                      </div>
                      <div className="space-y-4">
                        <h1 className="text-[24px] font-medium leading-7">
                          {cards[9]?.title}
                        </h1>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5">
                          {cards[7]?.desc}
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
    </div>
  );
};

export default Chooseus;
