// make random star
const bg = document.querySelector(".bg");
const sky = document.querySelector(".sky");
const maxSize = Math.max(bg.clientWidth, bg.clientHeight);

const getRandomX = () => Math.random() * maxSize;
const getRandomY = () => Math.random() * maxSize;
const randomRadius = () => Math.random() * 0.7 + 0.6;

const makeStar = () => {
  const _size = Math.floor(maxSize / 2);
  const arr = new Array(_size)
    .fill()
    .map((_, i) => {
      return `<circle class='star'
      cx=${getRandomX()}
      cy=${getRandomY()}
      r=${randomRadius()}
      className="star" />`;
    })
    .join("");
  console.log(arr);
  sky.innerHTML = arr;
};

makeStar();

// GSAP animation
gsap.to(".sky", {
  rotate: "365deg",
  duration: 100,
});

const tl = gsap.timeline({
  defaults: {
    duration: 5,
    ease: "power2.inOut",
  },
});

tl.to(
  ".sun",
  {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: -50, y: -110 },
        { x: -170, y: 0 },
      ],
      curviness: 2,
    },
    ease: "power2.out",
    duration: 5.5,
  },
  0 // 0초에 시작
)

  .to(
    ".pyramid",
    {
      borderBottom: "45px solid #dcdcdc",
    },
    0 // 0초에 시작
  )

  .to(
    ".py-shadow",
    {
      borderBottom: "45px solid #fff",
    },
    0
  )

  .to(
    ".shadow",
    {
      duration: 3.5,
      keyframes: [
        {
          borderLeft: "50px solid transparent",
          borderRight: "50px solid transparent",
          borderTop: "40px solid rgb(232, 187, 10)",
          duration: 1,
        },
        {
          borderLeft: "90px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "1px solid rgb(232, 187, 10)",
          duration: 2.5,
        },
      ],
      ease: "sine.inOut",
    },
    0
  );
