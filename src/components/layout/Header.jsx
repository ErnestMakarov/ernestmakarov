import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const navigation = [
  { key: "home", path: "/" },
  { key: "work", path: "/work" },
  { key: "services", path: "/services" },
  { key: "process", path: "/process" },
  { key: "about", path: "/about" },
  { key: "contacts", path: "/contacts" },
];

const languages = ["et", "en", "ru"];

function Header() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLanguage = i18n.resolvedLanguage?.split("-")[0] || "ru";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#F6F5F2]/70 shadow-[0_8px_32px_rgba(17,24,39,0.045)] backdrop-blur-2xl backdrop-saturate-150 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/80 supports-[backdrop-filter]:bg-[#F6F5F2]/60">
      <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:px-9">
        <NavLink
          to="/"
          aria-label={t("header.logoLabel")}
          className="relative z-50 w-fit font-['Oswald'] text-[22px] font-semibold uppercase leading-none tracking-[0.045em] text-[#111]"
        >
          Ernest Makarov
        </NavLink>

        <nav className="hidden items-center gap-10 xl:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-[14px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#0057FF]"
                    : "text-[#2E2E2E] hover:text-[#0057FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(`navigation.${item.key}`)}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#0057FF] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-8 xl:flex">
          <div className="flex items-center gap-5">
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => changeLanguage(language)}
                aria-label={`${t("header.changeLanguage")} ${language.toUpperCase()}`}
                className={`relative py-2 text-[12px] font-medium uppercase transition-colors duration-300 ${
                  currentLanguage === language
                    ? "text-[#0057FF]"
                    : "text-[#333] hover:text-[#0057FF]"
                }`}
              >
                {language}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#0057FF] transition-all duration-300 ${
                    currentLanguage === language ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <NavLink
            to="/contacts"
            className="group flex h-12 items-center gap-3 bg-[#0057FF] px-6 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#0048D8] hover:shadow-[0_12px_30px_rgba(0,87,255,0.22)]"
          >
            {t("header.discussProject")}

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
          </NavLink>
        </div>

        <button
          type="button"
          aria-label={
            isMenuOpen ? t("header.closeMenu") : t("header.openMenu")
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="relative z-50 flex h-11 w-11 items-center justify-center xl:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-6 bg-[#111] transition-all duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-[1.5px] bg-[#111] transition-all duration-300 ${
                isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
            />

            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#111] transition-all duration-300 ${
                isMenuOpen
                  ? "w-6 -translate-y-[7px] -rotate-45"
                  : "w-4 translate-x-2"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto bg-[#F6F5F2] transition-all duration-500 xl:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex min-h-full flex-col px-5 pb-7 pt-7 sm:px-8">
          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between border-b border-black/10 py-4 font-['Oswald'] text-[clamp(32px,9vw,48px)] font-medium uppercase leading-none transition-colors duration-300 ${
                    isActive
                      ? "text-[#0057FF]"
                      : "text-[#111] hover:text-[#0057FF]"
                  }`
                }
              >
                <span>{t(`navigation.${item.key}`)}</span>

                <span className="self-start pt-1 font-sans text-[10px] font-medium tracking-[0.16em] text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <div className="mb-6 flex items-center gap-6">
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => changeLanguage(language)}
                  className={`border-b-2 pb-1 text-[13px] font-medium uppercase transition-colors duration-300 ${
                    currentLanguage === language
                      ? "border-[#0057FF] text-[#0057FF]"
                      : "border-transparent text-[#555]"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>

            <NavLink
              to="/contacts"
              className="group flex h-14 w-full items-center justify-between bg-[#0057FF] px-5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[#0048D8]"
            >
              {t("header.discussProject")}

              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M4 12 12 4M6 4h6v6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;