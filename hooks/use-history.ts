"use client";

import { useEffect, useMemo, useState } from "react";
import {
  deletePdfFromHistory,
  getPdfFromHistory,
  savePdfToHistory,
} from "@/utils/pdf-history-store";
import type { ConversionHistoryItem, ConversionRecordInput } from "@/utils/types";

const STORAGE_PREFIX = "image-to-pdf-history";

export function useHistory(storageScope: string) {
  const storageKey = `${STORAGE_PREFIX}:${storageScope}`;
  const [history, setHistory] = useState<ConversionHistoryItem[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const rawHistory = window.localStorage.getItem(storageKey);

    if (!rawHistory) {
      setIsReady(true);
      return;
    }

    try {
      const parsedHistory = JSON.parse(rawHistory) as ConversionHistoryItem[];
      setHistory(Array.isArray(parsedHistory) ? parsedHistory : []);
    } catch (error) {
      console.error("Unable to restore conversion history", error);
    } finally {
      setIsReady(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(history));
  }, [history, isReady, storageKey]);

  const addHistoryItem = async (input: ConversionRecordInput, blob: Blob) => {
    await savePdfToHistory(input.pdfStorageId, blob);

    const nextItem: ConversionHistoryItem = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...input,
    };

    setHistory((current) => [nextItem, ...current].slice(0, 12));
  };

  const clearHistory = async () => {
    await Promise.all(history.map((item) => deletePdfFromHistory(item.pdfStorageId)));
    setHistory([]);
    window.localStorage.removeItem(storageKey);
  };

  const downloadHistoryItem = async (item: ConversionHistoryItem) => {
    const blob = await getPdfFromHistory(item.pdfStorageId);
    if (!blob) {
      throw new Error("This PDF is no longer available in local history.");
    }

    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = item.outputFileName;
    link.click();
    URL.revokeObjectURL(objectUrl);
  };

  const summary = useMemo(() => {
    const totalPdfs = history.length;
    const totalImages = history.reduce((sum, item) => sum + item.imageCount, 0);
    const totalPdfBytes = history.reduce((sum, item) => sum + item.pdfSizeBytes, 0);

    return {
      totalPdfs,
      totalImages,
      totalPdfSizeLabel:
        totalPdfBytes > 0
          ? `${(totalPdfBytes / (1024 * 1024)).toFixed(2)} MB generated`
          : "0 MB generated",
    };
  }, [history]);

  return {
    history,
    isReady,
    summary,
    addHistoryItem,
    clearHistory,
    downloadHistoryItem,
  };
}
