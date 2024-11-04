const searchAnimation = gsap.to(".search", {
  x: -20,
  opacity: 1,
  paused: true,
  duration: 0.4,
});
let isComplete = false;

const icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  if (isComplete) {
    searchAnimation.reverse();
  } else {
    searchAnimation.play();
  }
  isComplete = !isComplete;
});

let isSee = false;
const tl = gsap.timeline({ paused: true });
tl.to(".container", {
  x: 140,
}).to(
  ".back-container",
  {
    x: -70,
  },
  "<"
);

const menu = document.querySelector(".menu-icon");
menu.addEventListener("click", () => {
  if (isSee) {
    tl.reverse();
  } else {
    tl.play();
  }
  isSee = !isSee;
});

gsap.fromTo(
  ".contents > *",
  {
    y: 40,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
  }
);
