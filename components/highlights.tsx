import { Clock3, LockKeyhole, Sparkles, Zap } from "lucide-react";
import { copy } from "@/constants/i18n";
import type { Locale } from "@/utils/types";

const HIGHLIGHT_ICONS = [LockKeyhole, Zap, Clock3, Sparkles];

export function Highlights({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section aria-labelledby="highlights-heading" className="glass-card rounded-[28px] p-6 sm:p-7">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
          {t.highlights.eyebrow}
        </p>
        <h2 id="highlights-heading" className="display-font mt-2 text-2xl font-semibold">
          {t.highlights.title}
        </h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {t.highlights.items.map((item, index) => {
          const Icon = HIGHLIGHT_ICONS[index];
          return (
            <article
              key={item.title}
              className="rounded-[24px] border border-[var(--card-border)] bg-[var(--surface)] p-5"
            >
              <div className="inline-flex rounded-2xl bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
