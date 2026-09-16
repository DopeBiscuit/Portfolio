import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Patterns() {
  return (
    <section id="patterns" className="border-b border-seam bg-surface-1">
      <div className="shell py-[clamp(56px,6vw,92px)]">
        <Reveal>
          <p className="mb-3.5 text-[12.5px] tracking-[0.1em] text-brass uppercase">
            {site.patterns.kicker}
          </p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mb-4 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-normal tracking-[-0.015em] text-text-display">
            {site.patterns.heading}
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mb-[42px] max-w-[54ch] text-base leading-[29px] text-text-body-2">
            {site.patterns.intro}
          </p>
        </Reveal>
        <div className="grid-2">
          {site.patterns.items.map((item, index) => (
            <Reveal key={item.title} index={index} className="card-pattern">
              <h3 className="mb-3.5 text-lg leading-[27px] font-semibold text-text-display">
                {item.title}
              </h3>
              <p className="mb-3 text-[14.5px] leading-[26px] text-text-muted-2">
                {item.before}
              </p>
              <p className="m-0 text-[14.5px] leading-[26px] text-text-body">{item.after}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
