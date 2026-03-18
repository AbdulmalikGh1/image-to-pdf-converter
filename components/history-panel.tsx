"use client";

import { useState } from "react";
import { History, RefreshCw, Trash2 } from "lucide-react";
import { copy } from "@/constants/i18n";
import type { ConversionHistoryItem, Locale } from "@/utils/types";

type HistoryPanelProps = {
  locale: Locale;
  history: ConversionHistoryItem[];
  isReady: boolean;
  totalPdfs: number;
  totalImages: number;
  totalPdfSizeLabel: string;
  onClearHistory: () => void;
  onDownloadHistoryItem: (item: ConversionHistoryItem) => Promise<void>;
  onApplyPageSize: (pageSize: ConversionHistoryItem["pageSize"]) => void;
};

function formatFileSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function HistoryPanel({
  locale,
  history,
  isReady,
  totalPdfs,
  totalImages,
  totalPdfSizeLabel,
  onClearHistory,
  onDownloadHistoryItem,
  onApplyPageSize,
}: HistoryPanelProps) {
  const t = copy[locale];
  const [historyError, setHistoryError] = useState<string | null>(null);
  const [activeDownloadId, setActiveDownloadId] = useState<string | null>(null);

  return (
    <section className="glass-card animate-fade-up rounded-[28px] p-6 sm:p-7" aria-labelledby="history-heading">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
            {t.history.eyebrow}
          </p>
          <h2 id="history-heading" className="display-font mt-2 text-2xl font-semibold">
            {t.history.title}
          </h2>
        </div>
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] p-3 text-[var(--accent)]">
          <History className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[22px] border border-[var(--card-border)] bg-[var(--surface)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.history.pdfs}</p>
          <p className="mt-2 text-2xl font-semibold">{totalPdfs}</p>
        </div>
        <div className="rounded-[22px] border border-[var(--card-border)] bg-[var(--surface)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.history.images}</p>
          <p className="mt-2 text-2xl font-semibold">{totalImages}</p>
        </div>
        <div className="rounded-[22px] border border-[var(--card-border)] bg-[var(--surface)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.history.output}</p>
          <p className="mt-2 text-sm font-semibold">{totalPdfSizeLabel}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-sm text-[var(--muted)]">
          {isReady ? t.history.stored : t.history.loading}
        </p>
        <button
          type="button"
          onClick={onClearHistory}
          disabled={history.length === 0}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium transition hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <Trash2 className="h-4 w-4" />
          {t.history.clear}
        </button>
      </div>

      {historyError ? (
        <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-200">
          {historyError}
        </div>
      ) : null}

      {history.length === 0 ? (
        <div className="mt-6 rounded-[24px] border border-dashed border-[var(--card-border)] bg-[var(--surface)] px-6 py-12 text-center text-sm text-[var(--muted)]">
          {t.history.empty}
        </div>
      ) : (
        <ol className="mt-6 space-y-3">
          {history.map((item, index) => (
            <li key={item.id} className="interactive-card rounded-[24px] border border-[var(--card-border)] bg-[var(--surface)] p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold">
                      {item.outputFileName}
                    </p>
                    {index === 0 ? (
                      <span className="rounded-full bg-[var(--accent-soft)] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                        {t.history.latest}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                  <p className="mt-3 text-sm text-[var(--muted)]">
                    {item.imageCount} image{item.imageCount === 1 ? "" : "s"} | {item.pageSize} | Output {formatFileSize(item.pdfSizeBytes)}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                    {item.fileNames.slice(0, 3).join(", ")}
                    {item.fileNames.length > 3
                      ? ` +${item.fileNames.length - 3} more`
                      : ""}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={async () => {
                      setHistoryError(null);
                      setActiveDownloadId(item.id);
                      try {
                        await onDownloadHistoryItem(item);
                      } catch (error) {
                        console.error(error);
                        setHistoryError(t.history.redownloadError);
                      } finally {
                        setActiveDownloadId(null);
                      }
                    }}
                    className="premium-button-primary inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    {activeDownloadId === item.id ? t.history.opening : t.history.downloadAgain}
                  </button>
                  <button
                    type="button"
                    onClick={() => onApplyPageSize(item.pageSize)}
                    className="premium-button-secondary inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-2 text-sm font-medium hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    <RefreshCw className="h-4 w-4" />
                    {t.history.reuse} {item.pageSize}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
