import SEO from "../../components/ui/SEO.jsx";
import PageHero from "../../components/ui/PageHero.jsx";

import ServicesCatalog from "./ServicesCatalog.jsx";

function Services() {
  return (
    <>
      <SEO namespace="services" path="/services" />

      <main>
        <PageHero page="services" />
        <ServicesCatalog />
      </main>
    </>
  );
}

export default Services;
