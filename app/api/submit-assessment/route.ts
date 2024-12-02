import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, businessName, businessWebsite, email } = body;

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

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Error submitting to Notion:", error);
    return NextResponse.json(
      { error: "Error submitting assessment" },
      { status: 500 }
    );
  }
}