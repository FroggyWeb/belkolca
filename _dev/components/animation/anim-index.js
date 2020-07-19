import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function createtl() {
  let t1 = gsap.timeline();
  return t1;
}

let intro = createtl();

intro
  .from(".intro .title__big", { x: 100, opacity: 0, duration: 1.5 })
  .from(".intro .title__sub", { x: -100, opacity: 0, duration: 1.5 }, 0)
  .from(".intro__znak", { opacity: 0 }, "-=.75")
  .from(".intro__btn", { opacity: 0, scale: 1.3 }, "-=1")
  .from(".intro__img", { opacity: 0, duration: 3 }, 0);

//animation title section
gsap.utils.toArray(".title:not(.intro__title)").forEach((title) => {
  let t1 = createtl();
  let titleBig = title.querySelector(".title__big");
  let titleSub = title.querySelector(".title__sub");
  t1.from(titleBig, {
    x: 50,
    opacity: 0,
    ease: "sine.in",
    duration: 0.6,
  });
  if (titleSub) {
    t1.from(
      titleSub,
      {
        x: -50,
        opacity: 0,
        ease: "sine.in",
        duration: 0.6,
      },
      "-=.4"
    );
  }
  ScrollTrigger.create({
    trigger: title,
    animation: t1,
  });
});

gsap.utils.toArray(".features").forEach((wrap) => {
  let item = wrap.querySelectorAll(".features__item");
  let pic = wrap.querySelectorAll(".features__icon");
  let t1 = createtl();
  gsap.set(item, { opacity: 0 });
  t1.to(item, {
    opacity: 1,
    stagger: {
      from: "edge",
      amount: 1,
    },
  })
    .to(pic, { scale: 1.2, duration: 0.3 })
    .to(pic, { scale: 1, duration: 0.3 });
  ScrollTrigger.create({
    trigger: wrap,
    animation: t1,
  });
});

// let gallery = createtl();
gsap.fromTo(
  ".photo-gall .slick-active div",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    delay: 0.25,
    stagger: {
      from: "random",
      amount: 0.5,
    },
    scrollTrigger: {
      trigger: ".photo-gall",
    },
  }
);
gsap.utils.toArray(".prod-item").forEach((wrap) => {
  let t1 = createtl();
  t1.fromTo(
    wrap,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: wrap,
      },
    }
  );
});
// gsap.utils.toArray(".features").forEach((wrap) => {
//   //test
// })
