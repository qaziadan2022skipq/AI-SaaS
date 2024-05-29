import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";
import path from "path";
import fs from "fs";
import { checkApiLimit, increaseAPiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const speechFile = path.resolve("./speech.mp3");
export const maxDuration = 60;
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, voice = "alloy" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized User", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key is Invalid", { status: 500 });
    }
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    if (!voice) {
      return new NextResponse("Resolution is required", { status: 400 });
    }
    const freeTrail = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrail && !isPro) {
      return new NextResponse("Free Trail has expired", { status: 403 });
    }

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice,
      input: prompt,
    });
    const buffer = Buffer.from(await response.arrayBuffer()).toString("base64");
    if (!isPro) {
      await increaseAPiLimit();
    }
    return NextResponse.json(buffer, { status: 200 });
  } catch (error) {
    console.log("[TEXT_TO_SPEECH_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
