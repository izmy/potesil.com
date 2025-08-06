import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // 1. pokud je hash → rovnou na něj skočíme
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      gsap.to(window, { duration: 0, scrollTo: { y: target } });
    }
  }

  // 2. vytvoříme triggery s blokováním prvního volání
  document.querySelectorAll<HTMLElement>("section").forEach((section) => {
    let initialized = false;

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      onEnter: () => {
        if (!initialized) {
          initialized = true; // ignorujeme první enter
          return;
        }
        history.replaceState(null, "", `#${section.id}`);
      },
      onEnterBack: () => {
        if (!initialized) {
          initialized = true; // ignorujeme první enterBack
          return;
        }
        history.replaceState(null, "", `#${section.id}`);
      },
    });
  });

  ScrollTrigger.refresh();
});
