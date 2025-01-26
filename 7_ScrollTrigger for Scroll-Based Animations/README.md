### **Chapter 7: ScrollTrigger for Scroll-Based Animations**

GSAP’s **ScrollTrigger plugin** allows you to trigger animations based on the user's scroll position. This powerful tool can be used to create parallax effects, sticky animations, progress indicators, and much more. In this chapter, we will cover the fundamentals of ScrollTrigger and explore its advanced features through examples and projects.

---

### **1. What is ScrollTrigger?**

ScrollTrigger is a GSAP plugin that connects animations to the browser’s scroll behavior. It allows you to:
- Trigger animations when an element enters or leaves the viewport.
- Synchronize animations with scrolling progress.
- Pin elements during scroll.
- Create scroll-based parallax effects.

#### **Importing ScrollTrigger**
To use ScrollTrigger, add this link in html:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```
To use ScrollTrigger, register the plugin after importing it:
```javascript
gsap.registerPlugin(ScrollTrigger);
```

---

### **2. Basic ScrollTrigger Usage**

ScrollTrigger is typically used with `gsap.to()`, `gsap.from()`, or `gsap.fromTo()` to animate elements as the user scrolls.

#### **Example: Trigger Animation on Scroll**
```html
<div class="box" style="height: 100vh; background: lightgray;"></div>
<div class="box" id="animateMe" style="height: 100vh; background: blue;"></div>
<div class="box" style="height: 100vh; background: lightgray;"></div>

<script>
  gsap.to("#animateMe", {
    scrollTrigger: {
      trigger: "#animateMe", // Element to watch
      start: "top 80%",     // Trigger when top of #animateMe reaches 80% of the viewport
      end: "top 30%",       // End trigger when it reaches 30%
      toggleActions: "play pause resume reset", // Actions: onEnter, onLeave, onEnterBack, onLeaveBack
    },
    backgroundColor: "red",
    duration: 1,
  });
</script>
```

---

### **3. ScrollTrigger Configuration Options**

| **Option**           | **Description**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `trigger`            | Element that triggers the animation.                                            |
| `start`              | When the animation starts (e.g., `"top 80%"`, `"center center"`, `"bottom 0%"`).|
| `end`                | When the animation ends.                                                        |
| `toggleActions`      | Actions to perform on `enter`, `leave`, `enterBack`, and `leaveBack`.            |
| `markers`            | Displays markers to debug start and end points (useful for development).        |
| `scrub`              | Syncs animation progress with scroll progress (e.g., `true` or a number).       |
| `pin`                | Pins the element in place during the animation.                                 |

---

### **4. Triggering Animations**

You can trigger animations based on different scroll events.

#### **Toggle Animation on Enter and Leave**
```javascript
gsap.to("#animateMe", {
  scrollTrigger: {
    trigger: "#animateMe",
    start: "top center",
    end: "top 100px",
    toggleActions: "play reverse play reverse",
  },
  x: 200,
  duration: 1,
});
```

---

### **5. Pinning Elements**

The `pin` property locks an element in place while the user scrolls.

#### **Example: Pinning an Element**
```javascript
gsap.to("#animateMe", {
  scrollTrigger: {
    trigger: "#animateMe",
    start: "top center",
    end: "+=500", // Pin the element for 500px of scrolling
    pin: true,
    markers: true,
  },
});
```

---

### **6. Scrubbing Animations**

The `scrub` property ties animation progress to the scroll position. You can pass `true` for direct synchronization or a number to define a smooth delay.

#### **Example: Scrubbing Animation**
```javascript
gsap.to("#animateMe", {
  scrollTrigger: {
    trigger: "#animateMe",
    start: "top bottom",
    end: "top top",
    scrub: true, // Sync animation with scroll
  },
  scale: 2,
  duration: 1,
});
```

---

### **7. Parallax Effects**

Parallax effects create a sense of depth by moving elements at different speeds relative to the scroll.

#### **Example: Parallax Scrolling**
```javascript
gsap.to("#animateMe", {
  scrollTrigger: {
    trigger: "#animateMe",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  y: -200, // Moves upward while scrolling
});
```

---

### **8. ScrollTrigger with GSAP Timelines**

You can attach a ScrollTrigger to an entire GSAP timeline to sequence multiple animations.

#### **Example: Timeline with ScrollTrigger**
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#animateMe",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

tl.to("#animateMe", { x: 100, duration: 1 })
  .to("#animateMe", { scale: 1.5, duration: 1 });
```

---

### **9. Advanced ScrollTrigger Features**

#### **Using Callbacks**
ScrollTrigger provides several lifecycle callbacks:
- `onEnter`
- `onLeave`
- `onEnterBack`
- `onLeaveBack`

Example:
```javascript
gsap.to("#animateMe", {
  scrollTrigger: {
    trigger: "#animateMe",
    start: "top center",
    end: "bottom center",
    onEnter: () => console.log("Entered!"),
    onLeave: () => console.log("Left!"),
  },
  x: 200,
});
```

#### **Dynamic Start and End Points**
Start and end points can be dynamically calculated based on the viewport or elements.

Example:
```javascript
gsap.to("#animateMe", {
  scrollTrigger: {
    trigger: "#animateMe",
    start: () => "top " + window.innerHeight * 0.8,
    end: "top 30%",
  },
  y: 100,
});
```

---

### **10. Project: Scroll-Based Image Gallery**

#### **Goal**
Create a scrollable gallery where each image scales up and fades in as it enters the viewport.

#### **HTML:**
```html
<div class="gallery">
  <img src="image1.jpg" class="gallery-item" />
  <img src="image2.jpg" class="gallery-item" />
  <img src="image3.jpg" class="gallery-item" />
</div>

<style>
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 0 auto;
    max-width: 600px;
  }
  .gallery-item {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease-out;
  }
</style>
```

#### **JavaScript:**
```javascript
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
```

**How it works:**
- Each `.gallery-item` animates as it enters the viewport.
- The animation is tied to scroll using `scrub`.

---

### **Key Takeaways**
- **ScrollTrigger** enhances the user experience by synchronizing animations with scrolling.
- It supports pinning, scrubbing, and triggering animations based on scroll events.
- Use `start` and `end` points to define when an animation starts and ends during scrolling.
- `scrub` ties the animation progress to scroll progress for smooth, synchronized effects.
- You can combine ScrollTrigger with GSAP timelines for complex animations.