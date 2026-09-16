import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Method() {
  return (
    <section id="method" className="border-b border-seam">
      <div className="shell py-[clamp(56px,6vw,92px)]">
        <Reveal>
          <p className="mb-3.5 text-[12.5px] tracking-[0.1em] text-brass uppercase">
            {site.method.kicker}
          </p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mb-11 font-display text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-normal tracking-[-0.015em] text-text-display">
            {site.method.heading}
          </h2>
        </Reveal>
        <div className="grid-4">
          {site.method.steps.map((step, index) => (
            <Reveal key={step.num} index={index}>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-block h-[9px] w-[9px] bg-brass" />
                <span className="font-display text-[15px] text-brass">{step.num}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mb-[9px] text-[19px] leading-[27px] font-semibold text-text-display">
                {step.title}
              </h3>
              <p className="m-0 text-[14.5px] leading-[26px] text-text-body-2">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
