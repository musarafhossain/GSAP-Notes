const button = document.querySelector(".animated-button");

button.addEventListener("mouseenter", () => {
  gsap.to(button, { scale: 1.1, backgroundColor: "#2ecc71", duration: 0.3 });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, { scale: 1, backgroundColor: "#3498db", duration: 0.3 });
});