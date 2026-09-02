import HomeHero from "./HomeHero.jsx";
import HomeProjects from "./HomeProjects.jsx";
import HomeProcess from "./HomeProcess.jsx";
import HomeContact from "./HomeContact.jsx";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeProjects />
      <HomeProcess />
      <HomeContact />
    </main>
  );
}

export default HomePage;