import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function GET() {
  try {
    // First, create a page to host our database
    const parentPage = await notion.pages.create({
      parent: {
        type: "page_id",
        page_id: process.env.NOTION_ROOT_PAGE_ID!,
      },
      properties: {
        title: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Cultivate Assessments",
              },
            },
          ],
        },
      },
    });

    // Then create the database within that page
    const response = await notion.databases.create({
      parent: {
        type: "page_id",
        page_id: parentPage.id,
      },
      icon: {
        type: "emoji",
        emoji: "📋",
      },
      title: [
        {
          type: "text",
          text: {
            content: "Assessment Submissions",
          },
        },
      ],
      properties: {
        Name: {
          title: {}, // This is required as the primary property
        },
        "First Name": {
          type: "rich_text",
          rich_text: {},
        },
        "Last Name": {
          type: "rich_text",
          rich_text: {},
        },
        "Business Name": {
          type: "rich_text",
          rich_text: {},
        },
        "Business Website": {
          type: "url",
          url: {},
        },
        Email: {
          type: "email",
          email: {},
        },
        "Submission Date": {
          type: "created_time",
          created_time: {},
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Database created successfully",
      databaseId: response.id,
      pageId: parentPage.id,
    });
  } catch (error) {
    console.error("Error creating Notion database:", error);
    return NextResponse.json(
      { error: "Error creating Notion database" },
      { status: 500 }
    );
  }
}
