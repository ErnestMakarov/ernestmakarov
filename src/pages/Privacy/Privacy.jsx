import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import SEO from "../../components/ui/SEO.jsx";

const asArray = (value) => (Array.isArray(value) ? value : []);

function Privacy() {
  const { t } = useTranslation("privacy");
  const sections = asArray(t("sections", { returnObjects: true }));

  return (
    <>
      <SEO namespace="privacy" path="/privacy-policy" />

      <main className="overflow-hidden bg-[#F6F5F2] text-[#111]">
        <section className="relative border-b border-black/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(0,87,255,0.09),transparent_34%)]" />

          <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-9 lg:pb-24 lg:pt-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0057FF] sm:text-[11px]">
              {t("eyebrow")}
            </p>

            <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20">
              <div>
                <h1 className="max-w-[980px] font-['Oswald'] text-[clamp(48px,7vw,106px)] font-medium uppercase leading-[1.02] tracking-[-0.035em]">
                  {t("title")}
                  <span className="text-[#0057FF]">.</span>
                </h1>

                <p className="mt-7 max-w-[780px] text-[15px] leading-[1.7] text-[#5F5F5F] sm:text-[17px]">
                  {t("intro")}
                </p>
              </div>

              <div className="border-l-2 border-[#0057FF] pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777]">
                  {t("updatedLabel")}
                </p>
                <time
                  dateTime="2026-09-10"
                  className="mt-2 block text-[15px] font-medium text-[#222]"
                >
                  {t("updatedDate")}
                </time>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[270px_minmax(0,850px)] lg:justify-between lg:gap-20 lg:px-9 lg:py-24">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                {t("contents")}
              </p>

              <nav className="mt-5 border-t border-black/10" aria-label={t("contents")}>
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex gap-4 border-b border-black/10 py-3.5 text-[12px] leading-[1.4] text-[#626262] transition hover:text-[#0057FF]"
                  >
                    <span className="font-medium text-[#0057FF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.shortTitle || section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="rounded-[2px] border border-[#0057FF]/25 bg-[#0057FF]/[0.045] p-5 sm:p-7">
              <p className="text-[14px] leading-[1.7] text-[#333] sm:text-[15px]">
                {t("summary")}
              </p>
            </div>

            <div className="mt-4">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-black/10 py-10 sm:py-12"
                >
                  <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                    <span className="font-['Oswald'] text-[28px] font-medium text-[#0057FF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2 className="font-['Oswald'] text-[clamp(30px,4vw,46px)] font-medium uppercase leading-[1.08] tracking-[-0.02em]">
                        {section.title}
                      </h2>

                      <div className="mt-6 space-y-4">
                        {asArray(section.paragraphs).map((paragraph, paragraphIndex) => (
                          <p
                            key={`${section.id}-paragraph-${paragraphIndex}`}
                            className="text-[14px] leading-[1.75] text-[#555] sm:text-[15px]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {asArray(section.items).length > 0 && (
                        <ul className="mt-6 grid gap-3">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={`${section.id}-item-${itemIndex}`}
                              className="flex gap-3 text-[14px] leading-[1.7] text-[#444] sm:text-[15px]"
                            >
                              <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 bg-[#0057FF]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {asArray(section.contacts).length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                          {section.contacts.map((contact) => (
                            <a
                              key={contact.href}
                              href={contact.href}
                              className="text-[14px] font-medium text-[#0057FF] underline decoration-[#0057FF]/25 underline-offset-4 transition hover:decoration-[#0057FF]"
                            >
                              {contact.label}: {contact.value}
                            </a>
                          ))}
                        </div>
                      )}

                      {asArray(section.links).length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                          {section.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0057FF] transition hover:text-[#0046CC]"
                            >
                              {link.label}
                              <span aria-hidden="true">↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-black/10 bg-white/35 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#777]">
                  {t("question.eyebrow")}
                </p>
                <p className="mt-2 text-[16px] font-medium text-[#222]">
                  {t("question.text")}
                </p>
              </div>

              <Link
                to="/contacts"
                className="group inline-flex items-center gap-4 text-[14px] font-medium text-[#0057FF]"
              >
                {t("question.action")}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default Privacy;
