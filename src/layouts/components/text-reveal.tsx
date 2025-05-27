
"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 110%", "1 30%"], // Animate as the component scrolls through the viewport
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative", className)}> {/* Removed h-[200vh] and sticky wrapper */}
      <p
        className={
          "flex flex-wrap justify-center p-5 text-2xl font-bold text-primary dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-4xl"
        } // Added justify-center for better text alignment if desired
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5 xl:mx-3"> {/* Corrected typo xl:lg-3 to xl:mx-3 */}
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
