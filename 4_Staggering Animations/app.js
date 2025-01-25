document.getElementById("menuButton").addEventListener("click", () => {
    gsap.to(".menu", { duration: 0.5, display: "block", opacity: 1 });
    gsap.to(".menu-item", {
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  });