"use client";

import { useEffect, useState } from "react";
import { MarkedText } from "@/components/marked-text";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function ReclaimBand() {
  const [rewritten, setRewritten] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRewritten(true);
      return;
    }
    const timer = window.setTimeout(() => setRewritten(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="border-b border-seam bg-surface-1">
      <div className="shell grid-reclaim py-[clamp(40px,4.6vw,64px)]">
        <Reveal>
          <p className="mb-4 text-[12.5px] tracking-[0.1em] text-text-muted uppercase">
            {site.reclaim.kicker}
          </p>
          <span className="inline-block h-[clamp(52px,5.4vw,74px)] overflow-hidden">
            <span
              className="block transition-transform duration-[860ms] ease-[cubic-bezier(0.2,0.85,0.15,1)]"
              style={{ transform: rewritten ? "translateY(-50%)" : "translateY(0)" }}
            >
              <span className="block h-[clamp(52px,5.4vw,74px)] font-display text-[clamp(38px,4.4vw,60px)] leading-[clamp(52px,5.4vw,74px)] tracking-[-0.02em] whitespace-nowrap text-text-display">
                {site.reclaim.before}
              </span>
              <span className="block h-[clamp(52px,5.4vw,74px)] font-display text-[clamp(38px,4.4vw,60px)] leading-[clamp(52px,5.4vw,74px)] tracking-[-0.02em] whitespace-nowrap text-brass italic">
                {site.reclaim.after}
              </span>
            </span>
          </span>
        </Reveal>
        <Reveal index={1}>
          <p className="m-0 max-w-[48ch] text-base leading-[29px] text-text-body-2">
            <MarkedText parts={site.reclaim.body} />
          </p>
          <p className="mt-3.5 text-[13px] leading-[22px] text-text-faint">
            {site.reclaim.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
