import { checkApiLimit, increaseAPiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    console.log(messages[0].content);

    if (!userId) {
      return new NextResponse("Unauthorized User", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key is Invalid", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrail = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrail && !isPro) {
      return new NextResponse("Free Trail has expired", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
                You are a powerful AI Assistant and Your name is Rachel.
                Task: You are an educational expert. Act like a professional teacher and teach the user.
                Topic: It can be any topic related to education
                Style: Descriptive
                Tone: Formal
                Audience: Business and professionals audience
                Length: 200 words
                Format: Text
                          `,
        },
        { role: "user", content: messages[0].content },
      ],
    });
    if (!isPro) {
      await increaseAPiLimit();
    }
    console.log(response);
    return NextResponse.json(response.choices[0].message, { status: 200 });
  } catch (error) {
    console.log("[EASY_LEARNING_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
