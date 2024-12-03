import { NextResponse } from "next/server";
import { validateNotionPageId, updateNotionPage } from "@/utils/notion";

export async function POST(request: Request) {
  try {
    const { pageId, message } = await request.json();

    if (!pageId) {
      return NextResponse.json(
        { error: "Page ID is required" },
        { status: 400 }
      );
    }

    // Validate the page ID
    const isValid = await validateNotionPageId(pageId);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid or inaccessible page ID" },
        { status: 404 }
      );
    }

    // Update the page
    const response = await updateNotionPage(pageId, message);

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Error updating assessment:", error);
    return NextResponse.json(
      { error: "Failed to update assessment" },
      { status: 500 }
    );
  }
}
