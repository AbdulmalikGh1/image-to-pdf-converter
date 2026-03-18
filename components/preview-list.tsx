"use client";

import { useState } from "react";
import { copy } from "@/constants/i18n";
import { PreviewCard } from "@/components/preview-card";
import type { ImageItem } from "@/utils/types";
import type { Locale } from "@/utils/types";

type PreviewListProps = {
  locale: Locale;
  images: ImageItem[];
  onMove: (fromIndex: number, toIndex: number) => void;
  onRemove: (id: string) => void;
};

export function PreviewList({ locale, images, onMove, onRemove }: PreviewListProps) {
  const t = copy[locale];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);

  return (
    <section className="glass-card animate-fade-up rounded-[28px] p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
            {t.preview.eyebrow}
          </p>
          <h2 className="display-font mt-2 text-2xl font-semibold">{t.preview.title}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
          <span className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-3 py-1">
            {images.length} {images.length === 1 ? t.preview.page : t.preview.pages}
          </span>
          <span>{t.preview.helper}</span>
        </div>
      </div>

      {images.length === 0 ? (
        <div className="mt-6 rounded-[24px] border border-dashed border-[var(--card-border)] bg-[var(--surface)] px-6 py-14 text-center text-sm text-[var(--muted)] animate-scale-in">
          {t.preview.empty}
        </div>
      ) : (
        <div className="mt-6 rounded-[24px] border border-[var(--card-border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]">
          {t.preview.note}
        </div>
      )}

      {images.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <PreviewCard
              key={image.id}
              image={image}
              index={index}
              totalItems={images.length}
              locale={locale}
              isActive={activeIndex === index}
              isDropTarget={dropIndex === index}
              onDragStart={setActiveIndex}
              onDragEnd={() => {
                setActiveIndex(null);
                setDropIndex(null);
              }}
              onDragTargetChange={setDropIndex}
              onMove={onMove}
              onRemove={onRemove}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
