const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const FPS = 60;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Ellipse");
  r.SetTargetFPS(FPS);
}

function drawEllipse(centerX, centerY, hRadius, vRadius, color) {
  const angleIncrement = 0.01;
  const numberOfSegments = (Math.PI * 2) / angleIncrement;

  let angle = 0;

  for (let i = 0; i < numberOfSegments; i++) {
    const startX = centerX + hRadius * Math.cos(angle);
    const startY = centerY + vRadius * Math.sin(angle);
    const start = { x: startX, y: startY };

    const nextX = centerX + hRadius * Math.cos(angle + angleIncrement);
    const nextY = centerY + vRadius * Math.sin(angle + angleIncrement);
    const next = { x: nextX, y: nextY };

    r.DrawLineEx(start, next, 2, color);

    angle += angleIncrement;
  }
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  const centerX = 300;
  const centerY = 200;

  const horizontalRadius = 200;
  const verticalRadius = 100;

  drawEllipse(centerX, centerY, horizontalRadius, verticalRadius, r.BLUE);

  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    // no update!
    draw();
  }
}

function tearDown() {
  r.CloseWindow();
}

function main() {
  setup();
  loop();

  tearDown();
}

main();
