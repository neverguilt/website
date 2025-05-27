import { PageHeader } from '@/components/PageHeader'
import React from 'react'
import { AlertTriangle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function Disclaimer() {
  return (
    <>
          <PageHeader 
            title='Disclaimer and Terms of Use' 
            description='Important information about our services, your responsibilities, and your use of the NeverGuilt platform.' 
          />
           {/* Disclaimer Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    This document contains important information. Please read it carefully before using our services.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-secondary">Terms of Use</h2>
            <p className="text-gray-600">
              By accessing and using the NeverGuilt platform (&quot;Platform&quot;, &quot;Service&quot;, &quot;Site&quot;), you acknowledge that you have read, understood, and agree to be bound by the terms and conditions outlined in this document (&quot;Terms&quot;). If you do not agree with any part of these Terms, you must not use our services.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Information Accuracy and Warranties</h2>
            <p className="text-gray-600">
              While NeverGuilt strives to provide accurate and up-to-date information, the Platform is provided &quot;as is&quot; and &quot;as available&quot; without any representations or warranties, express or implied. NeverGuilt makes no representations or warranties regarding the completeness, security, reliability, quality, accuracy, or availability of the information provided on our Platform. We do not guarantee that the information will be error-free, uninterrupted, or that defects will be corrected.
            </p>
            <p className="text-gray-600">
              The Platform may contain errors, inaccuracies, or outdated information. NeverGuilt is not responsible or liable for any errors, omissions, or for the consequences of using the information provided. Any reliance you place on such information is strictly at your own risk. We disclaim all warranties of any kind, whether express or implied, statutory, or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for a particular purpose.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Verification Services</h2>
            <p className="text-gray-600">
              Our verification services are based on the documents provided by users and information available from public records or other sources as applicable. NeverGuilt does not guarantee that all relevant information will be discovered or disclosed through our verification process, nor does it guarantee the outcome of any verification.
            </p>
            <p className="text-gray-600">
              It is important for users and any relying parties to understand that documents submitted for verification, and subsequently verified, might include interim judgments or may not represent the final disposition or complete context of a matter. NeverGuilt presents information as it is provided or available, and interpretation of the legal status or finality of such documents rests with the user or the relying party.
            </p>
            <p className="text-gray-600">
              Employers and other third parties should use our verification results as one component of a comprehensive evaluation process and not as the sole determining factor in making decisions about individuals.
            </p>
            
            <Separator className="my-6" />

            <h2 className="text-2xl font-bold text-secondary">No Professional Advice</h2>
            <p className="text-gray-600">
              The information provided on the NeverGuilt platform, including any content related to legal matters, is for informational purposes only and does not constitute legal, financial, medical, or any other form of professional advice. You should consult with a qualified professional for advice tailored to your specific situation. NeverGuilt is not a substitute for professional consultation, and reliance on any information provided by the Platform is solely at your own risk.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-bold text-secondary">User Submissions and Conduct</h2>
            <p className="text-gray-600">
              When you submit information or documents to NeverGuilt, or otherwise use the Platform, you agree to the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Accuracy of Information:</strong> You affirm that all information and documents you submit to the Platform are accurate, truthful, current, complete, and not misleading.</li>
              <li><strong>Ownership and Authorization:</strong> You confirm that you are the rightful owner of the documents and information submitted or are duly authorized to submit them on behalf of the individual or organization concerned.</li>
              <li><strong>Purpose of Submission:</strong> You agree that your submission of documents and information is made voluntarily and solely for the purposes of utilizing NeverGuilt.com&apos;s verification services and, where applicable, for your freedom of expression as it relates to the documents provided. Any misuse of the Service or misrepresentation of information may result in consequences, including but not limited to the immediate suspension or termination of your profile and access to NeverGuilt.com.</li>
              <li><strong>Data Handling and Privacy:</strong> By submitting documents, you acknowledge and agree to our Privacy Policy, which details how your personal data and documents are collected, stored, used, and protected. This includes secure storage and use for verification, processing, and user identification. You may request deletion of your information as outlined in the Privacy Policy.</li>
              <li><strong>User Responsibility:</strong> You acknowledge that you act on the information provided by or through NeverGuilt, whether related to your own submissions or those of others, entirely at your own risk.</li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-bold text-secondary">Platform Rights and Content Management</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Verification and Approval Rights:</strong> NeverGuilt.com reserves the right, in its sole discretion, to reject, refuse to process, or remove any submitted material or user account that it deems to be incomplete, fraudulent, misleading, in violation of these Terms, or otherwise does not meet the Site’s standards or legal requirements, without prior notice.</li>
              <li><strong>User-Generated Content:</strong> The Platform may allow users to post comments or other content (&quot;User-Generated Content&quot;). NeverGuilt is not responsible for User-Generated Content and does not endorse any opinions expressed therein. We reserve the right to monitor, edit, or remove User-Generated Content that violates our policies or is otherwise objectionable, in our sole discretion.</li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-bold text-secondary">Intellectual Property and Copyright</h2>
            <p className="text-gray-600">
              All content on the NeverGuilt platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of NeverGuilt or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws. This content cannot be used, copied, reproduced, modified, distributed, transmitted, displayed, or published without explicit prior written permission from NeverGuilt.
            </p>
            
            <h2 className="text-2xl font-bold text-secondary">Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall NeverGuilt, its officers, directors, employees, or agents be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of our services, whether based on contract, tort, strict liability, or otherwise.
            </p>
            <p className="text-gray-600">
              This includes, but is not limited to, damages or losses resulting from inaccuracies, errors, or omissions in the content as detailed in the &quot;Information Accuracy and Warranties&quot; section, or from reliance on any information or verification results provided by the Platform.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Privacy Policy</h2>
            <p className="text-gray-600">
              Your use of NeverGuilt is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.
            </p>
            <p className="text-gray-600">
              This policy explains in detail how user data, including personal data and submitted documents, is collected, stored, used, shared, and protected. Your personal data and documents will be stored securely and used primarily for the purposes of verification, processing your requests, user identification, and improving our services. You may request the deletion of your information by raising a change request ticket on NeverGuilt.com, subject to our data retention policies and applicable legal obligations.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Third-Party Links</h2>
            <p className="text-gray-600">
              Our platform may contain links to third-party websites or services that are not owned or controlled by NeverGuilt. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="text-gray-600">
              You acknowledge and agree that NeverGuilt is not responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services. We encourage you to be aware when you leave our Platform and to read the terms and conditions and privacy policies of any other site that you visit.
            </p>
            
            <Separator className="my-6" />

            <h2 className="text-2xl font-bold text-secondary">Testimonial Disclaimer</h2>
            <p className="text-gray-600">
              Testimonials and endorsements found on the NeverGuilt platform reflect the individual experiences and opinions of those who have used our services. However, these results and experiences are personal to those particular users and may not be representative of all users&apos; experiences. NeverGuilt does not claim, and you should not assume, that all users will achieve the same or similar results. Testimonials are not intended to make claims that our services can be used to diagnose, treat, cure, mitigate, or prevent any disease or legal issue.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Changes to Terms and Disclaimer</h2>
            <p className="text-gray-600">
              NeverGuilt reserves the right to modify or replace these Terms, including all disclaimers and conditions, at any time in its sole discretion. Any such modifications will be effective immediately upon posting on this page, or upon notification to you, whichever is earlier. It is your responsibility to review these Terms periodically for changes. Your continued use of the NeverGuilt platform and its services following the posting of any changes constitutes your acceptance of those changes.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-bold text-secondary">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@neverguilt.com" className="text-neverguilt-teal hover:underline">legal@neverguilt.com</a>.
            </p>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-center text-gray-600">
                Last Updated: April 1, 2025
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
