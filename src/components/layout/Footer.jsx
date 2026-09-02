import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const navigation = [
  { key: "home", path: "/" },
  { key: "work", path: "/work" },
  { key: "services", path: "/services" },
  { key: "process", path: "/process" },
  { key: "about", path: "/about" },
  { key: "contacts", path: "/contacts" },
];

const languages = ["ru", "en", "et"];

const contacts = [
  {
    label: "Email",
    href: "mailto:hello@ernestmakarov.ee",
    external: false,
  },
  {
    label: "Telegram",
    href: "https://t.me/USERNAME",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/USERNAME",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/ErnestMakarov",
    external: true,
  },
  {
    label: "+372 5598 7255",
    href: "tel:+37255987255",
    external: false,
  },
];

function ExternalArrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 12 12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UpArrow() {
  return (
    <svg
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
      className="h-5 w-4 transition-transform duration-300 group-hover:-translate-y-1"
    >
      <path
        d="M8 19V2M2.5 7.5 8 2l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Footer() {
  const { t, i18n } = useTranslation("common");

  const currentLanguage = i18n.resolvedLanguage?.split("-")[0] || "ru";
  const title = t("footer.title", { returnObjects: true });
  const titleLines = Array.isArray(title) ? title : [title];
  const currentYear = new Date().getFullYear();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#061224] text-white">
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-[linear-gradient(90deg,#0057FF_0%,#168BFF_72%,rgba(22,139,255,0.05)_100%)]">
        <span className="absolute right-[14%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#0567F9] shadow-[0_0_16px_5px_rgba(5,103,249,0.55)]" />
      </div>

      <div className="pointer-events-none absolute -bottom-[350px] -right-[300px] h-[720px] w-[720px] rotate-[-28deg] rounded-full border border-[#168BFF]/25" />
      <div className="pointer-events-none absolute -bottom-[315px] -right-[255px] h-[650px] w-[650px] rotate-[-28deg] rounded-full border border-[#168BFF]/20" />
      <div className="pointer-events-none absolute -bottom-[280px] -right-[210px] h-[580px] w-[580px] rotate-[-28deg] rounded-full border border-[#168BFF]/15" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#0057FF]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-7 pt-20 sm:px-8 sm:pt-24 lg:px-9 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[11px]">
              Ernest Makarov
            </p>

            <h2 className="font-['Oswald'] text-[clamp(48px,12vw,68px)] font-medium uppercase leading-[1.04] tracking-[-0.025em] text-white sm:text-[clamp(60px,7vw,82px)] lg:text-[clamp(66px,4.7vw,88px)]">
              {titleLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                  {index === titleLines.length - 1 && (
                    <span className="text-[#168BFF]">.</span>
                  )}
                </span>
              ))}
            </h2>

            <p className="mt-5 text-[14px] text-white/55 sm:text-[15px]">
              {t("footer.role")} · Tallinn, Estonia
            </p>
          </div>

          <div className="w-full rounded-2xl border border-white/20 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-8 lg:ml-auto lg:max-w-[510px]">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#78D23D] opacity-30" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-[3px] border-[#16304C] bg-[#78D23D]" />
              </span>

              <p className="text-[15px] font-medium text-white/85 sm:text-[17px]">
                {t("footer.availability")}
              </p>
            </div>

            <p className="mt-4 text-[14px] text-white/45 sm:text-[16px]">
              {t("footer.availabilityPeriod")}
            </p>

            <Link
              to="/contacts"
              className="group mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-[#168BFF] transition-colors duration-300 hover:text-[#51A5FF] sm:text-[15px]"
            >
              {t("footer.discussProject")}
              <ExternalArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-12 border-t border-white/15 py-10 sm:mt-16 sm:py-12 lg:grid-cols-[1.05fr_1.45fr] lg:gap-20">
          <div>
            <p className="max-w-[350px] text-[14px] leading-[1.75] text-white/55 sm:text-[15px]">
              {t("footer.description")}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            <div>
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">
                {t("footer.sections.navigation")}
              </h3>

              <nav className="mt-5 flex flex-col items-start gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className="text-[13px] text-white/55 transition-colors duration-300 hover:text-[#168BFF] sm:text-[14px]"
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">
                {t("footer.sections.contact")}
              </h3>

              <div className="mt-5 flex flex-col items-start gap-3">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-[13px] text-white/55 transition-colors duration-300 hover:text-[#168BFF] sm:text-[14px]"
                  >
                    {contact.label}

                    <ExternalArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">
                {t("footer.sections.language")}
              </h3>

              <div className="mt-5 flex flex-col items-start gap-3">
                {languages.map((language) => (
                  <button
                    key={language}
                    type="button"
                    onClick={() => changeLanguage(language)}
                    className={`relative pb-1 text-[13px] transition-colors duration-300 sm:text-[14px] ${
                      currentLanguage === language
                        ? "text-white"
                        : "text-white/50 hover:text-[#168BFF]"
                    }`}
                  >
                    {t(`footer.languages.${language}`)}

                    <span
                      className={`absolute bottom-0 left-0 h-px bg-[#168BFF] transition-all duration-300 ${
                        currentLanguage === language ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/15 pt-7 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-[13px]">
          <p>
            © {currentYear} Ernest Makarov
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7">
            <p>{t("footer.madeWith")}</p>

            <Link
              to="/privacy-policy"
              className="text-[#168BFF] transition-colors duration-300 hover:text-[#51A5FF]"
            >
              {t("footer.privacy")}
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-3 text-white/55 transition-colors duration-300 hover:text-white"
          >
            {t("footer.toTop")}
            <UpArrow />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;