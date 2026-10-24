import { ALSO_FLUENT, CORE_STACK } from "@/lib/constants";

export function IndexAbout() {
  return (
    <section id="about" aria-labelledby="about-title" className="grid grid-cols-2 gap-x-[8%] border-t border-rule px-[3.5%] py-[85px] max-sm:grid-cols-1 max-sm:gap-[30px] max-sm:px-[5%] max-sm:py-[50px]">
      <h2 id="about-title" className="font-display text-[clamp(32px,4vw,55px)] leading-[1.06] font-bold tracking-[-0.035em] max-sm:text-[38px]">Engineer who ships<br />real products.</h2>
      <div className="space-y-5 text-[16px] leading-[1.6] text-muted max-sm:text-[15px]">
        <p>I’m a full-stack software engineer at duPont REGISTRY Group in Miami, building DR Garage — the company’s data and AI analytics platform. I just completed my CS degree at UCF while working full-time and shipping side projects.</p>
        <p>My focus is AI-powered products: wearable vision systems, voice agents, and intelligent data platforms. I care about building things that work, not just things that demo well.</p>
        <p className="text-[14px] text-ink"><span className="sr-only">Core stack: </span>{CORE_STACK.join(" · ")}</p>
        <details className="border-t border-rule pt-4 text-[14px]">
          <summary className="w-fit cursor-pointer text-ink">Also fluent in</summary>
          <p className="pt-3">{ALSO_FLUENT.join(" · ")}</p>
        </details>
        <p className="text-[13px]">Beyond code: cars &amp; automotive culture, fitness &amp; biohacking, Dota 2, finance &amp; investing, travel, music.</p>
      </div>
    </section>
  );
}
