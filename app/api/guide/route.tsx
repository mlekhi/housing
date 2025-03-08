import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// API Handler (GET request)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return NextResponse.json({ error: "Filename is required" }, { status: 400 });
  }

  // Prevent path traversal attacks
  const safeFilename = filename.replace(/\.\./g, "").replace(/\//g, "");

  // Path to the Markdown file
  const filePath = path.join(process.cwd(), "public", "content", `${safeFilename}.md`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  try {
    const markdownContent = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ content: markdownContent });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}
