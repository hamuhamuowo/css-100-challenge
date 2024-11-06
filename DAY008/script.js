const bubbleAnimations = [
  {
    element: ".bubble-1",
    duration: 2.7,
    delay: 0.2,
    transformOrigin: "37px 37px",
  },
  {
    element: ".bubble-2",
    duration: 2.9,
    delay: 0.4,
    transformOrigin: "34px 34px",
  },
  {
    element: ".bubble-3",
    duration: 3.1,
    delay: 0.6,
    transformOrigin: "31px 31px",
  },
  {
    element: ".bubble-4",
    duration: 3.3,
    delay: 0.8,
    transformOrigin: "28px 28px",
  },
  {
    element: ".bubble-5",
    duration: 3.5,
    delay: 1,
    transformOrigin: "25px 25px",
  },
  {
    element: ".bubble-6",
    duration: 3.7,
    delay: 1.2,
    transformOrigin: "22px 22px",
  },
  {
    element: ".bubble-7",
    duration: 3.9,
    delay: 1.4,
    transformOrigin: "19px 19px",
  },
  {
    element: ".bubble-8",
    duration: 4.1,
    delay: 1.6,
    transformOrigin: "16px 16px",
  },
];

bubbleAnimations.forEach((anim) => {
  gsap.to(anim.element, {
    rotation: 360,
    duration: anim.duration,
    delay: anim.delay,
    ease: "ease-in-out",
    repeat: -1,
    transformOrigin: anim.transformOrigin,
  });
});

const sparkleAnimations = [
  {
    element: ".sparkle-1",
    duration: 3.7,
    delay: 0.2,
    transformOrigin: "58px 58px",
  },
  {
    element: ".sparkle-2",
    duration: 3.9,
    delay: 0.4,
    transformOrigin: "56px 56px",
  },
  {
    element: ".sparkle-3",
    duration: 4.1,
    delay: 0.6,
    transformOrigin: "54px 54px",
  },
  {
    element: ".sparkle-4",
    duration: 4.3,
    delay: 0.8,
    transformOrigin: "52px 52px",
  },
  {
    element: ".sparkle-5",
    duration: 4.5,
    delay: 1,
    transformOrigin: "50px 50px",
  },
  {
    element: ".sparkle-6",
    duration: 4.7,
    delay: 1.2,
    transformOrigin: "48px 48px",
  },
  {
    element: ".sparkle-7",
    duration: 4.9,
    delay: 1.4,
    transformOrigin: "46px 46px",
  },
  {
    element: ".sparkle-8",
    duration: 5.1,
    delay: 1.6,
    transformOrigin: "44px 44px",
  },
  {
    element: ".sparkle-9",
    duration: 5.3,
    delay: 1.8,
    transformOrigin: "42px 42px",
  },
  {
    element: ".sparkle-10",
    duration: 5.5,
    delay: 2,
    transformOrigin: "40px 40px",
  },
];

sparkleAnimations.forEach((anim) => {
  gsap.to(anim.element, {
    rotation: 360,
    duration: anim.duration,
    delay: anim.delay,
    ease: "ease-in-out",
    repeat: -1,
    transformOrigin: anim.transformOrigin,
  });
});
