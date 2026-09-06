import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import exfragImage from "../../assets/images/home/projects/project-exfrag.png";
import mfcImage from "../../assets/images/home/projects/project-mfc.png";
import voltampImage from "../../assets/images/home/projects/project-voltamp.png";

const projects = [
  {
    number: "01",
    name: "EXFRAG",
    categoryKey: "featuredWork.projects.exfrag.category",
    year: "2026",
    image: exfragImage,
    href: "https://exfrag.eu",
  },
  {
    number: "02",
    name: "MFC",
    categoryKey: "featuredWork.projects.mfc.category",
    year: "2026",
    image: mfcImage,
    href: "https://mfc-est.vercel.app",
  },
  {
    number: "03",
    name: "VOLTAMP",
    categoryKey: "featuredWork.projects.voltamp.category",
    year: "2025",
    image: voltampImage,
    href: "https://voltamp.ee",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LongArrowIcon() {
  return (
    <svg
      viewBox="0 0 34 12"
      fill="none"
      aria-hidden="true"
      className="h-3 w-9 overflow-visible transition-transform duration-300 group-hover:translate-x-1.5"
    >
      <path
        d="M1 6h31M27 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeProjects() {
  const { t } = useTranslation("home");

  const title = t("featuredWork.title", { returnObjects: true });
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-0 pt-24 sm:px-8 sm:pt-28 lg:px-9 lg:pt-36">
        <div className="flex items-end justify-between gap-10">
          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#333] sm:text-[11px]">
              01&nbsp;&nbsp;/&nbsp;&nbsp;{t("featuredWork.eyebrow")}
            </p>

            <h2 data-aos="fade-up" className="font-['Oswald'] text-[clamp(48px,12vw,68px)] font-medium leading-[0.95] tracking-[-0.03em] text-[#111] sm:text-[clamp(64px,7vw,92px)] lg:text-[clamp(76px,5.7vw,108px)]">
              {titleLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <Link
            to="/work"
            className="group mb-3 hidden shrink-0 items-center gap-5 text-[14px] font-medium text-[#0057FF] transition-colors duration-300 hover:text-[#0048D8] sm:inline-flex"
          >
            {t("featuredWork.allProjects")}
            <LongArrowIcon />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-4 gap-y-14 sm:mt-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name}: ${t(project.categoryKey)}`}
              className="group block"
            >
              <div data-aos="fade-up" className="relative aspect-[1182/1330] overflow-hidden border border-black/25 bg-[#EAE9E6]">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />

                <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-black/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#0057FF] group-hover:bg-[#0057FF] sm:right-5 sm:top-5 sm:h-12 sm:w-12">
                  <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-5">
                  <h3 className="font-sans text-[15px] font-semibold uppercase tracking-[0.01em] text-[#111] sm:text-[16px]">
                    {project.number} / {project.name}
                  </h3>

                  <ArrowIcon className="h-4 w-4 text-black/0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0057FF]" />
                </div>

                <p className="mt-2 text-[13px] text-[#777] sm:text-[14px]">
                  {t(project.categoryKey)} · {project.year}
                </p>
              </div>
            </a>
          ))}
        </div>

        <Link
          to="/work"
          className="group mt-14 inline-flex items-center gap-5 text-[14px] font-medium text-[#0057FF] sm:hidden"
        >
          {t("featuredWork.allProjects")}
          <LongArrowIcon />
        </Link>

        <div className="mt-16 border-b border-black/15 pb-10 sm:mt-20 sm:pb-12 lg:mt-24">
            <p className="max-w-[650px] text-[14px] leading-[1.7] text-[#777] sm:text-[15px]">
                {t("featuredWork.description")}
            </p>
        </div>
      </div>
    </section>
  );
}

export default HomeProjects;