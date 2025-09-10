
export default function Canvas() {
  console.log("CANVAS")

  return (
  <div>
    <canvas id="game-canvas" width="320" height="180"></canvas>
    <script type="module" src="../scripts/canvas.js"></script>
  </div>
  )
}


// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="../styles/canvas.css">
//     <title>Canvas</title>
//   </head>
//   <body>
//     <canvas id="game-canvas" width="320" height="180"></canvas>
//     <script type="module" src="../scripts/canvas.js"></script>
//   </body>
// </html>