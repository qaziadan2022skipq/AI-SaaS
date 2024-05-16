"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { creativityOptions, formSchema, resultsOptions, } from "./constants";
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

const ImageGeneration = () => {
  const router = useRouter();
  const [result, setResult] = useState<string>('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job_role: "",
      job_skills: "",
      creativity: "",
      results: ""
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setResult("");
      const response = await axios.post("/api/coverletter", values);
      setResult(response.data.content)
      form.reset();
    } catch (error) {
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
        title="Cover Letter"
        description="Generate an cover letter with text description"
        icon={MailIcon}
        iconColor="text-gray-500"
        bgColor="bg-gray-700/10"
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
              <label className="p-2 text-sm col-span-12 lg:col-span-1">Job role:</label>
              <FormField
                name="job_role"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3 border rounded-lg">
                    <FormControl className="m-0 p-1">
                      <Input
                        className="border-1 outline-none focus-visible:ring-1 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="e.g Software Engineer"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <label className="p-2 text-sm col-span-12 lg:col-span-1">Job skills:</label>
              <FormField
                name="job_skills"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3 border rounded-lg">
                    <FormControl className="m-0 p-1">
                      <Input
                        className="border-1 outline-none focus-visible:ring-1 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="e.g Python, DSA"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <label className="p-2 text-sm col-span-12 lg:col-span-1">Creativity:</label>
              <FormField
                control={form.control}
                name="creativity"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3">
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
                        {creativityOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <label className="p-2 text-sm col-span-12 lg:col-span-1">Results:</label>
              <FormField
                control={form.control}
                name="results"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3">
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
                        {resultsOptions.map((option) => (
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
          {result.length === 0 && !isLoading && (
            <Empty label="No Cover Letter Generated!" />
          )}
          <div className="">
            {result.length > 0 && (
              <pre className=" whitespace-pre-wrap w-full">{result}</pre>
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGeneration;
