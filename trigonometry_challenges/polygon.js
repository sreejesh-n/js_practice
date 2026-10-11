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

  const noOfSides = 7;

  const angularSpacing = (2 * Math.PI) / noOfSides;

  //   r.DrawCircleLines(centerX, centerY, radius, r.WHITE);

  for (let i = 0; i < noOfSides; i++) {
    const startPosX = centerX + radius * Math.cos(angularSpacing * i);
    const startPosY = centerY + radius * Math.sin(angularSpacing * i);

    const endPosX = centerX + radius * Math.cos(angularSpacing * (i + 1));
    const endPosY = centerY + radius * Math.sin(angularSpacing * (i + 1));

    r.DrawLine(startPosX, startPosY, endPosX, endPosY, r.WHITE);
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
  const title = "Polygon";
  const FPS = 60;

  setup(screenWidth, screenHeight, title, FPS);
  loop();

  tearDown();
}

main();
