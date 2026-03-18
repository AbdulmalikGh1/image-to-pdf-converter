"use client";

import { ArrowDown, ArrowUp, GripVertical, Trash2 } from "lucide-react";
import { copy } from "@/constants/i18n";
import type { ImageItem } from "@/utils/types";
import type { Locale } from "@/utils/types";

type PreviewCardProps = {
  image: ImageItem;
  index: number;
  totalItems: number;
  locale: Locale;
  isActive: boolean;
  isDropTarget: boolean;
  onDragStart: (index: number) => void;
  onDragEnd: () => void;
  onDragTargetChange: (index: number | null) => void;
  onMove: (fromIndex: number, toIndex: number) => void;
  onRemove: (id: string) => void;
};

export function PreviewCard({
  image,
  index,
  totalItems,
  locale,
  isActive,
  isDropTarget,
  onDragStart,
  onDragEnd,
  onDragTargetChange,
  onMove,
  onRemove,
}: PreviewCardProps) {
  const t = copy[locale];
  return (
    <article
      className={`group interactive-card overflow-hidden rounded-[24px] border bg-[var(--surface)] transition duration-200 ${
        isDropTarget
          ? "border-[var(--accent)] shadow-[0_14px_40px_rgba(217,119,6,0.14)]"
          : "border-[var(--card-border)]"
      } ${isActive ? "opacity-60" : ""}`}
      draggable
      aria-label={`Preview item ${index + 1}: ${image.file.name}`}
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", String(index));
        event.dataTransfer.effectAllowed = "move";
        onDragStart(index);
      }}
      onDragEnd={onDragEnd}
      onDragOver={(event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        onDragTargetChange(index);
      }}
      onDragLeave={() => {
        onDragTargetChange(null);
      }}
      onDrop={(event) => {
        event.preventDefault();
        onDragTargetChange(null);
        const fromIndex = Number(event.dataTransfer.getData("text/plain"));
        if (Number.isNaN(fromIndex) || fromIndex === index) {
          return;
        }

        onMove(fromIndex, index);
        onDragEnd();
      }}
    >
      {/* Object URLs are displayed directly so previews stay fast and local-only. */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
        <div className="absolute left-3 top-3 z-10 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {t.preview.pageLabel} {index + 1}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.previewUrl}
          alt={image.file.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{image.file.name}</p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            {(image.file.size / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onMove(index, Math.max(0, index - 1))}
            disabled={index === 0}
            className="premium-button-secondary rounded-full border border-[var(--card-border)] p-2 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={`${t.preview.moveUp} ${image.file.name}`}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onMove(index, Math.min(totalItems - 1, index + 1))}
            disabled={index === totalItems - 1}
            className="premium-button-secondary rounded-full border border-[var(--card-border)] p-2 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={`${t.preview.moveDown} ${image.file.name}`}
          >
            <ArrowDown className="h-4 w-4" />
          </button>
          <div className="rounded-full border border-[var(--card-border)] p-2 text-[var(--muted)]">
            <GripVertical className="h-4 w-4" />
          </div>
          <button
            type="button"
            onClick={() => onRemove(image.id)}
            className="premium-button-secondary rounded-full border border-[var(--card-border)] p-2 text-[var(--muted)] hover:border-red-500 hover:text-red-400"
            aria-label={`${t.preview.remove} ${image.file.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
