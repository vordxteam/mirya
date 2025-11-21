import svgPaths from "./svg-15mnczintc";
import { motion } from "motion/react";
import { TypingText } from "./TypingText";
import Image from "next/image";

function BgMg() {
  return (
    <>
      <motion.div
        className="absolute top-28 h-[60px] -right-16 translate-x-[-50%] w-[60px] z-5000"
        data-name="bg mg"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            width={66}
            height={66}
            alt="ani"
            className="absolute left-0 max-w-none size-full top-0"
            src="/images/animation2.png"
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute -bottom-5 h-[60px] left-7 translate-x-[-50%] w-[60px] z-5000"
        data-name="bg mg"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            width={66}
            height={66}
            alt="ani"
            className="absolute left-0 max-w-none size-full top-0"
            src="/images/animation3.png"
          />
        </div>
      </motion.div>
    </>
  );
}

function Cta() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0"
      data-name="cta"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
            Properties
          </p>
        </div>
      </div>
    </div>
  );
}

function Cta1() {
  return (
    <div
      className="basis-0 bg-gradient-to-b from-[#00082f] from-[15.278%] grow min-h-px min-w-px relative rounded-[8px] shrink-0 to-[#0274fe] to-[156.94%]"
      data-name="cta"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">
            Branching
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] h-[44px] relative rounded-[8px] shrink-0 w-full"
      data-name="container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center p-[6px] relative w-full">
          <Cta />
          <Cta1 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="text"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        File
      </p>
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="content"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-center whitespace-pre">
        <TypingText text="Excel (.xlsx)" delay={900} speed={60} />
      </p>
    </div>
  );
}

function SearchBar() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.08)] h-[36px] relative rounded-[8px] shrink-0 w-full"
      data-name="search bar"
      initial={{ boxShadow: "0 0 0 rgba(2, 116, 254, 0)" }}
      animate={{
        boxShadow: [
          "0 0 0 rgba(2, 116, 254, 0)",
          "0 0 20px rgba(2, 116, 254, 0.3)",
          "0 0 0 rgba(2, 116, 254, 0)",
        ],
      }}
      transition={{
        duration: 2,
        delay: 0.9,
        times: [0, 0.5, 1],
      }}
    >
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center p-[8px] relative w-full">
          <Content />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </motion.div>
  );
}

function Element() {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Element"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">
        File Format
      </p>
      <SearchBar />
    </motion.div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="content"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-center whitespace-pre">
        <TypingText text="[FOLDER] Downloads" delay={2400} speed={60} />
      </p>
    </div>
  );
}

function SearchBar1() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.08)] h-[36px] relative rounded-[8px] shrink-0 w-full"
      data-name="search bar"
      initial={{ boxShadow: "0 0 0 rgba(2, 116, 254, 0)" }}
      animate={{
        boxShadow: [
          "0 0 0 rgba(2, 116, 254, 0)",
          "0 0 20px rgba(2, 116, 254, 0.3)",
          "0 0 0 rgba(2, 116, 254, 0)",
        ],
      }}
      transition={{
        duration: 2,
        delay: 2.4,
        times: [0, 0.5, 1],
      }}
    >
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center p-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </motion.div>
  );
}

function Element1() {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Element"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">
        Source Folder
      </p>
      <SearchBar1 />
    </motion.div>
  );
}

function Containe() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="containe"
    >
      <Text />
      <Element />
      <Element1 />
    </div>
  );
}

function Cta2() {
  return (
    <motion.div
      className="bg-gradient-to-b from-[#00082f] from-[15.278%] h-[44px] relative rounded-[8px] shrink-0 to-[#0274fe] to-[156.94%] w-full overflow-hidden"
      data-name="cta"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.02, 1],
        boxShadow: [
          "0 0 0 rgba(2, 116, 254, 0)",
          "0 0 30px rgba(2, 116, 254, 0.4)",
          "0 0 0 rgba(2, 116, 254, 0)",
        ],
      }}
      transition={{
        duration: 3,
        delay: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
      />
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full relative z-10">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center p-[12px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
            Run
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Left() {
  return (
    <div
      className="absolute bg-[#050a25] left-[55%] rounded-[12px] top-[48px] translate-x-[-50%] w-[544px]"
      data-name="Left"
    >
      <div className="box-border content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[544px]">
        <Container />
        <Containe />
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
                stroke="url(#paint0_linear_1_68)"
                strokeOpacity="0.4"
                x2="512"
                y1="0.5"
                y2="0.5"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1_68"
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
        <Cta2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#463bbf] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
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
          <g filter="url(#filter0_f_1_56)" id="Group">
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
            <path d={svgPaths.p3ee23c80} stroke="url(#paint0_linear_1_56)" />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="20"
            id="filter0_f_1_56"
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
              result="effect1_foregroundBlur_1_56"
              stdDeviation="2"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_56"
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

function Container1() {
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
    <motion.div
      className="absolute h-[121px] left-[calc(50%+4px)] overflow-clip top-[334px] translate-x-[-50%] w-[530px]"
      data-name="Svg"
      animate={{
        y: [0, -5, 0],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
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
              stroke="url(#paint0_linear_1_64)"
              strokeDasharray="12 12"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_64"
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
              stroke="url(#paint0_linear_1_62)"
              strokeDasharray="12 12"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_62"
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
              stroke="url(#paint0_linear_1_66)"
              strokeDasharray="12 12"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_66"
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
      <Container1 />
    </motion.div>
  );
}

export default function How3Card() {
  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter relative rounded-[20px] w-[610px] h-[489px] overflow-hidden bg-[#050a25] border-t border-l border-r border-[#5747bf]"
      data-name="Card"
    >
      <div className="relative h-[400px] w-[550px]">
        <BgMg />
        <Svg />
        <Left />
        <motion.div
          className="relative -z-10 w-full h-full left-5 bg-[#050a25] top-[107px]"
          data-name="Icon"
          animate={{
            y: [0, -6, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            width={500}
            height={500}
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src="/images/animation1.png"
          />
        </motion.div>
      </div>
      {/* <div aria-hidden="true" className="absolute border border-[#5747bf] border-solid inset-0 pointer-events-none rounded-[20px]" /> */}
    </div>
  );
}
