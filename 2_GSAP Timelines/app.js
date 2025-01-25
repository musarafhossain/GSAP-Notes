const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to("#circle1", { 
    duration: 0.5, 
    scale: 1.5, 
    backgroundColor: "blue" 
})
.to("#circle2", { 
    duration: 0.5, 
    scale: 1.5, 
    backgroundColor: "green" 
}, "-=0.25")
.to("#circle3", { 
    duration: 0.5, 
    scale: 1.5, 
    backgroundColor: "purple" 
}, "-=0.25");