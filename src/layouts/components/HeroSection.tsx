// src/layouts/components/HeroSection.tsx
"use client";
import React,{useState} from "react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import Button from "@/shortcodes/Button";
import SearchComponent from "@/components/Search";




function HeroSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="relative bg-gradient-to-r from-body to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium custom-sheen">
              <ShieldCheck className="w-4 h-4 mr-2" /> Trusted Verification Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text">
              Clear Your Name, <br />
              <span className="text-secondary">Build Your Future</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              NeverGuilt provides official verification of court clearance documents, 
              helping you move forward with confidence in your career and life.
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
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary/10 rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
                <div className="border-2 border-primary rounded-lg p-8 flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-text font-semibold text-lg mb-2">Document Verified</h3>
                  <p className="text-text_200 text-center mb-4">Court clearance verified and authenticated by NeverGuilt.</p>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Verified ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
