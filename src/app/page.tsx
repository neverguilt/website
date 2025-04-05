import HeroSection from "@/components/HeroSection";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Features from "@/components/Features";
import AudienceFor from "@/components/AudienceFor";


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
      <Features />
      <AudienceFor />
      <CallToAction />
    </>
  );
};

export default Home;
