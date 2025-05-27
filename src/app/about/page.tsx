import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import CallToAction from "@/partials/CallToAction";
import { RegularPage } from "@/types";
import { PageHeader } from "@/components/PageHeader";
import { Shield } from "lucide-react";
import TeamSection from "@/components/TeamSection";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title=" About NeverGuilt" description="Empowering individuals with legal clarity and supporting their journey toward new opportunities."/>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-4">
                Our Mission
              </h2>
              <p className="text-text_200 mb-6">
                At NeverGuilt, we believe that everyone deserves a second chance. Our mission is to help individuals with court clearances verify their status and share that verification easily with potential employers and other stakeholders.
              </p>
              <p className="text-text_200 mb-6">
              Court clearance documents, academic Docs, technical certifications, and other supporting documents — empowering your progress in both career and life.
              </p>
              <div className="flex items-center space-x-2 text-primary font-medium">
                <Shield className="h-5 w-5" />
                <span>Trusted by thousands of individuals and organizations</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-text mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white p-1 rounded-full mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium text-text pb-2">Integrity</h4>
                    <p className="text-text_200">We operate with honesty and transparency in all our interactions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white p-1 rounded-full mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium text-text pb-2">Privacy</h4>
                    <p className="text-text_200">We protect user data with robust security measures and respect confidentiality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white p-1 rounded-full mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium text-text pb-2">Empowerment</h4>
                    <p className="text-text_200">We believe in helping people move forward and rebuild their lives with dignity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <CallToAction />
    </>
  );
};

export default About;
