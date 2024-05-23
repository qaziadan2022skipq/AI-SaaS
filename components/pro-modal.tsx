"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

import {
  BookAIcon,
  Check,
  Code,
  FileImage,
  ImageDownIcon,
  Mail,
  // MailCheckIcon,
  MessageSquare,
  // Music,
  PenIcon,
  SpeechIcon,
  // VideoIcon,
  Zap,
} from "lucide-react";

import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useProModal } from "@/hooks/user-pro-modal";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { LoaderStripe } from "./loader-stripe";

const tools = [
  {
    label: "Chat with Rachel",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Easy Learning",
    icon: BookAIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  // {
  //   label: "Music Generation",
  //   icon: Music,
  //   color: "text-emerald-500",
  //   bgColor: "bg-emerald-500/10",
  // },
  {
    label: "Image Generation",
    icon: FileImage,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  // {
  //   label: "Video Generation",
  //   icon: VideoIcon,
  //   color: "text-orange-700",
  //   bgColor: "bg-orange-700/10",
  // },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
  {
    label: "Social Captions",
    icon: PenIcon,
    bgColor: "bg-pink-700/10",
    color: "text-pink-400",
  },
  {
    label: "Email Writer",
    icon: Mail,
    bgColor: "bg-cyan-700/10",
    color: "text-cyan-400",
  },
  {
    label: "Text to Speech",
    icon: SpeechIcon,
    color: "text-green-300",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Talk to Image",
    icon: ImageDownIcon,
    color: "text-cyan-700",
    bgColor: "bg-cyan-600/10",
  },
  // {
  //   label: "Cover Letter ",
  //   icon: MailCheckIcon,
  //   color: "text-gray-500",
  //   bgColor: "bg-gray-700/10",
  // },
];

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log("STRIPE_CLIENT_ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Rachel
              <Badge className=" uppercase text-sm py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            <div className="grid grid-cols-2 gap-x-2">
              {tools.map((tool, index) => (
                <div key={index}>
                  <Card
                    key={tool.label}
                    className="p-3 border-black/5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-x-4">
                      <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                      </div>
                      <div className="font-semibold text-[0.75rem]">{tool.label}</div>
                    </div>
                    <Check />
                  </Card>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {!loading ? (
            <Button variant={"premium"} className="w-full bg-purple-600" onClick={onSubscribe}>
              Upgrade
              <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          ) : (
            <LoaderStripe />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
