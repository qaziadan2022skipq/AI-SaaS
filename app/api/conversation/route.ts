import { checkApiLimit, increaseAPiLimit } from "@/lib/api-limit";
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
        console.log(messages[0].content)

        if (!userId) {
            return new NextResponse("Unauthorized User", { status: 401 })
        }
        if (!openai.apiKey) {
            return new NextResponse("OpenAI API key is Invalid", { status: 500 })
        }
        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 })
        }

        const freeTrail = await checkApiLimit()

        if(!freeTrail){
            return new NextResponse("Free Trail has expired", {status: 403})
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "user", "content": `
                You are a powerful AI Assistant and Your name is Rachel.
                Answer all the question in female syles.
                ` },
                { "role": "user", "content": messages[0].content }
            ]
        });

        await increaseAPiLimit()
        
        console.log(response)
        return NextResponse.json(response.choices[0].message, {status: 200})

    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}