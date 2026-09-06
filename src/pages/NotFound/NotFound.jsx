import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const content = {
  et: {
    eyebrow: "404 / LEHTE EI LEITUD",
    title: "Seda lehte\nei ole olemas.",
    description:
      "Aadress võib olla muutunud või leht eemaldatud. Tagasi avalehele jõuad ühe klikiga.",
    action: "Tagasi avalehele",
  },
  en: {
    eyebrow: "404 / PAGE NOT FOUND",
    title: "This page\ndoes not exist.",
    description:
      "The address may have changed or the page was removed. You can return home in one click.",
    action: "Back to homepage",
  },
  ru: {
    eyebrow: "404 / СТРАНИЦА НЕ НАЙДЕНА",
    title: "Такой страницы\nне существует.",
    description:
      "Возможно, адрес изменился или страница была удалена. Вернуться на главную можно одним кликом.",
    action: "Вернуться на главную",
  },
};

function ArrowIcon() {
  return (
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
  );
}

function NotFound() {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage || i18n.language || "et").split("-")[0];
  const copy = content[language] || content.et;

  return (
    <>
      <Helmet>
        <title>404 — Ernest Makarov</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden border-b border-black/10 px-5 py-20 sm:px-8 lg:px-9">
        <div className="pointer-events-none absolute right-[-12rem] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-[#0057FF]/10 sm:right-[-8rem] lg:right-[4vw] lg:h-[42rem] lg:w-[42rem]" />
        <div className="pointer-events-none absolute right-[-7rem] top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border border-[#0057FF]/10 sm:right-[-2rem] lg:right-[10vw] lg:h-[30rem] lg:w-[30rem]" />

        <div className="relative mx-auto w-full max-w-[1600px]">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0057FF] sm:text-[11px]">
            {copy.eyebrow}
          </p>

          <h1 className="max-w-[900px] whitespace-pre-line font-['Oswald'] text-[clamp(52px,10vw,132px)] font-medium uppercase leading-[0.9] tracking-[-0.04em] text-[#111]">
            {copy.title}
            <span className="text-[#0057FF]">.</span>
          </h1>

          <p className="mt-7 max-w-[520px] text-[15px] leading-[1.7] text-[#666] sm:text-[16px]">
            {copy.description}
          </p>

          <Link
            to="/"
            className="group mt-9 inline-flex items-center gap-5 text-[14px] font-medium text-[#0057FF] transition-colors duration-300 hover:text-[#0048D8]"
          >
            {copy.action}
            <ArrowIcon />
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
