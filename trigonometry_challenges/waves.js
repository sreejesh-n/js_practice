const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
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
  const screenWidth = 600;
  const screenHeight = 400;
  const title = "Waves";
  const FPS = 60;

  setup(screenWidth, screenHeight, title, FPS);
  loop();

  tearDown();
}

main();
