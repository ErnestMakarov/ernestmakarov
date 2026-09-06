import { useTranslation } from "react-i18next";

import ProjectChatPhone from "../../components/ui/ProjectChatPhone";

const contactMethods = [
  {
    id: "email",
    href: "mailto:ernestmakarov.ee@gmail.com",
    value: "ernestmakarov.ee@gmail.com",
  },
  {
    id: "telegram",
    href: "https://t.me/ernestmakarov",
    value: "@ernestmakarov",
    external: true,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/37255987255",
    value: "+372 5598 7255",
    external: true,
  },
  {
    id: "instagram",
    href: "https://instagram.com/ernestmakarov.ee",
    value: "@ernestmakarov.ee",
    external: true,
  },
  {
    id: "phone",
    href: "tel:+37255987255",
    value: "+372 5598 7255",
  },
];

const briefItems = ["task", "deadline", "contact"];

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 30 12" fill="none" aria-hidden="true" className={className}>
      <path d="M1 6h27M23 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className: "h-6 w-6",
  };

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m4 6 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg {...common}>
        <path d="m21 3-4.1 18-5.6-5.1-3.2 3 .7-5.8L19.4 5 6.2 12.1 2 10.7 21 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.2 11.8a8.1 8.1 0 0 1-11.9 7.1L3 20.3l1.4-5.1a8.1 8.1 0 1 1 15.8-3.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.4 7.8c.3-.5.7-.5 1-.2l1 1.8c.2.3.1.6-.1.9l-.7.7c.8 1.7 2 2.8 3.7 3.6l.7-.8c.2-.3.6-.3.9-.2l1.8.9c.4.2.5.6.3 1-.4 1-1.2 1.6-2.3 1.6-3.7-.2-7.6-3.8-7.7-7.5 0-.7.5-1.4 1.4-1.8Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.4" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7.2 3.4 4.4 5.1c-1.2.8-.7 4.4 1.9 8.4 2.7 4 5.6 6.2 6.9 5.5l2.8-1.7c.6-.4.8-1.2.4-1.8l-1.8-2.8a1.3 1.3 0 0 0-1.8-.4l-1.3.8a13 13 0 0 1-2.8-4.2l1.3-.8c.6-.4.8-1.2.4-1.8L9 3.8a1.3 1.3 0 0 0-1.8-.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactContent() {
  const { t } = useTranslation("contacts");

  return (
    <>
      <section className="overflow-x-clip bg-[#F6F5F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-9 lg:py-36">
        <div className="mx-auto w-full max-w-[1460px] border-t border-black/[0.16] pt-12 sm:pt-16 lg:pt-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-semibold tracking-[0.16em] text-[#0768F8]">02</span>
                <span className="h-px w-6 bg-black/15" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#777] sm:text-[11px]">
                  {t("contact.eyebrow")}
                </span>
              </div>

              <h2 className="mt-8 font-['Oswald'] text-[clamp(52px,11vw,78px)] font-medium leading-[1.01] tracking-[-0.04em] text-[#111] sm:text-[88px] lg:text-[96px]">
                <span className="block">{t("contact.title.first")}</span>
                <span className="block text-[#0768F8]">{t("contact.title.second")}</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 pb-2 lg:pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#20B867] shadow-[0_0_0_5px_rgba(32,184,103,0.1)]" />
              <p className="text-[13px] leading-[1.5] text-[#666] sm:text-[14px]">
                {t("contact.status")}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20 xl:gap-28">
            <div id="project-chat" className="relative scroll-mt-28 py-8 sm:py-12">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0768F8]/10" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0768F8]/10" />
              <div className="pointer-events-none absolute left-[6%] top-[21%] h-px w-[30%] bg-[#0768F8]/15" />
              <div className="pointer-events-none absolute right-[4%] top-[35%] h-2 w-2 bg-[#0768F8]" />
              <div className="pointer-events-none absolute bottom-[19%] left-[3%] h-2 w-2 bg-[#0768F8]" />
              <ProjectChatPhone className="relative z-10 w-[min(88vw,390px)]" />
            </div>

            <div className="min-w-0 border-t border-black/[0.15]">
              {contactMethods.map((method) => (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                  className="group grid min-h-[128px] grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-black/[0.13] py-6 transition-colors duration-300 hover:bg-white/35 sm:grid-cols-[54px_1fr_auto] sm:gap-6 sm:px-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#222] transition duration-300 group-hover:border-[#0768F8] group-hover:text-[#0768F8] sm:h-12 sm:w-12">
                    <ContactIcon type={method.id} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[16px] font-semibold tracking-[-0.02em] text-[#222] sm:text-[18px]">
                      {t(`contact.methods.${method.id}.name`)}
                    </span>
                    <span className="mt-1.5 block text-[12px] leading-[1.55] text-[#777] sm:text-[13px]">
                      {t(`contact.methods.${method.id}.description`)}
                    </span>
                    <span className="mt-2 block break-all text-[12px] font-medium text-[#0768F8] sm:text-[13px]">
                      {method.value}
                    </span>
                  </span>

                  <span className="flex items-center gap-4 pl-2 text-[12px] font-medium text-[#333] sm:text-[13px]">
                    <span className="hidden lg:inline">{t(`contact.methods.${method.id}.action`)}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0768F8] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                        <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </a>
              ))}

              <div className="mt-8 border-l-2 border-[#0768F8] py-1 pl-6 sm:pl-8">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#20B867]" />
                  <h3 className="text-[15px] font-semibold text-[#222] sm:text-[16px]">
                    {t("contact.personal.title")}
                  </h3>
                </div>
                <p className="mt-3 max-w-[590px] text-[13px] leading-[1.7] text-[#777] sm:text-[14px]">
                  {t("contact.personal.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip bg-[#F6F5F2] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-9 lg:pb-36">
        <div className="mx-auto w-full max-w-[1460px] border-y border-black/[0.16] py-12 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-semibold tracking-[0.16em] text-[#0768F8]">03</span>
                <span className="h-px w-6 bg-black/15" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#777] sm:text-[11px]">
                  {t("brief.eyebrow")}
                </span>
              </div>

              <h2 className="mt-8 font-['Oswald'] text-[clamp(50px,10vw,72px)] font-medium leading-[1.01] tracking-[-0.035em] text-[#111] sm:text-[80px] lg:text-[88px]">
                <span className="block">{t("brief.title.first")}</span>
                <span className="block">{t("brief.title.second")}</span>
              </h2>
            </div>

            <ol className="grid border-t border-black/[0.14] sm:grid-cols-3">
              {briefItems.map((item, index) => (
                <li
                  key={item}
                  className={`min-h-[250px] py-7 sm:min-h-[320px] sm:px-7 sm:py-8 lg:px-9 ${
                    index > 0 ? "border-t border-black/[0.12] sm:border-l sm:border-t-0" : ""
                  }`}
                >
                  <span className="text-[12px] font-semibold tracking-[0.16em] text-[#0768F8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-16 text-[19px] font-semibold tracking-[-0.02em] text-[#222] sm:mt-24 sm:text-[21px]">
                    {t(`brief.items.${item}.title`)}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.7] text-[#777] sm:text-[14px]">
                    {t(`brief.items.${item}.description`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-black/[0.13] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[700px] text-[13px] leading-[1.65] text-[#777] sm:text-[14px]">
              {t("brief.note")}
            </p>

            <a
              href="#project-chat"
              className="group inline-flex w-fit shrink-0 items-center gap-6 text-[15px] font-medium text-[#0057FF] transition-colors duration-300 hover:text-[#0049D4] sm:text-[16px]"
            >
              {t("brief.action")}
              <ArrowIcon className="h-3 w-[30px] transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactContent;
