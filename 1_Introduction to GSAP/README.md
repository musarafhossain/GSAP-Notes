## **Chapter 1: Introduction to GSAP**

### **What is GSAP?**
GSAP (GreenSock Animation Platform) is a powerful JavaScript library designed to create smooth and high-performance animations for web applications. It is widely used for interactive web designs, games, and even mobile applications.

---

### **Why Use GSAP?**
1. **Performance**: Optimized for smooth animations even on low-end devices.
2. **Ease of Use**: Simple syntax for complex animations.
3. **Cross-Browser Compatibility**: Consistent behavior across all modern browsers.
4. **Flexibility**: Animate almost anything—CSS properties, SVGs, canvas elements, and DOM objects.
5. **Powerful Features**: Timeline control, staggering animations, and more.

---

### **Getting Started with GSAP**

#### **1. Installation**
You can add GSAP to your project in multiple ways:

**a) Using a CDN**
Include the following script in your HTML file:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```

**b) Install via NPM**
If you're using a build tool like Webpack or Vite:
```bash
npm install gsap
```

**c) Download**
You can download the library from [greensock.com](https://greensock.com/gsap/) and include it locally in your project.

---

#### **2. Setting Up the Environment**
Here's a basic HTML structure for testing GSAP:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GSAP Basics</title>
</head>
<body>
  <div id="box" style="width: 100px; height: 100px; background: red; margin: 50px;"></div>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

---

#### **3. Your First Animation**
In the `app.js` file, write:
```javascript
// Target the element and animate it
gsap.to("#box", { 
    duration: 2, 
    x: 200, 
    backgroundColor: "blue", 
    rotation: 360 
});
```

This code animates the red box:
- Moves it 200px to the right.
- Changes its background color to blue.
- Rotates it 360 degrees.
- Completes the animation in 2 seconds.

---

### **Core GSAP Methods**

1. **gsap.to()**
   - Tweens (animates) an element from its current state to the defined properties.
   ```javascript
   gsap.to("#box", { duration: 2, x: 300 });
   ```

2. **gsap.from()**
   - Starts an animation from the specified properties and animates to its default state.
   ```javascript
   gsap.from("#box", { duration: 2, x: -300 });
   ```

3. **gsap.fromTo()**
   - Combines `from` and `to` to explicitly define both start and end states.
   ```javascript
   gsap.fromTo("#box", { x: -300 }, { x: 300, duration: 2 });
   ```

---

### **Experiment: Customize the Animation**
Modify the example to explore other properties:
```javascript
gsap.to("#box", {
  duration: 2,
  x: 200,
  scale: 1.5,
  borderRadius: "50%",
  backgroundColor: "green",
  ease: "bounce.out",
});
```
- **`scale`**: Resizes the element.
- **`borderRadius`**: Makes the box circular.
- **`ease`**: Controls the pace of the animation (e.g., `bounce.out`, `power4.in`).

---

### **Project 1: Simple Button Animation**
Here’s a fun mini-project using GSAP:
```html
<button id="btn" style="padding: 10px 20px; font-size: 16px;">Click Me</button>

<script>
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    gsap.to(button, {
      duration: 0.5,
      scale: 1.2,
      backgroundColor: "orange",
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    });
  });
</script>
```

**What Happens?**
- On click, the button enlarges, changes color, and then returns to its original state.

---

### **Key Takeaways**
- GSAP provides simple yet powerful methods (`to`, `from`, `fromTo`).
- Animations are highly customizable with properties like `duration`, `ease`, and `repeat`.
- Even basic animations can create a dynamic user experience.
