import HeroSection from "@/components/HeroSection";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Features from "@/components/Features";
import AudienceFor from "@/components/AudienceFor";
import {TextRevealByWord} from "@/components/text-reveal"


const Home = () => {
  return (
    <>
      <SeoMeta
  title="NeverGuilt - Verify Cleared Court Cases with Confidence"
  meta_title="NeverGuilt | Clean Record Verification"
  image="/images/hero-image-tablet.png"
  description="NeverGuilt helps you build trust by verifying cleared court cases. Get a verified profile, show proof of a clean record, and move forward with confidence."
  canonical="https://neverguilt.com"
/>

      <HeroSection />

      {/* New Section 1: PUT YOUR WINS */}
      <section className="py-12 md:py-16 bg-primary/30 text-white">
        <div className="container mx-auto px-4 text-center ">
        <TextRevealByWord
          text="PUT YOUR WINS ON THE WORLD STAGE - Show the world you're UNSTOPPABLE"
          className="bg-gradient-to-b from-white to-gray-50 rounded-md" // This styles TextRevealByWord's root
        />
        </div>
      </section>

      <Features />
      {/* New Section 2: Transparency and Trust */}
      <section className="py-12 md:py-16 bg-primary/30 text-white">
        <div className="container mx-auto px-4 text-center ">
        <TextRevealByWord
          text="When transparency wins, Trust Begins ONE PLATFORM. GLOBAL RECOGNITION"
          className="bg-gradient-to-b from-white to-gray-50 rounded-md" // This styles TextRevealByWord's root
        />
        </div>
      </section>
      <AudienceFor />

      
      

      <CallToAction />
    </>
  );
};

export default Home;
