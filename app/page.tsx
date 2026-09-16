import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Foundations } from "@/components/foundations";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Nav } from "@/components/nav";
import { Patterns } from "@/components/patterns";
import { ReclaimBand } from "@/components/reclaim-band";
import { Stack } from "@/components/stack";
import { StatRow } from "@/components/stat-row";
import { WorkSection } from "@/components/work-section";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ReclaimBand />
        <StatRow />
        <WorkSection />
        <Patterns />
        <Method />
        <Stack />
        <About />
        <Foundations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
