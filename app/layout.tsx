import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-newsreader",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.meta.title,
  description: site.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: siteUrl,
    siteName: site.meta.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.meta.name,
  jobTitle: site.meta.role,
  description: site.meta.description,
  url: siteUrl,
  email: site.meta.email,
  image: `${siteUrl}${site.about.portrait.src}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  sameAs: [site.meta.github, site.meta.linkedin, site.meta.fiverr, site.meta.upwork],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ain Shams University",
  },
  hasCredential: site.about.credentials
    .filter((item) => item.link)
    .map((item) => ({
      "@type": "EducationalOccupationalCredential",
      name: item.title,
      url: item.link,
    })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${archivo.variable}`}>
      <body>
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
