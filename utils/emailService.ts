import * as emailjs from "@emailjs/nodejs";

interface SendEmailParams {
  templateId: string;
  toEmail: string;
  toName: string;
  // Any additional parameters the template might need
  [key: string]: any;
}

export async function sendEmail(params: SendEmailParams): Promise<boolean> {
  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      params.templateId,
      {
        to_email: params.toEmail,
        to_name: params.toName,
        ...params, // Include any additional parameters
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// Example usage (keeping the existing function for backwards compatibility)
export async function sendConfirmationEmail({
  firstName,
  email,
  businessName,
  pageId,
}: {
  firstName: string;
  email: string;
  businessName: string;
  pageId: string;
}): Promise<boolean> {
  return sendEmail({
    templateId: process.env.EMAILJS_ASSESSMENT_TEMPLATE_ID!,
    toEmail: email,
    toName: firstName,
    business_name: businessName,
    page_id: pageId,
    from_name: "Blake @ TrellisGrow",
    reply_to: "blake@trellisgrow.com",
    subject: "Take Your Next Step with Cultivate | Your Assessment Awaits",
    link: `https://trellisgrow.com/assessment?id=${pageId}`,
  });
}
