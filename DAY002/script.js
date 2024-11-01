const box = document.querySelector(".line-box");
box.addEventListener("click", () => {
  if (box.classList.contains("no-animation")) {
    box.classList.remove("no-animation");
    gsap.to(".line-1", {
      y: 23,
    });

    gsap.to(".line-1", {
      rotate: 45,
      delay: 0.6,
    });

    gsap.to(".line-2", {
      delay: 0.4,
      opacity: 0,
    });

    gsap.to(".line-3", {
      y: -23,
    });
    gsap.to(".line-3", {
      rotate: -45,
      delay: 0.6,
    });
  } else {
    box.classList.add("no-animation");
    gsap.to(".line-1", {
      rotate: 0,
    });
    gsap.to(".line-3", {
      rotate: 0,
    });
    gsap.to(".line-2", {
      delay: 0.4,
      opacity: 1,
    });
    gsap.to(".line-1", {
      y: 0,
      delay: 0.6,
    });
    gsap.to(".line-3", {
      y: 0,
      delay: 0.6,
    });
  }
});
