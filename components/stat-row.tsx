import { ExternalLinkIcon } from "@/components/external-link-icon";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function StatRow() {
  return (
    <section className="border-b border-seam">
      <div className="shell py-[clamp(36px,4vw,56px)]">
        <div className="grid-stats">
          {site.stats.map((stat, index) => (
            <Reveal key={stat.label} index={index}>
              <p className="font-display text-[clamp(34px,3.4vw,46px)] leading-[1.1] text-brass">
                {stat.value}
              </p>
              <p className="mt-2.5 text-[13px] leading-5 tracking-[0.07em] text-text-muted uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal index={1} className="mt-8 flex flex-wrap gap-4 text-[13px] font-semibold">
          {site.proof.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              {item.label}
              <ExternalLinkIcon />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
