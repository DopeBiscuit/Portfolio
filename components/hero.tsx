import { MarkedText } from "@/components/marked-text";
import { PipelineDiagram } from "@/components/pipeline-diagram";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-seam">
      <div className="shell grid-hero pt-[clamp(52px,7vw,104px)] pb-[clamp(48px,6vw,88px)]">
        <div>
          <Reveal className="mb-[26px] inline-flex items-center gap-[9px] rounded-[100px] border border-border-subtle bg-surface-pill px-[13px] py-[7px] text-[12.5px] tracking-[0.04em] text-text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
            {site.hero.pill}
          </Reveal>
          <Reveal index={1}>
            <h1 className="font-display text-[clamp(40px,5.4vw,74px)] leading-[1.04] font-normal tracking-[-0.02em] text-text-display">
              {site.hero.headline.lead}{" "}
              <em className="text-brass italic">{site.hero.headline.emphasis}</em>
            </h1>
          </Reveal>
          <Reveal index={2} className="mt-7 max-w-[52ch]">
            <p className="text-[17px] leading-[30px] text-text-body-2">
              <MarkedText parts={site.hero.lede} />
            </p>
            <p className="mt-3.5 text-[17px] leading-[30px] text-text-body-2">
              <MarkedText parts={site.hero.proof} />
            </p>
          </Reveal>
          <Reveal index={3} className="mt-8 flex flex-wrap gap-3">
            {site.hero.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={cta.variant === "primary" ? "btn-primary" : "btn-outline"}
              >
                {cta.label}
              </a>
            ))}
          </Reveal>
        </div>
        <Reveal index={1}>
          <PipelineDiagram />
        </Reveal>
      </div>
    </section>
  );
}
