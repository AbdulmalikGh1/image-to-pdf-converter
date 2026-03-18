import type { ImageItem, PageSizeOption } from "@/utils/types";

const PAGE_SIZE_MAP: Record<PageSizeOption["value"], [number, number]> = {
  A4: [595.28, 841.89],
  LETTER: [612, 792],
};

export async function convertImagesToPdf(
  images: ImageItem[],
  pageSize: PageSizeOption["value"],
) {
  const { PDFDocument } = await import("pdf-lib");
  const pdfDoc = await PDFDocument.create();
  const [pageWidth, pageHeight] = PAGE_SIZE_MAP[pageSize];
  const margin = 24;

  for (const image of images) {
    const compressedBytes = await compressImage(image.file);
    const isPng = image.file.type === "image/png";
    const embeddedImage = isPng
      ? await pdfDoc.embedPng(compressedBytes)
      : await pdfDoc.embedJpg(compressedBytes);

    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    const bounds = getFittedDimensions(
      embeddedImage.width,
      embeddedImage.height,
      pageWidth - margin * 2,
      pageHeight - margin * 2,
    );

    page.drawImage(embeddedImage, {
      x: (pageWidth - bounds.width) / 2,
      y: (pageHeight - bounds.height) / 2,
      width: bounds.width,
      height: bounds.height,
    });
  }

  return pdfDoc.save();
}

function getFittedDimensions(
  width: number,
  height: number,
  maxWidth: number,
  maxHeight: number,
) {
  const ratio = Math.min(maxWidth / width, maxHeight / height);

  return {
    width: width * ratio,
    height: height * ratio,
  };
}

async function compressImage(file: File) {
  const image = await loadImage(file);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas context unavailable");
  }

  const maxDimension = 2200;
  const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));

  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg";
  const quality = mimeType === "image/jpeg" ? 0.82 : undefined;

  return new Promise<Uint8Array>((resolve, reject) => {
    canvas.toBlob(
      async (blob) => {
        if (!blob) {
          reject(new Error("Failed to compress image"));
          return;
        }

        const bytes = new Uint8Array(await blob.arrayBuffer());
        resolve(bytes);
      },
      mimeType,
      quality,
    );
  });
}

function loadImage(file: File) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error(`Unable to read image: ${file.name}`));
    };

    image.src = objectUrl;
  });
}
