import type { PageSizeOption } from "@/utils/types";

export const PAGE_SIZES: PageSizeOption[] = [
  { label: "A4", value: "A4" },
  { label: "Letter", value: "LETTER" },
];

export const DEFAULT_PAGE_SIZE: PageSizeOption["value"] = "A4";
export const MAX_UPLOAD_FILES = 30;

export const ERROR_MESSAGES = {
  invalidFileType: "Only JPG and PNG files are supported.",
  fileLimitExceeded: `Upload up to ${MAX_UPLOAD_FILES} images per batch.`,
  emptyInput: "Upload at least one image before converting.",
  conversionFailed: "Conversion failed. Try smaller images or a different page size.",
} as const;
