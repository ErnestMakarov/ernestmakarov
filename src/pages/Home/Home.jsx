import SEO from "../../components/ui/SEO.jsx";

import HomeContact from "./HomeContact.jsx";
import HomeHero from "./HomeHero.jsx";
import HomeProcess from "./HomeProcess.jsx";
import HomeProjects from "./HomeProjects.jsx";

function Home() {
  return (
    <>
      <SEO namespace="home" path="/" />

      <main>
        <HomeHero />
        <HomeProjects />
        <HomeProcess />
        <HomeContact />
      </main>
    </>
  );
}

export default Home;
