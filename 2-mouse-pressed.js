function setup() {
  createCanvas(400, 400);
  background(250, 250, 100);
}

function draw() {
  noStroke(); // 不畫外框
  fill(250, 200, 200, 50);
  ellipse(mouseX, mouseY, 25, 25); // mouseX 與 mouseY 為滑鼠的座標
}

function mousePressed() {
  // 每次按下鼠標按鈕後，都會調用一次 mousePressed 函數
  background(250, 250, 100); // 將背景顏色改為初始化背景色
}
