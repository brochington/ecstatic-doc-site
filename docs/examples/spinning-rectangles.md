---
id: spinning-rectangles
title: Spinning Rectangles
sidebar_label: Spinning Rectangles
slug: spinning-rectangles
---

Below is an example of a fully functional implementation of an ECS project.

<div>
<iframe src="https://codesandbox.io/embed/pensive-cloud-db9d8?fontsize=14&hidenavigation=1&theme=dark"
  style={{ width:'100%', height: '800px', border:'0', borderRadius: '4px', overflow: 'hidden'}}
  title="pensive-cloud-db9d8"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>
</div>

```javascript
/* Helpers */

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16); // random color
}

/* World */

const { World } = ecstatic;

const world = new World();

/* Components */

class Canvas {
  constructor(elementId, width, height) {
    this.canvas = document.getElementById(elementId);
    this.width = width;
    this.height = height;
  }
}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rotation {
  count = 0;
  speed = getRandomNumber(-5, 5);
  rotation = 0;

  rotate() {
    this.count += this.speed;
    this.rotation = (this.count % 360) * (Math.PI / 180);
  }
}

class Scale {
  scale = getRandomNumber(0, 2);
}

class Transform {
  transform = [1, 0, 0, 1, 0, 0];
}

class Color {
  color = getRandomColor();
}

class Rectangle {
  width = getRandomNumber(10, 200);
  height = getRandomNumber(10, 200);
}

/* Systems */

function prepareCanvas(args) {
  const { entity, components } = args;
  const canvasComp = components.get(Canvas);

  if (entity.state === 'creating') {
    canvasComp.canvas.width = canvasComp.width;
    canvasComp.canvas.height = canvasComp.height;
  }

  const ctx = canvasComp.canvas.getContext('2d');
  ctx.clearRect(0, 0, canvasComp.width, canvasComp.height);
}

world.addSystem([Canvas], prepareCanvas);

//

function computeTransform(args) {
  const { components } = args;

  const { x, y } = components.get(Position);
  const { scale } = components.get(Scale);
  const transformComp = components.get(Transform);

  transformComp.transform = [scale, 0, 0, scale, x, y];
}

world.addSystem([Position, Scale, Transform], computeTransform);

//

function renderRectangle(args) {
  const { components } = args;

  const { canvas } = components.get(Canvas);
  const rotationComp = components.get(Rotation);
  const { transform } = components.get(Transform);
  const { width, height } = components.get(Rectangle);
  const { color } = components.get(Color);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.save();

  ctx.transform(...transform);

  rotationComp.rotate();
  ctx.rotate(rotationComp.rotation);

  ctx.fillStyle = color;
  ctx.fillRect(-(width / 2), -(height / 2), width, height);

  ctx.restore();
}

world.addSystem([Canvas, Rotation, Transform, Rectangle], renderRectangle);

/* Create Entities, and attach Components to them. */

// the canvas component will be shared across entities.
const canvasComp = new Canvas('canvas-1', 800, 600);

[...Array(100)].forEach(() => {
  const x = getRandomNumber(0, canvasComp.width);
  const y = getRandomNumber(0, canvasComp.height);

  world
    .createEntity()
    .add(canvasComp)
    .add(new Rectangle())
    .add(new Position(x, y))
    .add(new Rotation())
    .add(new Scale())
    .add(new Transform())
    .add(new Color());
});

function render() {
  world.systems.run();

  window.requestAnimationFrame(render);
}

render();

// DOM

// Quick example of what updating component values might look like.
document.querySelector('#change-colors-btn').addEventListener('click', () => {
  world
    .grabAll(Color)
    .forEach(({ component }) => (component.color = getRandomColor()));
});
```
