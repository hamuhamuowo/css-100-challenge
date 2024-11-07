const masterTimeline = gsap.timeline();

masterTimeline
  .to(".moon", {
    bottom: 260,
    ease: "power1.out",
    duration: 2,
  })
  .add(() => {
    // 각 사이즈별로 다른 시간 간격
    const delays = {
      big: { min: 0, max: 1.5 },
      middle: { min: 0.5, max: 2 },
      small: { min: 1, max: 2.5 },
    };

    // 각 사이즈별 설정
    ["big", "middle", "small"].forEach((size) => {
      gsap.utils.toArray(`.snow.${size} > div`).forEach((elem) => {
        // 각 요소별 랜덤 딜레이
        const randomDelay =
          Math.random() * (delays[size].max - delays[size].min) +
          delays[size].min;

        gsap
          .timeline({
            repeat: -1,
            delay: randomDelay, // 각 요소별 시작 시간 다르게 설정
            repeatDelay: Math.random() * 2, // 반복할 때도 랜덤 딜레이
          })
          .from(elem, {
            x: 40,
            y: -320,
            scaleX: 1,
            scaleY: 1,
            rotation: 17,
            duration: 0,
          })
          .to(elem, {
            x: 0,
            y: 0,
            duration: 1.7,
            ease: "none",
          })
          .to(elem, {
            scaleX: 3,
            scaleY: 0,
            rotation: 0,
            duration: 0.3,
            ease: "none",
          });
      });
    });
  });
