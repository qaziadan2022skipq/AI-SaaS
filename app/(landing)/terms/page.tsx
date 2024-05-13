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
          Terms of Service for Rachel, the AI Companion
        </h1>
        <pre className="text-white whitespace-pre-wrap mt-4">
          {`1. Introduction
    • Welcome to Rachel! Rachel is an AI companion designed to assist you by providing information and answers based on the input you provide. This document outlines the terms under which you may use our services.
2. Acceptance of Terms
    • By accessing and using Rachel, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not accept these terms, you must not use Rachel.
3. Changes to Terms
    • We reserve the right to modify these terms at any time. Changes will become effective immediately upon posting to our site or service interface. Your continued use of Rachel after changes have been posted will constitute your acceptance of such changes.
4. Use of Rachel
    • Rachel is provided for your personal, non-commercial use. You agree to use Rachel only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of Rachel.
5. Content Accuracy
    • Rachel provides responses based on algorithms and data available at the time of your query. We do not guarantee the accuracy, completeness, or usefulness of any information provided and are not responsible for any errors or omissions. As Rachel's responses are generated through AI, they should be independently verified by you for accuracy and reliability before reliance.
6. Intellectual Property
    • The content and information provided by Rachel, including but not limited to text, graphics, logos, and software, are protected by intellectual property laws and are owned or licensed by us. You may not use such content without our express written permission.
7. User Responsibilities
    • You are responsible for all activities that occur under your use of Rachel. You agree not to use Rachel to conduct any activity that would constitute a civil or criminal offense or violate any law.
8. Disclaimers and Limitations of Liability
    • Rachel is provided "as is" and "as available" without any warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
    • We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from 
    (a) your access to, use of, or inability to access or use Rachel; 
    (b) any conduct or content of any third party using Rachel; or 
    (c) unauthorized access, use, or alteration of your transmissions or content.
9. Termination
    • We may terminate or suspend your access to Rachel immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
10. Governing Law
    • These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.
11. Dispute Resolution
    • In the event of a dispute, efforts shall be made to resolve the matter amicably through informal negotiation. If unresolved, disputes shall be submitted to arbitration under the rules of the designated arbitral body in our jurisdiction.
12. Contact Information
    • If you have any questions about these Terms, please contact us at [Your Contact Information].
13. Miscellaneous
    • If any provision of these Terms is held to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the other provisions of these Terms will remain in full force and effect.
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
