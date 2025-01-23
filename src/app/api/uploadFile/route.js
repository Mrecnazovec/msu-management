import { writeFile, mkdir } from "fs/promises";
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
  const folderPath = join(`./public/files/subjects/${folder}`);
  const filePath = join(folderPath, sanitizedFileName);

  // Создать папку, если она не существует
  await mkdir(folderPath, { recursive: true });

  // Записать файл
  await writeFile(filePath, buffer);
  console.log(`Путь к файлу ${filePath}`);

  return NextResponse.json({ success: true, path: filePath.slice(6) });
}