"use client";

import { useId, useRef, useState } from "react";
import { ArrowDownToLine, ImagePlus, UploadCloud } from "lucide-react";
import clsx from "clsx";
import { MAX_UPLOAD_FILES } from "@/constants/converter";
import { copy } from "@/constants/i18n";
import type { Locale } from "@/utils/types";

type UploaderProps = {
  onFilesAdded: (files: File[]) => void | Promise<void>;
  disabled?: boolean;
  isPreparing?: boolean;
  locale: Locale;
};

export function Uploader({
  onFilesAdded,
  disabled = false,
  isPreparing = false,
  locale,
}: UploaderProps) {
  const t = copy[locale];
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [, setDragCount] = useState(0);

  const handleFileList = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) {
      return;
    }

    await onFilesAdded(Array.from(fileList));
  };

  return (
    <section className="glass-card interactive-card animate-fade-up rounded-[28px] p-6 sm:p-8">
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="Upload images by dragging and dropping files or opening the file picker"
        aria-describedby={`${inputId}-description`}
        className={clsx(
          "relative flex min-h-72 flex-col items-center justify-center overflow-hidden rounded-[24px] border-2 border-dashed px-6 py-10 text-center transition duration-200",
          isDragging
            ? "scale-[1.01] border-[var(--accent)] bg-[var(--accent-soft)] shadow-[0_18px_50px_rgba(217,119,6,0.14)]"
            : "border-[var(--card-border)] bg-[var(--surface)]",
          (disabled || isPreparing) && "pointer-events-none opacity-60",
        )}
        onDragEnter={(event) => {
          event.preventDefault();
          setDragCount((current) => current + 1);
          setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setDragCount((current) => {
            const nextCount = Math.max(0, current - 1);
            if (nextCount === 0) {
              setIsDragging(false);
            }
            return nextCount;
          });
        }}
        onDrop={async (event) => {
          event.preventDefault();
          setDragCount(0);
          setIsDragging(false);
          await handleFileList(event.dataTransfer.files);
        }}
        onKeyDown={(event) => {
          if (disabled) {
            return;
          }

          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
      >
        <div
          className={clsx(
            "pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent opacity-0 transition",
            isDragging && "opacity-100",
          )}
        />
        <div className={clsx("mb-5 rounded-3xl bg-[var(--card)] p-5 shadow-lg shadow-amber-950/10", isPreparing && "shimmer")}>
          {isDragging ? (
            <ArrowDownToLine className="h-10 w-10 text-[var(--accent)]" />
          ) : (
            <UploadCloud className="h-10 w-10 text-[var(--accent)]" />
          )}
        </div>
        <h2 className="display-font text-2xl font-semibold sm:text-3xl">
          {isPreparing
            ? t.uploader.preparing
            : isDragging
              ? t.uploader.release
              : t.uploader.drop}
        </h2>
        <p
          id={`${inputId}-description`}
          className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)] sm:text-base"
        >
          {isPreparing
            ? t.uploader.preparingDesc
            : t.uploader.desc}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          <span className="rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1">
            JPG
          </span>
          <span className="rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1">
            PNG
          </span>
          <span className="rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1">
            {t.uploader.multi}
          </span>
          <span className="rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1">
            {t.uploader.upTo} {MAX_UPLOAD_FILES}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={isPreparing}
            className="premium-button-primary inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <ImagePlus className="h-4 w-4" />
            {isPreparing ? t.uploader.choosePreparing : t.uploader.choose}
          </button>
          <p className="text-sm text-[var(--muted)]">{t.uploader.helper}</p>
        </div>
      </div>

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept="image/jpeg,image/png"
        className="sr-only"
        multiple
        disabled={disabled}
        onChange={async (event) => {
          await handleFileList(event.target.files);
          event.target.value = "";
        }}
      />
    </section>
  );
}
