import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Brevo API key is not configured." },
        { status: 500 }
      );
    }

    const fromEmail = process.env.BREVO_FROM_EMAIL || "harishrobikar@gmail.com";
    const fromName = process.env.BREVO_FROM_NAME || "Portfolio Contact Form";
    const adminEmail = process.env.BREVO_ADMIN_EMAIL || fromEmail;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: adminEmail, name: "Admin" }],
        replyTo: { email: email, name: name },
        subject: `New Contact Form Submission from ${name}`,
        htmlContent: `
          <html>
            <body>
              <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <h2 style="color: #333;">New Message Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #d97706;">
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                </div>
                <p style="margin-top: 30px; font-size: 12px; color: #888;">Submitted from your Portfolio Contact Form.</p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Email sent successfully!" });
    } else {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to send email." },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
