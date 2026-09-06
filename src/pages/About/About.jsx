import SEO from "../../components/ui/SEO.jsx";
import PageHero from "../../components/ui/PageHero.jsx";

import AboutContent from "./AboutContent.jsx";

function About() {
  return (
    <>
      <SEO namespace="about" path="/about" />

      <main>
        <PageHero page="about" />
        <AboutContent />
      </main>
    </>
  );
}

export default About;
