import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

import "aos/dist/aos.css";

function AosController() {
  const location = useLocation();
  const initializedRef = useRef(false);

  useEffect(() => {
    // Не даём React StrictMode повторно инициализировать AOS
    if (initializedRef.current) return;

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 70,
      delay: 0,
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
      debounceDelay: 50,
      throttleDelay: 99,
      disableMutationObserver: false,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    initializedRef.current = true;
  }, []);

  useEffect(() => {
    let cancelled = false;
    let firstFrame = 0;
    let secondFrame = 0;
    let firstTimeout = 0;
    let secondTimeout = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * Если у пользователя отключены анимации,
     * принудительно показываем все элементы.
     */
    if (prefersReducedMotion) {
      document.querySelectorAll("[data-aos]").forEach((element) => {
        element.classList.add("aos-init", "aos-animate");
      });

      return undefined;
    }

    const refreshAos = (hard = false) => {
      if (cancelled) return;

      if (hard) {
        AOS.refreshHard();
      } else {
        AOS.refresh();
      }

      /*
       * Заставляет AOS сразу проверить,
       * какие элементы находятся во viewport.
       */
      window.dispatchEvent(new Event("scroll"));
    };

    /*
     * Для элементов, которые остаются между страницами,
     * перезапускаем анимацию.
     */
    document.querySelectorAll("[data-aos]").forEach((element) => {
      element.classList.remove("aos-animate");
    });

    /*
     * Два requestAnimationFrame гарантируют,
     * что React уже отрисовал новую страницу.
     */
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        refreshAos(true);
      });
    });

    /*
     * Повторная проверка после рендера компонентов.
     */
    firstTimeout = window.setTimeout(() => {
      refreshAos(true);
    }, 180);

    /*
     * Финальная проверка после загрузки большей части контента.
     */
    secondTimeout = window.setTimeout(() => {
      refreshAos(false);
    }, 600);

    /*
     * Обновляем позиции после загрузки изображений,
     * потому что они могут менять высоту страницы.
     */
    const pendingImages = Array.from(document.images).filter(
      (image) => !image.complete,
    );

    const handleImageLoad = () => {
      refreshAos(false);
    };

    pendingImages.forEach((image) => {
      image.addEventListener("load", handleImageLoad);
      image.addEventListener("error", handleImageLoad);
    });

    /*
     * Пересчитываем позиции после загрузки шрифтов.
     */
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        refreshAos(false);
      });
    }

    return () => {
      cancelled = true;

      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(firstTimeout);
      window.clearTimeout(secondTimeout);

      pendingImages.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
        image.removeEventListener("error", handleImageLoad);
      });
    };
  }, [location.key, location.pathname, location.search]);

  return null;
}

export default AosController;