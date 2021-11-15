const countOnContainer = document.querySelector(".count_on_container");
const countOffContainer = document.querySelector(".count_off_container");

// get the timestamp of desired date from https://www.epochconverter.com/ and paste it as first parameter of Flipdown()
// new FlipDown(1633602600, {
//   headings: ["DAYS", "HRS", "MIN", "SEC"],
//   theme: "dark",
// })
//   .start()
//   .ifEnded(() => {
//     countOnContainer.classList.add("hidden_ut");
//     countOffContainer.classList.add("display_ut");
//   });

// Scroll anim
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".top_div");
ScrollTrigger.create({
  trigger: ".top_div",
  start: "top top",
  end: "bottom -20%",
  //   end: () => `+=${document.querySelector(".top_div").offsetHeight}`,
  //   end: "bottom 50px",
  pin: ".top_div",
  scrub: true,
  pinSpacing: false,
  // markers: true,
});
ScrollTrigger.create({
  trigger: ".panda_div",
  start: "top top",
  end: "bottom 50px",
  scrub: true,
  pin: ".panda_div",
  pinSpacing: false,
  // markers: true,
});
// panda
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".panda_div",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});
tl.from(".anim_eyes", { y: innerHeight * 1 })
  .from(".anim_eyeband", { y: innerHeight * 1 })
  .from(".anim_jacket", { y: innerHeight * 1 })
  .from(".anim_crown", { y: innerHeight * 1 });
