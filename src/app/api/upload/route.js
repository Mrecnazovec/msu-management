import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";


export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const folder = formData.get("folder");


  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const sanitizedFileName = file.name.replace(/\s+/g, '-');
  const path = join(`./public/images/${folder}/${sanitizedFileName}`);

  await writeFile(path, buffer);
  console.log(`Путь к файлу ${path}`);

  return NextResponse.json({ success: true, path: path.slice(6) });
}