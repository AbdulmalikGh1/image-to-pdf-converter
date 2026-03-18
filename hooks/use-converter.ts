"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  DEFAULT_PAGE_SIZE,
  ERROR_MESSAGES,
} from "@/constants/converter";
import { createImageItems, revokeImageItems } from "@/utils/images";
import { convertImagesToPdf } from "@/utils/pdf";
import type {
  ConversionRecordInput,
  ImageItem,
  PageSizeOption,
} from "@/utils/types";

function revokeObjectUrl(url: string | null) {
  if (url) {
    URL.revokeObjectURL(url);
  }
}

function moveItem<T>(items: T[], fromIndex: number, toIndex: number) {
  const next = [...items];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

function createOutputFileName() {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
  ].join("");

  return `convertly-${stamp}.pdf`;
}

export function useConverter() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [pageSize, setPageSize] = useState<PageSizeOption["value"]>(DEFAULT_PAGE_SIZE);
  const [isPreparingFiles, setIsPreparingFiles] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [lastConversion, setLastConversion] = useState<ConversionRecordInput | null>(null);
  const imagesRef = useRef<ImageItem[]>([]);
  const pdfUrlRef = useRef<string | null>(null);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    pdfUrlRef.current = pdfUrl;
  }, [pdfUrl]);

  useEffect(() => {
    return () => {
      revokeImageItems(imagesRef.current);
      revokeObjectUrl(pdfUrlRef.current);
    };
  }, []);

  const stats = useMemo(() => {
    const totalSize = images.reduce((sum, image) => sum + image.file.size, 0);

    return {
      count: images.length,
      totalSizeInMb: totalSize / (1024 * 1024),
      sizeLabel: totalSize > 0 ? `${(totalSize / (1024 * 1024)).toFixed(2)} MB total` : "0 MB",
    };
  }, [images]);

  const resetPdf = () => {
    revokeObjectUrl(pdfUrlRef.current);
    setPdfUrl(null);
  };

  const addFiles = async (incomingFiles: File[]) => {
    setError(null);
    resetPdf();
    setLastConversion(null);
    setIsPreparingFiles(true);

    const next = await createImageItems(incomingFiles);

    if (next.invalidCount > 0) {
      setError(ERROR_MESSAGES.invalidFileType);
    }
    if (next.overflowCount > 0) {
      setError(ERROR_MESSAGES.fileLimitExceeded);
    }

    if (next.items.length === 0) {
      setIsPreparingFiles(false);
      return;
    }

    setImages((current) => [...current, ...next.items]);
    setIsPreparingFiles(false);
  };

  const removeImage = (id: string) => {
    setImages((current) => {
      const target = current.find((item) => item.id === id);
      if (target) {
        revokeImageItems([target]);
      }

      return current.filter((item) => item.id !== id);
    });
  };

  const reorderImages = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) {
      return;
    }

    setImages((current) => {
      if (
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= current.length ||
        toIndex >= current.length
      ) {
        return current;
      }

      return moveItem(current, fromIndex, toIndex);
    });
  };

  const clearAll = () => {
    revokeImageItems(imagesRef.current);
    setImages([]);
    setError(null);
    setLastConversion(null);
    resetPdf();
  };

  const convert = async (
    options?: { onComplete?: (record: ConversionRecordInput, blob: Blob) => void | Promise<void> },
  ) => {
    if (imagesRef.current.length === 0) {
      setError(ERROR_MESSAGES.emptyInput);
      return;
    }

    setIsConverting(true);
    setError(null);

    try {
      const pdfBytes = await convertImagesToPdf(imagesRef.current, pageSize);
      const normalizedPdfBytes = new Uint8Array(pdfBytes);
      const blob = new Blob([normalizedPdfBytes], { type: "application/pdf" });
      const nextUrl = URL.createObjectURL(blob);
      const outputFileName = createOutputFileName();

      revokeObjectUrl(pdfUrlRef.current);
      setPdfUrl(nextUrl);
      const record = {
        pageSize,
        imageCount: imagesRef.current.length,
        totalInputBytes: imagesRef.current.reduce((sum, image) => sum + image.file.size, 0),
        pdfSizeBytes: blob.size,
        outputFileName,
        pdfStorageId: crypto.randomUUID(),
        fileNames: imagesRef.current.map((image) => image.file.name),
      };
      setLastConversion(record);
      await options?.onComplete?.(record, blob);
    } catch (conversionError) {
      console.error(conversionError);
      setError(ERROR_MESSAGES.conversionFailed);
    } finally {
      setIsConverting(false);
    }
  };

  return {
    images,
    pageSize,
    isPreparingFiles,
    isConverting,
    error,
    pdfUrl,
    lastConversion,
    stats,
    hasImages: images.length > 0,
    setPageSize,
    addFiles,
    removeImage,
    reorderImages,
    clearAll,
    convert,
  };
}
