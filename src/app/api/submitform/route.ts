// e:\never guilt website\src\app\api\submitform\route.ts
import { NextResponse } from "next/server";
import { sendContactFormEmail } from "@/lib/mailer"; // Adjust path as needed

// Basic email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Define the expected structure of the form data
interface ContactFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin") || '*'; // Allow any origin or restrict as needed
  const headers: HeadersInit = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204, headers });
  }

  // --- Rate Limiting (Optional but Recommended) ---
  // You might want to re-integrate a rate limiter here if needed
  // import { limiter } from "../config/limiter"; // Assuming you have this configured
  // try {
  //   const remaining = await limiter.removeTokens(1);
  //   if (remaining < 0) {
  //     return new NextResponse(JSON.stringify({ error: "Too Many Requests" }), {
  //       status: 429,
  //       headers,
  //     });
  //   }
  // } catch (e) {
  //    console.error("Rate limiter error:", e);
  //    // Decide if you want to proceed or block requests if limiter fails
  // }
  // --- End Rate Limiting ---

  let formData: ContactFormData;

  try {
    formData = await request.json();
  } catch (error) {
    console.error("Error parsing JSON body:", error);
    return new NextResponse(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers,
    });
  }

  // --- Validation ---
  const { name, email, subject, message } = formData;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return new NextResponse(JSON.stringify({ error: "Name is required" }), { status: 400, headers });
  }
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return new NextResponse(JSON.stringify({ error: "Valid email is required" }), { status: 400, headers });
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
    return new NextResponse(JSON.stringify({ error: "Subject is required" }), { status: 400, headers });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return new NextResponse(JSON.stringify({ error: "Message is required" }), { status: 400, headers });
  }
  // --- End Validation ---

  try {
    // Send email using the dedicated mailer function
    await sendContactFormEmail({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
    });

    // Return success response
    return new NextResponse(JSON.stringify({ message: "Message sent successfully!" }), {
      status: 200, // Use 200 OK for successful processing
      headers,
    });

  } catch (error: any) {
    // Handle errors from the mailer function or other issues
    console.error("Error processing contact form submission:", error);
    return new NextResponse(JSON.stringify({ error: error.message || "Internal server error" }), {
      status: 500,
      headers,
    });
  }
}
