document.querySelectorAll(".circle--color-empty").forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.id);
    if (item.id === "circle1") {
      const tl = gsap.timeline();
      tl.to(".center", {
        backgroundColor: "#b1d690",
      }).to(
        ".circle--color-fill",
        {
          x: 0,
        },
        "<"
      );
    } else if (item.id === "circle2") {
      const tl = gsap.timeline();
      tl.to(".center", {
        backgroundColor: "#ffa24c",
      }).to(
        ".circle--color-fill",
        {
          x: 60,
        },
        "<"
      );
    } else {
      const tl = gsap.timeline();
      tl.to(".center", {
        backgroundColor: "#ff77b7",
      }).to(
        ".circle--color-fill",
        {
          x: 120,
        },
        "<"
      );
    }
  });
});
