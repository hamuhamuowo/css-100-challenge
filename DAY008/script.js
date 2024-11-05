gsap.registerPlugin(MotionPathPlugin);
gsap.to(".sub-circle-one", {
  duration: 5,
  repeat: -1,
  ease: "linear",
  motionPath: {
    path: [
      { x: 60, y: 0 },
      { x: 42.5, y: 42.5 },
      { x: 0, y: 60 },
      { x: -42.5, y: 42.5 },
      { x: -60, y: 0 },
      { x: -42.5, y: -42.5 },
      { x: 0, y: -60 },
      { x: 42.5, y: -42.5 },
    ],
    align: "self",
    alignOrigin: [0.5, 0.5],
  },
});
