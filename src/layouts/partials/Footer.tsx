import config from "@/config/config.json";
import { Shield } from "lucide-react";
import React from "react";


const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-neverguilt-teal" />
              <span className="text-white font-bold text-lg">NeverGuilt</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © {new Date().getFullYear()} NeverGuilt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
