import { motion } from "motion/react";
import { useEffect, useState } from "react";

// SVG paths (keeping your existing paths)
const svgPaths = {
  p27554d00: "M8.5 8L14.5 14L8.5 20",
  p70cf180: "M14.5 8L20.5 14L14.5 20",
  p19fb84a0:
    "M12.4336 9.49805L26.3789 30.2949C26.9648 31.1484 26.3555 32.332 25.3086 32.332H11.3633C10.9258 32.332 10.5156 32.1055 10.2734 31.7363L4.19531 21.9395C3.60938 21.0859 4.21875 19.9023 5.26562 19.9023H10.9414C11.3789 19.9023 11.7891 20.1289 12.0312 20.498L12.4336 9.49805Z",
  p3ee23c80:
    "M12.4336 9.49805L26.3789 30.2949C26.9648 31.1484 26.3555 32.332 25.3086 32.332H11.3633C10.9258 32.332 10.5156 32.1055 10.2734 31.7363L4.19531 21.9395C3.60938 21.0859 4.21875 19.9023 5.26562 19.9023H10.9414C11.3789 19.9023 11.7891 20.1289 12.0312 20.498L12.4336 9.49805Z",
  p325eb7e0:
    "M275.5 0.5C275.5 26.7335 254.233 48 228 48C201.767 48 180.5 69.2665 180.5 95.5",
  p38323900:
    "M0.5 0.5C0.5 26.7335 21.767 48 48 48C74.233 48 95.5 69.2665 95.5 95.5",
};

function TypingText({
  text,
  delay = 0,
  speed = 60,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, delay, speed]);

  return <>{displayText}</>;
}

function BgMg() {
  return (
    <>
      <motion.div
        className="absolute top-16 sm:top-28 h-[40px] sm:h-[60px] -right-8 sm:-right-16 w-[40px] sm:w-[60px] z-50"
        animate={{ y: [0, -8, 0], scale: [1, 1.01, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 w-full h-full top-0 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-xl" />
        </div>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 sm:-bottom-5 h-[40px] sm:h-[60px] left-4 sm:left-7 w-[40px] sm:w-[60px] z-50"
        animate={{ y: [0, -8, 0], scale: [1, 1.01, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 w-full h-full top-0 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-xl" />
        </div>
      </motion.div>
    </>
  );
}

function Left() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-8 sm:top-12 w-[90%] sm:w-[85%] max-w-[544px]">
      <div className="bg-[#050a25] rounded-[12px] border border-[#463bbf]">
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-[22px]">
          {/* Container */}
          <div className="bg-[rgba(255,255,255,0.08)] rounded-[8px] border border-[rgba(255,255,255,0.12)]">
            <div className="flex gap-[8px] p-[6px]">
              <div className="flex-1 bg-gradient-to-b from-[#00082f] to-[#0274fe] rounded-[8px] px-3 py-2">
                <p className="font-light text-[10px] sm:text-[12px] text-white text-center">
                  Properties
                </p>
              </div>
              <div className="flex-1 rounded-[8px] px-3 py-2">
                <p className="font-light text-[10px] sm:text-[12px] text-white/80 text-center">
                  Branching
                </p>
              </div>
            </div>
          </div>

          {/* File Section */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-white text-sm sm:text-[16px]">File</p>

            {/* File Format */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="text-white text-[10px] sm:text-[12px]">
                File Format
              </p>
              <motion.div
                className="bg-[rgba(255,255,255,0.08)] rounded-[8px] border border-[rgba(255,255,255,0.12)] p-2"
                initial={{ boxShadow: "0 0 0 rgba(2, 116, 254, 0)" }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(2, 116, 254, 0)",
                    "0 0 20px rgba(2, 116, 254, 0.3)",
                    "0 0 0 rgba(2, 116, 254, 0)",
                  ],
                }}
                transition={{ duration: 2, delay: 0.9, times: [0, 0.5, 1] }}
              >
                <p className="text-white/80 text-[10px] sm:text-[12px]">
                  <TypingText text="Excel (.xlsx)" delay={900} speed={60} />
                </p>
              </motion.div>
            </motion.div>

            {/* Source Folder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="text-white text-[10px] sm:text-[12px]">
                Source Folder
              </p>
              <motion.div
                className="bg-[rgba(255,255,255,0.08)] rounded-[8px] border border-[rgba(255,255,255,0.12)] p-2"
                initial={{ boxShadow: "0 0 0 rgba(2, 116, 254, 0)" }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(2, 116, 254, 0)",
                    "0 0 20px rgba(2, 116, 254, 0.3)",
                    "0 0 0 rgba(2, 116, 254, 0)",
                  ],
                }}
                transition={{ duration: 2, delay: 2.4, times: [0, 0.5, 1] }}
              >
                <p className="text-white/80 text-[10px] sm:text-[12px]">
                  <TypingText
                    text="[FOLDER] Downloads"
                    delay={2400}
                    speed={60}
                  />
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Record Button */}
          <motion.div
            className="bg-gradient-to-b from-[#00082f] to-[#0274fe] rounded-[8px] p-3 relative overflow-hidden"
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
            <p className="text-white text-xs sm:text-[14px] text-center relative z-10">
              Record
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-12 w-[80%] sm:w-[530px] h-[80px] sm:h-[121px]"
      animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 530 121"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={svgPaths.p325eb7e0}
          stroke="url(#paint0_linear)"
          strokeDasharray="12 12"
        />
        <path
          d={svgPaths.p38323900}
          stroke="url(#paint1_linear)"
          strokeDasharray="12 12"
        />
        <line
          x1="265"
          y1="52"
          x2="265"
          y2="94"
          stroke="url(#paint2_linear)"
          strokeDasharray="12 12"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="264.06"
            y1="0.486641"
            x2="25.735"
            y2="94.4683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#161835" />
            <stop offset="1" stopColor="#9FA3C7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="-6.39105"
            y1="0"
            x2="226.167"
            y2="84.5719"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#161835" />
            <stop offset="1" stopColor="#9FA3C7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="265"
            y1="52"
            x2="265"
            y2="94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#151B3B" />
            <stop offset="1" stopColor="#9FA3C7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10">
        <svg viewBox="0 0 40 42" fill="none" className="w-full h-full">
          <g filter="url(#filter0_f)">
            <path d={svgPaths.p27554d00} fill="#EDEDED" />
          </g>
          <path d={svgPaths.p70cf180} opacity="0.5" stroke="#CCCCCC" />
          <path d={svgPaths.p19fb84a0} fill="#00031C" />
          <path d={svgPaths.p3ee23c80} stroke="url(#paint0_cursor)" />
          <defs>
            <filter
              id="filter0_f"
              x="4.5"
              y="4"
              width="20"
              height="20"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur"
              />
            </filter>
            <linearGradient
              id="paint0_cursor"
              x1="14.2077"
              y1="13.053"
              x2="29.915"
              y2="34.6724"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#3B3B3B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
}

export default function How2Card() {
  return (
    <div className="relative w-full max-w-[610px] h-[320px] sm:h-[489px] mx-auto overflow-hidden rounded-[20px] bg-[#050a25] border border-[#5747bf] backdrop-blur-[10px]">
      <div className="relative w-full h-full">
        <BgMg />
        <Svg />
        <Left />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-[107px] w-full h-full -z-10"
          animate={{ y: [0, -6, 0], rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
