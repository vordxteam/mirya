import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-tjte9zcksy";
import Image from "next/image";

// Counter animation hook
function useCounter(target: number, duration = 2.5) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration,
        ease: [0.25, 0.1, 0.25, 1], // Smooth, gentle easing
      });
      return controls.stop;
    }
  }, [isInView, count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return { ref, value: displayValue };
}

function BgMg() {
  return (
    <div
      className="absolute bottom-[-6px] h-[349px] left-1/2 translate-x-[-50%] w-[648px]"
      data-name="bg mg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          width={500}
          height={500}
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src="/images/animation1.png"
        />
      </div>
    </div>
  );
}

function MousePointSvg() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-[40px]"
      data-name="mouse-point.svg"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 42"
      >
        <g id="mouse-point.svg">
          <g filter="url(#filter0_f_3_102)" id="Group">
            <path
              d={svgPaths.p27554d00}
              fill="var(--fill-0, #EDEDED)"
              id="Vector"
            />
          </g>
          <path
            d={svgPaths.p70cf180}
            id="Vector_2"
            opacity="0.5"
            stroke="var(--stroke-0, #CCCCCC)"
          />
          <g id="Vector_3">
            <path d={svgPaths.p19fb84a0} fill="var(--fill-0, #00031C)" />
            <path d={svgPaths.p3ee23c80} stroke="url(#paint0_linear_3_102)" />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="20"
            id="filter0_f_3_102"
            width="20"
            x="4.5"
            y="4"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_3_102"
              stdDeviation="2"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_3_102"
            x1="14.2077"
            x2="29.915"
            y1="13.053"
            y2="34.6724"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#3B3B3B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MousePointSvgFill() {
  return (
    <div
      className="content-stretch flex flex-col h-[42px] items-center justify-center overflow-clip relative shrink-0 w-[40px]"
      data-name="mouse-point.svg fill"
    >
      <MousePointSvg />
    </div>
  );
}

function MousePointSvg1() {
  return (
    <div
      className="content-stretch flex items-start max-w-[40px] overflow-clip relative shrink-0"
      data-name="mouse-point.svg"
    >
      <MousePointSvgFill />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute bottom-0 content-stretch flex flex-col items-start left-[45.28%] right-[47.17%] top-[65.29%]"
      data-name="Container"
    >
      <MousePointSvg1 />
    </div>
  );
}

function Svg() {
  return (
    <div
      className="absolute h-[121px] left-[calc(50%+4px)] overflow-clip top-[334px] translate-x-[-50%] w-[530px]"
      data-name="Svg"
    >
      <div
        className="absolute inset-[1.65%_0.19%_23.14%_47.92%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.55%] left-0 right-[-0.18%] top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 276 92"
          >
            <path
              d={svgPaths.p325eb7e0}
              id="Vector"
              stroke="url(#paint0_linear_3_100)"
              strokeDasharray="12 12"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_3_100"
                x1="264.06"
                x2="25.735"
                y1="0.486641"
                y2="94.4683"
              >
                <stop stopColor="#161835" />
                <stop offset="1" stopColor="#9FA3C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[23.14%] left-[0.19%] right-[52.08%] top-0"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.54%] left-[-0.2%] right-0 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 254 94"
          >
            <path
              d={svgPaths.p38323900}
              id="Vector"
              stroke="url(#paint0_linear_3_98)"
              strokeDasharray="12 12"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_3_98"
                x1="-6.39105"
                x2="226.167"
                y1="-5.31454e-06"
                y2="84.5719"
              >
                <stop stopColor="#161835" />
                <stop offset="1" stopColor="#9FA3C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="absolute inset-[42.98%_52.08%_22.31%_47.92%]"
        data-name="Vector"
      >
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 42"
          >
            <path
              d="M0.5 42V0"
              id="Vector"
              stroke="url(#paint0_linear_3_96)"
              strokeDasharray="12 12"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_3_96"
                x1="nan"
                x2="nan"
                y1="nan"
                y2="nan"
              >
                <stop stopColor="#151B3B" />
                <stop offset="1" stopColor="#9FA3C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Container />
    </div>
  );
}

function Cta() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.08)] relative rounded-[8px] shrink-0"
      data-name="CTA"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
          Refresh
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </motion.div>
  );
}

function Cta1() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.08)] relative rounded-[8px] shrink-0"
      data-name="CTA"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.35,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
          PDF Report
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </motion.div>
  );
}

function Cta2() {
  return (
    <motion.div
      className="bg-gradient-to-b box-border content-stretch flex from-[#00082f] from-[15.278%] gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 to-[#0274fe] to-[156.94%]"
      data-name="CTA"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0px rgba(2, 116, 254, 0)",
            "0 0 8px rgba(2, 116, 254, 0.4)",
            "0 0 0px rgba(2, 116, 254, 0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-[8px] pointer-events-none"
      />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        Export
      </p>
    </motion.div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full"
      data-name="Content"
    >
      <motion.p
        className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Overview
      </motion.p>
      <Cta />
      <Cta1 />
      <Cta2 />
    </div>
  );
}

function Card() {
  // ref should match the element type (p tag → HTMLParagraphElement)
  const ref = useRef<HTMLParagraphElement | null>(null);

  // pass valid number, not "1.5 || null"
  const { value } = useCounter(219, 1.5);

  return (
    <div
      className="bg-[#00082f] relative rounded-[12px] shrink-0 w-full"
      data-name="card"
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <div
            className="absolute left-[calc(50%-1px)] size-[158px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="shape"
          >
            <div className="absolute inset-[-101.27%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 478 478"
              >
                <g filter="url(#filter0_f_3_94)" id="shape">
                  <circle
                    cx="239"
                    cy="239"
                    fill="var(--fill-0, #3331C7)"
                    r="79"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="478"
                    id="filter0_f_3_94"
                    width="478"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_3_94"
                      stdDeviation="80"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <motion.p
            ref={ref}
            className="[text-shadow:rgba(17,106,248,0.2)_0px_2px_4px] font-['Inter:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[32px] text-white whitespace-pre"
          >
            {value}
          </motion.p>

          <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] text-[12px] text-white whitespace-pre">
            Total processes
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.08)] inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0"
      data-name="content"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        Automation Workflows
      </p>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] w-[min-content]">
        Optimize your automated processes
      </p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <motion.div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]"
      data-name="arrow-left"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        delay: 2.3,
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-left">
          <path
            d={svgPaths.p15d1b200}
            id="Vector"
            stroke="var(--stroke-0, #116AF8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M17.0841 10H3.05908"
            id="Vector_2"
            stroke="var(--stroke-0, #116AF8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d={svgPaths.p304c5900}
            id="Vector_3"
            opacity="0"
            stroke="var(--stroke-0, #116AF8)"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function VuesaxLinearArrowLeft() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
      data-name="vuesax/linear/arrow-left"
    >
      <ArrowLeft />
    </div>
  );
}

function Bottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Content1 />
          <div className="flex items-center justify-center leading-[0] relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <VuesaxLinearArrowLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.08)] relative rounded-[12px] shrink-0 w-full"
      data-name="content"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.6,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Light sweep effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[12px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Shimmer edge effect */}
      <motion.div
        className="absolute inset-[-1px] rounded-[13px] pointer-events-none"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(180deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(270deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(360deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Card />
        <Bottom />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#5747bf] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </motion.div>
  );
}

function Card1() {
  // ref should match the element type (p tag → HTMLParagraphElement)
  const ref = useRef<HTMLParagraphElement | null>(null);

  // pass valid number, not "1.5 || null"
  const { value } = useCounter(130, 1.5);

  return (
    <div
      className="bg-[#00082f] relative rounded-[12px] shrink-0 w-full"
      data-name="card"
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <div
            className="absolute left-[calc(50%-1.33px)] size-[158px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="shape"
          >
            <div className="absolute inset-[-101.27%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 478 478"
              >
                <g filter="url(#filter0_f_3_94_2)" id="shape">
                  <circle
                    cx="239"
                    cy="239"
                    fill="var(--fill-0, #3331C7)"
                    r="79"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="478"
                    id="filter0_f_3_94_2"
                    width="478"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_3_94"
                      stdDeviation="80"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <motion.p
            ref={ref}
            className="[text-shadow:rgba(17,106,248,0.2)_0px_2px_4px] font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[32px] text-nowrap text-white whitespace-pre"
          >
            {value}
          </motion.p>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
            Avg. Time
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0"
      data-name="content"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        Avg. Execution Time
      </p>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] w-[min-content]">
        Avg bot run
      </p>
    </div>
  );
}

function ArrowLeft1() {
  return (
    <motion.div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]"
      data-name="arrow-left"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        delay: 2.9,
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-left">
          <path
            d={svgPaths.p15d1b200}
            id="Vector"
            stroke="var(--stroke-0, #116AF8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M17.0841 10H3.05908"
            id="Vector_2"
            stroke="var(--stroke-0, #116AF8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d={svgPaths.p304c5900}
            id="Vector_3"
            opacity="0"
            stroke="var(--stroke-0, #116AF8)"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function VuesaxLinearArrowLeft1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
      data-name="vuesax/linear/arrow-left"
    >
      <ArrowLeft1 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Content3 />
          <div className="flex items-center justify-center leading-[0] relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <VuesaxLinearArrowLeft1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.08)] relative rounded-[12px] shrink-0 w-full"
      data-name="content"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.0,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Light sweep effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[12px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Shimmer edge effect */}
      <motion.div
        className="absolute inset-[-1px] rounded-[13px] pointer-events-none"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(180deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(270deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(360deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5,
        }}
      />

      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Card1 />
        <Bottom1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#5747bf] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </motion.div>
  );
}

function Card2() {
  // ref should match the element type (p tag → HTMLParagraphElement)
  const ref = useRef<HTMLParagraphElement | null>(null);

  // pass valid number, not "1.5 || null"
  const { value } = useCounter(80, 1.5);

  return (
    <div
      className="bg-[#00082f] relative rounded-[12px] shrink-0 w-full"
      data-name="card"
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <div
            className="absolute left-[calc(50%-0.67px)] size-[158px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="shape"
          >
            <div className="absolute inset-[-101.27%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 478 478"
              >
                <g filter="url(#filter0_f_3_94_3)" id="shape">
                  <circle
                    cx="239"
                    cy="239"
                    fill="var(--fill-0, #3331C7)"
                    r="79"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="478"
                    id="filter0_f_3_94_3"
                    width="478"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_3_94"
                      stdDeviation="80"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <motion.p
            ref={ref}
            className="[text-shadow:rgba(17,106,248,0.2)_0px_2px_4px] font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[32px] text-nowrap text-white whitespace-pre"
          >
            {value}%
          </motion.p>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
            Efficiency
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0"
      data-name="content"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        Analyzed Processes
      </p>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] min-w-full relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] w-[min-content]">
        8 Passed, 2 Failed
      </p>
    </div>
  );
}

function ArrowLeft2() {
  return (
    <motion.div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]"
      data-name="arrow-left"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        delay: 3.5,
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-left">
          <path
            d={svgPaths.p15d1b200}
            id="Vector"
            stroke="var(--stroke-0, #116AF8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M17.0841 10H3.05908"
            id="Vector_2"
            stroke="var(--stroke-0, #116AF8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d={svgPaths.p304c5900}
            id="Vector_3"
            opacity="0"
            stroke="var(--stroke-0, #116AF8)"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function VuesaxLinearArrowLeft2() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
      data-name="vuesax/linear/arrow-left"
    >
      <ArrowLeft2 />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Content5 />
          <div className="flex items-center justify-center leading-[0] relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <VuesaxLinearArrowLeft2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.08)] relative rounded-[12px] shrink-0 w-full"
      data-name="content"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.4,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Light sweep effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[12px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Shimmer edge effect */}
      <motion.div
        className="absolute inset-[-1px] rounded-[13px] pointer-events-none"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(180deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(270deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
            "linear-gradient(360deg, rgba(87, 71, 191, 0.3) 0%, rgba(87, 71, 191, 0.8) 50%, rgba(87, 71, 191, 0.3) 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />

      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Card2 />
        <Bottom2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#5747bf] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </motion.div>
  );
}

function Cards() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full"
      data-name="cards"
    >
      <Content2 />
      <Content4 />
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="content"
    >
      <Content />
      <Cards />
    </div>
  );
}

function Left() {
  return (
    <motion.div
      className="absolute bg-[rgba(255,255,255,0.01)] left-1/2 rounded-[12px] top-[48px] translate-x-[-50%] w-[544px]"
      data-name="Left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="box-border content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-[544px]">
        <Content7 />
        <div className="h-0 relative shrink-0 w-full" data-name="line">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 512 1"
            >
              <line
                id="line"
                stroke="url(#paint0_linear_3_87)"
                strokeOpacity="0.4"
                x2="512"
                y1="0.5"
                y2="0.5"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_3_87"
                  x1="0"
                  x2="512"
                  y1="1.5"
                  y2="1.5"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.5" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#463bbf] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </motion.div>
  );
}

export default function How4Card() {
  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter border border-[#5747bf] w-[648px] h-[470px] relative rounded-[20px] size-full"
      data-name="Card"
    >
      <div className="overflow-clip relative rounded-[inherit] bg-[#050a25] size-full">
        <BgMg />
        <Svg />
        <Left />
        <motion.div
          className="absolute left-[565px] size-[66px] top-[107px]"
          data-name="Icon"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            width={66}
            height={66}
            alt="icon"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src="/images/animation2.png"
          />
        </motion.div>
        <motion.div
          className="absolute left-5 size-[66px] bottom-[80px]"
          data-name="Icon"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            width={66}
            height={66}
            alt="icon"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src="/images/animation3.png"
          />
        </motion.div>
      </div>
      {/* <div
        aria-hidden="true"
        className="absolute border border-[#5747bf] border-solid inset-0 pointer-events-none rounded-[20px]"
      /> */}
    </div>
  );
}
