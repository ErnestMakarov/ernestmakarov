import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://ernestmakarov.ee";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const localeMap = {
  et: "et_EE",
  en: "en_US",
  ru: "ru_RU",
};

const schemaTypeMap = {
  home: "WebPage",
  work: "CollectionPage",
  services: "WebPage",
  process: "WebPage",
  about: "ProfilePage",
  contacts: "ContactPage",
};

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

function SEO({ namespace, path = "/", noIndex = false }) {
  const { t, i18n } = useTranslation(namespace);

  const language = (i18n.resolvedLanguage || i18n.language || "et").split("-")[0];
  const title = t("seo.title");
  const description = t("seo.description");
  const canonicalPath = normalizePath(path);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const locale = localeMap[language] || localeMap.et;
  const alternateLocales = Object.entries(localeMap)
    .filter(([key]) => key !== language)
    .map(([, value]) => value);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Ernest Makarov",
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        jobTitle: "Frontend Developer",
        email: "mailto:ernestmakarov.ee@gmail.com",
        telephone: "+37255987255",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tallinn",
          addressCountry: "EE",
        },
        knowsLanguage: ["Estonian", "English", "Russian"],
        knowsAbout: [
          "Web Development",
          "Frontend Development",
          "React",
          "JavaScript",
          "Web Design",
        ],
        sameAs: ["https://github.com/ErnestMakarov"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Ernest Makarov",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: ["et", "en", "ru"],
      },
      {
        "@type": schemaTypeMap[namespace] || "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        image: DEFAULT_IMAGE,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        author: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: language,
      },
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="author" content="Ernest Makarov" />
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ernest Makarov" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:secure_url" content={DEFAULT_IMAGE} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale} />

      {alternateLocales.map((alternateLocale) => (
        <meta
          key={alternateLocale}
          property="og:locale:alternate"
          content={alternateLocale}
        />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content={title} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default SEO;
