"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Globe } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/constants/branding";
import { SiteFooter } from "@/components/site-footer";
import { useLocale } from "@/hooks/use-locale";
import type { Locale } from "@/utils/types";

type LegalPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  updatedLabel: string;
  body: ReactNode;
};

type LegalPageProps = {
  content: Record<Locale, LegalPageContent>;
};

export function LegalPage({ content }: LegalPageProps) {
  const { locale, toggleLocale } = useLocale();
  const current = content[locale];

  return (
    <main
      id="main-content"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="min-h-screen px-4 py-8 text-center sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="glass-card rounded-[28px] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/" className="display-font text-xl font-semibold">
                {APP_NAME}
              </Link>
              <span className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                {APP_TAGLINE}
              </span>
              <button
                type="button"
                onClick={toggleLocale}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium transition hover:border-[var(--accent)]"
              >
                <Globe className="h-4 w-4" />
                {locale === "ar" ? "English" : "العربية"}
              </button>
            </div>

            <header className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                {current.eyebrow}
              </p>
              <h1 className="display-font mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                {current.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
                {current.description}
              </p>
              <p className="mt-4 text-sm text-[var(--muted)]">{current.updatedLabel}</p>
            </header>

            <article className="prose prose-slate mx-auto max-w-none text-center text-[var(--foreground)] prose-headings:text-[var(--foreground)] prose-p:text-[var(--muted)] prose-li:text-[var(--muted)] prose-strong:text-[var(--foreground)] prose-ul:list-inside prose-ol:list-inside">
              {current.body}
            </article>

            <SiteFooter locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
