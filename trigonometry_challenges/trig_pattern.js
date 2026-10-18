const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const FPS = 60;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Pattern");
  r.SetTargetFPS(FPS);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

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
