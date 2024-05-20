"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_COUNTS_FREE } from "@/constants/db-constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/user-pro-modal";
import axios from "axios";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: FreeCounterProps) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);
  //   const onClick = async () => {
  //     try{
  //         const response = await axios.get("/api/stripe")
  //         window.location.href = response.data.url
  //     }catch(error) {
  //         console.log("BILLING_ERROR", error)
  //     }finally{
  //         console.log("done")
  //     }
  // }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (isPro) return null;

  return (
    <div className="px-3 text-white">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_COUNTS_FREE} Free Generation
            </p>
            <Progress
              className="h-3 text-purple-500"
              value={(apiLimitCount / MAX_COUNTS_FREE) * 100}
            />
          </div>
          <Button
            onClick={proModal.open}
            className="w-full"
            variant={"premium"}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
