// GSAP 타임라인 생성
const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to(".shoe-one", { rotate: 0, x: 0, y: 0, duration: 1, ease: "power1.inOut" })
  .to(".shoe-one", {
    rotate: 10,
    x: 10,
    y: -10,
    duration: 1,
    ease: "power1.inOut",
  })
  .to(".shoe-one", {
    rotate: 0,
    x: 0,
    y: -30,
    duration: 1,
    ease: "power1.inOut",
  })
  .to(".shoe-one", {
    rotate: -10,
    x: 10,
    y: -5,
    duration: 1,
    ease: "power1.inOut",
  });
tl.to(".shoe-two", { rotate: 40, duration: 1, ease: "power1.inOut" }, 0)
  .to(".shoe-two", { rotate: -22, duration: 1, ease: "power1.inOut" }, 1)
  .to(".shoe-two", { rotate: 40, duration: 1, ease: "power1.inOut" }, 2)
  .to(".shoe-two", { rotate: -22, duration: 1, ease: "power1.inOut" }, 3);
