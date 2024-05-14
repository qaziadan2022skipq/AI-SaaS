import { pricingOptions } from "@/constants/landing-page-constants";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";


const Pricing = () => {
  return (
    <div id="pricing" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center my-8 tracking-wide text-white">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center items-center text-white">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 items-center text-center lg:w-1/3 p-6">
            {option.title === "Rachel Pro" && (
                  <span className="text-center border-2 border-x-purple-400 border-y-pink-400 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-3 rounded-lg text-md font-bold">
                    Most Popular
                  </span>
                )}
            <div className={cn(option.title === "Rachel Pro" ? "p-10 border border-x-purple-700 border-y-pink-600 rounded-xl" : "p-10 border text-gray-300 border-neutral-600 rounded-xl")}>
              <p className={cn(option.title === "Rachel Pro" ? "text-4xl mb-8 font-semibold": "text-4xl mb-8")}>
                {option.title }
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.href}
                className={cn(option.title === "Rachel Pro" ? "inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border border-y-purple-700 border-x-pink-600 rounded-lg transition duration-200" : "inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gray-800 border  border-neutral-600 rounded-lg transition duration-200")}
              >
               {option.title === "Rachel Pro" ? "Subscribe" : "Try Now" } 
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;