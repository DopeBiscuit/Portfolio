import { CaseCard } from "@/components/case-card";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function WorkSection() {
  return (
    <section id="work" className="border-b border-seam">
      <div className="shell py-[clamp(56px,6vw,92px)]">
        <Reveal>
          <p className="mb-3.5 text-[12.5px] tracking-[0.1em] text-brass uppercase">
            {site.work.kicker}
          </p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mb-12 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-normal tracking-[-0.015em] text-text-display">
            {site.work.heading}
          </h2>
        </Reveal>
        <div className="grid gap-5">
          {site.work.cases.map((item, index) => (
            <CaseCard key={item.num} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
