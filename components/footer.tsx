import { Mark } from "@/components/mark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="shell flex flex-wrap items-center justify-between gap-[18px] py-[34px] text-[13px] leading-6 text-text-faint">
        <span>{site.footer.left}</span>
        <Mark />
      </div>
    </footer>
  );
}
