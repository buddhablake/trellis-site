import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/emailService";

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json();

    const emailSent = await sendEmail({
      templateId: process.env.EMAILJS_ASSESSMENT_COMPLETED_TEMPLATE_ID!,
      toEmail: email,
      toName: firstName,
      from_name: "Blake @ TrellisGrow",
      reply_to: "blake@trellisgrow.com",
      subject: "Thank You for Completing Your Cultivate Assessment",
    });

    if (!emailSent) {
      throw new Error("Failed to send completion email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending completion email:", error);
    return NextResponse.json(
      { error: "Failed to send completion email" },
      { status: 500 }
    );
  }
}
