import { gsap } from "gsap";
const intro = gsap.timeline();

intro
  // .from(".intro__img", 1.5, { opacity: 0 })
  .from(".title__big", { x: 100, opacity: 0, duration: 1.5 })
  .from(".title__sub", { x: -100, opacity: 0, duration: 1.5 }, 0)
  .from(".intro__znak", { opacity: 0 }, "-=.75")
  .from(".intro__btn", { opacity: 0, scale: 1.3 }, "-=1")
  .from(".intro__img", { opacity: 0, duration: 3 }, 0);
// .from(".intro__img", { opacity: 0, duration: 2 }, "-=2")
