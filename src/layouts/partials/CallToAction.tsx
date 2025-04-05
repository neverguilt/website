import React from "react";
import { Shield } from "lucide-react";
import Button from "@/shortcodes/Button";


const CallToAction = () => {
  return (
    <>
      <section className="py-16 bg-text/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-12 w-12  mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Clear Your Name and Secure Your Future?
            </h2>
            <p className="text-white mb-8">
              Join thousands of individuals who have verified their court clearance status with NeverGuilt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div><Button label="Get Verified" link="https://app.neverguilt.com/register" /></div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
