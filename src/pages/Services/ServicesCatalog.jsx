import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "landing",
    number: "01",
    icon: "landing",
  },
  {
    id: "multipage",
    number: "02",
    icon: "multipage",
  },
  {
    id: "store",
    number: "03",
    icon: "store",
    featured: true,
  },
  {
    id: "readyDesign",
    number: "04",
    icon: "development",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 6h19M15 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIllustration({ type, featured = false, className = "" }) {
  const lineColor = featured ? "rgba(255,255,255,0.35)" : "rgba(22,31,45,0.24)";
  const softColor = featured ? "rgba(255,255,255,0.1)" : "rgba(0,87,255,0.05)";

  if (type === "landing") {
    return (
      <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden="true">
        <rect x="25" y="19" width="158" height="121" stroke={lineColor} />
        <path d="M25 45h158" stroke={lineColor} />
        <circle cx="37" cy="32" r="2.5" fill="#0057FF" />
        <circle cx="47" cy="32" r="2.5" fill={lineColor} />
        <circle cx="57" cy="32" r="2.5" fill={lineColor} />
        <rect x="44" y="63" width="72" height="5" fill={softColor} stroke={lineColor} />
        <path d="M44 80h91M44 90h74" stroke={lineColor} />
        <rect x="44" y="106" width="37" height="14" fill="#0057FF" fillOpacity="0.9" />
        <path d="M183 83h21M193.5 72v22" stroke="#0057FF" />
        <rect x="179" y="68" width="8" height="8" fill="#0057FF" />
        <rect x="200" y="90" width="5" height="5" fill="#0057FF" />
      </svg>
    );
  }

  if (type === "multipage") {
    return (
      <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden="true">
        <rect x="44" y="30" width="135" height="94" fill={softColor} stroke={lineColor} />
        <rect x="34" y="40" width="135" height="94" fill={featured ? "#071426" : "#F6F5F2"} stroke={lineColor} />
        <rect x="24" y="50" width="135" height="94" fill={featured ? "#071426" : "#F6F5F2"} stroke={lineColor} />
        <path d="M24 73h135" stroke={lineColor} />
        <rect x="39" y="88" width="38" height="33" fill={softColor} stroke={lineColor} />
        <path d="M91 90h48M91 101h38M91 112h43" stroke={lineColor} />
        <circle cx="34" cy="61.5" r="2.5" fill="#0057FF" />
        <rect x="19" y="45" width="7" height="7" fill="#0057FF" />
        <rect x="155" y="140" width="7" height="7" fill="#0057FF" />
        <path d="M159 125v18M159 143h20" stroke="#0057FF" />
      </svg>
    );
  }

  if (type === "store") {
    return (
      <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden="true">
        <path d="M28 33h17l15 69h91l18-49H52" stroke="#126BFF" strokeWidth="1.5" />
        <path d="M61 63h96M66 78h85M72 92h73" stroke={lineColor} />
        <path d="M82 53v49M108 53v49M135 53l-7 49" stroke={lineColor} />
        <circle cx="76" cy="124" r="10" stroke="#126BFF" />
        <circle cx="139" cy="124" r="10" stroke="#126BFF" />
        <circle cx="76" cy="124" r="3" fill="#126BFF" />
        <circle cx="139" cy="124" r="3" fill="#126BFF" />
        <rect x="49" y="48" width="7" height="7" fill="#126BFF" />
        <rect x="164" y="48" width="7" height="7" fill="#126BFF" />
        <path d="M180 91h20M190 81v20" stroke="#126BFF" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden="true">
      <rect x="30" y="24" width="158" height="115" fill={softColor} stroke={lineColor} />
      <path d="M30 48h158" stroke={lineColor} />
      <circle cx="42" cy="36" r="2.5" fill="#0057FF" />
      <circle cx="52" cy="36" r="2.5" fill={lineColor} />
      <circle cx="62" cy="36" r="2.5" fill={lineColor} />
      <path d="m79 72-15 15 15 15M125 72l15 15-15 15M113 64 91 110" stroke={lineColor} strokeWidth="1.4" />
      <path d="M65 119h74" stroke={lineColor} />
      <rect x="26" y="20" width="7" height="7" fill="#0057FF" />
      <rect x="184" y="135" width="7" height="7" fill="#0057FF" />
      <path d="M188 113v26M188 139h18" stroke="#0057FF" />
    </svg>
  );
}

function RepairIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 360 190" fill="none" className={className} aria-hidden="true">
      <rect x="15" y="19" width="328" height="152" stroke="rgba(22,31,45,0.2)" />
      <path d="M15 48h328" stroke="rgba(22,31,45,0.2)" />
      <circle cx="31" cy="33.5" r="3" fill="#0057FF" />
      <circle cx="43" cy="33.5" r="3" fill="rgba(22,31,45,0.2)" />
      <circle cx="55" cy="33.5" r="3" fill="rgba(22,31,45,0.2)" />
      <circle cx="117" cy="109" r="40" fill="rgba(0,87,255,0.04)" stroke="rgba(22,31,45,0.2)" />
      <path d="M117 109 142 84M83 109h8M143 109h8M117 75v8" stroke="rgba(22,31,45,0.3)" />
      <circle cx="117" cy="109" r="6" fill="#0057FF" />
      <path d="M200 135c13-32 30-44 50-34 20 10 23-30 57-19" stroke="#0057FF" />
      <circle cx="200" cy="135" r="13" fill="#F6F5F2" stroke="rgba(22,31,45,0.2)" />
      <circle cx="250" cy="101" r="13" fill="#F6F5F2" stroke="rgba(22,31,45,0.2)" />
      <circle cx="307" cy="82" r="13" fill="#F6F5F2" stroke="rgba(22,31,45,0.2)" />
      <path d="m194 135 4 4 8-9M244 101l4 4 8-9M301 82l4 4 8-9" stroke="#0057FF" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="11" y="15" width="8" height="8" fill="#0057FF" />
      <rect x="339" y="167" width="8" height="8" fill="#0057FF" />
    </svg>
  );
}

function ServiceCard({ service }) {
  const { t } = useTranslation("services");
  const features = t(`items.${service.id}.features`, { returnObjects: true });
  const featureItems = Array.isArray(features) ? features : [];
  const featured = service.featured;

  return (
    <article
      data-aos="fade-up"
      className={`group flex min-h-[590px] flex-col border p-6 transition-all duration-500 sm:p-8 lg:min-h-[640px] lg:p-10 ${
        featured
          ? "border-[#102B50] bg-[#071426] text-white shadow-[0_28px_70px_rgba(4,15,31,0.2)]"
          : "border-black/[0.14] bg-[#F8F7F4] text-[#111] hover:border-black/30 hover:shadow-[0_24px_70px_rgba(29,35,45,0.07)]"
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <span className="text-[13px] font-semibold tracking-[0.14em] text-[#086BFF]">
          {service.number}
        </span>

        {featured && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1475FF] sm:text-[11px]">
            {t("items.store.badge")}
          </span>
        )}
      </div>

      <div className="mt-8 min-h-[152px] sm:mt-10">
        <h2 className="max-w-[580px] font-['Oswald'] text-[clamp(37px,8vw,52px)] font-medium leading-[1.04] tracking-[-0.025em] sm:text-[52px] lg:text-[58px]">
          {t(`items.${service.id}.title`)}
        </h2>

        <p className={`mt-5 max-w-[470px] text-[14px] leading-[1.65] sm:text-[15px] ${featured ? "text-white/58" : "text-[#666]"}`}>
          {t(`items.${service.id}.description`)}
        </p>
      </div>

      <div className={`mt-7 grid grid-cols-[1fr_auto] items-end gap-6 border-y py-5 sm:py-6 ${featured ? "border-white/15" : "border-black/10"}`}>
        <div>
          <span className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${featured ? "text-white/40" : "text-[#888]"}`}>
            {t("labels.price")}
          </span>
          <p className="mt-2 font-['Oswald'] text-[35px] font-medium leading-none tracking-[-0.025em] sm:text-[42px]">
            {t(`items.${service.id}.price`)}
          </p>
        </div>

        <div className="text-right">
          <span className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${featured ? "text-white/40" : "text-[#888]"}`}>
            {t("labels.time")}
          </span>
          <p className={`mt-2 text-[14px] font-medium sm:text-[15px] ${featured ? "text-white/78" : "text-[#333]"}`}>
            {t(`items.${service.id}.duration`)}
          </p>
        </div>
      </div>

      <div className="mt-7 grid flex-1 gap-7 sm:grid-cols-[150px_1fr] sm:items-center sm:gap-8 lg:grid-cols-[170px_1fr]">
        <ServiceIllustration
          type={service.icon}
          featured={featured}
          className="h-auto w-[155px] transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.025] sm:w-full"
        />

        <ul className={`space-y-3 border-l pl-5 sm:pl-7 ${featured ? "border-white/15" : "border-black/10"}`}>
          {featureItems.map((feature) => (
            <li key={feature} className={`flex gap-3 text-[13px] leading-[1.5] sm:text-[14px] ${featured ? "text-white/68" : "text-[#555]"}`}>
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[#086BFF]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/contacts"
        className="mt-8 inline-flex w-fit items-center gap-5 text-[14px] font-medium text-[#086BFF] transition-colors duration-300 hover:text-[#0052CE]"
      >
        {t(`items.${service.id}.action`)}
        <ArrowIcon className="h-3 w-[22px] transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

function ServicesCatalog() {
  const { t } = useTranslation("services");
  const repairFeatures = t("repair.features", { returnObjects: true });
  const featureItems = Array.isArray(repairFeatures) ? repairFeatures : [];

  return (
    <section className="bg-[#F6F5F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-9 lg:py-36">
      <div className="mx-auto w-full max-w-[1460px]">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <article className="group relative mt-6 overflow-hidden border border-[#0057FF]/35 bg-[linear-gradient(115deg,#F8F8F6_0%,#F3F6FC_100%)] p-6 shadow-[inset_0_2px_0_#0057FF] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-28 -top-32 h-[380px] w-[380px] rounded-full border border-[#0057FF]/10 transition-transform duration-700 group-hover:scale-110" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.8fr_0.85fr] lg:items-center lg:gap-12">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[13px] font-semibold tracking-[0.14em] text-[#0057FF]">05</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0057FF] sm:text-[11px]">
                  {t("repair.eyebrow")}
                </span>
              </div>

              <h2 className="mt-8 max-w-[620px] font-['Oswald'] text-[clamp(40px,8vw,58px)] font-medium leading-[1.04] tracking-[-0.03em] text-[#111] lg:text-[62px]">
                {t("repair.title")}
              </h2>

              <p className="mt-5 max-w-[520px] text-[14px] leading-[1.65] text-[#666] sm:text-[15px]">
                {t("repair.description")}
              </p>

              <div className="mt-8 flex items-end gap-12 border-t border-black/10 pt-6">
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#888]">
                    {t("labels.price")}
                  </span>
                  <p className="mt-2 font-['Oswald'] text-[38px] font-medium leading-none text-[#111]">
                    {t("repair.price")}
                  </p>
                </div>

                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#888]">
                    {t("labels.time")}
                  </span>
                  <p className="mt-2 text-[14px] font-medium text-[#333]">
                    {t("repair.duration")}
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 border-l border-black/10 pl-6 sm:pl-8">
              {featureItems.map((feature) => (
                <li key={feature} className="flex gap-4 text-[13px] leading-[1.55] text-[#555] sm:text-[14px]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[#0057FF]" />
                  {feature}
                </li>
              ))}
            </ul>

            <RepairIllustration className="h-auto w-full max-w-[390px] justify-self-center transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02]" />
          </div>

          <div className="relative mt-10 flex flex-col gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/contacts"
              className="inline-flex w-fit items-center gap-5 text-[14px] font-medium text-[#0057FF] transition-colors hover:text-[#0047CE]"
            >
              {t("repair.action")}
              <ArrowIcon className="h-3 w-[22px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <p className="max-w-[440px] text-[12px] leading-[1.6] text-[#777] sm:text-right sm:text-[13px]">
              {t("repair.note")}
            </p>
          </div>
        </article>

        <div className="mt-10 flex flex-col gap-6 border-t border-black/15 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p className="max-w-[720px] text-[14px] leading-[1.65] text-[#555] sm:text-[15px]">
            {t("custom.description")}
          </p>

          <Link
            to="/contacts"
            className="group/custom inline-flex shrink-0 items-center gap-6 text-[14px] font-medium text-[#0057FF]"
          >
            {t("custom.action")}
            <ArrowIcon className="h-3 w-[28px] transition-transform duration-300 group-hover/custom:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesCatalog;
