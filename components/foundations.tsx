import { ExternalLinkIcon } from "@/components/external-link-icon";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Foundations() {
  return (
    <section className="border-b border-seam">
      <div className="shell py-[clamp(40px,4.4vw,64px)]">
        <Reveal>
          <p className="mb-3 text-[11.5px] tracking-[0.11em] text-text-faint uppercase">
            {site.foundations.kicker}
          </p>
        </Reveal>
        <Reveal index={1}>
          <p className="mb-[26px] max-w-[56ch] text-[15px] leading-[27px] text-text-muted-2">
            {site.foundations.intro}
          </p>
        </Reveal>
        <Reveal
          index={2}
          className="grid-3 text-[14.5px] leading-[26px] text-text-body"
        >
          {site.foundations.items.map((item) => (
            <p key={item.strong} className="m-0">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="text-text-display">
                  <strong className="font-semibold">{item.strong}</strong>
                </a>
              ) : (
                <strong className="font-semibold text-text-display">{item.strong}</strong>
              )}
              {item.rest}
            </p>
          ))}
        </Reveal>
        <Reveal index={3}>
          <a
            href={site.foundations.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-[26px] inline-flex items-center gap-[7px] text-sm font-semibold"
          >
            {site.foundations.link.label}
            <ExternalLinkIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
