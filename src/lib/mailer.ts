// e:\never guilt website\src\lib\mailer.ts
import nodemailer, { Transporter } from "nodemailer";

const email: string = process.env.ZOHO_EMAIL || "contact@neverguilt.com";
const pass: string = process.env.ZOHO_PASSWORD || "A*6KQwPLP9LW*pf"; 
// Define a recipient email, preferably from environment variables
const contactRecipientEmail: string = process.env.NEXT_PUBLIC_CONTACT_RECIPIENT_EMAIL || email; // Send to self by default if not set

const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: email,
    pass: pass,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false, // Often needed for local development or specific server configs
  },
});


// --- NEW Function for Contact Form ---
interface ContactFormData {
  name: string;
  email: string; // User's email
  subject: string;
  message: string;
}

export async function sendContactFormEmail(formData: ContactFormData) {
  const { name, email: userEmail, subject, message } = formData;

  // Basic HTML escaping for user input to prevent XSS in email body
  const escapeHtml = (unsafe: string) => {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  };

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
      <h2 style="color: #1a365d; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(userEmail)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; background-color: #f7fafc; padding: 10px; border-radius: 4px;">${escapeHtml(message)}</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
      <p style="font-size: 12px; color: #718096;">
        This message was sent from the contact form on neverguilt.com
      </p>
    </div>
  `;

  const textBody = `
New Contact Form Submission:

Name: ${name}
Email: ${userEmail}
Subject: ${subject}

Message:
${message}

-------------------------------------
Sent from neverguilt.com contact form
  `;

  try {
    await transporter.sendMail({
      from: `"Never Guilt Contact Form" <${email}>`, // Your sending email
      to: contactRecipientEmail,                   // Your support/info email
      replyTo: userEmail,                           // Set reply-to user's email
      subject: `New Contact Form: ${subject}`,      // Use user's subject
      html: htmlBody,
      text: textBody,
    });
    console.log(`Contact form email sent successfully to ${contactRecipientEmail}`);
  } catch (error) {
    console.error('Error sending contact form email:', error);
    throw new Error("Failed to send message. Please try again later."); // Throw a user-friendly error
  }
}
