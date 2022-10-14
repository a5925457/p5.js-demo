// 設定基本參數
const COLORS = [
  { color: 'red', x: 0, y: 0 },
  { color: 'orange', x: 0, y: 0 },
  { color: 'yellow', x: 0, y: 0 },
  { color: 'green', x: 0, y: 0 },
  { color: 'blue', x: 0, y: 0 },
  { color: 'purple', x: 0, y: 0 },
  { color: 'pink', x: 0, y: 0 },
  { color: 'black', x: 0, y: 0 },
];
const COLOR_PALETTE_SIZE = 20;
const PEN_SIZE = 10;

let nowColor = COLORS[0].color;

// 初始化僅執行一次，在這裡計算每個顏料的位置
function setup() {
  createCanvas(500, 500);
  background(255);

  let x = 0;
  COLORS.forEach(item => {
    item.x = x;
    item.y = height - COLOR_PALETTE_SIZE; // height 為畫布高度
    x += COLOR_PALETTE_SIZE;
  });
}

// 不斷地畫出調色盤
function draw() {
  setPalette();
}

// 畫出調色盤: 畫出每個顏色的區塊
function setPalette() {
  COLORS.forEach(item => {
    fill(item.color);
    noStroke();
    rect(item.x, item.y, COLOR_PALETTE_SIZE, COLOR_PALETTE_SIZE);
  });
}

// 滑鼠拖曳時執行畫畫
function mouseDragged() {
  noStroke();
  fill(nowColor);
  ellipse(mouseX, mouseY, PEN_SIZE, PEN_SIZE);
}

// 滑鼠點下執行換顏色
function mouseClicked() {
  if (mouseY > height - COLOR_PALETTE_SIZE && mouseY < height) {
    COLORS.forEach(item => {
      if (mouseX > item.x && mouseX < item.x + COLOR_PALETTE_SIZE) {
        nowColor = item.color;
      }
    });
  }
}
