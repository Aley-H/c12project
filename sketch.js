var  runnerImage, runner
var pathImage, path
function preload(){
  //pre-load images
runnerImage = loadAnimation("Runner-1.png", "Runner-2.png")
pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,600);
  //create sprites here
  path = createSprite(200, 300, 400, 600)
  path.addImage("pathlabel", pathImage)

  runner = createSprite(200, 500, 20, 20)
runner.addAnimation("runnerlabel", runnerImage)
runner.scale=0.15
}

function draw() {
  background(0);
path.velocityY=6

if (path.y>600){
  path.y=path.height/4
}
  drawSprites()
}
