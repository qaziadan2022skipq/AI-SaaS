"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { Download, ImageIcon, SpeechIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema, voiceOptions } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { Card, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import Image from "next/image";
import { useProModal } from "@/hooks/user-pro-modal";

const ImageGeneration = () => {
  const router = useRouter();
  const [audio, setAudio] = useState("");
  const proModal = useProModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      voice: "alloy",
    },
  });

  const playAudio = () => {
    const newaudio = new Audio(`data:audio/mp3;base64,${audio}`);
    newaudio.play();
  };

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setAudio("");
      const response = await axios.post("/api/textToSpeech", values);
      console.log(response);
      setAudio(response.data);
      // const urls = response.data.data.map( (imageUrl: {url:string}) => imageUrl);
      // setImages(urls);
      form.reset();
    } catch (error:any) {
      if (error.response.status === 403) proModal.open();
      // todo: Open Pro Modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  // images.map(src => console.log(src))
  return (
    <div>
      <Heading
        title="Text to Speech"
        description="Generate a speech with text description"
        icon={SpeechIcon}
        iconColor="text-green-300"
        bgColor="bg-green-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Paste the text here…"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="voice"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {voiceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-12 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {audio.length === 0 && !isLoading && (
            <Empty label="No Text to Speeh Generated!" />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {audio.length > 0 ? (
              <div className="w-full">
                <audio controls>
                  <source
                    src={`data:audio/mp3;base64,${audio}`}
                    type="audio/mp3"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGeneration;
