const tl = gsap.timeline({ paused: true });
tl.to(".profile-top", { y: "100%", duration: 1 })
  .to(".profile-bottom", { y: "-100%", duration: 1 }, "<")
  .to(".profile-pic", { y: "350", duration: 1.3 }, "<")
  .to(".profile-close-btn", { y: "100", duration: 1.2 }, "<");

const btns = document.querySelectorAll(".pic .btn");
const close = document.querySelector(".profile-close-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".profile-box").style.display = "block";
    tl.play();
  });
});

close.addEventListener("click", () => {
  tl.reverse().eventCallback("onReverseComplete", () => {
    document.querySelector(".profile-box").style.display = "none";
  });
});

document.querySelectorAll(".pic").forEach((pic) => {
  const picTl = gsap.timeline({ paused: true });

  picTl.to(".btn", { scale: "0.6", opacity: "1", duration: 0.3 }).to(
    ".btn-box",
    {
      backgroundColor: "rgba(0,0,0,.3)",
      duration: 0.5,
    },
    "<"
  );

  pic.addEventListener("mouseover", () => {
    pic.querySelector(".btn-box").style.display = "flex";
    picTl.play();
  });

  pic.addEventListener("mouseleave", () => {
    picTl.reverse().then(() => {
      pic.querySelector(".btn-box").style.display = "none";
    });
  });
});
