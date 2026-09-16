import raw from "@/content/site.json";

export type LinkItem = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

export type CaseImage = {
  src: string;
  width: number;
  height: number;
  label: string;
  alt: string;
};

export type CaseStudy = {
  num: string;
  title: string;
  lede: string;
  tags: string[];
  friction: string;
  fix: string;
  result: string;
  link: LinkItem | null;
  note: string | null;
  images: CaseImage[];
};

export type Site = typeof raw;

export const site = raw;
export const siteUrl = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
})();
