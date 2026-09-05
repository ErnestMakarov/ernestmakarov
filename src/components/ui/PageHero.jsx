import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const animationDelay = {
  work: "0s",
  services: "-4s",
  process: "-8s",
  about: "-12s",
  contacts: "-16s",
};

function AnimatedStructure({ page }) {
  return (
    <div
      className="page-hero-visual relative h-full w-full"
      style={{
        "--page-delay": animationDelay[page] ?? "0s",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle,rgba(0,87,255,0.055)_0%,rgba(0,87,255,0)_68%)] blur-2xl" />

      <svg
        viewBox="0 0 640 480"
        fill="none"
        className="relative h-full w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="page-hero-drift-a">
          <path
            d="M56 337H235V247H370V150H548"
            className="page-hero-line"
          />
          <path
            d="M235 247V110"
            className="page-hero-line"
          />
          <path
            d="M370 150V50"
            className="page-hero-line"
          />
          <path
            d="M548 150V66"
            className="page-hero-line"
          />
          <path
            d="M548 150H614"
            className="page-hero-line"
          />
        </g>

        <g className="page-hero-drift-b">
          <path
            d="M153 425V344H405V271H533"
            className="page-hero-line"
          />
          <path
            d="M405 271V193"
            className="page-hero-line"
          />
          <path
            d="M533 271V386"
            className="page-hero-line"
          />
          <path
            d="M533 386H613"
            className="page-hero-line"
          />
          <path
            d="M290 344V432"
            className="page-hero-line"
          />
        </g>

        <g className="page-hero-drift-c">
          <path
            d="M84 184H178V104H306"
            className="page-hero-line"
          />
          <path
            d="M178 184V278"
            className="page-hero-line"
          />
          <path
            d="M306 104V42"
            className="page-hero-line"
          />
          <path
            d="M458 90H592"
            className="page-hero-line"
          />
          <path
            d="M522 90V14"
            className="page-hero-line"
          />
        </g>

        <path
          d="M56 337H235V247H370V150H548"
          className="page-hero-flow page-hero-flow-a"
        />

        <path
          d="M153 425V344H405V271H533V386H613"
          className="page-hero-flow page-hero-flow-b"
        />

        <path
          d="M84 184H178V104H306"
          className="page-hero-flow page-hero-flow-c"
        />

        <path
          d="M458 90H592"
          className="page-hero-flow page-hero-flow-d"
        />

        <g className="page-hero-points">
          <rect x="230" y="242" width="10" height="10" rx="1" />
          <rect x="365" y="145" width="10" height="10" rx="1" />
          <rect x="543" y="145" width="10" height="10" rx="1" />

          <rect x="148" y="339" width="10" height="10" rx="1" />
          <rect x="400" y="266" width="10" height="10" rx="1" />
          <rect x="528" y="266" width="10" height="10" rx="1" />
          <rect x="528" y="381" width="10" height="10" rx="1" />

          <rect x="79" y="179" width="10" height="10" rx="1" />
          <rect x="173" y="99" width="10" height="10" rx="1" />
          <rect x="301" y="99" width="10" height="10" rx="1" />

          <rect x="453" y="85" width="10" height="10" rx="1" />
          <rect x="587" y="85" width="10" height="10" rx="1" />
        </g>

        <g className="page-hero-small-points">
          <circle cx="56" cy="337" r="3.5" />
          <circle cx="235" cy="110" r="3.5" />
          <circle cx="370" cy="50" r="3.5" />
          <circle cx="614" cy="150" r="3.5" />

          <circle cx="153" cy="425" r="3.5" />
          <circle cx="290" cy="344" r="3.5" />
          <circle cx="290" cy="432" r="3.5" />
          <circle cx="405" cy="193" r="3.5" />
          <circle cx="613" cy="386" r="3.5" />

          <circle cx="84" cy="184" r="3.5" />
          <circle cx="178" cy="278" r="3.5" />
          <circle cx="306" cy="42" r="3.5" />

          <circle cx="458" cy="90" r="3.5" />
          <circle cx="522" cy="14" r="3.5" />
        </g>

        <circle
          cx="56"
          cy="337"
          r="5"
          className="page-hero-runner page-hero-runner-one"
        />

        <circle
          cx="153"
          cy="425"
          r="4"
          className="page-hero-runner page-hero-runner-two"
        />

        <circle
          cx="84"
          cy="184"
          r="4"
          className="page-hero-runner page-hero-runner-three"
        />

        <circle
          cx="458"
          cy="90"
          r="3.5"
          className="page-hero-runner page-hero-runner-four"
        />

        <rect
          x="230"
          y="242"
          width="10"
          height="10"
          rx="1"
          className="page-hero-runner page-hero-runner-five"
        />

        <rect
          x="400"
          y="266"
          width="9"
          height="9"
          rx="1"
          className="page-hero-runner page-hero-runner-six"
        />

        <g className="page-hero-coordinates">
          <text x="558" y="142">
            X: 120
          </text>
          <text x="546" y="405">
            Y: 280
          </text>
          <text x="318" y="94">
            004
          </text>
        </g>
      </svg>

      <style>{`
        .page-hero-line {
          stroke: rgba(29, 43, 61, 0.12);
          stroke-width: 1;
          vector-effect: non-scaling-stroke;
        }

        .page-hero-flow {
          fill: none;
          stroke: rgba(0, 87, 255, 0.32);
          stroke-width: 1.15;
          stroke-linecap: round;
          stroke-dasharray: 18 54;
          vector-effect: non-scaling-stroke;
        }

        .page-hero-flow-a {
          animation: pageHeroDash 17s linear infinite;
          animation-delay: var(--page-delay);
        }

        .page-hero-flow-b {
          animation: pageHeroDashReverse 22s linear infinite;
          animation-delay: var(--page-delay);
        }

        .page-hero-flow-c {
          animation: pageHeroDash 15s linear infinite;
          animation-delay: var(--page-delay);
        }

        .page-hero-flow-d {
          animation: pageHeroDashReverse 12s linear infinite;
          animation-delay: var(--page-delay);
        }

        .page-hero-drift-a {
          transform-origin: center;
          animation: pageHeroDriftA 14s ease-in-out infinite alternate;
          animation-delay: var(--page-delay);
        }

        .page-hero-drift-b {
          transform-origin: center;
          animation: pageHeroDriftB 18s ease-in-out infinite alternate;
          animation-delay: var(--page-delay);
        }

        .page-hero-drift-c {
          transform-origin: center;
          animation: pageHeroDriftC 21s ease-in-out infinite alternate;
          animation-delay: var(--page-delay);
        }

        .page-hero-points {
          fill: #0057ff;
        }

        .page-hero-points rect {
          transform-box: fill-box;
          transform-origin: center;
          animation: pageHeroPulse 4.8s ease-in-out infinite;
          animation-delay: var(--page-delay);
        }

        .page-hero-points rect:nth-child(2n) {
          animation-delay: calc(var(--page-delay) - 1.6s);
        }

        .page-hero-points rect:nth-child(3n) {
          animation-delay: calc(var(--page-delay) - 3.2s);
        }

        .page-hero-small-points {
          fill: #0057ff;
          opacity: 0.78;
        }

        .page-hero-small-points circle {
          animation: pageHeroGlow 3.8s ease-in-out infinite;
          animation-delay: var(--page-delay);
        }

        .page-hero-small-points circle:nth-child(2n) {
          animation-delay: calc(var(--page-delay) - 1.3s);
        }

        .page-hero-small-points circle:nth-child(3n) {
          animation-delay: calc(var(--page-delay) - 2.6s);
        }

        .page-hero-runner {
          fill: #0057ff;
          transform-box: fill-box;
          transform-origin: center;
          filter: drop-shadow(0 0 5px rgba(0, 87, 255, 0.5));
          will-change: transform;
        }

        .page-hero-runner-one {
          animation: pageHeroRunnerOne 13s linear infinite;
          animation-delay: var(--page-delay);
        }

        .page-hero-runner-two {
          animation: pageHeroRunnerTwo 16s linear infinite;
          animation-delay: calc(var(--page-delay) - 5s);
        }

        .page-hero-runner-three {
          animation: pageHeroRunnerThree 11s linear infinite;
          animation-delay: calc(var(--page-delay) - 8s);
        }

        .page-hero-runner-four {
          animation: pageHeroRunnerFour 8s ease-in-out infinite alternate;
          animation-delay: var(--page-delay);
        }

        .page-hero-runner-five {
          animation: pageHeroRunnerFive 10s ease-in-out infinite alternate;
          animation-delay: calc(var(--page-delay) - 3s);
        }

        .page-hero-runner-six {
          animation: pageHeroRunnerSix 12s ease-in-out infinite alternate;
          animation-delay: calc(var(--page-delay) - 6s);
        }

        .page-hero-coordinates {
          fill: rgba(48, 57, 68, 0.32);
          font-family: Inter, sans-serif;
          font-size: 9px;
          letter-spacing: 0.08em;
          animation: pageHeroCoordinate 6s ease-in-out infinite;
          animation-delay: var(--page-delay);
        }

        @keyframes pageHeroDash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -288;
          }
        }

        @keyframes pageHeroDashReverse {
          from {
            stroke-dashoffset: -288;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pageHeroDriftA {
          0% {
            transform: translate3d(-5px, 3px, 0);
          }
          50% {
            transform: translate3d(4px, -3px, 0);
          }
          100% {
            transform: translate3d(8px, 5px, 0);
          }
        }

        @keyframes pageHeroDriftB {
          0% {
            transform: translate3d(4px, -4px, 0);
          }
          50% {
            transform: translate3d(-5px, 4px, 0);
          }
          100% {
            transform: translate3d(-8px, -2px, 0);
          }
        }

        @keyframes pageHeroDriftC {
          0% {
            transform: translate3d(-3px, -2px, 0);
          }
          50% {
            transform: translate3d(6px, 5px, 0);
          }
          100% {
            transform: translate3d(2px, -6px, 0);
          }
        }

        @keyframes pageHeroPulse {
          0%,
          100% {
            opacity: 0.58;
            transform: scale(0.78);
          }
          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        @keyframes pageHeroGlow {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pageHeroCoordinate {
          0%,
          100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.72;
          }
        }

        @keyframes pageHeroRunnerOne {
          0% {
            transform: translate(0, 0);
          }
          24% {
            transform: translate(179px, 0);
          }
          43% {
            transform: translate(179px, -90px);
          }
          66% {
            transform: translate(314px, -90px);
          }
          82% {
            transform: translate(314px, -187px);
          }
          100% {
            transform: translate(492px, -187px);
          }
        }

        @keyframes pageHeroRunnerTwo {
          0% {
            transform: translate(0, 0);
          }
          18% {
            transform: translate(0, -81px);
          }
          51% {
            transform: translate(252px, -81px);
          }
          68% {
            transform: translate(252px, -154px);
          }
          84% {
            transform: translate(380px, -154px);
          }
          100% {
            transform: translate(380px, -39px);
          }
        }

        @keyframes pageHeroRunnerThree {
          0% {
            transform: translate(0, 0);
          }
          34% {
            transform: translate(94px, 0);
          }
          67% {
            transform: translate(94px, -80px);
          }
          100% {
            transform: translate(222px, -80px);
          }
        }

        @keyframes pageHeroRunnerFour {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(134px, 0);
          }
        }

        @keyframes pageHeroRunnerFive {
          0% {
            transform: translate(0, 0) scale(0.75);
          }
          45% {
            transform: translate(135px, 0) scale(1);
          }
          100% {
            transform: translate(135px, -97px) scale(0.75);
          }
        }

        @keyframes pageHeroRunnerSix {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(128px, 0) rotate(90deg);
          }
          100% {
            transform: translate(128px, 115px) rotate(180deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-hero-visual * {
            animation-duration: 28s !important;
          }
        }
      `}</style>
    </div>
  );
}

function PageHero({ page }) {
  const { t } = useTranslation("common");
  const location = useLocation();

  const translatedTitle = t(`pageHeroes.${page}.title`, {
    returnObjects: true,
  });

  const titleLines = Array.isArray(translatedTitle)
    ? translatedTitle
    : [translatedTitle];

  return (
    <section className="relative overflow-hidden border-b border-black/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_44%,rgba(255,255,255,0.98)_0%,rgba(246,245,242,0)_58%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[58%_42%] lg:items-center lg:px-9 lg:py-20">
        <div className="relative z-10 max-w-[850px]">
          <div className="mb-8 flex items-center gap-5 sm:mb-10">
            <span className="text-[13px] font-semibold tracking-[0.15em] text-[#0057FF]">
              {t(`pageHeroes.${page}.number`)}
            </span>

            <span className="h-px w-5 bg-black/20" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#777] sm:text-[12px]">
              {t(`pageHeroes.${page}.eyebrow`)}
            </span>
          </div>

          <h1 className="font-['Oswald'] text-[clamp(52px,12vw,76px)] font-medium leading-[1.03] tracking-[-0.035em] text-[#111] sm:text-[clamp(68px,9vw,100px)] lg:text-[clamp(76px,6.2vw,112px)]">
            {titleLines.map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-[610px] text-[16px] leading-[1.65] text-[#575757] sm:mt-9 sm:text-[18px] lg:text-[19px]">
            {t(`pageHeroes.${page}.description`)}
          </p>
        </div>

        <div className="relative mt-8 h-[270px] sm:mt-10 sm:h-[350px] lg:mt-0 lg:h-[580px]">
          <AnimatedStructure
            key={`${location.key}-${location.pathname}-${page}`}
            page={page}
          />
        </div>
      </div>
    </section>
  );
}

export default PageHero;