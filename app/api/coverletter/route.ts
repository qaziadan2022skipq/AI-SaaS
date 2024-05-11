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
    const { job_role, job_skills, creativity = "high", results = "1" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized User", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key is Invalid", { status: 500 });
    }
    if (!job_role) {
      return new NextResponse("Job role is required", { status: 400 });
    }
    if (!job_skills) {
      return new NextResponse("Job skills are required", { status: 400 });
    }
    if (!creativity) {
      return new NextResponse("Creativity is required", { status: 400 });
    }
    if (!results) {
      return new NextResponse("Results is required", { status: 400 });
    }
    const freeTrail = await checkApiLimit();

    if (!freeTrail) {
      return new NextResponse("Free Trail has expired", { status: 403 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
                      You are Powerful assistant and your name is Rachel. Reply like a female.
                      You are an experienced cover letter writer and you have to write a cover letter on data given below:
                      job title is ${job_role}, skills are ${job_skills}.
                      keep in mind your creativity should be ${creativity}.
                      Make ${results} cover letter 
                      `,
        },
        // { role: "user", content: messages[0].content },
      ],
    });
    await increaseAPiLimit();
    console.log(response);
    return NextResponse.json(response.choices[0].message, { status: 200 });
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
