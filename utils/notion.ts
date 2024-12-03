import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function validateNotionPageId(pageId: string): Promise<boolean> {
  try {
    await notion.pages.retrieve({ page_id: pageId });
    return true;
  } catch (error) {
    console.error("Error validating Notion page:", error);
    return false;
  }
}

export async function updateNotionPage(pageId: string, message: string) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        "Test Update": {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    return response;
  } catch (error) {
    console.error("Error updating Notion page:", error);
    throw error;
  }
}
