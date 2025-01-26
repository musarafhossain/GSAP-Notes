gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to("#bannerText", { x: 300, duration: 2 });
  gsap.to("#circle", { x: 200, y: 200, scale: 1, duration: 2 });
});

gsap.matchMedia().add("(max-width: 767px)", () => {
  gsap.to("#bannerText", { y: 100, duration: 2 });
  gsap.to("#circle", { x: 50, y: 100, scale: 0.5, duration: 2 });
});