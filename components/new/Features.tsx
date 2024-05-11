import { features } from "@/constants/landing-page-constants";
import { CrownIcon, StarIcon } from "lucide-react";

const FeatureSection = () => {
  return (
    <div id="features" className="relative mt-24 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Core Features             
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-4 lg:mt-6 font-bold tracking-wide text-white">
        Discover 
{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Rachel
          </span>
        </h2>
      </div>
      <div className="text-center mt-3">
        <h2 className="text-xl sm:text-2xl lg:text-xl tracking-wide text-gray-500">
        How {" "}
          {/* <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text"> */}
          Rachel
          {/* </span> */}
          {" "}can help...
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-4 h-8 w-8 p-2 bg-gradient-to-r from-indigo-600  to-pink-500 text-white justify-center font-bold items-center rounded-full drop-shadow-xl">
                {feature?.text === "Chat with Rachel" ? <CrownIcon /> : <StarIcon />}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-white ">{feature?.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center">
        <h2 className="text-xl sm:text-2xl lg:text-xl tracking-wide bg-gradient-to-r from-cyan-600 to-cyan-500 text-transparent bg-clip-text">
          {" "}
          <span className="text-white">
          and much more . . .
          </span>
        </h2>
      </div> */}
    </div>
  );
};

export default FeatureSection;