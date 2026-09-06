import SEO from "../../components/ui/SEO.jsx";
import PageHero from "../../components/ui/PageHero.jsx";

import ProcessContent from "./ProcessContent.jsx";

function Process() {
  return (
    <>
      <SEO namespace="process" path="/process" />

      <main>
        <PageHero page="process" />
        <ProcessContent />
      </main>
    </>
  );
}

export default Process;
