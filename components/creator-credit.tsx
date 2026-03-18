"use client";

import { Heart, Github, Linkedin, Twitter } from "lucide-react";

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
          <Twitter className="h-4 w-4" />
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
