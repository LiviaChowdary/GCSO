var car,wall;
var speed,weight;
var deformation;
var collision;

function setup() {
  createCanvas(1600,400);
  speed = random(55,98);
  weigth = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  deformation = 0.5*weight*speed/22500;
  
}

function draw() {
  background(255,255,255);
  

if(wall.x-car.x<(car.width+wall.width)/2){
    if( deformation<100){
      car.shapeColor = color(0,255,0);

    }
    else if ( deformation>100 &&deformation<180){
      car.shapeColor = color(230,230,0);
    }
    else(deformation>180)
      car.shapeColor = color(255,0,0);
  }

  drawSprites();
}