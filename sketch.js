function preload(){
  nimg = loadImage("nun.png");
  bg = loadImage("bg.jpg");
  homeimg = loadImage("home.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  nun = createSprite(100,height-100,10,10);
nun.addImage(nimg);
nun.scale = 0.2;
home = createSprite(150,height-200,20,20);
home.addImage(homeimg);
home.scale = 0.7;





  



}

function draw() 
{
  background(bg);
drawSprites()
}




