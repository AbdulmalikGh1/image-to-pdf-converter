import Link from "next/link";
import { APP_NAME } from "@/constants/branding";
import { copy } from "@/constants/i18n";
import type { Locale } from "@/utils/types";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const t = copy[locale];
  const footerLinks = [
    { href: "/about", label: t.footer.about },
    { href: "/privacy-policy", label: t.footer.privacy },
    { href: "/terms-of-service", label: t.footer.terms },
    { href: "/contact", label: t.footer.contact },
  ];

  return (
    <footer className="mt-10 border-t border-[var(--card-border)] pt-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="display-font text-xl font-semibold">{APP_NAME}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {t.footer.desc}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
