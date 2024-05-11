"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between drop-shadow-lg">
      <Link href="/" className="flex items-center">
        {/* <div className="relative h-10 w-10 mr-1">
          <Image fill alt="Logo" src="/RachelAvatar.png" />
        </div> */}
        <div className="relative">
          <Image alt="Logo" height={40} width={120} src="/rachelNew.png" />
        </div>
        {/* <h1 className={cn("text-xl font-bold text-white", font.className)}>
          Rachel
        </h1> */}
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant={"premium"} className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}