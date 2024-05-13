"use client";
import Footer from "@/components/Footer";
import LandingNavbar from "@/components/new/landing-navbar";
// import { LandingHero } from "@/components/landing-hero";
// import LandingPricing from "@/components/landing-pricing";
// import LandingNavbar from "@/components/new/landing-navbar";
// import FeatureSection from "@/components/new/Features";
// import Testimonials from "@/components/new/Testimonial";
// import Footer from "@/components/Footer";

import { useEffect } from "react";

const LandingPage = () => {
  return (
    <div className="h-full px-0 sm:px-2">
      {/* <LandingNavbar />
      <LandingHero />
      <FeatureSection />
      <Testimonials />
      <LandingPricing />
      <Footer /> */}
      <LandingNavbar />
      <div className="mt-16">
        <h1 className="text-white font-bold text-xl">
          Privacy Policy for Rachel, the AI Companion
        </h1>
        <pre className="text-white whitespace-pre-wrap mt-4">
          {`1. Introduction
    • Welcome to Rachel! We value your privacy and are committed to protecting your personal information. This policy outlines the types of information we may collect from you or that you may provide when using Rachel, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
2. Information Collection
    • Personal Information: We collect personal information that you voluntarily provide, such as your name, email address, and any other details you provide when using Rachel.
    • Interaction Data: We collect information about your interactions with Rachel, including queries you make and responses provided by Rachel.
    • Technical Data: Information about your device, including IP address, operating system, and browser type may be collected to ensure the compatibility and security of our service.
3. Use of Information
    • The information we collect helps us to improve Rachel and to deliver a more personalized experience by enabling us to:
    ◦ Provide our services and fulfill your requests.
    ◦ Understand and analyze how you use our service and what products and services may be relevant to you.
    ◦ Communicate with you about products, services, and promotional offers.
4. Sharing of Information
    • Service Providers: We may share your information with third parties who perform services on our behalf, such as data analysis and email delivery.
    • Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.
    • Business Transfers: Your information may be transferred to another entity in case of a merger, sale, or restructuring.
5. Data Security
    • We implement measures designed to protect your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, so we cannot guarantee the security of your data transmitted to our service.
6. Data Retention
    • We retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
7. User Rights
    • Depending on your location, you may have certain rights under data protection laws in relation to your personal data, including:
    ◦ The right to access and receive a copy of your personal data.
    ◦ The right to request correction or deletion of your data.
    ◦ The right to object to or request restriction of processing.
8. Changes to Our Privacy Policy
    • We may update this policy from time to time. Any changes will be posted on this page, and you are advised to review this policy periodically for any changes.
9. Contact Information
    • If you have any questions about this privacy policy, please contact us at Contact@Rachel.app.   
            `}
        </pre>
      </div>
      {/* <div className="mt-6 mb-6 p-6">
          <a href="/prompts.xlsx" download className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-3 font-bold rounded-md text-white">Download Prompts!</a>
      </div> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
