"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Mark } from "@/components/mark";
import { site } from "@/lib/site";

const sectionIds = ["work", "patterns", "method", "about", "contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const root = panelRef.current;
    const focusables = root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusables.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    root.addEventListener("keydown", onKey);
    return () => root.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-30 border-b border-[#262c32] bg-[var(--nav-bg)] backdrop-blur-[10px]">
      <div className="shell flex items-center gap-7 py-4">
        <a
          href="#top"
          className="mr-auto inline-flex items-center gap-3 text-[15px] font-semibold tracking-[-0.01em] text-[#eceae5] hover:text-[#eceae5]"
        >
          <Mark />
          {site.meta.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm ${
                active === link.href.slice(1)
                  ? "text-text-display"
                  : "text-text-muted hover:text-text-display"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href={site.meta.resume} className="btn-nav">
            {site.nav.resumeLabel}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-text-display md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? site.nav.menuClose : site.nav.menuOpen}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 6h12M4 10h12M4 14h12" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          className="fixed inset-0 top-[65px] z-30 bg-[rgba(16,19,22,0.96)] px-[var(--gutter)] py-8 md:hidden"
        >
          <div className="flex flex-col gap-6">
            <button ref={closeRef} type="button" className="sr-only" onClick={close}>
              {site.nav.menuClose}
            </button>
            {site.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className={`font-display text-[32px] ${
                  active === link.href.slice(1) ? "text-text-display" : "text-text-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={close} className="font-display text-[32px] text-text-muted">
              Contact
            </a>
            <a href={site.meta.resume} className="btn-nav w-fit" onClick={close}>
              {site.nav.resumeLabel}
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
