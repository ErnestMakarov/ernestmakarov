import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const facts = ["experience", "education", "location", "format"];
const principles = ["clarity", "system", "responsibility"];

const stackFirst = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind CSS",
];

const stackSecond = [
  "Git",
  "Vite",
  "React Router",
  "i18next",
  "EmailJS",
  "Vercel",
  "Figma",
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

function TechnicalGraphic() {
  return (
    <svg
      viewBox="0 0 460 250"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <path d="M16 196h128v-68h102V57h162" stroke="rgba(17,17,17,0.13)" />
      <path d="M144 128V33M246 57V18M339 57v112h92" stroke="rgba(17,17,17,0.13)" />
      <path d="M57 226h212v-45h139" stroke="rgba(17,17,17,0.09)" />
      <path d="M16 196h128v-68h102V57h162" stroke="#0768F8" strokeOpacity="0.38" strokeDasharray="14 34" className="about-blueprint-flow" />
      <rect x="139" y="123" width="10" height="10" fill="#0768F8" />
      <rect x="241" y="52" width="10" height="10" fill="#0768F8" />
      <rect x="334" y="164" width="10" height="10" fill="#0768F8" />
      <circle cx="16" cy="196" r="4" fill="#0768F8" />
      <circle cx="144" cy="33" r="4" fill="#0768F8" />
      <circle cx="246" cy="18" r="4" fill="#0768F8" />
      <circle cx="408" cy="57" r="4" fill="#0768F8" />
      <circle cx="431" cy="169" r="4" fill="#0768F8" />
      <text x="352" y="48" fill="rgba(17,17,17,0.27)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="1.2">X: 120</text>
      <text x="356" y="191" fill="rgba(17,17,17,0.27)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="1.2">Y: 280</text>
    </svg>
  );
}

function StackRow({ items, reverse = false }) {
  const content = [...items, ...items];

  return (
    <div className="overflow-hidden border-t border-white/12 py-5 sm:py-7">
      <div
        className={`about-stack-track flex min-w-max items-center ${
          reverse ? "about-stack-track-reverse" : ""
        }`}
      >
        {content.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-5 font-['Oswald'] text-[42px] font-medium uppercase leading-none tracking-[-0.025em] text-white/82 sm:px-8 sm:text-[58px] lg:text-[68px]">
              {item}
            </span>
            <span className="h-2 w-2 shrink-0 bg-[#1474FF]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutContent() {
  const { t } = useTranslation("about");
  const paragraphs = t("intro.paragraphs", { returnObjects: true });
  const paragraphItems = Array.isArray(paragraphs) ? paragraphs : [];

  return (
    <>
      <section className="overflow-x-clip bg-[#F6F5F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-9 lg:py-36">
        <div className="mx-auto w-full max-w-[1460px] border-t border-black/[0.16] pt-12 sm:pt-16 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:gap-28">
            <div className="min-w-0">
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-semibold tracking-[0.16em] text-[#0768F8]">01</span>
                <span className="h-px w-6 bg-black/15" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#777] sm:text-[11px]">
                  {t("intro.eyebrow")}
                </span>
              </div>

              <h2 className="mt-8 max-w-[900px] font-['Oswald'] text-[clamp(50px,11vw,76px)] font-medium leading-[1.01] tracking-[-0.04em] text-[#111] sm:text-[88px] lg:text-[96px] xl:text-[106px]">
                <span className="block">{t("intro.title.first")}</span>
                <span className="block text-[#0768F8]">{t("intro.title.accent")}</span>
                <span className="block">{t("intro.title.last")}</span>
              </h2>

              <div className="mt-12 max-w-[570px] opacity-90 sm:mt-16">
                <TechnicalGraphic />
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-between lg:border-l lg:border-black/[0.12] lg:pl-12 xl:pl-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#777]">
                  {t("intro.name")}
                </p>

                <div className="mt-8 space-y-6">
                  {paragraphItems.map((paragraph, index) => (
                    <p
                      key={`${paragraph}-${index}`}
                      className={`max-w-[590px] leading-[1.72] ${
                        index === 0
                          ? "text-[20px] font-medium tracking-[-0.02em] text-[#222] sm:text-[24px]"
                          : "text-[15px] text-[#666] sm:text-[16px]"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-black/[0.12] pt-6 lg:mt-20">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1CB66A] shadow-[0_0_0_5px_rgba(28,182,106,0.1)]" />
                <p className="text-[13px] leading-[1.5] text-[#666] sm:text-[14px]">
                  {t("intro.status")}
                </p>
              </div>
            </div>
          </div>

          <dl className="mt-16 grid border-y border-black/[0.15] sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {facts.map((fact, index) => (
              <div
                key={fact}
                className={`min-h-[170px] py-7 sm:min-h-[190px] sm:p-8 lg:min-h-[220px] lg:p-9 ${
                  index > 0 ? "border-t border-black/[0.12] sm:border-t-0" : ""
                } ${index % 2 === 1 ? "sm:border-l" : ""} ${
                  index > 1 ? "sm:border-t lg:border-t-0" : ""
                } ${index > 0 ? "lg:border-l lg:border-black/[0.12]" : ""}`}
              >
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888] sm:text-[11px]">
                  {t(`facts.${fact}.label`)}
                </dt>
                <dd className="mt-8 font-['Oswald'] text-[38px] font-medium leading-[1.05] tracking-[-0.03em] text-[#111] sm:text-[43px] lg:text-[47px]">
                  {t(`facts.${fact}.value`)}
                </dd>
                <p className="mt-3 max-w-[240px] text-[12px] leading-[1.55] text-[#777] sm:text-[13px]">
                  {t(`facts.${fact}.description`)}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="overflow-hidden bg-[#071426] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto mb-14 grid w-full max-w-[1460px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-9">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-semibold tracking-[0.16em] text-[#1975FF]">02</span>
              <span className="h-px w-6 bg-white/20" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45 sm:text-[11px]">
                {t("stack.eyebrow")}
              </span>
            </div>

            <h2 className="mt-7 max-w-[740px] font-['Oswald'] text-[clamp(48px,10vw,72px)] font-medium leading-[1] tracking-[-0.035em] sm:text-[82px] lg:text-[92px]">
              <span className="block">{t("stack.title.first")}</span>
              <span className="block text-[#1975FF]">{t("stack.title.second")}</span>
            </h2>
          </div>

          <p className="max-w-[590px] text-[14px] leading-[1.75] text-white/52 sm:text-[16px] lg:justify-self-end">
            {t("stack.description")}
          </p>
        </div>

        <StackRow items={stackFirst} />
        <StackRow items={stackSecond} reverse />
      </section>

      <section className="bg-[#F6F5F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-9 lg:py-36">
        <div className="mx-auto w-full max-w-[1460px]">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-semibold tracking-[0.16em] text-[#0768F8]">03</span>
                <span className="h-px w-6 bg-black/15" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#777] sm:text-[11px]">
                  {t("approach.eyebrow")}
                </span>
              </div>

              <h2 className="mt-8 max-w-[650px] font-['Oswald'] text-[clamp(48px,10vw,72px)] font-medium leading-[1.01] tracking-[-0.035em] text-[#111] sm:text-[80px] lg:text-[88px]">
                <span className="block">{t("approach.title.first")}</span>
                <span className="block">{t("approach.title.second")}</span>
              </h2>

              <p className="mt-7 max-w-[470px] text-[14px] leading-[1.7] text-[#666] sm:text-[16px]">
                {t("approach.description")}
              </p>
            </div>

            <ol className="grid border-t border-black/[0.15] sm:grid-cols-3">
              {principles.map((principle, index) => (
                <li
                  key={principle}
                  className={`group min-h-[350px] py-7 sm:min-h-[460px] sm:px-7 sm:py-9 lg:px-9 ${
                    index > 0 ? "border-t border-black/[0.12] sm:border-l sm:border-t-0" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-['Oswald'] text-[62px] font-medium leading-none tracking-[-0.04em] text-[#0768F8] sm:text-[72px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 h-2 w-2 bg-[#0768F8] opacity-60 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />
                  </div>

                  <h3 className="mt-16 text-[20px] font-semibold tracking-[-0.025em] text-[#151515] sm:mt-24 sm:text-[22px]">
                    {t(`approach.items.${principle}.title`)}
                  </h3>

                  <p className="mt-4 max-w-[300px] text-[14px] leading-[1.65] text-[#6B6B6B] sm:text-[15px]">
                    {t(`approach.items.${principle}.description`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F5F2] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-9 lg:pb-36">
        <div className="relative mx-auto w-full max-w-[1460px] overflow-hidden bg-[linear-gradient(125deg,#092A72_0%,#0648C8_55%,#0064FF_100%)] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-36 -top-52 h-[560px] w-[560px] rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -right-10 -top-72 h-[560px] w-[560px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-[17%] right-[12%] h-2 w-2 bg-[#58FFA5] shadow-[0_0_20px_rgba(88,255,165,0.65)]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:text-[11px]">
                {t("cta.eyebrow")}
              </p>

              <h2 className="mt-7 max-w-[850px] font-['Oswald'] text-[clamp(50px,11vw,76px)] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[90px] lg:text-[104px]">
                <span className="block">{t("cta.title.first")}</span>
                <span className="block">{t("cta.title.second")}</span>
              </h2>

              <p className="mt-6 max-w-[620px] text-[14px] leading-[1.7] text-white/68 sm:text-[16px]">
                {t("cta.description")}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch">
              <Link
                to="/contacts"
                className="group/contact inline-flex items-center justify-between gap-8 bg-white px-6 py-4 text-[14px] font-medium text-[#102146] transition-transform duration-300 hover:-translate-y-1 sm:px-7 sm:py-5"
              >
                {t("cta.primary")}
                <ArrowIcon className="h-3 w-[30px] transition-transform duration-300 group-hover/contact:translate-x-1" />
              </Link>

              <Link
                to="/work"
                className="group/work inline-flex items-center justify-between gap-8 border border-white/25 px-6 py-4 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-white/10 sm:px-7 sm:py-5"
              >
                {t("cta.secondary")}
                <ArrowIcon className="h-3 w-[30px] transition-transform duration-300 group-hover/work:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex items-center gap-4 border-t border-white/18 pt-7 sm:mt-16">
            <span className="h-2.5 w-2.5 rounded-full bg-[#44E58B]" />
            <span className="text-[12px] text-white/62 sm:text-[13px]">
              {t("cta.status")}
            </span>
          </div>
        </div>
      </section>

      <style>{`
        .about-blueprint-flow {
          animation: aboutBlueprintFlow 14s linear infinite;
        }

        .about-stack-track {
          animation: aboutStackMove 38s linear infinite;
          will-change: transform;
        }

        .about-stack-track-reverse {
          animation-direction: reverse;
          animation-duration: 44s;
        }

        @keyframes aboutBlueprintFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -240;
          }
        }

        @keyframes aboutStackMove {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-blueprint-flow {
            animation-duration: 28s;
          }

          .about-stack-track,
          .about-stack-track-reverse {
            animation-duration: 80s;
          }
        }
      `}</style>
    </>
  );
}

export default AboutContent;
