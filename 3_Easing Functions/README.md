## **Chapter 3: Easing Functions**

Easing functions control the speed and acceleration of animations, making them look natural and visually appealing. Instead of having an animation play linearly (constant speed), easing adds dynamics like acceleration, deceleration, or bounce effects.

---

### **What is Easing?**
Easing defines how an animation progresses over time. For example:
- **Linear**: Moves at a constant speed.
- **Ease In**: Starts slowly and accelerates.
- **Ease Out**: Starts fast and decelerates.
- **Ease In-Out**: Combines ease-in and ease-out for smooth transitions.

---

### **Types of Easing in GSAP**

GSAP offers a wide range of easing options, grouped into **standard eases** and **custom eases**.

#### **1. Standard Eases**
- **Power**: Provides gradual acceleration and deceleration.
  - `power1`, `power2`, `power3`, `power4`
- **Back**: Animations overshoot slightly and return.
  - `back.in`, `back.out`, `back.inOut`
- **Bounce**: Animations bounce at the end.
  - `bounce.in`, `bounce.out`, `bounce.inOut`
- **Elastic**: Animations spring back and forth, like elastic.
  - `elastic.in`, `elastic.out`, `elastic.inOut`
- **SlowMo**: Moves slowly in the middle, faster at the edges.
- **RoughEase**: Creates a jarring, shaky effect.
- **Steps**: Moves in discrete steps instead of continuous motion.

#### **2. Custom Eases**
You can define your own easing curves using tools like `CustomEase` (a GSAP plugin).

---

### **Using Easing in Animations**

Easing is applied with the `ease` property:
```javascript
gsap.to("#box", { duration: 2, x: 300, ease: "power3.out" });
```

#### **Examples of Common Eases**
1. **Linear (No Easing)**
   ```javascript
   gsap.to("#box", { duration: 2, x: 300, ease: "none" });
   ```

2. **Ease Out**
   ```javascript
   gsap.to("#box", { duration: 2, x: 300, ease: "power2.out" });
   ```

3. **Bounce**
   ```javascript
   gsap.to("#box", { duration: 2, y: 300, ease: "bounce.out" });
   ```

4. **Elastic**
   ```javascript
   gsap.to("#box", { duration: 2, scale: 1.5, ease: "elastic.out(1, 0.3)" });
   ```

---

### **Fine-Tuning Easing**

1. **Power Eases**
   - `power1` to `power4` represent increasing levels of intensity.
   - Example:
     ```javascript
     gsap.to("#box", { duration: 2, x: 300, ease: "power4.inOut" });
     ```

2. **Back Eases**
   - Adds an overshoot effect.
   - Example:
     ```javascript
     gsap.to("#box", { duration: 1.5, x: 300, ease: "back.out(2)" }); // 2 = intensity
     ```

3. **Elastic Eases**
   - Animations spring back and forth.
   - `elastic.out(amplitude, period)`
   - Example:
     ```javascript
     gsap.to("#box", { duration: 2, scale: 2, ease: "elastic.out(1, 0.5)" });
     ```

4. **Steps**
   - Animates in discrete steps instead of a smooth transition.
   - Example:
     ```javascript
     gsap.to("#box", { duration: 2, x: 300, ease: "steps(5)" }); // 5 steps
     ```

---

### **CustomEase Plugin**
To use custom easing, you need to include the `CustomEase` plugin:
```javascript
gsap.registerPlugin(CustomEase);

CustomEase.create("myEase", "M0,0 C0.25,0.1 0.25,1 1,1");

gsap.to("#box", { duration: 2, x: 300, ease: "myEase" });
```

---

### **Experiment: Compare Eases**

Try different easing options to see how they affect the animation:
```javascript
const eases = ["power1.in", "power2.out", "bounce.out", "elastic.out(1, 0.3)"];

eases.forEach((ease, i) => {
  gsap.to(`#box${i + 1}`, {
    duration: 2,
    x: 300,
    ease: ease,
    delay: i * 0.5,
  });
});
```

**HTML Example:**
```html
<div id="box1" class="box"></div>
<div id="box2" class="box"></div>
<div id="box3" class="box"></div>
<div id="box4" class="box"></div>

<style>
  .box {
    width: 50px;
    height: 50px;
    background: red;
    margin: 10px 0;
    position: relative;
  }
</style>
```

---

### **Project: Card Flip Animation**

#### **Goal**
Create a card flip effect with easing.

#### **HTML**
```html
<div class="card">
  <div class="card-inner">
    <div class="card-front">Front</div>
    <div class="card-back">Back</div>
  </div>
</div>

<style>
  .card {
    width: 150px;
    height: 200px;
    perspective: 1000px;
    margin: 50px auto;
  }
  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 1s ease;
  }
  .card-front, .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
  }
  .card-front {
    background: blue;
  }
  .card-back {
    background: green;
    transform: rotateY(180deg);
  }
</style>
```

#### **JavaScript**
```javascript
const card = document.querySelector(".card-inner");

card.addEventListener("click", () => {
  gsap.to(card, { duration: 1, rotateY: "+=180", ease: "power2.inOut" });
});
```

---

### **Key Takeaways**
- Easing makes animations more realistic and engaging.
- GSAP provides both predefined eases (like `power` or `bounce`) and custom options.
- Experimenting with easing types helps find the best match for your project.
