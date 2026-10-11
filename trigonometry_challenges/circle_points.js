const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  const centerX = 200;
  const centerY = 200;
  const radius = 150;

  const points = 12;
  const pointRadius = 10;

  const angularSpacing = (2 * Math.PI) / points;

  r.DrawCircle(centerX, centerY, radius, r.WHITE);

  for (let i = 0; i < points; i++) {
    const pointX = centerX + radius * Math.cos(angularSpacing * i);
    const pointY = centerY + radius * Math.sin(angularSpacing * i);

    r.DrawCircle(pointX, pointY, pointRadius, r.RED);
  }

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
  const screenWidth = 400;
  const screenHeight = 400;
  const title = "Spain";
  const FPS = 60;

  setup(screenWidth, screenHeight, title, FPS);
  loop();

  tearDown();
}

main();
