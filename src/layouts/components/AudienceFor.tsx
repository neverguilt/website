"use client"
import React, { useState } from 'react'
import Button from '@/shortcodes/Button'
import { Search, Building, User, ArrowRight } from "lucide-react";
import SearchComponent from '@/components/Search';


function AudienceFor() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
<section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Who Benefits from NeverGuilt?
            </h2>
            <p className="text-text_200 max-w-3xl mx-auto">
              Our platform serves both individuals seeking to verify their legal status and organizations needing to confirm candidate backgrounds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-secondarytext-secondary/20">
              <div className="mb-4 bg-body inline-flex p-3 rounded-lg">
                <User className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">
                For Individuals
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Verify your court clearance status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Share verification with potential employers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Build trust in your background</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Secure your future opportunities</span>
                </li>
              </ul>
              <div>
  <Button 
    label="Get Verified"
    link="https://app.neverguilt.com/register" 
    style="outline"
  />
</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary/20">
              <div className="mb-4 bg-body inline-flex p-3 rounded-lg">
                <Building className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">
                For Organizations
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Easily verify candidates' court clearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Save time on background verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Reduce hiring risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-text_200">Make confident hiring decisions</span>
                </li>
              </ul>
              <div><Button label="Verify Someone" link="https://app.neverguilt.com/search"  onClick={() => setIsSearchOpen(true)}/></div>
              <SearchComponent 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AudienceFor
