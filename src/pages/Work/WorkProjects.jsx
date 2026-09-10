import { useTranslation } from "react-i18next";

import exfragDesktop from "../../assets/images/work/project-exfrag-desktop.png";
import exfragMobile from "../../assets/images/work/project-exfrag-mobile.png";
import mfcDesktop from "../../assets/images/work/project-mfc-desktop.png";
import mfcMobile from "../../assets/images/work/project-mfc-mobile.png";
import voltampDesktop from "../../assets/images/work/project-voltamp-desktop.png";
import voltampMobile from "../../assets/images/work/project-voltamp-mobile.png";

const projects = [
  {
    id: "exfrag",
    number: "01",
    year: "2026",
    url: "https://exfrag.eu",
    desktop: exfragDesktop,
    mobile: exfragMobile,
    background: "#E8E8E5",
    accent: "rgba(22, 22, 22, 0.08)",
    phoneSide: "right",
    stack: ["React", "Tailwind", "E-commerce"],
  },
  {
    id: "mfc",
    number: "02",
    year: "2026",
    url: "https://finswimming.ee",
    desktop: mfcDesktop,
    mobile: mfcMobile,
    background: "#EAF2FB",
    accent: "rgba(0, 87, 255, 0.1)",
    phoneSide: "left",
    stack: ["React", "Tailwind", "Responsive UI"],
  },
  {
    id: "voltamp",
    number: "03",
    year: "2025",
    url: "https://voltamp.ee",
    desktop: voltampDesktop,
    mobile: voltampMobile,
    background: "#E9ECE5",
    accent: "rgba(63, 92, 55, 0.1)",
    phoneSide: "right",
    stack: ["React", "Tailwind", "Corporate"],
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 15 15 5M7 5h8v8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.02-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.1c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ProjectVisual({ project, name, action, imageAlt }) {
  const phoneOnLeft = project.phoneSide === "left";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${action}: ${name}`}
      className="group relative block aspect-[0.94] overflow-hidden border border-black/[0.08] sm:aspect-[1.42] lg:aspect-[1.9]"
      style={{ backgroundColor: project.background }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `linear-gradient(to right, ${project.accent} 1px, transparent 1px), linear-gradient(to bottom, ${project.accent} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom right, transparent 4%, black 42%, transparent 96%)",
          WebkitMaskImage:
            "linear-gradient(to bottom right, transparent 4%, black 42%, transparent 96%)",
        }}
      />

      <div className="pointer-events-none absolute left-[8%] top-[11%] h-2 w-2 bg-[#0057FF] opacity-80 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-125" />

      <div className="pointer-events-none absolute right-[8%] top-[11%] hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35 sm:flex">
        <span className="h-px w-8 bg-black/15" />
        {project.number}
      </div>

      <img
        src={project.desktop}
        alt={imageAlt}
        width="3200"
        height="2000"
        loading={project.number === "01" ? "eager" : "lazy"}
        decoding="async"
        className={`pointer-events-none absolute top-1/2 w-[128%] max-w-none -translate-y-1/2 object-contain drop-shadow-[0_28px_38px_rgba(18,28,45,0.16)] transition-transform duration-700 ease-out sm:w-[98%] lg:w-[88%] ${
          phoneOnLeft
            ? "left-[58%] -translate-x-1/2 group-hover:translate-x-[-49%] group-hover:scale-[1.012]"
            : "left-[43%] -translate-x-1/2 group-hover:translate-x-[-51%] group-hover:scale-[1.012]"
        }`}
      />

      <img
        src={project.mobile}
        alt=""
        width="1800"
        height="3000"
        loading={project.number === "01" ? "eager" : "lazy"}
        decoding="async"
        className={`pointer-events-none absolute bottom-[3%] z-10 w-[42%] object-contain drop-shadow-[0_25px_32px_rgba(18,28,45,0.22)] transition-transform duration-700 ease-out sm:bottom-[2%] sm:w-[28%] lg:w-[22%] ${
          phoneOnLeft
            ? "left-[1%] sm:left-[3.5%] group-hover:-translate-y-2 group-hover:-rotate-[0.8deg]"
            : "right-[1%] sm:right-[3.5%] group-hover:-translate-y-2 group-hover:rotate-[0.8deg]"
        }`}
      />

      <span className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/85 text-[#111] shadow-[0_8px_30px_rgba(17,17,17,0.08)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-[#0057FF] group-hover:bg-[#0057FF] group-hover:text-white sm:right-6 sm:top-6 sm:h-14 sm:w-14">
        <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>

      <span className="absolute bottom-5 left-5 z-20 hidden items-center gap-3 border border-black/10 bg-white/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#171717] backdrop-blur-md transition-colors duration-300 group-hover:border-[#0057FF]/30 sm:flex">
        {action}
        <ArrowIcon className="h-4 w-4 text-[#0057FF]" />
      </span>
    </a>
  );
}

function WorkProjects() {
  const { t } = useTranslation("work");

  return (
    <section className="bg-[#F6F5F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-9 lg:py-36">
      <div className="mx-auto w-full max-w-[1460px]">
        <div className="space-y-24 sm:space-y-32 lg:space-y-44">
          {projects.map((project) => {
            const name = t(`projects.${project.id}.name`);
            const category = t(`projects.${project.id}.category`);
            const description = t(
              `projects.${project.id}.description`,
            );
            const openProject = t("openProject");

            return (
              <article key={project.id}>
                <div className="mb-5 grid grid-cols-[1fr_auto] items-end gap-6 border-t border-black/20 pt-4 sm:mb-7 sm:pt-5">
                  <div className="flex min-w-0 items-baseline gap-3 sm:gap-5">
                    <span className="shrink-0 text-[12px] font-semibold tracking-[0.12em] text-[#0057FF] sm:text-[14px]">
                      {project.number}
                    </span>

                    <h2 className="truncate font-['Oswald'] text-[30px] font-medium uppercase leading-none tracking-[-0.025em] text-[#111] sm:text-[40px] lg:text-[48px]">
                      {name}
                    </h2>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#777] sm:text-[12px]">
                      {category}
                    </p>
                    <p className="mt-1 text-[11px] text-[#999] sm:text-[12px]">
                      {project.year}
                    </p>
                  </div>
                </div>

                <ProjectVisual
                  project={project}
                  name={name}
                  action={openProject}
                  imageAlt={t(`projects.${project.id}.imageAlt`)}
                />

                <div className="mt-5 grid gap-5 sm:mt-7 md:grid-cols-[minmax(0,620px)_1fr] md:items-start md:justify-between md:gap-12">
                  <p className="text-[15px] leading-[1.65] text-[#666] sm:text-[16px]">
                    {description}
                  </p>

                  <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#777] sm:text-[12px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <a
          href="https://github.com/ErnestMakarov"
          target="_blank"
          rel="noreferrer"
          className="group relative mt-24 block overflow-hidden bg-[#071426] px-6 py-9 text-white sm:mt-32 sm:px-10 sm:py-12 lg:mt-44 lg:px-14 lg:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full border border-[#1970FF]/20 transition-transform duration-700 group-hover:scale-110" />
          <div className="pointer-events-none absolute -right-36 -top-16 h-[420px] w-[420px] rounded-full border border-[#1970FF]/15 transition-transform duration-700 group-hover:scale-95" />
          <div className="pointer-events-none absolute right-[18%] top-1/2 h-2 w-2 -translate-y-1/2 bg-[#1570FF] shadow-[0_0_20px_rgba(21,112,255,0.8)] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <GitHubIcon className="h-5 w-5" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:text-[11px]">
                  {t("github.eyebrow")}
                </span>
              </div>

              <h2 className="max-w-[850px] font-['Oswald'] text-[clamp(46px,11vw,72px)] font-medium uppercase leading-[0.98] tracking-[-0.035em] sm:text-[clamp(62px,8vw,96px)] lg:text-[clamp(72px,6.6vw,108px)]">
                <span className="block">
                  {t("github.titleStart")}
                </span>
                <span className="block text-[#126BFF]">
                  {t("github.titleAccent")}
                </span>
              </h2>

              <p className="mt-6 max-w-[560px] text-[14px] leading-[1.7] text-white/55 sm:text-[16px]">
                {t("github.description")}
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-5 border border-white/25 px-6 py-4 text-[13px] font-medium text-white transition-colors duration-300 group-hover:border-[#126BFF] group-hover:bg-[#126BFF] sm:px-7 sm:py-5 sm:text-[14px]">
              {t("github.button")}
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default WorkProjects;
