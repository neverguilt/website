"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"; // Import Loader2
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
// import { sendGTMEvent } from "@next/third-parties/google"; // Keep if needed

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Add submitting state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => { // Make async
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state

    try {
      const response = await fetch("/api/submitform", { // Call your API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle server-side validation errors or other issues
        throw new Error(result.error || "Something went wrong");
      }

      // Display success message from API or a default one
      toast({
        title: "Message Sent!",
        description: result.message || "Thank you for contacting us. We'll get back to you soon.",
      });

      // sendGTMEvent({ event: 'contact_form_submit', value: 'success' }); // Example GTM event

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error: any) {
      console.error("Submission error:", error);
      // Display error message
      toast({
        variant: "destructive", // Use destructive variant for errors
        title: "Submission Failed",
        description: error.message || "Could not send message. Please try again.",
      });
      // sendGTMEvent({ event: 'contact_form_submit', value: 'failure' }); // Example GTM event
    } finally {
      setIsSubmitting(false); // Reset submitting state regardless of outcome
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-text mb-6">Get in Touch</h2>
            <p className="text-text_200 mb-8">
              Whether you have questions about our services, need technical
              support, or want to explore partnership opportunities, our team is
              ready to assist you.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-body p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-text">Email</h5>
                      <p className="text-text_200">support@neverguilt.com</p>
                      <p className="text-text_200">info@neverguilt.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-body p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-text">Phone</h5>
                      <p className="text-text_200">+1 (555) 123-4567</p>
                      <p className="text-text_200">
                        Monday-Friday, 9AM-5PM EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-body p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-text">Office</h5>
                      <p className="text-text_200">123 Verification Street</p>
                      <p className="text-text_200">Suite 456</p>
                      <p className="text-text_200">New York, NY 10001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-text mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                  disabled={isSubmitting} // Disable input when submitting
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                  disabled={isSubmitting} // Disable input when submitting
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full"
                  disabled={isSubmitting} // Disable input when submitting
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your inquiry..."
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" // Add disabled styles
                  disabled={isSubmitting} // Disable input when submitting
                />
              </div>

              <Button
                type="submit"
                className="bg-primary text-white w-full"
                disabled={isSubmitting} // Disable button when submitting
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> // Show loader
                ) : (
                  <Send className="mr-2 h-4 w-4" /> // Show Send icon
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
