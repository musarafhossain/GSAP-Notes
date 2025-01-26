## **Chapter 9: Responsive Animations with GSAP**

In this chapter, you’ll learn how to make your GSAP animations responsive, ensuring they look great and function properly across various devices and screen sizes.

---

### **1. Why Responsive Animations Matter**

- **Consistent User Experience:** Different screen sizes and orientations can distort animations. Responsiveness ensures that users have a uniform experience on mobile, tablet, and desktop.
- **Accessibility:** Mobile users often interact differently with animations (e.g., swipe vs. scroll).
- **Professionalism:** Smooth, adaptive animations elevate the overall quality of your design.

---

### **2. GSAP Features for Responsive Animations**

GSAP offers tools to help you create responsive animations:
1. **GSAP’s `matchMedia()` Utility:** Define animations for specific screen sizes or conditions.
2. **Dynamic Values:** Use functions to calculate properties like `x`, `y`, `scale`, etc., based on screen size.
3. **Flexible Timelines:** Rebuild timelines on resize for adaptive behavior.

---

### **3. Using `matchMedia()` for Responsive Animations**

GSAP’s `matchMedia()` allows you to define different animations for different media queries.

#### **Syntax:**
```javascript
gsap.matchMedia().add("(min-width: 768px)", () => {
  // Animation for devices with width >= 768px
});
```

#### **Example:**
Animate an element differently for desktop and mobile.

```html
<div id="responsiveBox"></div>

<style>
  #responsiveBox {
    width: 100px;
    height: 100px;
    background: red;
    margin: 50px auto;
  }
</style>
```

```javascript
const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // Animation for desktop
  gsap.to("#responsiveBox", { x: 300, duration: 2 });
});

mm.add("(max-width: 767px)", () => {
  // Animation for mobile
  gsap.to("#responsiveBox", { x: 100, y: 200, duration: 2 });
});
```

**Key Points:**
- Animations are conditionally applied based on the viewport width.
- You can register multiple media queries for complex setups.

---

### **4. Dynamic Values for Adaptive Behavior**

Use functions to calculate animation properties dynamically based on the screen size.

#### **Example: Scaling Based on Screen Width**
```javascript
gsap.to("#responsiveBox", {
  scale: () => window.innerWidth < 768 ? 0.5 : 1,
  duration: 1,
});
```

#### **Example: Dynamic Motion Path**
Adapt a motion path to fit smaller screens.

```javascript
gsap.to("#responsiveBox", {
  motionPath: {
    path: () => window.innerWidth < 768
      ? "M0,0 L50,200 L100,0"
      : "M0,0 L300,200 L600,0",
    alignOrigin: [0.5, 0.5],
  },
  duration: 3,
});
```

---

### **5. Responsive Timelines**

Rebuild timelines on screen resize to create fully adaptive animations.

#### **Example: Rebuilding Timelines**
```javascript
let timeline;

const buildTimeline = () => {
  if (timeline) timeline.kill(); // Remove existing timeline

  timeline = gsap.timeline();

  if (window.innerWidth >= 768) {
    timeline.to("#responsiveBox", { x: 300, duration: 1 })
            .to("#responsiveBox", { rotation: 360, duration: 1 });
  } else {
    timeline.to("#responsiveBox", { y: 200, duration: 1 })
            .to("#responsiveBox", { scale: 0.5, duration: 1 });
  }
};

// Initial build
buildTimeline();

// Rebuild on resize
window.addEventListener("resize", buildTimeline);
```

---

### **6. Combining `ScrollTrigger` with Responsive Animations**

`ScrollTrigger` works seamlessly with `matchMedia()` to create scroll-based animations that adapt to screen size.

#### **Example: Scroll Animation with `matchMedia`**
```html
<div id="scrollContainer">
  <div id="scrollBox">Scroll Me</div>
</div>

<style>
  #scrollContainer {
    height: 2000px;
    position: relative;
  }
  #scrollBox {
    position: absolute;
    width: 100px;
    height: 100px;
    background: blue;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
```

```javascript
gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to("#scrollBox", {
    scrollTrigger: {
      trigger: "#scrollContainer",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    x: 300,
  });
});

gsap.matchMedia().add("(max-width: 767px)", () => {
  gsap.to("#scrollBox", {
    scrollTrigger: {
      trigger: "#scrollContainer",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: 200,
  });
});
```

---

### **7. Advanced Responsive Techniques**

#### **a) Fluid Typography and Animations**
Use CSS `clamp()` for fluid typography and animate font sizes with GSAP.

```javascript
gsap.to("#responsiveBox", {
  fontSize: () => window.innerWidth < 768 ? "clamp(1rem, 5vw, 2rem)" : "2rem",
  duration: 1,
});
```

---

#### **b) Responsive Staggered Animations**
Change stagger values based on screen size for a more polished effect.

```javascript
gsap.to(".staggerItem", {
  stagger: () => window.innerWidth < 768 ? 0.2 : 0.5,
  opacity: 1,
  duration: 1,
});
```

---

### **8. Project: Responsive Portfolio Banner**

#### **Goal:**
Create a responsive banner for a portfolio website:
- On desktop: Large text animates horizontally, and a circle moves diagonally.
- On mobile: Smaller text animates vertically, and the circle shrinks.

#### **HTML:**
```html
<div id="banner">
  <h1 id="bannerText">Welcome to My Portfolio</h1>
  <div id="circle"></div>
</div>

<style>
  #banner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  #bannerText {
    position: absolute;
    font-size: 4rem;
    white-space: nowrap;
  }
  #circle {
    position: absolute;
    width: 100px;
    height: 100px;
    background: purple;
    border-radius: 50%;
  }
</style>
```

#### **JavaScript:**
```javascript
gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to("#bannerText", { x: 300, duration: 2 });
  gsap.to("#circle", { x: 200, y: 200, scale: 1, duration: 2 });
});

gsap.matchMedia().add("(max-width: 767px)", () => {
  gsap.to("#bannerText", { y: 100, duration: 2 });
  gsap.to("#circle", { x: 50, y: 100, scale: 0.5, duration: 2 });
});
```

---

### **9. Best Practices for Responsive Animations**

1. **Plan Animations for Mobile-First:** Start with simpler mobile animations and build complexity for larger screens.
2. **Test Across Devices:** Use browser dev tools and real devices to test animations.
3. **Combine GSAP with CSS Media Queries:** Let CSS handle basic styles and GSAP focus on animations.
4. **Debounce Resize Events:** Avoid performance issues by debouncing resize listeners.

---

### **10. Chapter Summary**
- Use `matchMedia()` for screen-size-specific animations.
- Dynamically calculate animation values based on screen size.
- Rebuild timelines on resize for fully adaptive behavior.
- Test thoroughly to ensure a consistent experience.
