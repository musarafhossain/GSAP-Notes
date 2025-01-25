## **Chapter 6: Animating SVGs**

Scalable Vector Graphics (SVGs) are an excellent format for creating resolution-independent and interactive graphics. GSAP offers a range of powerful tools for animating SVGs, allowing you to animate shapes, paths, colors, and more with smooth transitions and high performance.

---

### **1. What are SVGs?**

SVGs are XML-based vector image formats used for two-dimensional graphics. Unlike raster formats (e.g., PNG or JPEG), SVGs can be scaled to any size without losing quality, making them ideal for responsive designs.

SVGs can contain various elements like:
- **Lines** (`<line>`)
- **Paths** (`<path>`)
- **Rectangles** (`<rect>`)
- **Circles** (`<circle>`)
- **Text** (`<text>`)
- **Polygons** (`<polygon>`)

---

### **2. Basic SVG Animation**

You can animate any part of an SVG, whether it's its position, size, stroke, or color. GSAP makes it easy to target SVG elements using CSS selectors (e.g., `"#circle"`, `".path"`) and animate them smoothly.

#### **Example: Animating the `stroke-dasharray` to Reveal a Path**

One of the most common animations for SVGs is to animate a path being drawn. This is typically done by animating the `stroke-dasharray` and `stroke-dashoffset` properties, which control how the stroke is displayed.

Example:
```html
<svg width="200" height="200">
  <path id="line" d="M10,80 C40,10 65,10 95,80 S150,150 180,80" fill="transparent" stroke="blue" stroke-width="2" />
</svg>

<script>
  gsap.fromTo("#line", {
    strokeDasharray: 500,  // total length of the path
    strokeDashoffset: 500, // hide the stroke initially
  }, {
    strokeDashoffset: 0, // animate to full stroke
    duration: 2,
  });
</script>
```

**How it works:**
- `strokeDasharray` is set to the total length of the path.
- `strokeDashoffset` starts at the same value, hiding the path.
- GSAP animates `strokeDashoffset` from 500 to 0, revealing the path over 2 seconds.

---

### **3. Animating SVG Attributes**

Besides `stroke-dasharray`, GSAP can animate various SVG-specific attributes like `fill`, `stroke`, `opacity`, `transform`, and more.

#### **Animating `fill` and `stroke` Colors**
You can animate the `fill` or `stroke` color of SVG elements like paths, circles, and rectangles.

Example: Change the stroke color of a path:
```javascript
gsap.to("#line", { duration: 2, stroke: "red" });
```

You can also animate the `fill`:
```javascript
gsap.to("#circle", { duration: 2, fill: "#3498db" });
```

#### **Animating `transform` on SVGs**
You can animate the transform properties of SVG elements just like regular HTML elements.

Example: Rotate an SVG element:
```javascript
gsap.to("#circle", { duration: 2, rotation: 360 });
```

---

### **4. Advanced Path Animations**

You can animate along paths, creating "motion path" animations. GSAP provides a plugin called **`MotionPathPlugin`** to help animate elements along complex paths.

#### **MotionPathPlugin**
The `MotionPathPlugin` allows you to move an element along a predefined SVG path.

1. First, you need to include the `MotionPathPlugin`.
```javascript
gsap.registerPlugin(MotionPathPlugin);
```

2. Then, use it to animate along the path:
```html
<svg width="200" height="200">
  <path id="motionPath" d="M10,80 C40,10 65,10 95,80 S150,150 180,80" fill="transparent" />
  <circle id="circle" cx="10" cy="80" r="5" fill="blue"/>
</svg>

<script>
  gsap.to("#circle", {
    duration: 4,
    motionPath: {
      path: "#motionPath",
      align: "#motionPath",
      autoRotate: true,
    },
  });
</script>
```

**How it works:**
- The `motionPath` property is used to animate the circle along the `#motionPath` path.
- `align` ensures that the element is aligned with the path.
- `autoRotate` automatically rotates the element along the path.

---

### **5. Animating SVG with `stagger`**

You can also use GSAP’s `stagger` feature to animate multiple SVG elements in sequence.

#### **Example: Stagger Animating Multiple Paths**
```html
<svg width="200" height="200">
  <path class="path" d="M10,80 C40,10 65,10 95,80 S150,150 180,80" fill="transparent" stroke="blue" stroke-width="2"/>
  <path class="path" d="M10,100 C40,30 65,30 95,100 S150,170 180,100" fill="transparent" stroke="blue" stroke-width="2"/>
</svg>

<script>
  gsap.to(".path", {
    duration: 2,
    strokeDasharray: 500,
    strokeDashoffset: 500,
    stagger: 0.3,  // 0.3s delay between each path animation
  });
</script>
```

---

### **6. Animating SVG Filters**

You can animate SVG filters, such as `blur`, `brightness`, `contrast`, and others. Filters are useful for creating effects like glowing or blurring.

#### **Example: Animating a Blur Filter**
```html
<svg width="200" height="200">
  <circle id="circle" cx="100" cy="100" r="50" fill="blue" />
  <filter id="blurFilter">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>
</svg>

<script>
  gsap.to("#circle", {
    duration: 2,
    filter: "url(#blurFilter)",
    scale: 1.5,
  });
</script>
```

In this example, the `circle` will grow and apply a blur filter.

---

### **7. Using SVG Sprites**

An SVG sprite is a collection of SVG elements (paths, shapes) stored in a single file. GSAP allows you to animate individual elements inside the sprite.

Example: Animate specific elements from an SVG sprite.
```html
<svg id="sprite" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <use href="#icon1"></use>
  <use href="#icon2"></use>
</svg>

<script>
  gsap.to("#sprite use:nth-child(1)", { duration: 2, x: 100 });
  gsap.to("#sprite use:nth-child(2)", { duration: 2, y: 100 });
</script>
```

---

### **Project: Animated Logo with SVG**

#### **Goal:**
Create an animated logo with an SVG path that draws itself and changes colors on hover.

#### **HTML:**
```html
<svg id="logo" width="200" height="200" viewBox="0 0 200 200">
  <path id="logoPath" d="M10,80 C40,10 65,10 95,80 S150,150 180,80" fill="transparent" stroke="blue" stroke-width="2"/>
</svg>

<style>
  #logo { cursor: pointer; }
</style>
```

#### **JavaScript:**
```javascript
gsap.fromTo("#logoPath", {
  strokeDasharray: 500,
  strokeDashoffset: 500,
}, {
  strokeDashoffset: 0,
  duration: 2,
});

document.getElementById("logo").addEventListener("mouseenter", () => {
  gsap.to("#logoPath", { stroke: "red", duration: 1 });
});

document.getElementById("logo").addEventListener("mouseleave", () => {
  gsap.to("#logoPath", { stroke: "blue", duration: 1 });
});
```

**What happens:**
- The logo path draws itself on page load.
- When the user hovers over the logo, the color changes to red and back to blue when the hover ends.

---

### **Key Takeaways**
- SVGs are versatile, scalable, and perfect for animations.
- You can animate various SVG properties, including `stroke`, `fill`, `transform`, and `stroke-dasharray`.
- The **MotionPathPlugin** is ideal for animating elements along SVG paths.
- Staggering and animating multiple SVG elements creates complex effects easily.
- SVG filters and sprites are also animate-able, adding to the range of creative possibilities.
