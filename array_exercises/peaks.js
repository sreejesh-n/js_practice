const r = require("raylib");
const m = require("./math");
const t = require("./arrayTestCases");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const data = t.randomData(200);
  console.log(data);
  const peakElements = getPeakElements(data);

  const gap = 10;

  const largestValue = m.findLargest(data);
  const heightOfLargest = HEIGHT * 0.9;

  const verticalScale = heightOfLargest / largestValue;

  return {
    WIDTH,
    HEIGHT,
    data,
    gap,
    verticalScale,
    peakElements,
  };
}

function drawGraph(world) {
  for (let i = 0; i < world.data.length; i++) {
    const startX = world.gap * i;
    const startY = world.HEIGHT - world.data[i] * world.verticalScale;

    const endX = world.gap * (i + 1);
    const endY = world.HEIGHT - world.data[i + 1] * world.verticalScale;

    r.DrawLine(startX, startY, endX, endY, r.BLACK);
  }
}

function getPeakElements(array) {
  const peakArray = [];

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peakArray.push(i);
    }
  }

  return peakArray;
}

function drawPeak(world) {
  for (let i = 0; i < world.peakElements.length; i++) {
    const centerX = world.gap * world.peakElements[i];
    const centerY =
      world.HEIGHT - world.data[world.peakElements[i]] * world.verticalScale;

    r.DrawCircle(centerX, centerY, 5, r.RED);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  drawGraph(world);
  drawPeak(world);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(world);
  }
}

function tearDown() {
  r.CloseWindow();
}

function main() {
  const WIDTH = 600;
  const HEIGHT = 600;
  const title = "Peaks";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
