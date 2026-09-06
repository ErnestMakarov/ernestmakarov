import SEO from "../../components/ui/SEO.jsx";
import PageHero from "../../components/ui/PageHero.jsx";

import ContactContent from "./ContactContent.jsx";

function Contacts() {
  return (
    <>
      <SEO namespace="contacts" path="/contacts" />

      <main>
        <PageHero page="contacts" />
        <ContactContent />
      </main>
    </>
  );
}

export default Contacts;
