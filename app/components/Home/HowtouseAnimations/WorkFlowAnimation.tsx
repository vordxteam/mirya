"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-h9k2nqacar";
import Image from "next/image";

interface NodeProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  label: string;
  position: { ml: string; mt: string };
  isVisible: boolean;
  delay: number;
}

function BgMg() {
  return (
    <div
      className="absolute z-10 -bottom-0.5 h-[349px] left-1/2 translate-x-[-50%] w-[648px]"
      data-name="bg mg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          width={500}
          height={500}
          alt="image"
          className="absolute left-0 max-w-none size-full top-0"
          src="/images/animation1.png"
        />
      </div>
    </div>
  );
}

function AnimatedNode({
  id,
  title,
  icon,
  label,
  position,
  isVisible,
  delay,
}: NodeProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -8 }}
          transition={{
            duration: 0.6,
            delay: delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`[grid-area:1_/_1] bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[8px] h-[64.984px] items-start justify-center ${position.ml} ${position.mt} p-[12px] relative rounded-[8px] w-[155.257px]`}
          data-name="Node"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
            aria-hidden="true"
            className="absolute border border-[rgba(255,50,16,0.6)] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]"
          />
          <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0">
            {icon}
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
              {title}
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.2)] h-px rounded-[12px] shrink-0 w-full" />
          <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre">
            {label}
          </p>

          {/* Top dot with pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: delay + 0.3,
            }}
            className="absolute left-[calc(50%+0.37px)] size-[8px] top-[-4px] translate-x-[-50%]"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 8 8"
            >
              <motion.circle
                cx="4"
                cy="4"
                r="4"
                fill="#21C38F"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  filter: [
                    "drop-shadow(0 0 2px rgba(33, 195, 143, 0.4))",
                    "drop-shadow(0 0 8px rgba(33, 195, 143, 0.8))",
                    "drop-shadow(0 0 2px rgba(33, 195, 143, 0.4))",
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: delay + 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>

          {/* Bottom dot with pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: delay + 0.3,
            }}
            className="absolute left-[calc(50%+0.37px)] size-[8px] top-[69px] translate-x-[-50%]"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 8 8"
            >
              <motion.circle
                cx="4"
                cy="4"
                r="4"
                fill="#21C38F"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  filter: [
                    "drop-shadow(0 0 2px rgba(33, 195, 143, 0.4))",
                    "drop-shadow(0 0 8px rgba(33, 195, 143, 0.8))",
                    "drop-shadow(0 0 2px rgba(33, 195, 143, 0.4))",
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: delay + 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AnimatedArrow({
  position,
  rotation,
  isVisible,
  delay,
}: {
  position: { ml: string; mt: string };
  rotation?: string;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, delay }}
          className={`[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center ${position.ml} ${position.mt} relative w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]`}
          style={
            {
              "--transform-inner-width": "27",
              "--transform-inner-height": "177",
            } as React.CSSProperties
          }
        >
          <div className={`flex-none ${rotation || ""}`}>
            <div className="h-[176.92px] relative w-[26.706px]">
              <div className="absolute inset-[-0.28%_-1.87%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 28 178"
                >
                  <motion.path
                    d={svgPaths.pae7d500}
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeLinecap="round"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      pathLength: {
                        duration: 0.8,
                        delay,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: { duration: 0.2, delay },
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function WorkFlowAnimation() {
  const [animationStep, setAnimationStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const TOTAL_STEPS = 7;
  const STEP_DURATION = 800; // Duration between steps in ms
  const PAUSE_DURATION = 2000; // Pause at the end before restarting

  const runAnimation = useCallback(() => {
    const timings = [
      0,    // Step 0: Start node appears
      STEP_DURATION,     // Step 1: Arrow 1 + Find (left) node
      STEP_DURATION * 2, // Step 2: Arrow 2 + Find (right) node
      STEP_DURATION * 3, // Step 3: Arrow 3 + Browse node
      STEP_DURATION * 4, // Step 4: Arrow 4 + Type node
      STEP_DURATION * 5, // Step 5: Arrow 5 + Speak node
      STEP_DURATION * 6, // Step 6: Arrow 6 + Automate node
    ];

    const timeouts: NodeJS.Timeout[] = [];

    // Run through all steps
    timings.forEach((timing, index) => {
      const timeout = setTimeout(() => {
        setAnimationStep(index);
      }, timing);
      timeouts.push(timeout);
    });

    // After all steps complete, wait and then restart
    const totalAnimationTime = STEP_DURATION * (TOTAL_STEPS - 1);
    const restartTimeout = setTimeout(() => {
      setAnimationStep(0);
      setAnimationKey((prev) => prev + 1); // Force re-render for fresh animations
    }, totalAnimationTime + PAUSE_DURATION);
    timeouts.push(restartTimeout);

    return timeouts;
  }, []);

  useEffect(() => {
    let timeouts = runAnimation();

    // Set up the loop
    const loopInterval = setInterval(() => {
      timeouts.forEach(clearTimeout);
      timeouts = runAnimation();
    }, STEP_DURATION * (TOTAL_STEPS - 1) + PAUSE_DURATION);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(loopInterval);
    };
  }, [runAnimation, animationKey]);

  const nodes = [
    {
      id: 0,
      title: "Start",
      icon: (
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[9.37%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 14 14"
            >
              <g>
                <path d={svgPaths.p3b528d80} stroke="#116AF8" />
                <path d={svgPaths.p11909ec0} stroke="#116AF8" />
              </g>
            </svg>
          </div>
        </div>
      ),
      label: "#1",
      position: { ml: "ml-[176.92px]", mt: "mt-0" },
      step: 0,
    },
    {
      id: 1,
      title: "Find",
      icon: (
        <div className="relative shrink-0 size-[16px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g>
              <path
                d={svgPaths.p2766b00}
                stroke="#116AF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      ),
      label: "#2",
      position: { ml: "ml-0", mt: "mt-[97.03px]" },
      step: 1,
    },
    {
      id: 2,
      title: "Find",
      icon: (
        <div className="relative shrink-0 size-[16px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g>
              <path
                d={svgPaths.p2766b00}
                stroke="#116AF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      ),
      label: "#2",
      position: { ml: "ml-[352px]", mt: "mt-[98px]" },
      step: 2,
    },
    {
      id: 3,
      title: "Browse",
      icon: (
        <div className="relative shrink-0 size-[16px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g>
              <path
                d={svgPaths.p2d679940}
                stroke="#116AF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      ),
      label: "#3",
      position: { ml: "ml-[176.92px]", mt: "mt-[195.84px]" },
      step: 3,
    },
    {
      id: 4,
      title: "Type",
      icon: (
        <div className="relative shrink-0 size-[16px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g clipPath="url(#clip0_1_170)">
              <path
                d={svgPaths.p38f0ba80}
                stroke="#D0DB44"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_170">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
      label: "#4",
      position: { ml: "ml-0", mt: "mt-[291.98px]" },
      step: 4,
    },
    {
      id: 5,
      title: "Speak",
      icon: (
        <div className="relative shrink-0 size-[16px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g>
              <path d={svgPaths.p29705b00} fill="#988AFC" />
            </g>
          </svg>
        </div>
      ),
      label: "#5",
      position: { ml: "ml-[354.74px]", mt: "mt-[294.65px]" },
      step: 5,
    },
    {
      id: 6,
      title: "Automate",
      icon: (
        <div className="relative shrink-0 size-[16px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g clipPath="url(#clip0_1_170)">
              <path
                d={svgPaths.p38f0ba80}
                stroke="#D0DB44"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_170">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
      label: "#6",
      position: { ml: "ml-[176.92px]", mt: "mt-[389.02px]" },
      step: 6,
    },
  ];

  const arrows = [
    {
      position: { ml: "ml-[77.63px]", mt: "mt-[69.44px]" },
      rotation: "rotate-[90deg]",
      step: 1,
    },
    {
      position: { ml: "ml-[253px]", mt: "mt-[69.44px]" },
      rotation: "rotate-[90deg] scale-y-[-100%]",
      step: 2,
    },
    {
      position: { ml: "ml-[77.63px]", mt: "mt-[165.58px]" },
      rotation: "rotate-[90deg] scale-y-[-100%]",
      step: 3,
    },
    {
      position: { ml: "ml-[77.63px]", mt: "mt-[264.39px]" },
      rotation: "rotate-[90deg]",
      step: 4,
    },
    {
      position: { ml: "ml-[255.45px]", mt: "mt-[264.39px]" },
      rotation: "rotate-[90deg] scale-y-[-100%]",
      step: 5,
    },
    {
      position: { ml: "ml-[77.63px]", mt: "mt-[360.53px]" },
      rotation: "rotate-[90deg] scale-y-[-100%]",
      step: 6,
    },
  ];

  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter relative rounded-[20px] w-full p-px"
      style={{background: "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0.00) 100%)"}}
      data-name="Card"
    >
      <div className="relative p-10 rounded-[20px] bg-[#050A25] backdrop-blur-[10px]">
        <BgMg />
        <div
          className="relative bg-[#050a25] h-[534px] left-1/2 rounded-xl translate-x-[-50%] w-[574px]"
          data-name="Left"
        >
          <div className="box-border content-stretch flex flex-col gap-[22px] h-[534px] items-start overflow-clip px-[32px] py-[40px] relative rounded-[inherit] w-[574px]">
            <div
              key={animationKey}
              className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full"
              data-name="Nodes"
            >
              {nodes.map((node) => (
                <AnimatedNode
                  key={node.id}
                  {...node}
                  isVisible={animationStep >= node.step}
                  delay={0}
                />
              ))}
              {arrows.map((arrow, index) => (
                <AnimatedArrow
                  key={index}
                  {...arrow}
                  isVisible={animationStep >= arrow.step}
                  delay={0}
                />
              ))}
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#463bbf] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
}