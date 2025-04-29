import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {Users} from 'lucide-react'
function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals working to make verification simple, secure, and accessible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-neverguilt-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-neverguilt-teal" />
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  With 15 years of experience in legal services, Sarah founded NeverGuilt to bridge the gap between legal clearance and opportunity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-neverguilt-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-neverguilt-teal" />
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Michael leads our technology team, ensuring our platform remains secure, efficient, and user-friendly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-neverguilt-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-neverguilt-teal" />
                </div>
                <CardTitle>Elena Rodriguez</CardTitle>
                <CardDescription>Legal Verification Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Elena works with legal authorities to ensure all verifications meet the highest standards of accuracy and compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default TeamSection
