"use client";

import { useActionState } from "react";
import { Reveal } from "@/components/reveal";
import { sendMessage, type ContactState } from "@/app/actions/send-message";
import { site } from "@/lib/site";

const initial: ContactState = { status: "idle" };

export function Contact() {
  const [state, formAction, pending] = useActionState(sendMessage, initial);
  const form = site.contact.form;

  return (
    <section id="contact" className="border-b border-seam bg-surface-warm">
      <div className="shell grid-contact py-[clamp(56px,6vw,88px)]">
        <div>
          <Reveal>
            <p className="mb-3.5 text-[12.5px] tracking-[0.1em] text-brass uppercase">
              {site.contact.kicker}
            </p>
            <h2 className="max-w-[16ch] font-display text-[clamp(32px,4vw,52px)] leading-[1.08] font-normal tracking-[-0.02em] text-text-display">
              {site.contact.headline.lead}{" "}
              <em className="text-brass italic">{site.contact.headline.emphasis}</em>
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 max-w-[40ch] text-[16.5px] leading-[29px] text-text-on-warm">
              {site.contact.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {site.contact.actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal index={2} className="contact-panel">
          {state.status === "success" ? (
            <p className="text-[15.5px] leading-7 text-text-display">{form.success}</p>
          ) : (
            <form action={formAction} className="grid gap-4">
              <label className="honeypot">
                {form.honeypot}
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
              <div className="grid-form-pair">
                <div>
                  <label htmlFor="name" className="field-label">
                    {form.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    autoComplete="name"
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">
                    {form.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="field-input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="field-label">
                  {form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  className="field-input"
                />
              </div>
              {state.status === "error" ? (
                <p className="text-[13px] leading-[22px] text-text-on-warm">{form.error}</p>
              ) : null}
              <button type="submit" className="btn-primary w-fit" disabled={pending}>
                {pending ? form.sending : form.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
