import SEO from "../../components/ui/SEO.jsx";
import PageHero from "../../components/ui/PageHero.jsx";

import WorkProjects from "./WorkProjects.jsx";

function Work() {
  return (
    <>
      <SEO namespace="work" path="/work" />

      <main>
        <PageHero page="work" />
        <WorkProjects />
      </main>
    </>
  );
}

export default Work;
