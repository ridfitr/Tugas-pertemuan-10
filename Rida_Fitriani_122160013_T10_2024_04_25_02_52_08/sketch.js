let P = [];
let t = [];
let r;
let k;

let P0 = 20;
let dt = 0.1;
let tMax = 10;

let grafik;

function setup() {
  createCanvas(400, 400);
  
  r = createInput("");
  r.position(20, 40);
  let p = createP('konstanta pertumbuhan')
  p.style('fontsize', '14px');
  p.position(20, 0);
  
  k = createInput("");
  k.position(200, 40);
  let a = createP('Carrying Capacity')
  a.style('fontsize', '14px');
  a.position(200, 0);
  
  grafik = new Chart(this, config);
  
  solve();
  r.changed(solve);
  k.changed(solve);
}

function draw() {
  background(220);
  grafik.update();
}

function solve() {
  P[0] = P0;
  t[0] = 0;
  let rs = float(r.value());
  let ks = float(k.value());
  let iterNum = int(tMax / dt);
  
  for (i=0; i < iterNum; i++){
    P[i+1] = P[i] + dt * rs * P[i]*(1 - P[i]/ks)
    t[i+1] = (i + 1) * dt;
  }
}