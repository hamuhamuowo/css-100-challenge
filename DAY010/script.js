gsap.to(".bottom i", {
  repeat: -1,
  yoyo: true,
  scale: 0.7,
  duration: 0.8,
  ease: "power1.inOut",
});

const circle = document.querySelector(".info svg:nth-child(2) circle");
const circumference = 2 * Math.PI * 48;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

const tl = gsap.timeline({ repeat: -1 });

tl.to(circle, {
  strokeDashoffset: 0,
  duration: 3,
  ease: "power1.inOut",
}).to(circle, {
  strokeDashoffset: -circumference,
  duration: 3,
  ease: "power1.inOut",
});
