const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const FPS = 60;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Angle");
  r.SetTargetFPS(FPS);
}

function calcDistance(x1, x2, y1, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  const pointA = { x: 100, y: 300 };
  const pointB = { x: 350, y: 150 };
  const pointC = { x: pointB.x, y: pointA.y };

  const perpDistance = calcDistance(pointB.x, pointC.x, pointB.y, pointC.y);
  const baseDistance = calcDistance(pointA.x, pointC.x, pointA.y, pointC.y);

  const angle = (Math.atan2(perpDistance, baseDistance) * 180) / Math.PI;

  r.DrawCircleSector(pointA, 60, 90, 90 + angle, 360, r.YELLOW);

  r.DrawLineEx(pointA, pointB, 2, r.WHITE);
  r.DrawLineEx(pointB, pointC, 2, r.BLUE);
  r.DrawLineEx(pointC, pointA, 2, r.BLUE);

  r.DrawText("A", pointA.x - 25, pointA.y - 10, 20, r.WHITE);
  r.DrawText("B", pointB.x + 10, pointB.y - 15, 20, r.WHITE);
  r.DrawText(`${angle.toFixed(2)}`, pointA.x + 68, pointA.y - 24, 15, r.WHITE);

  r.DrawCircleV(pointA, 4, r.RED);
  r.DrawCircleV(pointB, 4, r.RED);

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
