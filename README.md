# CSS Flexbox Animation — Video Recreation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-flexbox-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable recreation of the supplied 18.87-second screen recording titled **CSS Flexbox Animation**.

## Sections visible in the video

1. Expanding Flex Cards
2. Bouncing Flex Dots
3. Flex Slide Menu Pills
4. Flex Rotating Stack
5. Flex Equalizer Bars
6. Flex Flip Cards Row — only the heading is visible at the very end of the recording; the card demo and code are an added completion based on that heading.

## CSS transcribed from the visible code panels

The readable snippets are reproduced below and included in the page's CODE panels.

### 1. Expanding Flex Cards
```css
.demo1 {
  display: flex;
  gap: 14px;
  height: 220px;
}
.demo1 .card {
  flex: 1;
  transition: all .55s ease;
  border-radius: 22px;
}
.demo1 .card:hover {
  flex: 3;
  transform: translateY(-8px);
}
```

### 2. Bouncing Flex Dots
```css
.demo2 {
  display: flex;
  gap: 18px;
  align-items: flex-end;
}
.demo2 .circle {
  animation: bounceDots 1.2s infinite ease-in-out;
}
.demo2 .circle:nth-child(2) { animation-delay: .15s; }
.demo2 .circle:nth-child(3) { animation-delay: .3s; }

@keyframes bounceDots {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-60px); }
}
```

### 3. Flex Slide Menu Pills
```css
.demo3 {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.demo3 .pill {
  transition: transform .35s ease, box-shadow .35s ease;
}
.demo3 .pill:hover {
  transform: translateY(-10px) scale(1.05);
}
```

### 4. Flex Rotating Stack
```css
.demo4 {
  display: flex;
  gap: 16px;
  perspective: 900px;
}
.demo4 .box {
  animation: spinStack 3.5s infinite ease-in-out;
}
@keyframes spinStack {
  0%,100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}
```

### 5. Flex Equalizer Bars
```css
.demo5 {
  display: flex;
  align-items: flex-end;
  gap: 14px;
}
.demo5 .bar {
  width: 32px;
  animation: barsWave 1.3s infinite ease-in-out;
}
@keyframes barsWave {
  0%,100% { transform: scaleY(.75); }
  50% { transform: scaleY(1.2); }
}
```

## Run

Extract the ZIP and open `index.html` in a modern browser. No npm install, build tools, external libraries, fonts, or images are needed.

## Files

- `index.html` — all six demos and visible code panels
- `style.css` — dark cards, orange outer frame, flex layouts, gradients, and animations
- `script.js` — pause/resume animation control
- `README.md` — transcription notes and setup

## Accuracy note

The first five snippets are transcribed from the readable code panels in the screen recording (minor spacing normalized). Some source lines are partly clipped while the page scrolls, so complete demo styling is filled in to make each animation runnable. The final recording frame only reveals the heading **Flex Flip Cards Row**; its implementation is a clearly marked inferred completion, not a transcription of unseen code.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
