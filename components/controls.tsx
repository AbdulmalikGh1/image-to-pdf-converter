"use client";

import { LoaderCircle, RotateCcw } from "lucide-react";
import { copy } from "@/constants/i18n";
import type { PageSizeOption } from "@/utils/types";
import type { Locale } from "@/utils/types";

type ControlsProps = {
  locale: Locale;
  isConverting: boolean;
  hasImages: boolean;
  hasPdf: boolean;
  pageSize: PageSizeOption["value"];
  pageSizes: PageSizeOption[];
  onPageSizeChange: (value: PageSizeOption["value"]) => void;
  onConvert: () => void | Promise<void>;
  onClear: () => void;
};

export function Controls({
  locale,
  isConverting,
  hasImages,
  hasPdf,
  pageSize,
  pageSizes,
  onPageSizeChange,
  onConvert,
  onClear,
}: ControlsProps) {
  const t = copy[locale];

  return (
    <div className="mt-8 space-y-5">
      <label className="block">
        <span className="mb-2 block text-sm font-medium">{t.controls.pageSize}</span>
        <select
          value={pageSize}
          onChange={(event) =>
            onPageSizeChange(event.target.value as PageSizeOption["value"])
          }
          aria-label="Select PDF page size"
          className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {pageSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onConvert}
          disabled={!hasImages || isConverting}
          aria-busy={isConverting}
          className="premium-button-primary inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {isConverting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              {t.controls.converting}
            </>
          ) : (
            t.controls.generate
          )}
        </button>

        <button
          type="button"
          onClick={onClear}
          disabled={!hasImages && !hasPdf}
          className="premium-button-secondary inline-flex items-center justify-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold hover:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <RotateCcw className="h-4 w-4" />
          {t.controls.clear}
        </button>
      </div>
    </div>
  );
}
