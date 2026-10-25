
// // import { NextResponse } from "next/server";
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // export async function POST(request) {
// //   try {
// //     const apiKey = process.env.GEMINI_API_KEY;

// //     if (!apiKey || !apiKey.trim()) {
// //       console.error("GEMINI_API_KEY is missing.");

// //       return NextResponse.json(
// //         { error: "Gemini API key is missing. Check your .env.local file." },
// //         { status: 500 }
// //       );
// //     }

// //     let body;

// //     try {
// //       body = await request.json();
// //     } catch {
// //       return NextResponse.json(
// //         { error: "Invalid request body." },
// //         { status: 400 }
// //       );
// //     }

// //     const message = body?.message;

// //     if (typeof message !== "string" || !message.trim()) {
// //       return NextResponse.json(
// //         { error: "Please enter a message." },
// //         { status: 400 }
// //       );
// //     }

// //     if (message.length > 10000) {
// //       return NextResponse.json(
// //         { error: "Message is too long. Please shorten it." },
// //         { status: 400 }
// //       );
// //     }

// //     const genAI = new GoogleGenerativeAI(apiKey.trim());

// //     const model = genAI.getGenerativeModel({
// //       model: "gemini-2.5-flash",
// //       systemInstruction:
// //         "You are FaceLink AI Assistant. Help users solve programming, technology, and software development problems. Give clear, practical answers with examples when useful. Be friendly and concise. Reply in the same language as the user.",
// //     });

// //     const result = await model.generateContent(message.trim());
// //     const reply = result.response.text();

// //     if (!reply || !reply.trim()) {
// //       return NextResponse.json(
// //         { error: "AI could not generate a response. Please try again." },
// //         { status: 502 }
// //       );
// //     }

// //     return NextResponse.json({ reply });
// //   } catch (error) {
// //     console.error("FaceLink AI error:", error);

// //     const errorMessage = String(error?.message || "");

// //     if (
// //       errorMessage.includes("API_KEY_INVALID") ||
// //       errorMessage.includes("API key not valid") ||
// //       errorMessage.includes("invalid API key")
// //     ) {
// //       return NextResponse.json(
// //         { error: "Invalid Gemini API key. Check your Google AI Studio key." },
// //         { status: 401 }
// //       );
// //     }

// //     if (
// //       errorMessage.includes("429") ||
// //       errorMessage.includes("RESOURCE_EXHAUSTED")
// //     ) {
// //       return NextResponse.json(
// //         { error: "AI request limit reached. Please try again later." },
// //         { status: 429 }
// //       );
// //     }

// //     if (
// //       errorMessage.includes("404") ||
// //       errorMessage.includes("NOT_FOUND") ||
// //       errorMessage.includes("model")
// //     ) {
// //       return NextResponse.json(
// //         { error: "Gemini model is unavailable. Check the model name and API access." },
// //         { status: 502 }
// //       );
// //     }

// //     return NextResponse.json(
// //       { error: "AI request failed. Check the server terminal for details." },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { NextResponse } from "next/server";
// import { GoogleGenAI } from "@google/genai";

// export async function POST() {
//   try {
//     const apiKey = process.env.GEMINI_API_KEY;

//     if (!apiKey) {
//       return NextResponse.json(
//         { error: "GEMINI_API_KEY is missing from .env.local" },
//         { status: 500 }
//       );
//     }

//     const ai = new GoogleGenAI({ apiKey });

//     const result = await ai.interactions.create({
//       model: "gemini-3.8-flash",
//       input: "Reply with: FaceLink AI is working!",
//     });

//     return NextResponse.json({
//       reply: result.output_text,
//     });
//   } catch (error) {
//     console.error("AI test failed:", error);

//     return NextResponse.json(
//       { error: error.message || "AI test failed" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const maxDuration = 60;

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey?.trim()) {
      return NextResponse.json(
        { error: "Gemini API key is missing. Check your .env.local file." },
        { status: 500 }
      );
    }

    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const message = body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    if (message.length > 10000) {
      return NextResponse.json(
        { error: "Message is too long. Please shorten it." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey.trim(),
    });

    const result = await ai.interactions.create({
      model: "gemini-3.8-flash",
      input: message.trim(),
      system_instruction:
        "You are FaceLink AI Assistant, a friendly technical assistant inside a problem-solving social networking platform. Help users with programming, web development, debugging, software engineering, education, and career questions. Give accurate, practical, easy-to-understand answers. When users share code, explain the problem and suggest a corrected solution. Use code examples when helpful. Reply in the same language as the user. If the user says hi or greets you, respond naturally and ask how you can help. Never claim to have executed code or accessed files unless you actually have.",
    });

    const reply = result.output_text;

    if (typeof reply !== "string" || !reply.trim()) {
      return NextResponse.json(
        { error: "AI could not generate a response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply: reply.trim() });
  } catch (error) {
    console.error("FaceLink AI error:", error);

    const message = String(error?.message || "");
    const status = Number(error?.status || error?.statusCode || 0);

    if (
      status === 401 ||
      status === 403 ||
      message.includes("API_KEY_INVALID") ||
      message.includes("API key not valid")
    ) {
      return NextResponse.json(
        { error: "Gemini API key is invalid or does not have access." },
        { status: 401 }
      );
    }

    if (status === 429 || message.includes("RESOURCE_EXHAUSTED")) {
      return NextResponse.json(
        { error: "AI usage limit reached. Please try again later." },
        { status: 429 }
      );
    }

    if (status === 404 || message.includes("NOT_FOUND")) {
      return NextResponse.json(
        { error: "Gemini model or API endpoint is unavailable." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { error: "AI request failed. Check the server terminal for details." },
      { status: 500 }
    );
  }
}
