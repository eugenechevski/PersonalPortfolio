export function IndexHeader() {
  return (
    <header id="top" className="mx-[5%] flex items-center justify-between gap-5 border-b border-rule py-6 md:mx-[3.5%]">
      <a href="#top" className="shrink-0 no-underline hover:no-underline" aria-label="Eugene Chevski — back to top">
        <span className="block font-body text-[19px] font-semibold leading-relaxed tracking-[-0.025em] max-sm:text-base">Eugene Chevski</span>
        <span className="block text-[12px] leading-relaxed text-muted max-sm:text-[11px]">Software engineer · Miami</span>
      </a>
      <nav aria-label="Main navigation" className="flex items-center gap-5 text-[14px] max-sm:text-[12px] md:gap-9">
        <a href="#work" className="hidden min-h-10 items-center sm:inline-flex">Work</a>
        <a href="#about" className="inline-flex min-h-10 items-center">About</a>
        <a href="#contact" className="inline-flex min-h-10 items-center underline decoration-1 underline-offset-8">Let’s talk <span aria-hidden="true" className="ml-1">↗</span></a>
      </nav>
    </header>
  );
}
