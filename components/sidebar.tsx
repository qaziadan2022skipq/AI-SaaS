"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  Mail,
  MessageSquare,
  // Music,
  PenIcon,
  Settings,
  SpeechIcon,
  ImageDownIcon,
  // VideoIcon,
  // MailCheckIcon,
  BookAIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeCounter from "./free-counter";

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Chat with Rachel",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Easy Learning",
    icon: BookAIcon,
    href: "/easylearning",
    color: "text-orange-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  // {
  //   label: "Video Generation",
  //   icon: VideoIcon,
  //   href: "/video",
  //   color: "text-orange-700",
  // },
  // {
  //   label: "Music Generation",
  //   icon: Music,
  //   href: "/music",
  //   color: "text-emeralt-500",
  // },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Social Media Captions",
    icon: PenIcon,
    href: "/socialmediaCaptions",
    color: "text-pink-400",
  },
  // {
  //   label: "Cover Letter",
  //   icon: MailCheckIcon,
  //   href: "/coverletter",
  //   color: "text-grey-500",
  // },
  {
    label: "Email Writer",
    icon: Mail,
    href: "/email",
    color: "text-cyan-400",
  },
  {
    label: "Text to Speech",
    icon: SpeechIcon,
    href: "/textToSpeech",
    color: "text-green-300",
  },
  {
    label: "Talk to Image",
    icon: ImageDownIcon,
    href: "/chatWithImage",
    color: "text-cyan-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SideBarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SideBarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#000000] rounded-br-xl rounded-tr-xl text-white drop-shadow-xl">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center justify-center pl-3 mb-6"
        >
          <div className="relative w-10 h-10">
            <Image fill alt="Logo" src="/RachelAvatar.png" />
          </div>
          <div className="relative w-36 h-12 mr-4">
            <Image fill alt="Logo" src="/rachelNew.png" />
          </div>
        </Link>
      </div>
      <div
        className={cn(
          "space-y-1 overflow-scroll",
          isPro === false ? "h-[70%]" : ""
        )}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 hover:drop-shadow-xl hover:rounded-lg transition",
              pathname === route.href
                ? "text-white bg-white/10 rounded-lg"
                : "text-zinc-400 rounded-lg"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};
export default Sidebar;
