let img;

function preload() {
  // preload 只會執行一次
  img = loadImage('photo.jpg');
}

// setup 會等 preload 完成在執行
function setup() {
  createCanvas(500, 500);
  img.resize(width, height); // 調整圖片大小
  image(img, 0, 0); // 繪製圖片
}
