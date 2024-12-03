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
    const response = await notion.blocks.children.append({
      block_id: pageId,
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: message,
                },
              },
            ],
          },
        },
      ],
    });

    return response;
  } catch (error) {
    console.error("Error updating Notion page:", error);
    throw error;
  }
}
