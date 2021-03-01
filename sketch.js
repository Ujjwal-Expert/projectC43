var hr,mn,sc;
var hourHand,minuteHand,secondHand;

function preload(){
  clockImg = loadImage('clock.png');
}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);
  imageMode(CENTER);

  angleMode(DEGREES);
  translate(200,200);

  

  sc = second();
  mn = minute();
  hr = hour();
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn+sc/60,0,60,0,360);
  
  if(hr<=12){
    hrAngle = map(hr+mn/60,0,12,0,360);
  }
  if(hr>12){
    hrAngle = map(hr-12+mn/60,0,12,0,360);
  }

  push();
  stroke('red');
  rotate(scAngle);
  strokeWeight(1.5);
  line(0,0,0,-70);
  pop();

  push();
  strokeWeight(3);
  rotate(mnAngle);
  line(0,0,0,-80);
  pop();

  push();
  strokeWeight(4);
  rotate(hrAngle);
  line(0,0,0,-50);
  pop();

  image(clockImg,0,-15,250,280);

  drawSprites();
}