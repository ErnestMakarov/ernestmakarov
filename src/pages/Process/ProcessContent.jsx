import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import processVisual from "../../assets/images/home/home-process-visual.png";

const steps = [
  "discovery",
  "strategy",
  "design",
  "development",
  "testing",
  "launch",
];
const questions = [
  "audience",
  "clients",
  "difference",
  "action",
  "visual",
  "materials",
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 30 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 6h27M23 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepItem({ step, index }) {
  const { t } = useTranslation("process");
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="group grid grid-cols-[64px_1fr] gap-5 border-t border-black/[0.14] py-7 sm:grid-cols-[82px_1fr] sm:gap-7 sm:py-9 lg:grid-cols-[96px_1fr] lg:py-10">
      <span className="font-['Oswald'] text-[48px] font-medium leading-none tracking-[-0.04em] text-[#0768F8] transition-transform duration-500 group-hover:translate-x-1 sm:text-[58px] lg:text-[66px]">
        {number}
      </span>

      <div>
        <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#151515] sm:text-[20px]">
          {t(`steps.${step}.title`)}
        </h3>

        <p className="mt-3 max-w-[470px] text-[14px] leading-[1.65] text-[#6A6A6A] sm:text-[15px]">
          {t(`steps.${step}.description`)}
        </p>

        <div className="mt-4 flex items-start gap-3">
          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 bg-[#0768F8]" />
          <p className="text-[11px] font-medium uppercase leading-[1.55] tracking-[0.12em] text-[#8A8A8A] sm:text-[12px]">
            <span className="text-[#555]">{t("labels.result")}:</span>{" "}
            {t(`steps.${step}.result`)}
          </p>
        </div>
      </div>
    </li>
  );
}

function QuestionItem({ question, index }) {
  const { t } = useTranslation("process");
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="group relative min-h-[180px] border-t border-white/15 py-6 sm:min-h-[200px] sm:py-7">
      <div className="flex items-start justify-between gap-6">
        <span className="text-[11px] font-semibold tracking-[0.16em] text-[#2178FF]">
          {number}
        </span>

        <span className="h-2 w-2 bg-[#146FFF] opacity-70 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />
      </div>

      <p className="mt-8 max-w-[370px] text-[17px] font-medium leading-[1.45] tracking-[-0.015em] text-white/88 sm:text-[19px]">
        {t(`questions.items.${question}`)}
      </p>
    </li>
  );
}

function ProcessContent() {
  const { t } = useTranslation("process");

  return (
    <>
      <section className="overflow-x-clip bg-[#F6F5F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-9 lg:py-36">
        <div className="mx-auto w-full max-w-[1460px] border-t border-black/[0.16] pt-12 sm:pt-16 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-[54%_46%] lg:gap-8 xl:gap-14">
            <div className="relative min-w-0 sm:min-h-[590px] lg:sticky lg:top-24 lg:h-[calc(100svh-120px)] lg:min-h-[650px] lg:max-h-[820px] lg:self-start">
              <div className="relative flex h-[440px] w-full min-w-0 items-center justify-center overflow-x-clip sm:h-[590px] lg:h-full">
                <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(0,87,255,0.09)_0%,rgba(0,87,255,0)_68%)] blur-3xl" />

                <div className="pointer-events-none absolute left-[10%] top-[16%] h-px w-[24%] bg-black/10" />
                <div className="pointer-events-none absolute left-[10%] top-[16%] h-2 w-2 -translate-y-1/2 bg-[#086BFF]" />
                <div className="pointer-events-none absolute bottom-[16%] right-[8%] h-px w-[28%] bg-black/10" />
                <div className="pointer-events-none absolute bottom-[16%] right-[8%] h-2 w-2 translate-y-1/2 bg-[#086BFF]" />

                <img
                  src={processVisual}
                  alt={t("visualAlt")}
                  width="1600"
                  height="1600"
                  loading="eager"
                  decoding="async"
                  className="process-visual-float relative z-10 w-full max-w-[760px] object-contain drop-shadow-[0_35px_45px_rgba(21,34,52,0.14)] sm:w-[96%] lg:w-full"
                />
              </div>
            </div>

            <div className="min-w-0 lg:pl-5 xl:pl-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#555] sm:text-[11px]">
                {t("eyebrow")}
              </p>

              <h2 className="mt-7 font-['Oswald'] text-[clamp(48px,11vw,68px)] font-medium leading-[1.01] tracking-[-0.035em] text-[#111] sm:text-[76px] lg:text-[82px]">
                <span className="block">{t("title.first")}</span>
                <span className="block">{t("title.second")}</span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[15px] leading-[1.65] text-[#666] sm:text-[16px]">
                {t("description")}
              </p>

              <ol className="mt-12 sm:mt-14">
                {steps.map((step, index) => (
                  <StepItem key={step} step={step} index={index} />
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-7 border-t border-black/[0.14] pt-8 sm:mt-20 sm:flex-row sm:items-end sm:justify-between lg:mt-10">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#20B867] shadow-[0_0_0_5px_rgba(32,184,103,0.1)]" />
                <span className="text-[14px] font-medium text-[#333]">
                  {t("cta.status")}
                </span>
              </div>

              <p className="mt-5 text-[12px] leading-[1.6] text-[#888] sm:text-[13px]">
                {t("cta.note")}
              </p>
            </div>

            <Link
              to="/contacts"
              className="group inline-flex w-fit items-center gap-6 text-[15px] font-medium text-[#0057FF] transition-colors duration-300 hover:text-[#0049D4] sm:text-[16px]"
            >
              {t("cta.action")}
              <ArrowIcon className="h-3 w-[30px] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip bg-[#F6F5F2] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-9 lg:pb-36">
        <div className="relative mx-auto w-full max-w-[1460px] overflow-hidden bg-[#071426] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-48 -top-52 h-[560px] w-[560px] rounded-full border border-[#1672FF]/15" />
          <div className="pointer-events-none absolute -right-20 -top-72 h-[560px] w-[560px] rounded-full border border-[#1672FF]/10" />
          <div className="pointer-events-none absolute bottom-[15%] right-[8%] h-2 w-2 bg-[#1672FF] shadow-[0_0_22px_rgba(22,114,255,0.9)]" />

          <div className="relative z-10 grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-semibold tracking-[0.16em] text-[#1975FF]">01</span>
                <span className="h-px w-6 bg-white/20" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45 sm:text-[11px]">
                  {t("questions.eyebrow")}
                </span>
              </div>

              <h2 className="mt-8 max-w-[610px] font-['Oswald'] text-[clamp(46px,10vw,68px)] font-medium leading-[1] tracking-[-0.035em] sm:text-[78px] lg:text-[86px]">
                <span className="block">{t("questions.title.first")}</span>
                <span className="block text-[#1873FF]">{t("questions.title.second")}</span>
              </h2>

              <p className="mt-7 max-w-[500px] text-[14px] leading-[1.75] text-white/52 sm:text-[16px]">
                {t("questions.description")}
              </p>

              <div className="mt-9 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.17em] text-white/38">
                <span className="h-2 w-2 bg-[#1672FF]" />
                {t("questions.duration")}
              </div>
            </div>

            <ol className="grid gap-x-9 sm:grid-cols-2 lg:gap-x-12">
              {questions.map((question, index) => (
                <QuestionItem key={question} question={question} index={index} />
              ))}
            </ol>
          </div>

          <div className="relative z-10 mt-12 flex flex-col gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[670px] text-[13px] leading-[1.65] text-white/48 sm:text-[14px]">
              {t("questions.footer")}
            </p>

            <Link
              to="/contacts"
              className="group/questions inline-flex shrink-0 items-center gap-6 text-[14px] font-medium text-[#2780FF] transition-colors duration-300 hover:text-white"
            >
              {t("questions.action")}
              <ArrowIcon className="h-3 w-[30px] transition-transform duration-300 group-hover/questions:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .process-visual-float {
          animation: processVisualFloat 7s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes processVisualFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .process-visual-float {
            animation-duration: 14s;
          }
        }
      `}</style>
    </>
  );
}

export default ProcessContent;
