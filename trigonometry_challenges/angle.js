const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const FPS = 60;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Angle");
  r.SetTargetFPS(FPS);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  const pointA = { x: 100, y: 300 };
  const pointB = { x: 350, y: 150 };
  const pointC = { x: pointB.x, y: pointA.y };

  r.DrawLineEx(pointA, pointB, 2, r.WHITE);
  r.DrawLineEx(pointB, pointC, 2, r.BLUE);
  r.DrawLineEx(pointC, pointA, 2, r.BLUE);

  r.DrawCircleV(pointA, 4, r.RED);
  r.DrawCircleV(pointB, 4, r.RED);
  r.DrawCircleV(pointC, 4, r.RED);

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
