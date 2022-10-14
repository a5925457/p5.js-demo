function setup() {
  createCanvas(400, 400); // (width, height) 畫布大小
  console.log('只執行一次！');
}

function draw() {
  background(0, 0, 255, 50); // 背景顏色
  fill(0, 255, 0, 50); // 決定接下來填滿的顏色 rgba
  rect(50, 50, 20, 20); // (x 坐標, y 坐標, 寬度, 長度)
  ellipse(100, 100, 50, 50); // (圓心 x 坐標, 圓心 y 坐標, 寬度, 長度)
  line(0, 0, 40, 40); // (點 1 x 坐標, 點 1 y 坐標, 點 2 x 坐標, 點 2 y 坐標,)
  triangle(0, 0, 351, 360, 288, 360); // (點 1 x 坐標, 點 1 y 坐標, 點 2 x 坐標, 點 2 y 坐標,, 點 3 x 坐標, 點 3 y 坐標)
  //   console.log('我會一直執行！');
}
