import type { ImageItem } from "@/utils/types";
import { MAX_UPLOAD_FILES } from "@/constants/converter";

const VALID_TYPES = new Set(["image/jpeg", "image/png"]);

export async function createImageItems(files: File[]) {
  const items: ImageItem[] = [];
  let invalidCount = 0;
  const limitedFiles = files.slice(0, MAX_UPLOAD_FILES);
  const overflowCount = Math.max(0, files.length - MAX_UPLOAD_FILES);

  for (const file of limitedFiles) {
    if (!VALID_TYPES.has(file.type)) {
      invalidCount += 1;
      continue;
    }

    items.push({
      id: crypto.randomUUID(),
      file,
      previewUrl: URL.createObjectURL(file),
    });
  }

  return { items, invalidCount, overflowCount };
}

export function revokeImageItems(items: ImageItem[]) {
  for (const item of items) {
    URL.revokeObjectURL(item.previewUrl);
  }
}
