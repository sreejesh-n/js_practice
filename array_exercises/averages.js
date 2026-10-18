const r = require("raylib");
const m = require("./math");
const t = require("./arrayTestCases");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const data = t.randomData(1000);

  const gap = 0;
  const barWidth = 2;

  const largest = m.findLargest(data);
  const heightOfLargest = HEIGHT * 0.9;

  const verticalScale = heightOfLargest / largest;

  const average = m.calcAverage(data);

  return {
    WIDTH,
    HEIGHT,
    data,
    gap,
    barWidth,
    verticalScale,
    average,
  };
}

function drawBar(world, i) {
  const barHeight = Math.ceil(world.verticalScale * world.data[i]);
  const barX = (world.gap + world.barWidth) * i;
  const barY = world.HEIGHT - barHeight;

  r.DrawRectangle(barX, barY, world.barWidth, barHeight, r.DARKBLUE);
}

function drawAvgLine(average, verticalScale, screenWidth, screeHeight) {
  const startPos = {
    x: 0,
    y: screeHeight - verticalScale * average,
  };

  const endPos = {
    x: screenWidth,
    y: screeHeight - verticalScale * average,
  };

  r.DrawLineEx(startPos, endPos, 2, r.RED);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  for (let i = 0; i < world.data.length; i++) {
    drawBar(world, i);
  }

  drawAvgLine(world.average, world.verticalScale, world.WIDTH, world.HEIGHT);

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
  const title = "Averages";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
