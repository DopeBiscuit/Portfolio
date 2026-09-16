import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Stack() {
  return (
    <section className="border-b border-seam bg-surface-1">
      <div className="shell py-[clamp(48px,5vw,76px)]">
        <Reveal>
          <p className="mb-[30px] text-[12.5px] tracking-[0.1em] text-brass uppercase">
            {site.stack.kicker}
          </p>
        </Reveal>
        <div className="grid-4">
          {site.stack.groups.map((group, index) => (
            <Reveal key={group.title} index={index}>
              <h3 className="mb-3.5 text-[13px] font-semibold tracking-[0.06em] text-[#eceae5] uppercase">
                {group.title}
              </h3>
              <p className="m-0 text-[14.5px] leading-7 text-text-muted">
                {group.items.map((item, itemIndex) => (
                  <span key={item}>
                    {item}
                    {itemIndex < group.items.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
