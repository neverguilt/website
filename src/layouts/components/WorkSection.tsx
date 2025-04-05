// src/layouts/components/WorkSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FileCard from "@/components/FileCard";

interface WorkCardProps {
  src: string;
  alt: string;
  rotation: number;
  size: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ src, alt, rotation, size }) => {
  return (
    <div
      className="transform-none will-change-transform origin-center absolute bottom-[34px] left-[32px] w-[86%] h-[90%] flex-none cursor-pointer z-[1]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="work-card-inner w-full h-full relative border-[2px] border-gray-100 rounded-[32px] overflow-hidden">
        <Image src={src} alt={alt} fill={true} sizes={size} className="work-card-image object-cover object-top" />
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  const workCards = [
    {
      src: "/images/works/KIus6F0A6KA0WSw1P8CalpIhH5I.avif",
      alt: "Work 3",
      rotation: 1,
      size: "calc(min(max(min(100vw - 80px, 1200px) - 40px, 1px), 880px) * 0.3738)",
    },
    {
      src: "/images/works/QDYdT2JAbcitp6Zq0f86x2PbKOg.avif",
      alt: "Work 2",
      rotation: 1,
      size: "calc(min(max(min(100vw - 80px, 1200px) - 40px, 1px), 880px) * 0.86)",
    },
    {
      src: "/images/works/Uu2LVdIa0AqS3J3rb48678n5SC8.avif",
      alt: "Work 1",
      rotation: -0.5,
      size: "calc(min(max(min(100vw - 80px, 1200px) - 40px, 1px), 880px) * 0.86)",
    },
  ];

  return (
    <section className="section bg-white relative flex items-center justify-center h-min flex-row flex-nowrap scroll-mt-[216px] overflow-visible mt-20 p-0 pt-8 w-full">
          {/* File-like Container */}
          
      <div className="container relative max-w-[880px] h-auto max-h-[551px] min-h-[551px] rotate-[1deg] flex-[1_0_0px] z-10 w-[1px]">
        {/* File Back */}
         <FileCard/>
     
        </div>
        
    </section>
  );
};

export default WorkSection;
