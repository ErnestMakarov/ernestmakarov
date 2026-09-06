import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

import "aos/dist/aos.css";

function AosController() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 70,
      delay: 0,
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      AOS.refreshHard();
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [location.pathname]);

  return null;
}

export default AosController;