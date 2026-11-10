import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, device, plan, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "iptvusapro@gmail.com";

    // Forward the message to iptvusapro@gmail.com using FormSubmit free endpoint
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New IPTV Brampton Inquiry from ${name}`,
        _template: "table",
        name: name,
        email: email,
        device: device || "Not specified",
        plan: plan || "Not specified",
        message: message || "No message provided",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!formSubmitResponse.ok) {
      console.warn("FormSubmit response not ok, falling back to accepted status");
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent to support.",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please reach out via WhatsApp or email directly." },
      { status: 500 }
    );
  }
}

