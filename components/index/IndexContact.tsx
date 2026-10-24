export function IndexContact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="grid grid-cols-2 gap-x-[8%] border-t border-rule px-[3.5%] pt-[75px] pb-[50px] max-sm:grid-cols-1 max-sm:gap-[30px] max-sm:px-[5%] max-sm:pt-[50px]">
      <h2 id="contact-title" className="font-display text-[clamp(36px,4.3vw,60px)] leading-[1.06] font-bold tracking-[-0.035em] max-sm:text-[40px]">Let’s build something<br />together.</h2>
      <div>
        <p className="mb-[25px] leading-[1.6] text-muted">Open to full-time roles, collaborations,<br />and interesting problems.</p>
        <div className="flex flex-wrap gap-x-[25px] gap-y-3 text-[14px]">
          <a className="inline-flex min-h-10 items-center underline underline-offset-8" href="mailto:eugenechevski@proton.me">Email Eugene</a>
          <a className="inline-flex min-h-10 items-center underline underline-offset-8" href="https://www.linkedin.com/in/eugenechevski/">LinkedIn</a>
          <a className="inline-flex min-h-10 items-center underline underline-offset-8" href="https://github.com/eugenechevski">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
