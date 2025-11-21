import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function TypingText({ text, delay = 0, speed = 50, className = "" }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimer);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {displayedText}
      {currentIndex > 0 && currentIndex <= text.length && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-[12px] bg-white ml-[2px] align-middle"
        />
      )}
    </motion.span>
  );
}
