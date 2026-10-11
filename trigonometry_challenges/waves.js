const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const FPS = 60;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Waves");
  r.SetTargetFPS(FPS);
}

function drawAxis(x, y, amplitude) {
  const padding = 20;
  const axisColor = r.WHITE;

  const xAxis = {
    start: { x, y },
    end: { x: WIDTH - padding, y },
  };

  const yAxis = {
    start: { x, y: padding },
    end: { x, y: HEIGHT - padding },
  };

  r.DrawText("-1", x - padding - 10, y + amplitude - 10, 20, r.WHITE);
  r.DrawText("0", x - padding - 5, y - 10, 20, r.WHITE);
  r.DrawText("1", x - padding, y - amplitude - 10, 20, r.WHITE);

  r.DrawLineEx(xAxis.start, xAxis.end, 2, axisColor);
  r.DrawLineEx(yAxis.start, yAxis.end, 2, axisColor);
}

function drawWave(axisOriginX, axisOriginY, amplitude, noOfRevolutions, wave) {
  const xIncrement = 0.5;
  const angleIncrement = 0.01;
  const numberOfSegments = (noOfRevolutions * Math.PI * 2) / angleIncrement;

  const waveFunction = wave === "sin" ? Math.sin : Math.cos;
  const waveColor = wave === "sin" ? r.GREEN : r.BLUE;

  let angle = 0;
  let waveXOffset = 0;

  for (let i = 0; i < numberOfSegments; i++) {
    const startX = axisOriginX + waveXOffset;
    const startY = axisOriginY - waveFunction(angle) * amplitude;

    const nextX = axisOriginX + waveXOffset + xIncrement;
    const nextY =
      axisOriginY - waveFunction(angle + angleIncrement) * amplitude;

    const startPoint = { x: startX, y: startY };
    const endPoint = { x: nextX, y: nextY };

    r.DrawLineEx(startPoint, endPoint, 2, waveColor);

    angle += angleIncrement;
    waveXOffset += xIncrement;
  }
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  const axisOriginX = 50;
  const axisOriginY = 200;
  const amplitude = 120;
  const noOfRevolutions = 1;

  drawAxis(axisOriginX, axisOriginY, amplitude);

  drawWave(axisOriginX, axisOriginY, amplitude, noOfRevolutions, "sin");
  drawWave(axisOriginX, axisOriginY, amplitude, noOfRevolutions, "cos");

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
