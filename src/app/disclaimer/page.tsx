import { PageHeader } from '@/components/PageHeader'
import React from 'react'
import { AlertTriangle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function Disclaimer() {
  return (
    <>
          <PageHeader title='Disclaimer' description='Important information about our services and your use of the NeverGuilt platform.' />
           {/* Disclaimer Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    This disclaimer is important. Please read it carefully before using our services.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-secondary">Terms of Use</h2>
            <p className="text-gray-600">
              By accessing and using the NeverGuilt platform, you agree to be bound by the terms and conditions outlined in this disclaimer. If you do not agree with any part of these terms, you should not use our services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Information Accuracy</h2>
            <p className="text-gray-600">
              While we strive to provide accurate and up-to-date information, NeverGuilt makes no representations or warranties about the completeness, reliability, and accuracy of the information provided on our platform. Any reliance you place on such information is strictly at your own risk.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Verification Services</h2>
            <p className="text-gray-600">
              Our verification services are based on the documents provided by users and information available from public records. NeverGuilt does not guarantee that all relevant information will be discovered or disclosed through our verification process.
            </p>
            <p className="text-gray-600">
              Employers and other third parties should use our verification results as one component of a comprehensive evaluation process and not as the sole determining factor in making decisions about individuals.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall NeverGuilt, its officers, directors, employees, or agents be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of our services, whether based on contract, tort, strict liability, or otherwise.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Privacy Policy</h2>
            <p className="text-gray-600">
              Your use of NeverGuilt is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Third-Party Links</h2>
            <p className="text-gray-600">
              Our platform may contain links to third-party websites or services that are not owned or controlled by NeverGuilt. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Changes to Disclaimer</h2>
            <p className="text-gray-600">
              NeverGuilt reserves the right to modify or replace this disclaimer at any time. It is your responsibility to check this disclaimer periodically for changes. Your continued use of the platform following the posting of any changes constitutes acceptance of those changes.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this disclaimer, please contact us at <a href="mailto:legal@neverguilt.com" className="text-neverguilt-teal hover:underline">legal@neverguilt.com</a>.
            </p>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-center text-gray-600">
                Last updated: April 1, 2025
              </p>
            </div>
          </div>
        </div>
          </section>
           {/* CTA Section */}
      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-gray-300 mb-6">
              Our support team is ready to help clarify any points in our disclaimer.
            </p>
            <Link href="/contact">
              <Button className="bg-neverguilt-teal hover:bg-teal-600 text-white">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Disclaimer
