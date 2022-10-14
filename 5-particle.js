const particles = [];
const PARTICLE_SIZE = 15;

let img;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    noStroke();
    // get(x, y) 將回傳該位置像素的 [r, g, b, alpha] 資料
    const col = img.get(this.x, this.y);
    fill(col[0], col[1], col[2], 100);
    // 用比原來 1px 更大的圓形來畫出粒子效果
    ellipse(this.x, this.y, PARTICLE_SIZE, PARTICLE_SIZE);
  }

  // 一直更動 x, y 的位置
  update() {
    this.x += random(-10, 10); // 第一個參數為最小隨機值，第二個參數為最大隨機值
    this.y += random(-10, 10);
  }
}

function preload() {
  img = loadImage('photo.jpg');
}

function setup() {
  // 定義每一秒顯示的影格數。調用 frameRate(30) 將使繪圖每秒刷新 30 次。
  // 建議在 setup() 內設置幀率。默認的幀率值為每秒 60 影格。
  frameRate(30);
  img.resize(img.width / 5, img.height / 5);
  createCanvas(img.width, img.height);
  // 做出 500 個馬賽克粒子
  for (let i = 0; i < 500; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
  }
}
