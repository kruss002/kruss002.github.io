var imgs = [];
var imageWidth;
var imageHeight;
var imageToUse = 0;

function preload() {
  imgs[0] = loadImage( "A.jpg" );
  imgs[1] = loadImage( "B.jpg" );
  imgs[2] = loadImage( "C.jpg" );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   Adjust frame rate
  frameRate(10);
  //   Adjust Image Size
  imageWidth = imgs[0].width / 9;
  imageHeight = imgs[0].height / 10;
  
  imgs[0].filter(GRAY);
  imgs[1].filter(GRAY);
  imgs[2].filter(GRAY);
  imageMode(CENTER);
}

function draw() {
  //   Change Background Color
  background(0,0,0,10);
  
  image(imgs[imageToUse], mouseX, mouseY,imageWidth, imageHeight);
  imageToUse = (imageToUse+1) % imgs.length;
}