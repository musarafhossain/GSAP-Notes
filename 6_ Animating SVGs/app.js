gsap.fromTo("#logoPath", {
  strokeDasharray: 500,
  strokeDashoffset: 500,
}, {
  strokeDashoffset: 0,
  duration: 2,
});

document.getElementById("logo").addEventListener("mouseenter", () => {
  gsap.to("#logoPath", { stroke: "red", duration: 1 });
});

document.getElementById("logo").addEventListener("mouseleave", () => {
  gsap.to("#logoPath", { stroke: "blue", duration: 1 });
});