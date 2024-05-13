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
        FAQs for Rachel, the AI Companion
        </h1>
        <pre className="text-white whitespace-pre-wrap mt-4">
          {`
1. What is Rachel?
    • Rachel is a versatile AI companion designed to assist with personal, business, and educational tasks. She provides personalized guidance to help users become more productive and enhance their learning and professional activities.

2. Who can benefit from using Rachel?
    • Anyone looking for assistance in managing personal tasks, gaining business insights, or seeking educational support can benefit from Rachel. She is tailored to help individuals, students, professionals, and entrepreneurs maximize their efficiency and knowledge.

3. How do I get started with Rachel?
    • Simply access Rachel on either a mobile or desktop platform by visiting www.rachel.app, sign up for a free account, and start interacting with her immediately without the need for a credit card.

4. Is there a cost to use Rachel?
    • Rachel offers a free trial that allows users to explore a wide range of features without needing a credit card. For unlimited access and full features, users can subscribe to the Pro plan.

5. What features are included in the Pro plan?
    • The Pro plan provides unlimited usage of Rachel, including advanced business insights, in-depth educational tools, and enhanced personal productivity features. This plan is designed for users needing comprehensive assistance across multiple areas.

6. How does Rachel work on different devices?
    • Rachel is fully compatible with both mobile and desktop devices, ensuring that you can access her assistance anytime and anywhere, right at your fingertips or on your desk.

7. What type of questions can I ask Rachel?
    • You can ask Rachel a variety of questions, whether you need help solving a problem, looking for specific information, or require assistance with a project. Rachel is here to provide tailored responses to help you succeed.

8. How accurate is Rachel?
    • Rachel strives to provide accurate and helpful information, but like any AI-driven tool, she may not always capture the full context or most recent data. Users are encouraged to use Rachel's responses as a guide and verify critical details independently.

9. How does Rachel ensure user privacy?
    • Protecting user privacy is paramount. Rachel collects only the essential data needed to respond to queries and improve service quality. Detailed information on our data handling practices can be found in our Privacy Policy.

10. Can I cancel my Pro plan subscription at any time?
    • Yes, you can cancel your Pro plan subscription at any time. Our goal is to make Rachel as flexible and accessible as possible, allowing you to choose the level of service that best fits your needs.
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
