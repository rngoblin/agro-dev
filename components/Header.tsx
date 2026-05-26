"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur">
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between gap-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-ink"
          aria-label="Demo B2B landing concept"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-ink text-xs font-semibold uppercase">
            LC
          </span>
          <span className="grid leading-none">
            <span className="text-base font-semibold">Liquid Concept</span>
            <span className="mt-1 text-xs uppercase text-graphite/60">
              portfolio demo
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Главная">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-graphite/72 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent lg:inline-flex"
        >
          Demo form
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav
            className="section-shell grid gap-1 py-4"
            aria-label="Мобильная навигация"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-graphite hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Demo form
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
