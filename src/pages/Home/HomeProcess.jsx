import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import processVisual from "../../assets/images/home/home-process-visual.png";

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

function HomeProcess() {
  const { t } = useTranslation("home");

  const title = t("process.title", { returnObjects: true });
  const steps = t("process.steps", { returnObjects: true });

  const titleLines = Array.isArray(title) ? title : [title];
  const processSteps = Array.isArray(steps) ? steps : [];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-24 sm:px-8 sm:py-28 lg:px-9 lg:py-36">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#333] sm:text-[11px]">
          02&nbsp;&nbsp;/&nbsp;&nbsp;{t("process.eyebrow")}
        </p>

        <h2 className="font-['Oswald'] text-[clamp(48px,12vw,68px)] font-medium leading-[0.95] tracking-[-0.03em] text-[#111] sm:text-[clamp(64px,7vw,92px)] lg:text-[clamp(76px,5.7vw,108px)]">
          {titleLines.map((line, index) => (
            <span key={`${line}-${index}`} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mt-5 max-w-[570px] text-[14px] leading-[1.7] text-[#777] sm:mt-6 sm:text-[15px]">
          {t("process.description")}
        </p>

        <div className="mt-12 grid items-center gap-14 sm:mt-16 lg:mt-10 lg:grid-cols-[52%_48%] lg:gap-6">
          <div className="relative flex min-h-[380px] items-center justify-center sm:min-h-[540px] lg:min-h-[650px] lg:justify-start">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />

            <img
              src={processVisual}
              alt={t("process.imageAlt")}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-[115%] max-w-none object-contain drop-shadow-[0_35px_45px_rgba(17,30,50,0.13)] sm:w-[105%] lg:w-[112%] lg:-translate-x-[5%]"
            />
          </div>

          <div className="lg:pl-8">
            <div className="border-t border-black/15">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[64px_1fr] gap-4 border-b border-black/15 py-6 sm:grid-cols-[90px_1fr] sm:gap-7 sm:py-7 lg:grid-cols-[105px_1fr] lg:py-8"
                >
                  <span className="font-['Oswald'] text-[48px] font-medium leading-none tracking-[-0.04em] text-[#0057FF] sm:text-[58px] lg:text-[64px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pt-1">
                    <h3 className="flex items-center gap-3 font-sans text-[17px] font-semibold text-[#171717] sm:text-[19px]">
                      <span className="h-px w-4 shrink-0 bg-[#171717]" />
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[340px] text-[13px] leading-[1.6] text-[#777] sm:text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/process"
              className="group mt-9 inline-flex items-center gap-5 text-[14px] font-medium text-[#0057FF] transition-colors duration-300 hover:text-[#0048D8]"
            >
              {t("process.more")}
              <LongArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProcess;