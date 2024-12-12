import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { sendEmail } from "@/utils/emailService";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, businessName, businessWebsite, email } = body;

    // Create the Notion page
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `${firstName} ${lastName}`,
              },
            },
          ],
        },
        "First Name": {
          rich_text: [{ text: { content: firstName } }],
        },
        "Last Name": {
          rich_text: [{ text: { content: lastName } }],
        },
        "Business Name": {
          rich_text: [{ text: { content: businessName } }],
        },
        "Business Website": {
          url: businessWebsite,
        },
        Email: {
          email: email,
        },
      },
    });

    // Update page with its own ID
    await notion.pages.update({
      page_id: response.id,
      properties: {
        "Page ID": {
          rich_text: [{ text: { content: response.id } }],
        },
      },
    });

    // Send confirmation email using new email service
    const emailSent = await sendEmail({
      templateId: process.env.EMAILJS_ASSESSMENT_TEMPLATE_ID!,
      toEmail: email,
      toName: firstName,
      business_name: businessName,
      page_id: response.id,
      from_name: "Blake @ TrellisGrow",
      reply_to: "blake@trellisgrow.com",
      subject: "Take Your Next Step with Cultivate | Your Assessment Awaits",
      link: `https://trellisgrow.com/assessment?id=${response.id}`,
    });

    if (!emailSent) {
      console.warn("Failed to send confirmation email to:", email);
      // We don't return an error since the assessment was still created successfully
    } else {
      console.log("Confirmation email sent to:", email);
    }

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Error submitting to Notion:", error);
    return NextResponse.json(
      { error: "Error submitting assessment" },
      { status: 500 }
    );
  }
}
