const tooltipAnimation = gsap.to(".tooltip", {
  y: 20,
  opacity: 1,
  paused: true,
});

document.querySelectorAll(".word, .tooltip").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    tooltipAnimation.play();
  });

  element.addEventListener("mouseleave", () => {
    if (
      !document.querySelector(".tooltip:hover") &&
      !document.querySelector(".word:hover")
    ) {
      tooltipAnimation.reverse();
    }
  });
});
