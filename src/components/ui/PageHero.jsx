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
      className="relative h-full w-full"
      style={{
        "--hero-delay": animationDelay[page] || "0s",
      }}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0057FF]/[0.045] blur-3xl" />

      <div className="page-hero-glow absolute left-[58%] top-[42%] h-32 w-32 rounded-full bg-[#0057FF]/[0.04] blur-2xl" />

      <svg
        viewBox="0 0 640 480"
        fill="none"
        className="relative h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient
            id="heroLineFade"
            x1="30"
            y1="240"
            x2="610"
            y2="240"
          >
            <stop stopColor="#111111" stopOpacity="0" />
            <stop offset="0.18" stopColor="#111111" stopOpacity="0.11" />
            <stop offset="0.82" stopColor="#111111" stopOpacity="0.11" />
            <stop offset="1" stopColor="#111111" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="heroBlueFade"
            x1="40"
            y1="0"
            x2="590"
            y2="0"
          >
            <stop stopColor="#0057FF" stopOpacity="0" />
            <stop offset="0.2" stopColor="#0057FF" stopOpacity="0.16" />
            <stop offset="0.5" stopColor="#0057FF" stopOpacity="0.4" />
            <stop offset="0.8" stopColor="#0057FF" stopOpacity="0.16" />
            <stop offset="1" stopColor="#0057FF" stopOpacity="0" />
          </linearGradient>

          <filter
            id="heroGlow"
            x="-200%"
            y="-200%"
            width="400%"
            height="400%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="page-hero-drift-a">
          <path
            d="M42 342H174V226H334V102H494"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M174 226V400H404V282H598"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M334 102V282H486V42"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M404 282V430H564"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M96 148H252V78H414"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M252 78V188H556"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />
        </g>

        <g className="page-hero-drift-b">
          <path
            d="M24 420H126V366H276V246"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M106 54V132H214V210"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M602 66H530V146H438V244H612"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M486 188V354H610"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />

          <path
            d="M72 286H126V190H174"
            stroke="url(#heroLineFade)"
            strokeWidth="1"
          />
        </g>

        <g className="page-hero-drift-c">
          <path
            d="M278 34V78"
            stroke="#111111"
            strokeOpacity="0.08"
            strokeWidth="1"
          />

          <path
            d="M334 428V462"
            stroke="#111111"
            strokeOpacity="0.08"
            strokeWidth="1"
          />

          <path
            d="M556 188V234"
            stroke="#111111"
            strokeOpacity="0.08"
            strokeWidth="1"
          />

          <path
            d="M126 342V386"
            stroke="#111111"
            strokeOpacity="0.08"
            strokeWidth="1"
          />

          <path
            d="M438 244H486"
            stroke="#111111"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </g>

        <path
          d="M42 342H174V226H334V102H494"
          stroke="url(#heroBlueFade)"
          strokeWidth="1.2"
          className="page-hero-dash"
        />

        <path
          d="M174 400H404V282H598"
          stroke="url(#heroBlueFade)"
          strokeWidth="1.2"
          className="page-hero-dash page-hero-dash-delayed"
        />

        <path
          d="M96 148H252V78H414"
          stroke="url(#heroBlueFade)"
          strokeWidth="1"
          className="page-hero-dash page-hero-dash-slow"
        />

        <path
          d="M602 66H530V146H438V244H612"
          stroke="url(#heroBlueFade)"
          strokeWidth="1"
          className="page-hero-dash page-hero-dash-reverse"
        />

        <g fill="#0057FF">
          <rect
            x="169"
            y="221"
            width="10"
            height="10"
            rx="1"
            className="page-hero-pulse-a"
          />

          <rect
            x="329"
            y="97"
            width="10"
            height="10"
            rx="1"
            className="page-hero-pulse-b"
          />

          <rect
            x="399"
            y="277"
            width="10"
            height="10"
            rx="1"
            className="page-hero-pulse-c"
          />

          <rect
            x="482"
            y="184"
            width="8"
            height="8"
            rx="1"
            className="page-hero-pulse-b"
          />

          <rect
            x="401"
            y="427"
            width="7"
            height="7"
            rx="1"
            opacity="0.75"
          />

          <rect
            x="560"
            y="427"
            width="7"
            height="7"
            rx="1"
            opacity="0.65"
          />

          <rect
            x="93"
            y="145"
            width="7"
            height="7"
            rx="1"
            opacity="0.65"
          />

          <rect
            x="249"
            y="75"
            width="7"
            height="7"
            rx="1"
            opacity="0.7"
          />

          <rect
            x="527"
            y="143"
            width="7"
            height="7"
            rx="1"
            opacity="0.6"
          />

          <circle cx="126" cy="366" r="3" opacity="0.6" />

          <circle cx="438" cy="244" r="3" opacity="0.65" />

          <circle cx="556" cy="188" r="3" opacity="0.55" />
        </g>

        <circle
          r="4"
          fill="#0057FF"
          filter="url(#heroGlow)"
          className="page-hero-motion"
        >
          <animateMotion
            dur="15s"
            begin="0s"
            repeatCount="indefinite"
            path="M42 342H174V226H334V102H494"
          />
        </circle>

        <circle
          r="3.5"
          fill="#0057FF"
          filter="url(#heroGlow)"
          className="page-hero-motion"
        >
          <animateMotion
            dur="19s"
            begin="-7s"
            repeatCount="indefinite"
            path="M174 400H404V282H598"
          />
        </circle>

        <circle
          r="3"
          fill="#0057FF"
          className="page-hero-motion"
          opacity="0.85"
        >
          <animateMotion
            dur="23s"
            begin="-12s"
            repeatCount="indefinite"
            path="M96 148H252V78H414"
          />
        </circle>

        <circle
          r="3"
          fill="#0057FF"
          className="page-hero-motion"
          opacity="0.75"
        >
          <animateMotion
            dur="17s"
            begin="-5s"
            repeatCount="indefinite"
            path="M404 282V430H564"
          />
        </circle>

        <circle
          r="3.5"
          fill="#0057FF"
          filter="url(#heroGlow)"
          className="page-hero-motion"
          opacity="0.8"
        >
          <animateMotion
            dur="21s"
            begin="-10s"
            repeatCount="indefinite"
            path="M602 66H530V146H438V244H612"
          />
        </circle>

        <circle
          r="2.5"
          fill="#0057FF"
          className="page-hero-motion"
          opacity="0.7"
        >
          <animateMotion
            dur="13s"
            begin="-3s"
            repeatCount="indefinite"
            path="M24 420H126V366H276V246"
          />
        </circle>

        <rect
          x="-4"
          y="-4"
          width="8"
          height="8"
          rx="1"
          fill="#0057FF"
          filter="url(#heroGlow)"
          className="page-hero-motion"
        >
          <animateMotion
            dur="26s"
            begin="-14s"
            repeatCount="indefinite"
            path="M106 54V132H214V210"
          />
        </rect>

        <rect
          x="-3"
          y="-3"
          width="6"
          height="6"
          rx="1"
          fill="#0057FF"
          className="page-hero-motion"
          opacity="0.75"
        >
          <animateMotion
            dur="18s"
            begin="-8s"
            repeatCount="indefinite"
            path="M486 188V354H610"
          />
        </rect>

        <g
          className="page-hero-coordinate"
          fill="#111111"
          fillOpacity="0.25"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          letterSpacing="0.08em"
        >
          <text x="502" y="192">
            X: 120
          </text>

          <text x="570" y="436">
            Y: 280
          </text>
        </g>
      </svg>

      <style>{`
        @keyframes pageHeroDriftA {
          0% {
            transform: translate3d(-8px, 5px, 0);
          }

          50% {
            transform: translate3d(10px, -7px, 0);
          }

          100% {
            transform: translate3d(-3px, 9px, 0);
          }
        }

        @keyframes pageHeroDriftB {
          0% {
            transform: translate3d(7px, -5px, 0);
          }

          50% {
            transform: translate3d(-9px, 8px, 0);
          }

          100% {
            transform: translate3d(5px, -3px, 0);
          }
        }

        @keyframes pageHeroDriftC {
          0% {
            transform: translate3d(0, -5px, 0);
            opacity: 0.5;
          }

          50% {
            transform: translate3d(5px, 5px, 0);
            opacity: 1;
          }

          100% {
            transform: translate3d(-4px, -2px, 0);
            opacity: 0.6;
          }
        }

        @keyframes pageHeroDash {
          to {
            stroke-dashoffset: -88;
          }
        }

        @keyframes pageHeroDashReverse {
          to {
            stroke-dashoffset: 88;
          }
        }

        @keyframes pageHeroPulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.78);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes pageHeroCoordinate {
          0%,
          100% {
            opacity: 0.3;
          }

          50% {
            opacity: 0.75;
          }
        }

        @keyframes pageHeroGlow {
          0%,
          100% {
            opacity: 0.35;
            transform: translate3d(-8px, 6px, 0) scale(0.9);
          }

          50% {
            opacity: 0.75;
            transform: translate3d(10px, -8px, 0) scale(1.12);
          }
        }

        .page-hero-drift-a {
          animation: pageHeroDriftA 18s ease-in-out infinite;
          animation-delay: var(--hero-delay);
        }

        .page-hero-drift-b {
          animation: pageHeroDriftB 24s ease-in-out infinite;
          animation-delay: calc(var(--hero-delay) - 4s);
        }

        .page-hero-drift-c {
          animation: pageHeroDriftC 20s ease-in-out infinite;
          animation-delay: calc(var(--hero-delay) - 7s);
        }

        .page-hero-dash {
          stroke-dasharray: 4 18;
          animation: pageHeroDash 14s linear infinite;
        }

        .page-hero-dash-delayed {
          animation-delay: -7s;
        }

        .page-hero-dash-slow {
          animation-duration: 20s;
          animation-delay: -11s;
        }

        .page-hero-dash-reverse {
          animation-name: pageHeroDashReverse;
          animation-duration: 18s;
          animation-delay: -6s;
        }

        .page-hero-pulse-a,
        .page-hero-pulse-b,
        .page-hero-pulse-c {
          transform-box: fill-box;
          transform-origin: center;
          animation: pageHeroPulse 4.8s ease-in-out infinite;
        }

        .page-hero-pulse-b {
          animation-delay: -1.6s;
        }

        .page-hero-pulse-c {
          animation-delay: -3.2s;
        }

        .page-hero-coordinate {
          animation: pageHeroCoordinate 6s ease-in-out infinite;
        }

        .page-hero-glow {
          animation: pageHeroGlow 10s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .page-hero-drift-a,
          .page-hero-drift-b,
          .page-hero-drift-c,
          .page-hero-dash,
          .page-hero-pulse-a,
          .page-hero-pulse-b,
          .page-hero-pulse-c,
          .page-hero-coordinate,
          .page-hero-glow {
            animation: none;
          }

          .page-hero-motion {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

function PageHero({ page }) {
  const { t } = useTranslation("common");
  const location = useLocation();

  const title = t(`pageHeroes.${page}.title`, {
    returnObjects: true,
  });

  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <section className="relative overflow-hidden border-b border-black/[0.07] bg-[#F6F5F2]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_44%,rgba(255,255,255,0.96)_0%,rgba(246,245,242,0)_56%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] w-full max-w-[1600px] grid-cols-1 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[58%_42%] lg:items-center lg:px-9 lg:py-12">
        <div className="relative z-10 flex flex-col items-start lg:pr-10">
          <div className="mb-8 flex items-center gap-4 sm:mb-10">
            <span className="text-[12px] font-semibold tracking-[0.16em] text-[#0057FF] sm:text-[13px]">
              {t(`pageHeroes.${page}.number`)}
            </span>

            <span className="text-[11px] text-black/25">/</span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#666666] sm:text-[12px]">
              {t(`pageHeroes.${page}.eyebrow`)}
            </span>
          </div>

          <h1 className="flex max-w-[960px] flex-col gap-[0.08em] font-['Oswald'] text-[clamp(52px,13vw,72px)] font-medium uppercase leading-[1.03] tracking-[-0.035em] text-[#111111] sm:text-[clamp(68px,9vw,88px)] lg:text-[clamp(78px,6vw,112px)]">
            {titleLines.map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-[610px] text-[15px] leading-[1.7] text-[#5F5F5F] sm:mt-10 sm:text-[17px] lg:text-[18px]">
            {t(`pageHeroes.${page}.description`)}
          </p>
        </div>

        <div className="relative mt-10 h-[270px] sm:h-[350px] lg:mt-0 lg:h-[580px]">
          <AnimatedStructure
            key={`${location.pathname}-${page}`}
            page={page}
          />
        </div>
      </div>
    </section>
  );
}

export default PageHero;