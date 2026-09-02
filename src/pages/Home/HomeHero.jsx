import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import heroVisual from "../../assets/images/home/home-hero-visual.png";

function HomeHero() {
  const { t } = useTranslation("home");

  const title = t("hero.title", { returnObjects: true });
  const services = t("hero.services", { returnObjects: true });

  const titleLines = Array.isArray(title) ? title : [title];
  const serviceItems = Array.isArray(services) ? services : [services];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(255,255,255,0.96)_0%,rgba(246,245,242,0)_52%)]" />

      <div className="relative mx-auto grid w-full max-w-[1600px] px-5 pb-16 pt-4 sm:px-8 sm:pt-8 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[38%_62%] lg:items-center lg:px-9 lg:py-8">
        <div className="relative z-20 order-2 flex flex-col items-start pt-5 sm:pt-8 lg:order-1 lg:py-16 lg:pr-6">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.11em] text-[#555] sm:text-[11px] lg:mb-5 lg:text-[12px]">
            {t("hero.eyebrow")}
          </p>

          <h1 className="font-['Oswald'] text-[clamp(44px,13vw,58px)] font-medium uppercase leading-[1.04] tracking-[-0.02em] text-[#111] lg:hidden">
            {titleLines.join(" ")}
            <span className="text-[#0057FF]">.</span>
          </h1>

          <h1 className="hidden font-['Oswald'] text-[clamp(60px,4.5vw,84px)] font-medium uppercase leading-[1.045] tracking-[-0.025em] text-[#111] lg:block">
            {titleLines.map((line, index) => (
              <span
                key={`${line}-${index}`}
                className="block whitespace-nowrap"
              >
                {line}
                {index === titleLines.length - 1 && (
                  <span className="text-[#0057FF]">.</span>
                )}
              </span>
            ))}
          </h1>

          <div className="pt-5 lg:pt-6">
            <p className="max-w-[390px] text-[15px] leading-[1.6] text-[#626262] sm:text-[16px]">
              {t("hero.description")}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 lg:mt-8">
            {serviceItems.map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="flex items-center gap-3"
              >
                <span className="text-[14px] font-medium text-[#222]">
                  {service}
                </span>

                {index < serviceItems.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#0057FF]" />
                )}
              </div>
            ))}
          </div>

          <Link
            to="/work"
            className="group mt-10 inline-flex items-center gap-5 text-[14px] font-medium text-[#0057FF] transition-colors duration-300 hover:text-[#0048D8] lg:mt-12"
          >
            {t("hero.projects")}

            <svg
              viewBox="0 0 32 12"
              fill="none"
              aria-hidden="true"
              className="h-3 w-8 overflow-visible transition-transform duration-300 group-hover:translate-x-1.5"
            >
              <path
                d="M1 6h29M25 1l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="relative order-1 flex h-[360px] items-center justify-center sm:h-[470px] lg:order-2 lg:h-auto lg:min-h-[680px]">
          <img
            src={heroVisual}
            alt={t("hero.imageAlt")}
            fetchPriority="high"
            decoding="async"
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[118%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_30px_45px_rgba(17,30,50,0.14)] sm:w-[112%] lg:left-[54%] lg:w-[126%] lg:-translate-x-[48%]"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;