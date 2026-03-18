"use client";

import { Heart, Github, Linkedin } from "lucide-react";

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M18.9 2H21l-4.6 5.26L21.8 22H15.9l-4.62-6.04L6 22H3.9l4.93-5.64L2.2 2h6.05l4.17 5.46L18.9 2Zm-1.03 18h1.16L7.63 3.9H6.39l11.48 16.1Z" />
    </svg>
  );
}

export function CreatorCredit() {
  return (
    <section className="glass-card rounded-[28px] px-6 py-6 text-center sm:px-8">
      <p className="inline-flex items-center justify-center gap-2 text-base font-medium">
        <span>Made with</span>
        <Heart className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
        <span>By Abdulmalik</span>
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted)]">
        <a
          href="https://github.com/AbdulmalikGh1"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://x.com/_zwva"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
        >
          <XIcon />
          X
        </a>
        <a
          href="https://www.linkedin.com/in/abdulmalik-g-almutairi-1162822a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRKF6jg3XTSqmJiDBqevD8w%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
