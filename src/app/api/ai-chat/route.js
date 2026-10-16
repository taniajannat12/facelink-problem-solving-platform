import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    // Check API key
    if (!apiKey || !apiKey.trim()) {
      console.error("GEMINI_API_KEY is missing.");

      return NextResponse.json(
        { error: "Gemini API key is missing. Check your .env.local file." },
        { status: 500 }
      );
    }

    // Check request body
    const body = await request.json();
    const message = body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey.trim());

    // Updated model to gemini-1.5-flash (or gemini-2.0-flash)
    const model = genAI.getGenerativeModel({
    model: "gemini-3.8-flash",
      systemInstruction:
        "You are FaceLink AI Assistant. Help users with programming and technology problems. Give simple, clear, and practical answers.",
    });

    // Generate AI response
    const result = await model.generateContent(message.trim());
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("FaceLink Gemini error:", error.message);

    if (error.message?.includes("API_KEY_INVALID")) {
      return NextResponse.json(
        {
          error:
            "Invalid Gemini API key. Create or copy a valid key from Google AI Studio.",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        error: "AI request failed. Please check the Gemini API configuration.",
      },
      { status: 500 }
    );
  }
}