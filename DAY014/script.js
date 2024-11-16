const tl = gsap.timeline({ paused: true });

tl.to(".flip", {
  rotationX: 180,
  translate3d: "0, 0, 0",
  boxShadow: "8px -10px 15px 0 rgba(0,0,0,0.5)",
  duration: 1,
  ease: "power1.inOut",
});

// 카드 뒤집기
document.querySelector(".card").addEventListener("mouseenter", () => {
  tl.play();
});
document.querySelector(".card").addEventListener("mouseleave", () => {
  tl.reverse();
});

// 이미지 자동 반복 재생
gsap.to(".front img", {
  keyframes: [
    { scaleY: 1, duration: 0.3, ease: "power1.inOut" },
    {
      scaleY: 1.03,
      duration: 0.3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    },
  ],
});

gsap.to(".back img", {
  y: -5,
  yoyo: true,
  repeat: -1,
  duration: 1.5,
  ease: "power1.inOut",
});

// 무한반복 땅, 구름
document.querySelectorAll(".stripe").forEach((stripe, index) => {
  gsap.to(stripe, {
    x: -210,
    scaleX: 0.8,
    duration: 1,
    repeat: -1,
    delay: index * 0.1,
    ease: "none",
  });
});

document.querySelectorAll(".cloud").forEach((cloud, index) => {
  gsap.to(cloud, {
    x: -210,
    scaleX: 0.8,
    duration: 0.8,
    repeat: -1,
    delay: index * 0.1,
    ease: "none",
  });
});
