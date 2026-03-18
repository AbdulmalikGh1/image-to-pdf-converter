export type ImageItem = {
  id: string;
  file: File;
  previewUrl: string;
};

export type PageSizeOption = {
  label: string;
  value: "A4" | "LETTER";
};

export type Theme = "light" | "dark";
export type Locale = "en" | "ar";

export type AuthSession = {
  name: string;
  email: string;
  mode: "guest" | "local";
};

export type ConversionHistoryItem = {
  id: string;
  createdAt: string;
  pageSize: PageSizeOption["value"];
  imageCount: number;
  totalInputBytes: number;
  pdfSizeBytes: number;
  outputFileName: string;
  pdfStorageId: string;
  fileNames: string[];
};

export type ConversionRecordInput = Omit<ConversionHistoryItem, "id" | "createdAt">;
