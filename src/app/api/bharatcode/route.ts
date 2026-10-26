import { NextResponse } from "next/server";

interface BharatCodeRequestBody {
  prompt?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as BharatCodeRequestBody;

  if (!body.prompt?.trim()) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  const apiKey = process.env.BHARATCODE_API_KEY;
  const apiUrl = process.env.BHARATCODE_API_URL;

  if (!apiKey || !apiUrl) {
    return NextResponse.json(
      {
        error: "BharatCode API is not configured.",
        details: "Set BHARATCODE_API_URL and BHARATCODE_API_KEY to enable this route.",
      },
      { status: 501 },
    );
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(apiKey),
      },
      body: JSON.stringify({
        prompt: body.prompt,
        context: "pustaksetu-lesson-pack",
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "BharatCode request failed.",
          status: response.status,
        },
        { status: 502 },
      );
    }

    const result = (await response.json()) as unknown;
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach BharatCode API from the server." },
      { status: 502 },
    );
  }
}
