gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gallery-item").forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 1,
      scale: 1,
    });
  });