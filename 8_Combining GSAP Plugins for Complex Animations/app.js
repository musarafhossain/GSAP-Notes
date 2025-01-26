gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#landingPage",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
  
  tl.to("#landingPage", { backgroundColor: "#2ecc71" })
    .to("#logo", {
      motionPath: {
        path: "M50,50 C100,300 300,300 400,50",
        alignOrigin: [0.5, 0.5],
      },
    }, 0)
    .to("#text", { y: 500, opacity: 1, duration: 1 }, 0);