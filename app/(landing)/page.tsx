import { LandingHero } from "@/components/landing-hero";
import LandingPricing from "@/components/landing-pricing";
import LandingNavbar from "@/components/new/landing-navbar";
import FeatureSection from "@/components/new/Features";
import Testimonials from "@/components/new/Testimonial";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return ( 
    <div className="h-full px-0 ">
      <LandingNavbar />
      <LandingHero />
      <FeatureSection />
      <Testimonials />
      <LandingPricing />
      <Footer />
    </div>
   );
}
 
export default LandingPage;