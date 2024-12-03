import * as emailjs from "@emailjs/nodejs";

interface EmailParams {
  firstName: string;
  email: string;
  businessName: string;
  pageId: string;
}

export async function sendConfirmationEmail({
  firstName,
  email,
  businessName,
  pageId,
}: EmailParams): Promise<boolean> {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        to_name: firstName,
        business_name: businessName,
        page_id: pageId,
        to_email: email,
        from_name: "Blake @ TrellisGrow",
        reply_to: "blake@trellisgrow.com",
        subject: "Take Your Next Step with Cultivate | Your Assessment Awaits",
        message:
          "Your assessment is ready to be completed. Click the link below to get started.",
        link: `https://trellisgrow.com/assessment/${pageId}`,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!,
        privateKey: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE!,
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
}
