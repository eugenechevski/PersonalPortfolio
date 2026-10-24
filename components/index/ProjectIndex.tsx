import { PROJECTS } from "@/lib/constants";

export function ProjectIndex() {
  return (
    <section id="work" aria-label="Selected projects" className="px-[5%] pb-10 [perspective:1500px] md:px-[3.5%] md:pb-20">
      {PROJECTS.map((project, index) => (
        <details key={project.id} id={project.id} name="project-index" open={index === 0} className="group border-t border-ink last:border-b">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[25px] marker:content-none max-sm:gap-3.5 max-sm:py-[22px] [&::-webkit-details-marker]:hidden">
            <h2 className="flex-1 font-display text-[clamp(30px,5.2vw,70px)] leading-[1.15] font-bold tracking-[-0.035em] max-sm:text-[31px]">{project.title}</h2>
            <span className="text-[11px] tracking-[0.08em] max-sm:hidden">{project.tag}</span>
            <span aria-hidden="true" className="block text-[40px] leading-none font-normal transition-transform duration-300 group-open:rotate-45 max-sm:text-[30px]">+</span>
          </summary>
          <div className="fold-content grid grid-cols-2 gap-[30px] pt-3 pb-10 max-sm:grid-cols-1 max-sm:gap-[15px] max-sm:pb-[30px]">
            <p className="pt-[5px] text-[13px] tabular-nums max-sm:text-[11px]">{project.year}</p>
            <div>
              <p className="max-w-[560px] text-[16px] leading-[1.6] text-muted max-sm:text-[15px]">{project.description}</p>
              <p className="mt-[26px] text-[12px] leading-relaxed tracking-[0.015em] max-sm:text-[11px]">{project.tech.join(" / ")}</p>
            </div>
          </div>
        </details>
      ))}
    </section>
  );
}
