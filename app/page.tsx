import { IndexHeader } from "@/components/index/IndexHeader";
import { IndexHero } from "@/components/index/IndexHero";
import { ProjectIndex } from "@/components/index/ProjectIndex";
import { IndexAbout } from "@/components/index/IndexAbout";
import { IndexContact } from "@/components/index/IndexContact";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px]">
      <a href="#main" className="fixed -top-24 left-5 z-50 bg-ink px-4 py-3 text-paper focus:top-3">Skip to content</a>
      <IndexHeader />
      <main id="main">
        <IndexHero />
        <ProjectIndex />
        <IndexAbout />
      </main>
      <IndexContact />
    </div>
  );
}
