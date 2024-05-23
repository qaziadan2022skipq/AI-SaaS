"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="mt-[2.1rem] lg:mt-3 text-white font-bold py-4 lg:py-2 space-y-5 lg:space-y-3 p-12 lg:p-14 text-center items-center">
      <div
        id="home"
        className="text-4xl sm:text-2xl md:text-6xl lg:text-7xl space-y-5 lg:space-y-2 font-extrabold"
      >
        <div className="flex flex-col items-center">
          <Image src="/NewAvatar.png" width={250} height={250} alt="main" />
          <h1 className="text-[#EEEEEE] font-bold mt-12 lg:mt-4">
            Meet Rachel
          </h1>
          <h1 className=" md:block text-xl lg:block lg:text-4xl text-white mt-2 ">
            Your AI Companion
          </h1>
          <p className="text-lg mt-8 lg:mt-6 font-extralight text-neutral-400">
            Enhance your personal life, business, and education with
          </p>
        </div>

        <div className="text-[1.6rem] mt-6 lg:mt-0 md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chat with Rachel.",
                "Easy Learning.",
                "Code Generation.",
                "Image Generation.",
                "Email Writer.",
                "Social Captions.",
                "Text to Speech.",
                "Talk to Image.",
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
          <Button
            variant={"premium"}
            className="md:text-lg p-2 px-8 lg:px-12 md:p-6 rounded-full mt-6 lg:mt-0 font-semibold bg-cyan-700 ring-1 ring-neutral-400 drop-shadow-xl"
          >
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
