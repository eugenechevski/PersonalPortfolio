export function IndexHero() {
  return (
    <section aria-labelledby="intro-title" className="relative px-[5%] pt-[45px] pb-[45px] md:px-[3.5%] md:pt-[75px] md:pb-[70px]">
      <h1 id="intro-title" className="max-w-[1200px] font-display text-[clamp(36px,6.8vw,96px)] leading-[1.1] font-bold tracking-[-0.035em] text-balance max-sm:text-[clamp(36px,8vw,55px)]">
        Less artificial.<br />
        <span className="font-normal">More intelligence.</span>
      </h1>
      <div className="mt-[25px] flex items-end gap-[7%] max-sm:block md:mt-10">
        <p className="max-w-[470px] text-[16px] leading-[1.6] text-muted max-sm:text-[15px]">
          Full-stack engineer shipping AI-powered products — from wearable vision systems and voice agents to luxury automotive data platforms.
        </p>
        <a href="#work" className="inline-flex min-h-11 shrink-0 items-center gap-9 border-b border-current py-1.5 text-[14px] max-sm:mt-5">Open the index <span aria-hidden="true">↓</span></a>
      </div>
      <p className="absolute right-[4%] bottom-[75px] -rotate-6 text-right text-[12px] leading-snug max-[1050px]:hidden">A selection of things<br />built to work.</p>
    </section>
  );
}
