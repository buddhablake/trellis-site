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

interface QuestionAnswer {
  question: string;
  answer: string;
}

export async function updateNotionPage(
  pageId: string,
  answers: QuestionAnswer[]
) {
  try {
    // Create blocks for each question-answer pair
    const blocks = answers.map((qa) => ({
      object: "block",
      type: "paragraph",
      paragraph: {
        rich_text: [
          {
            type: "text",
            text: {
              content: `## ${qa.question}\n\n${
                qa.answer || "*No answer provided*"
              }\n\n---\n`,
            },
          },
        ],
      },
    }));

    const response = await notion.blocks.children.append({
      block_id: pageId,
      children: blocks,
    });

    return response;
  } catch (error) {
    console.error("Error updating Notion page:", error);
    throw error;
  }
}
