import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-b border-seam">
      <div className="shell grid-about py-[clamp(56px,6vw,92px)]">
        <Reveal>
          <p className="mb-3.5 text-[12.5px] tracking-[0.1em] text-brass uppercase">
            {site.about.kicker}
          </p>
          <h2 className="mb-6 font-display text-[clamp(27px,2.8vw,37px)] leading-[1.15] font-normal tracking-[-0.015em] text-text-display">
            {site.about.heading}
          </h2>
          <p className="mb-5 max-w-[50ch] text-[16.5px] leading-[30px] text-text-body">
            {site.about.body[0]}
          </p>
          <p className="m-0 max-w-[50ch] text-[15.5px] leading-[29px] text-text-body-2">
            {site.about.body[1]}
          </p>
        </Reveal>
        <Reveal index={1} className="grid gap-[26px]">
          <figure className="portrait-frame">
            <Image
              src={site.about.portrait.src}
              alt={site.about.portrait.alt}
              width={site.about.portrait.width}
              height={site.about.portrait.height}
            />
          </figure>
          <div>
            <p className="mb-3 text-[11.5px] tracking-[0.11em] text-text-faint uppercase">
              {site.about.credentialsLabel}
            </p>
            <div className="text-[14.5px] leading-[25px]">
              {site.about.credentials.map((item) => (
                <div
                  key={item.title}
                  className="flex items-baseline justify-between gap-3 border-t border-border py-[11px] text-text-body"
                >
                  <span>
                    <strong className="font-semibold text-text-display">{item.title}</strong>{" "}
                    <span className="text-text-faint">{item.detail}</span>
                  </span>
                  {item.link && item.linkLabel ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[12.5px] font-semibold whitespace-nowrap"
                    >
                      {item.linkLabel}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
