const card = document.querySelector(".card-inner");

card.addEventListener("click", () => {
    gsap.to(card, { duration: 1, rotateY: "+=180", ease: "power2.inOut" });
});

const eases = ["power1.in", "power2.out", "bounce.out", "elastic.out(1, 0.3)"];

eases.forEach((ease, i) => {
    gsap.to(`#box${i + 1}`, {
        duration: 2,
        x: 300,
        ease: ease,
        delay: i * 0.5,
    });
});