const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });

const commonDuration = 0.5;

tl.to(".jelly", {
  keyframes: [
    { rotationX: 90, duration: commonDuration },
    { rotationX: 150 },
    { rotationX: 50 },
    { rotationX: 120 },
    { rotationX: 70 },
    { rotationX: 100 },
    { rotationX: 83 },
    { rotationX: 93 },
    { rotationX: 90, duration: 0.2 },
    { rotationX: 30, duration: commonDuration },
    { rotationX: 130 },
    { rotationX: 60 },
    { rotationX: 110 },
    { rotationX: 80 },
    { rotationX: 97 },
    { rotationX: 87 },
    { rotationX: 90, duration: 0.2 },
  ].map((frame) => ({ ...frame, duration: frame.duration || commonDuration })),
});
