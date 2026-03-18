"use client";

import { useId, useState } from "react";
import { LogIn, LogOut, ShieldCheck, UserRound } from "lucide-react";
import type { AuthSession } from "@/utils/types";

type AuthPanelProps = {
  session: AuthSession;
  isAuthenticated: boolean;
  onSignIn: (name: string, email: string) => void;
  onContinueAsGuest: () => void;
  onSignOut: () => void;
};

export function AuthPanel({
  session,
  isAuthenticated,
  onSignIn,
  onContinueAsGuest,
  onSignOut,
}: AuthPanelProps) {
  const nameId = useId();
  const emailId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section
      className="glass-card rounded-[28px] p-6 sm:p-7"
      aria-labelledby="workspace-access-heading"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
            Workspace Access
          </p>
          <h2
            id="workspace-access-heading"
            className="display-font mt-2 text-2xl font-semibold"
          >
            Optional authentication
          </h2>
        </div>
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--surface)] p-3 text-[var(--accent)]">
          <ShieldCheck className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        Use a local workspace profile to personalize conversion history on this device.
        Guest mode keeps the core workflow available with no account required.
      </p>

      {isAuthenticated ? (
        <div className="mt-6 rounded-[24px] border border-[var(--card-border)] bg-[var(--surface)] p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
              <UserRound className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">{session.name}</p>
              <p className="text-sm text-[var(--muted)]">{session.email}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onSignOut}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-2 text-sm font-medium transition hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      ) : (
        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (!name.trim()) {
              return;
            }
            onSignIn(name, email);
            setName("");
            setEmail("");
          }}
        >
          <div>
            <label htmlFor={nameId} className="mb-2 block text-sm font-medium">
              Workspace name
            </label>
            <input
              id={nameId}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Jane Doe"
              required
              className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            />
          </div>

          <div>
            <label htmlFor={emailId} className="mb-2 block text-sm font-medium">
              Email address
            </label>
            <input
              id={emailId}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <LogIn className="h-4 w-4" />
              Save local profile
            </button>
            <button
              type="button"
              onClick={onContinueAsGuest}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Continue as guest
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
