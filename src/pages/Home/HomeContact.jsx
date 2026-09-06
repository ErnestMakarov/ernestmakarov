import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import ProjectChatPhone from "../../components/ui/ProjectChatPhone";

const DIRECT_EMAIL = "ernestmakarov.ee@gmail.com";
const TELEGRAM_URL = "https://t.me/ernestweb";

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M4 12 12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeContact() {
  const { t } = useTranslation("home");
  const location = useLocation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        window.requestAnimationFrame(() => setIsVisible(true));
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [location.key, location.pathname]);

  return (
    <section
      ref={sectionRef}
      id="home-contact"
      className="relative overflow-x-clip border-t border-black/10 bg-[#F6F5F2]"
    >
      <div className="pointer-events-none absolute right-[-17%] top-[16%] h-[680px] w-[680px] rounded-full border border-[#0057FF]/10" />
      <div className="pointer-events-none absolute right-[-6%] top-[27%] h-[470px] w-[470px] rounded-full border border-[#0057FF]/10" />
      <div className="pointer-events-none absolute right-[5%] top-[38%] h-[280px] w-[280px] rounded-full bg-[#0057FF]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[29%] top-[18%] h-2 w-2 bg-[#0768F8]" />
      <div className="pointer-events-none absolute bottom-[18%] right-[3%] h-2 w-2 bg-[#0768F8]" />

      <div className="relative mx-auto grid w-full max-w-[1460px] gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:min-h-[900px] lg:grid-cols-[0.93fr_1.07fr] lg:items-center lg:gap-12 lg:px-9 lg:py-32 xl:gap-20">
        <div
          data-aos="fade-up"
          className={`relative z-20 min-w-0 transition-[opacity,transform] duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4" >
            <span className="text-[12px] font-semibold tracking-[0.16em] text-[#0768F8]">
              03
            </span>
            <span className="h-px w-6 bg-black/15" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#555] sm:text-[11px]">
              {t("contactChat.eyebrow")}
            </span>
          </div>

          <h2 className="mt-8 max-w-[720px] font-['Oswald'] text-[clamp(52px,12vw,72px)] font-medium leading-[1.02] tracking-[-0.035em] text-[#111] sm:text-[80px] lg:text-[clamp(72px,5.2vw,92px)]">
            <span className="block">{t("contactChat.title.line1")}</span>
            <span className="mt-[0.04em] block">{t("contactChat.title.line2")}</span>
            <span className="mt-[0.04em] block text-[#0768F8]">
              {t("contactChat.title.line3")}
            </span>
          </h2>

          <p className="mt-7 max-w-[560px] text-[15px] leading-[1.72] text-[#696969] sm:text-[16px]">
            {t("contactChat.description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-medium text-[#222] sm:text-[14px]">
            <span>{t("contactChat.benefits.noForm")}</span>
            <span className="h-1 w-1 rounded-full bg-[#0057FF]" />
            <span>{t("contactChat.benefits.fast")}</span>
          </div>

          <div className="mt-8 flex items-center gap-3 text-[13px] text-[#777]">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-25" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-[3px] border-[#F6F5F2] bg-[#22C55E]" />
            </span>
            {t("contactChat.responseTime")}
          </div>

          <div className="mt-10 max-w-[560px] border-t border-black/15 pt-7">
            <p className="text-[13px] text-[#777]">
              {t("contactChat.directQuestion")}
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href={`mailto:${DIRECT_EMAIL}`}
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#0057FF] transition-colors hover:text-[#0049D4]"
              >
                {DIRECT_EMAIL}
                <ExternalArrow />
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#0057FF] transition-colors hover:text-[#0049D4]"
              >
                Telegram
                <ExternalArrow />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 flex min-w-0 justify-center transition-[opacity,transform] delay-150 duration-1000 ease-out lg:justify-start lg:pl-[8%] ${
            isVisible
              ? "translate-y-0 rotate-0 opacity-100"
              : "translate-y-14 rotate-[1.5deg] opacity-0"
          }`}
        >
          <div className="pointer-events-none absolute left-[52%] top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0768F8]/10" />
          <div className="pointer-events-none absolute left-[52%] top-1/2 h-[61%] w-[61%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0768F8]/10" />

          <ProjectChatPhone className="w-[min(88vw,390px)] xl:w-[402px]" />
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
