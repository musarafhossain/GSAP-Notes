### **Chapter 2: GSAP Timelines**

Timelines are one of GSAP's most powerful features, allowing you to sequence multiple animations in a controlled, reusable manner. They enable complex interactions without worrying about manually synchronizing animations.

---

### **What is a Timeline?**
A GSAP Timeline is a container for animations, providing fine control over their order, duration, and overlap. You can think of it as a movie timeline where you can play, pause, reverse, or control the animations collectively.

---

### **Creating a Timeline**
To create a timeline, use `gsap.timeline()`. Here's a basic example:
```javascript
const tl = gsap.timeline();

// Add animations to the timeline
tl.to("#box1", { duration: 1, x: 100, backgroundColor: "blue" })
  .to("#box2", { duration: 1, x: 200, backgroundColor: "green" })
  .to("#box3", { duration: 1, x: 300, backgroundColor: "red" });
```

---

### **Features of Timelines**

1. **Chaining Animations**
   - Animations in a timeline run sequentially by default.
   - You can chain animations with `.to()`, `.from()`, or `.fromTo()`.
   
   Example:
   ```javascript
   const tl = gsap.timeline();
   tl.to("#box1", { duration: 1, x: 100 })
     .to("#box2", { duration: 1, y: 50 })
     .to("#box3", { duration: 1, rotation: 45 });
   ```

2. **Control Overlapping Animations**
   - Use the `position` parameter to overlap animations.
   ```javascript
   tl.to("#box1", { duration: 1, x: 100 })
     .to("#box2", { duration: 1, y: 50 }, "-=0.5") // Starts 0.5s before the previous animation ends
     .to("#box3", { duration: 1, rotation: 45 });
   ```

3. **Global Timeline Controls**
   - Control the timeline as a whole using methods like:
     - `tl.play()`: Starts or resumes the timeline.
     - `tl.pause()`: Pauses the timeline.
     - `tl.reverse()`: Reverses the timeline.
     - `tl.restart()`: Restarts the timeline from the beginning.
   ```javascript
   const tl = gsap.timeline();
   tl.to("#box", { duration: 1, x: 200 });

   // Control the timeline
   document.getElementById("play").addEventListener("click", () => tl.play());
   document.getElementById("pause").addEventListener("click", () => tl.pause());
   document.getElementById("reverse").addEventListener("click", () => tl.reverse());
   ```

4. **Easing**
   - Add easing functions to animations within the timeline for smoother effects.
   ```javascript
   tl.to("#box1", { duration: 1, x: 100, ease: "bounce.out" })
     .to("#box2", { duration: 1, y: 50, ease: "power2.in" });
   ```

---

### **Customizing Timelines**

#### **Labels**
Labels allow you to name specific points in the timeline and reference them later.
```javascript
const tl = gsap.timeline();

tl.to("#box1", { duration: 1, x: 100 }, "start")
  .to("#box2", { duration: 1, y: 50 }, "start+=0.5") // Starts 0.5s after "start"
  .to("#box3", { duration: 1, rotation: 45 }, "end");
```

#### **Callbacks**
You can attach functions to specific points in the timeline using `.call()` or `.add()`.
```javascript
tl.to("#box1", { duration: 1, x: 100 })
  .call(() => console.log("Animation 1 Complete"))
  .to("#box2", { duration: 1, y: 50 });
```

---

### **Project: Timeline Animation**

#### **Goal**
Create a timeline animation for a loading screen.

#### **HTML**
```html
<div id="circle1" class="circle"></div>
<div id="circle2" class="circle"></div>
<div id="circle3" class="circle"></div>

<style>
  .circle {
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 50%;
    display: inline-block;
    margin: 10px;
  }
</style>
```

#### **JavaScript**
```javascript
const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to("#circle1", { duration: 0.5, scale: 1.5, backgroundColor: "blue" })
  .to("#circle2", { duration: 0.5, scale: 1.5, backgroundColor: "green" }, "-=0.25")
  .to("#circle3", { duration: 0.5, scale: 1.5, backgroundColor: "purple" }, "-=0.25");
```

**What Happens?**
- Each circle scales up and changes color sequentially.
- The animation repeats infinitely with a yoyo effect (reverses back).

---

### **Key Takeaways**
- Timelines make it easy to sequence and synchronize animations.
- They provide fine-grained control with features like labels, callbacks, and overlapping animations.
- Timelines can be controlled programmatically for interactive animations.