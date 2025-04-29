"use client";
import { PageHeader } from "@/layouts/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Removed Pagination and Navigation from modules import
// import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import CallToAction from "@/partials/CallToAction";
// Removed navigation and pagination CSS imports
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Gallery = () => {
  const allImages = [
    // Team section images
    {
      section: "team",
      images: [
        {
          src: "/images/team-section/6.jpeg",
          alt: "Team members in discussion",
          title: "Collaborative Approach",
          description: "Our team working together to ensure thorough verification processes",
        },
        {
          src: "/images/team-section/3.jpeg",
          alt: "Team meeting illustration",
          title: "Team Meetings",
          description: "Regular discussions to improve our verification methodologies",
        },
        {
          src: "/images/team-section/5.jpeg",
          alt: "Team presentation",
          title: "Knowledge Sharing",
          description: "Continuous learning and development sessions",
        },
        {
          src: "/images/team-section/4.jpeg",
          alt: "Team members",
          title: "Our Core Team",
          description: "Dedicated professionals committed to your success",
        },
        {
          src: "/images/team-section/1.jpeg",
          alt: "International collaboration",
          title: "Global Reach",
          description: "Supporting verification needs across borders",
        },
      ],
    },
    // Office space section images
    {
      section: "office",
      images: [
        {
          src: "/images/office-section/1.jpeg",
          alt: "Individual workspace with laptops",
          title: "Focused Workspace",
          description: "Dedicated spaces for concentrated work and verification processing",
        },
        {
          src: "/images/office-section/2.jpeg",
          alt: "Modern office workstations",
          title: "Collaborative Environment",
          description: "Eco-friendly workspace designed for productivity",
        },
        {
          src: "/images/office-section/3.jpeg",
          alt: "Office desk setup",
          title: "Professional Setup",
          description: "Modern workstations equipped with latest technology",
        },
        {
          src: "/images/office-section/4.jpeg",
          alt: "Evening office view",
          title: "24/7 Operations",
          description: "Supporting our clients around the clock",
        },
        {
          src: "/images/office-section/6.jpeg",
          alt: "Team working",
          title: "Dedicated Team",
          description: "Our team working diligently on verification processes",
        },
        {
          src: "/images/office-section/5.jpeg",
          alt: "Office document processing",
          title: "Document Management",
          description: "Organized systems for efficient document processing",
        },
        {
          src: "/images/office-section/8.jpeg",
          alt: "Staff member working",
          title: "Individual Focus",
          description: "Each team member dedicated to ensuring accuracy",
        },
        {
          src: "/images/office-section/7.jpeg",
          alt: "Office workspace setup",
          title: "Modern Infrastructure",
          description: "State-of-the-art facilities for optimal performance",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Our Team Gallery"
        description="Meet the dedicated professionals working to provide guilt-free opportunities through our verification services."
      />

      

      {allImages.map((section, sectionIndex) => (
        <section
          key={section.section}
          className={`py-16 ${sectionIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              {section.section === "team" ? "Our Team" : "Our Workspace"}
            </h2>
            <Swiper
              // Removed modules prop (or keep it empty: modules={[]})
              spaceBetween={20}
              slidesPerView={1.2} //mobile
              breakpoints={{
                768: {
                  slidesPerView: 2, // ipad
                },
                1024: {
                  slidesPerView: 2.5, // desktop
                },
              }}
              
            >
              {section.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video h-64 relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="100%"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-secondary mb-2">{image.title}</h3>
                      <p className="text-gray-600">{image.description}</p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      ))}

<section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At NeverGuilt, we believe in empowering individuals by providing thorough and reliable background
              verification services. Our mission is to create opportunities through transparency and trust, helping both
              individuals and organizations make informed decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Gallery;
