// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const response = await fetch(
      "https://router.huggingface.co/hf-inference/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          // We use Google Gemma 2 (2B) because it is free, fast, and does not 
          // require a pro subscription or license agreement to run.
          model: "google/gemma-2-2b-it", 
          messages: [
            { role: "user", content: text }
          ],
          max_tokens: 500,
          stream: false
        }),
      }
    );

    // If HF returns a 500/503 (loading) error, we need to know why
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Hugging Face API Error:", errorText);
      return NextResponse.json({ error: `API Error: ${response.status} ${response.statusText}` }, { status: response.status });
    }

    const data = await response.json();
    
    // The new API returns OpenAI-style response
    const botMessage = data.choices?.[0]?.message?.content || "No response received.";

    return NextResponse.json({ generated_text: botMessage });
    
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}