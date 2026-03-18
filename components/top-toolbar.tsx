"use client";

import { useId, useState } from "react";
import { Globe, LogIn, LogOut, MoonStar, ShieldCheck, SunMedium, UserRound } from "lucide-react";
import { APP_NAME } from "@/constants/branding";
import { copy } from "@/constants/i18n";
import type { AuthSession, Locale, Theme } from "@/utils/types";

type TopToolbarProps = {
  theme: Theme;
  locale: Locale;
  session: AuthSession;
  isAuthenticated: boolean;
  onThemeToggle: () => void;
  onLocaleToggle: () => void;
  onSignIn: (name: string, email: string) => void;
  onContinueAsGuest: () => void;
  onSignOut: () => void;
};

export function TopToolbar({
  theme,
  locale,
  session,
  isAuthenticated,
  onThemeToggle,
  onLocaleToggle,
  onSignIn,
  onContinueAsGuest,
  onSignOut,
}: TopToolbarProps) {
  const t = copy[locale];
  const nameId = useId();
  const emailId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={`sticky top-4 z-40 flex ${locale === "ar" ? "justify-start" : "justify-end"}`}>
      <div className="glass-card animate-fade-up flex items-center gap-2 rounded-full px-2 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
        <button
          type="button"
          onClick={onThemeToggle}
          className="premium-button-secondary inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium hover:border-[var(--accent)]"
        >
          {theme === "light" ? (
            <>
              <MoonStar className="h-4 w-4" />
              {t.toolbar.themeDark}
            </>
          ) : (
            <>
              <SunMedium className="h-4 w-4" />
              {t.toolbar.themeLight}
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onLocaleToggle}
          className="premium-button-secondary inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium hover:border-[var(--accent)]"
        >
          <Globe className="h-4 w-4" />
          {t.toolbar.language}
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="premium-button-primary inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
          >
            <ShieldCheck className="h-4 w-4" />
            {isAuthenticated ? session.name : t.toolbar.workspace}
          </button>

          {isOpen ? (
            <div
              className={`glass-card absolute mt-3 w-[320px] rounded-[24px] p-4 ${
                locale === "ar" ? "left-0" : "right-0"
              } animate-scale-in`}
            >
              <div className="mb-4 border-b border-[var(--card-border)] pb-4">
                <p className="display-font text-lg font-semibold">{APP_NAME}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{t.toolbar.description}</p>
              </div>

              {isAuthenticated ? (
                <div className="space-y-4">
                  <div className="rounded-[20px] border border-[var(--card-border)] bg-[var(--surface)] p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
                        <UserRound className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{session.name}</p>
                        <p className="text-sm text-[var(--muted)]">{session.email || t.toolbar.profile}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSignOut();
                      setIsOpen(false);
                    }}
                    className="premium-button-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-3 text-sm font-medium hover:border-[var(--accent)]"
                  >
                    <LogOut className="h-4 w-4" />
                    {t.toolbar.signOut}
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!name.trim()) {
                      return;
                    }
                    onSignIn(name, email);
                    setName("");
                    setEmail("");
                    setIsOpen(false);
                  }}
                >
                  <div>
                    <label htmlFor={nameId} className="mb-2 block text-sm font-medium">
                      {t.toolbar.name}
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder={t.toolbar.placeholderName}
                      required
                      className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                    />
                  </div>

                  <div>
                    <label htmlFor={emailId} className="mb-2 block text-sm font-medium">
                      {t.toolbar.email}
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={t.toolbar.placeholderEmail}
                      className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                    />
                  </div>

                  <div className="grid gap-3">
                    <button
                      type="submit"
                      className="premium-button-primary inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                    >
                      <LogIn className="h-4 w-4" />
                      {t.toolbar.save}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onContinueAsGuest();
                        setIsOpen(false);
                      }}
                      className="premium-button-secondary inline-flex items-center justify-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold hover:border-[var(--accent)]"
                    >
                      {t.toolbar.continueGuest}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
