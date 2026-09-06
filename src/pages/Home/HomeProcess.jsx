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
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-16 lg:px-9 lg:pb-32 lg:pt-20">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#333] sm:text-[11px]">
          02&nbsp;&nbsp;/&nbsp;&nbsp;{t("process.eyebrow")}
        </p>

        <div className="max-w-[1050px]">
            <h2 className="font-['Oswald'] text-[clamp(46px,12vw,64px)] font-medium leading-[1.08] tracking-[-0.025em] text-[#111] sm:text-[clamp(60px,7vw,82px)] lg:text-[clamp(70px,4.8vw,92px)]">
                {titleLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                    {line}
                </span>
                ))}
            </h2>

            <div className="pt-7 sm:pt-9">
                <p className="max-w-[570px] text-[14px] leading-[1.65] text-[#777] sm:text-[15px]">
                {t("process.description")}
                </p>
            </div>
        </div>

        <div className="mt-10 grid items-center gap-12 sm:mt-12 sm:gap-14 lg:mt-8 lg:grid-cols-[52%_48%] lg:gap-5">
          <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[500px] lg:min-h-[590px] lg:justify-start">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />

            <img
              data-aos="fade-right"
              src={processVisual}
              alt={t("process.imageAlt")}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-[108%] max-w-none object-contain drop-shadow-[0_30px_42px_rgba(17,30,50,0.13)] sm:w-[100%] lg:w-[106%] lg:-translate-x-[4%]"
            />
          </div>

          <div className="lg:pl-7" data-aos="fade-left">
            <div className="border-t border-black/15">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[60px_1fr] gap-4 border-b border-black/15 py-5 sm:grid-cols-[82px_1fr] sm:gap-6 sm:py-6 lg:grid-cols-[96px_1fr] lg:py-7"
                >
                  <span className="font-['Oswald'] text-[46px] font-medium leading-none tracking-[-0.04em] text-[#0057FF] sm:text-[54px] lg:text-[60px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pt-1">
                    <h3 className="flex items-center gap-3 font-sans text-[16px] font-semibold text-[#171717] sm:text-[18px]">
                      <span className="h-px w-4 shrink-0 bg-[#171717]" />
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[340px] text-[13px] leading-[1.55] text-[#777] sm:text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/process"
              className="group mt-8 inline-flex items-center gap-5 text-[14px] font-medium text-[#0057FF] transition-colors duration-300 hover:text-[#0048D8]"
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