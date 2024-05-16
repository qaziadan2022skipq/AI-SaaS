"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div id="home" className="mt-[4.5rem] lg:mt-0 text-white font-bold py-2 lg:py-0 space-y-5 p-12 lg:p-14 text-center items-center">
      <div className="text-4xl sm:text-2xl md:text-6xl lg:text-7xl space-y-5 lg:space-y-0 font-extrabold">
        <div className="flex flex-col items-center">
          <Image src="/RachelAvatar.png" width={300} height={300} alt="main" />
          <h1 className="text-[#EEEEEE] font-bold">Meet Rachel</h1>
          <h1 className=" md:block text-xl lg:block lg:text-4xl text-white mt-2 ">
            Your AI Companion
          </h1>
          <p className="text-lg mt-8 lg:mt-2 font-extralight text-neutral-400">
          Enhance your personal life, business, and education with
          </p>
        </div>

        <div className="text-4xl mt-6 lg:mt-0 md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chat with Rachel",
                "Easy Learning",
                "Photo Generation",
                "Cover Letter Writing",
                "Email Writing",
                "Social Media Captions",
                "Text to Speech",
                "Music Generator",
                "Video Generator"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl lg:text-lg font-light text-zinc-400 mt-2 lg:mt-0">
      Powered by super fast AI.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant={"premium"} className="md:text-lg p-2 px-8 lg:px-12 md:p-6 rounded-full mt-6 lg:mt-0 font-semibold bg-cyan-700 ring-1 ring-neutral-400 drop-shadow-xl">
            Try for Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
