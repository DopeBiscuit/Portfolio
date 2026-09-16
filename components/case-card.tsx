import { ExternalLinkIcon } from "@/components/external-link-icon";
import { Reveal } from "@/components/reveal";
import { RuneImages } from "@/components/rune-images";
import type { CaseStudy } from "@/lib/site";

export function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const padded = item.images.length > 0;

  return (
    <Reveal index={index}>
    <article className={padded ? "card-case" : "card-case p-[clamp(24px,3vw,38px)]"}>
      <div className={padded ? "px-[clamp(24px,3vw,38px)] pt-[clamp(24px,3vw,38px)]" : undefined}>
        <div className="grid-case">
          <div>
            <div className="mb-3.5 flex items-center gap-3">
              <span className="font-display text-[15px] text-brass">{item.num}</span>
              <span className="h-px flex-1 bg-border-subtle" />
            </div>
            <h3 className="mb-3 font-display text-[30px] leading-[1.15] font-normal tracking-[-0.015em] text-text-display">
              {item.title}
            </h3>
            <p className="mb-[18px] max-w-[44ch] text-[15.5px] leading-7 text-text-body-2">
              {item.lede}
            </p>
            <div className="mb-[18px] flex flex-wrap gap-[7px]">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[3px] border border-border-subtle px-[9px] py-1 text-xs text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            {item.link ? (
              <a
                href={item.link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[7px] text-sm font-semibold"
              >
                {item.link.label}
                <ExternalLinkIcon />
              </a>
            ) : null}
            {item.note ? (
              <p className="m-0 text-[13px] leading-[22px] text-text-faint">{item.note}</p>
            ) : null}
          </div>
          <div className="grid content-start gap-[18px]">
            <div>
              <p className="mb-[7px] text-[11.5px] tracking-[0.11em] text-text-faint uppercase">
                Friction
              </p>
              <p className="m-0 text-[14.5px] leading-[26px] text-text-body">{item.friction}</p>
            </div>
            <div>
              <p className="mb-[7px] text-[11.5px] tracking-[0.11em] text-text-faint uppercase">
                Fix
              </p>
              <p className="m-0 text-[14.5px] leading-[26px] text-text-body">{item.fix}</p>
            </div>
            <div className="border-l-2 border-brass pl-3.5">
              <p className="mb-[7px] text-[11.5px] tracking-[0.11em] text-brass uppercase">
                Result
              </p>
              <p className="m-0 text-[14.5px] leading-[26px] text-[#eceae5]">{item.result}</p>
            </div>
          </div>
        </div>
      </div>
      {item.images.length > 0 ? <RuneImages images={item.images} /> : null}
    </article>
    </Reveal>
  );
}
