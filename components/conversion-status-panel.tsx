"use client";

import { CheckCircle2, Download, LoaderCircle, RefreshCcw, Sparkles } from "lucide-react";
import { copy } from "@/constants/i18n";
import type { ConversionRecordInput, Locale } from "@/utils/types";

type ConversionStatusPanelProps = {
  locale: Locale;
  isConverting: boolean;
  pdfUrl: string | null;
  error: string | null;
  lastConversion: ConversionRecordInput | null;
  onConvert: () => void | Promise<void>;
  onClear: () => void;
};

function formatFileSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function ConversionStatusPanel({
  locale,
  isConverting,
  pdfUrl,
  error,
  lastConversion,
  onConvert,
  onClear,
}: ConversionStatusPanelProps) {
  const t = copy[locale];
  if (isConverting) {
    return (
      <div className="mt-6 rounded-[24px] border border-[var(--accent)]/20 bg-[var(--accent-soft)] p-5 animate-scale-in">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-[var(--card-strong)] p-3 text-[var(--accent)] animate-soft-pulse">
            <LoaderCircle className="h-5 w-5 animate-spin" />
          </div>
          <div>
            <p className="text-sm font-semibold">{t.status.generating}</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
              {t.status.generatingDesc}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (pdfUrl && lastConversion) {
    return (
      <div className="mt-6 rounded-[24px] border border-emerald-500/20 bg-emerald-500/10 p-5 animate-scale-in">
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white/80 p-3 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                {t.status.ready}
              </p>
              <p className="mt-1 text-sm leading-6 text-emerald-800/80 dark:text-emerald-100/80">
                {lastConversion.imageCount}{" "}
                {lastConversion.imageCount === 1 ? t.preview.page : t.preview.pages}{" "}
                {t.status.readyDescStart} {lastConversion.pageSize} PDF. {t.status.finalSize}:{" "}
                {formatFileSize(lastConversion.pdfSizeBytes)}.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-white/50 bg-white/70 shadow-sm">
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-emerald-900/70">
              <span>{t.status.preview}</span>
              <span>{lastConversion.outputFileName}</span>
            </div>
            <iframe
              title="Generated PDF preview"
              src={pdfUrl}
              className="h-72 w-full bg-white md:h-80"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={pdfUrl}
              download={lastConversion.outputFileName}
            className="premium-button-primary inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <Download className="h-4 w-4" />
              {t.status.download}
            </a>
            <button
              type="button"
              onClick={onConvert}
            className="premium-button-secondary inline-flex items-center justify-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-strong)] px-5 py-3 text-sm font-semibold hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <RefreshCcw className="h-4 w-4" />
              {t.status.recreate}
            </button>
          </div>

          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {t.status.startOver}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-[24px] border border-[var(--card-border)] bg-[var(--surface)] p-5 animate-scale-in">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">{t.status.idle}</p>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            {t.status.idleDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
