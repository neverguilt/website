/* eslint-disable @next/next/no-img-element */
// src/layouts/components/HeroSection.tsx
"use client";
import React,{useState} from "react";
import { ShieldCheck } from "lucide-react";
import Button from "@/shortcodes/Button";
import SearchComponent from "@/components/Search";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"

function HeroSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="relative bg-gradient-to-r from-body to-white overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container  mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium custom-sheen">
              <ShieldCheck className="w-4 h-4 mr-2" /> Trusted Verification Service
            </div>
            <h1 className="text-4xl md:text-5xl text-secondary font-bold">
              Clear Your Name, <br />
              <span className="text-secondary">Build Your Future</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
            NeverGuilt offers trusted verification of court clearance documents, academic Docs, technical certifications, and other supporting documents — empowering your progress in both career and life.
            </p>
            <div className="flex flex-col  sm:flex-row gap-4">
              <div><Button label="Get Verified" link="https://app.neverguilt.com/register" style="outline"/></div>
              <div><Button label="Verify Someone" link="https://app.neverguilt.com/search"  onClick={() => setIsSearchOpen(true)}/></div>
              <SearchComponent
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square overflow-hidden">
                <img 
                  src="https://cdn.neverguilt.com/hero-image2.jpeg" 
                  alt="Business verification" 
                  className="object-cover w-full h-full"
                />
            </div>
            <div className="bg-muted rounded-md row-span-2 overflow-hidden">
                <img 
                  src="https://cdn.neverguilt.com/hero-image-neverguilt.jpeg" 
                  alt="Document verification" 
                  className="object-cover w-full h-full"
                />
            </div>
            <div className="bg-muted rounded-md aspect-square overflow-hidden">
                <img 
                  src="https://cdn.neverguilt.com/hero-image3.jpeg" 
                  alt="Trust service" 
                  className="object-cover w-full h-full"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
