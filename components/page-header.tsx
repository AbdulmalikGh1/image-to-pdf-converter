"use client";

import { Download, FileOutput } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/constants/branding";
import { copy } from "@/constants/i18n";
import type { Locale } from "@/utils/types";

type PageHeaderProps = {
  locale: Locale;
  pdfUrl: string | null;
  downloadName?: string;
};

export function PageHeader({
  locale,
  pdfUrl,
  downloadName,
}: PageHeaderProps) {
  const t = copy[locale];

  return (
    <header className="glass-card overflow-hidden rounded-[28px]">
      <div className="flex flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)]">
              <FileOutput className="h-4 w-4 text-[var(--accent)]" />
              {APP_TAGLINE}
            </div>
            <div className="space-y-3">
              <p className="display-font text-3xl font-semibold tracking-tight sm:text-4xl">
                {APP_NAME}
              </p>
              <h1 className="display-font text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.header.hero}
              </h1>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              {t.header.sub}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:max-w-[360px] lg:justify-end">
            <div className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              {t.header.private}
            </div>
            <div className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              {t.header.reorder}
            </div>
            {pdfUrl ? (
              <a
                href={pdfUrl}
                download={downloadName ?? "convertly-export.pdf"}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <Download className="h-4 w-4" />
                {t.status.download}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
