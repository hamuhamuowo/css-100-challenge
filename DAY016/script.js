const mainTl = gsap.timeline({
  repeat: -1,
  defaults: {
    ease: "power1.inOut",
  },
});

mainTl
  .fromTo(
    ".blobb",
    {
      y: -300,
      scaleY: 1.2,
      opacity: 0,
    },
    {
      y: 0,
      scaleY: 1,
      opacity: 1,
      duration: 0.5,
    }
  )
  .to(".blobb", {
    y: 50,
    scaleY: 0.8,
    duration: 0.2,
  })
  .to(".blobb", {
    y: -30,
    scaleY: 1.1,
    duration: 0.2,
  })
  .to(".blobb", {
    y: 10,
    scaleY: 0.9,
    duration: 0.2,
  })
  .to(".blobb", {
    y: 0,
    scaleY: 1,
    duration: 0.1,
  })
  .to(".blobb", {
    scale: 1.2,
    duration: 0.3,
  })
  .to(".blobb", {
    scale: 0,
    duration: 0.3,
  });

mainTl
  .fromTo(
    ".blobb-ring",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1.4,
      opacity: 1,
      duration: 0.4,
    },
    0
  )
  .to(".blobb-ring", {
    scale: 1.4,
    opacity: 0,
    duration: 0.4,
    delay: 1,
  });

mainTl
  .fromTo(
    ".octagon",
    {
      scale: 0,
      rotation: 22.5,
      opacity: 0,
    },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 0.3,
      delay: 1.8,
    },
    0
  )
  .to(".octagon", {
    scale: 1.2,
    duration: 0.3,
  })
  .to(".octagon", {
    scale: 0.9,
    duration: 0.2,
  })
  .to(".octagon", {
    scale: 1,
    duration: 0.1,
  })
  .to(".octagon", {
    scale: 1.2,
    duration: 0.3,
  })
  .to(".octagon", {
    scale: 0,
    duration: 0.3,
  });

mainTl
  .fromTo(
    ".octa-sparkles",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1.4,
      opacity: 1,
      duration: 0.4,
      delay: 2.2,
    },
    0
  )
  .to(".octa-sparkles", {
    scale: 1.4,
    opacity: 0,
    duration: 0.4,
  });

mainTl
  .fromTo(
    ".triangle",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1.2,
      opacity: 1,
      duration: 0.3,
      delay: 3.0,
    },
    0
  )
  .to(".triangle", {
    scale: 0.9,
    duration: 0.2,
  })
  .to(".triangle", {
    scale: 1,
    duration: 0.1,
  })
  .to(".triangle", {
    scale: 1.2,
    duration: 0.3,
  })
  .to(".triangle", {
    scale: 0,
    duration: 0.3,
  });

mainTl
  .fromTo(
    ".triangle-sparkles",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1.4,
      opacity: 1,
      duration: 0.4,
      delay: 3.4,
    },
    0
  )
  .to(".triangle-sparkles", {
    scale: 1.4,
    opacity: 0,
    duration: 0.4,
  })
  .to(".blobb", {
    y: 300,
    scaleY: 1.2,
    duration: 0.5,
    delay: 0.5,
  });
