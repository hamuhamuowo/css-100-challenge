const pic = document.querySelector(".pics");

const animation = gsap.to([".circle-one", ".circle-two"], {
  rotate: "365deg",
  paused: true,
  duration: 1.2,
});

pic.addEventListener("mouseenter", () => {
  animation.play();
});
pic.addEventListener("mouseleave", () => animation.reverse());
