
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { description, content } = await req.json();

        if (!description && !content) {
            return NextResponse.json(
                { error: "Description or content is required" },
                { status: 400 }
            );
        }

        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
            return NextResponse.json(
                { error: "Gemini API key is not configured" },
                { status: 500 }
            );
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
      You are a professional portfolio writer. Based on the project description and content provided below, please generate concise and impactful content for the following sections of a portfolio project:
      - challenges
      - solutions
      - insight
      - strategy
      - outcomes

      Keep each section around 2-3 sentences max. 
      Return the result ONLY as a JSON object with these keys: "challenges", "solutions", "insight", "strategy", "outcomes".
      Do not include any other text or markdown formatting outside the JSON object.

      Project Description: ${description || "N/A"}
      Project Content: ${content || "N/A"}
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean up the response in case Gemini adds markdown code blocks
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const jsonStr = jsonMatch ? jsonMatch[0] : text;

        const data = JSON.parse(jsonStr);

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Gemini Generation Error:", error);
        return NextResponse.json(
            { error: "Failed to generate content: " + error.message },
            { status: 500 }
        );
    }
}
