import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initIntro = () => {
  const tl = gsap.timeline();

  // gsap.fromTo(
  //   ".text h1",
  //   { yPercent: 110 },
  //   {
  //     duration: 0.8,
  //     stagger: 0.08,
  //     yPercent: 0,
  //   }
  // );

  // gsap.to(".text", {
  //   x: 100,
  // });

  // gsap.to(".image", {
  //   x: -100,
  // });
};

const initHobbies = () => {
  // gsap.fromTo(
  //   "#hobbies h1",
  //   { x: -100, opacity: 0 },
  //   {
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: "#hobbies",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: 1,
  //       markers: true,
  //     },
  //   }
  // );
  // gsap.fromTo(
  //   "#hobbies .image",
  //   { x: 100, opacity: 0 },
  //   {
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: "#hobbies",
  //       start: "center center",
  //       toggleActions: "play none none reverse",
  //     },
  //   }
  // );
};

// gsap.to("#text h1", {
//   scrollTrigger: {
//     start: "top center",
//     end: "bottom center",
//     markers: true,
//   },
// });

// gsap.utils.toArray(".animate").forEach((el) => {
//   gsap.fromTo(
//     el as HTMLElement,
//     { y: 100, opacity: 0 },
//     {
//       y: 0,
//       opacity: 1,
//       duration: 1,
//       scrollTrigger: {
//         trigger: el as HTMLElement,
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     }
//   );
// });

initIntro();
initHobbies();
