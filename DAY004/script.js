gsap.registerPlugin(gsap.plugins.transform);
const tl = gsap.timeline({
  defaults: {
    ease: "power2.inOut",
  },
  repeat: -1, // 무한 반복
  yoyo: true,
});

tl.to(".leaf", {
  width: 80,
  duration: 1,
})
  .to(".stalk", {
    height: 100,
    duration: 1,
  })
  .to(".flower-one", {
    scale: 1,
    duration: 1,
  })
  .to(".flower-two", {
    scale: 1,
    duration: 1,
  })
  .to(".flower-three", {
    scale: 1,
    duration: 1,
  });
