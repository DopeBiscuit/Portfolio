import { site } from "@/lib/site";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-sans text-[13px] font-semibold tracking-[0.14em] text-brass ${className}`.trim()}
    >
      {site.nav.mark}
    </span>
  );
}
