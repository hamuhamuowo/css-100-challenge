document.querySelectorAll(".circle--color-empty").forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.id);
    const backgroundColors = {
      circle1: "#b1d690",
      circle2: "#ffa24c",
      circle3: "#ff77b7",
    };
    const xPositions = {
      circle1: 0,
      circle2: 60,
      circle3: 120,
    };

    const tl = gsap.timeline();
    tl.to(".center", {
      backgroundColor: backgroundColors[item.id],
    }).to(
      ".circle--color-fill",
      {
        x: xPositions[item.id],
      },
      "<"
    );
  });
});
