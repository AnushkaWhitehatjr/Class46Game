
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var girl, girlImg, boy, boyImg, bg2Img, backg2Img, ground1, bg2;
var highground;
var highgroundsGroup, highgroundImg, goblinsGroup, goblin1, gonlin2, goblin3; 
var gameState = "LOGIN";
var world, engine;
var count=0;

function preload(){
	bg2Img = loadImage("Images/bg2.png");
	backg2Img = loadImage("Images/bg2.png");
	girlImg = loadImage("Images/girlonbikeImg.png");
	boyImg = loadImage("Images/boyonbikeImg.PNG");
	highgroundImg = loadImage("Images/highground.png");
}

function setup() {
	createCanvas(1700, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground1=new ground(850,785,1700,30);

	bg2 = createSprite(850, 400, 1700, 800);
	bg2.addImage("imgofbg", bg2Img);
	bg2.scale = 0.6;
    
	goblinsGroup = createGroup();
 	highgroundsGroup = createGroup();
	
	Mykey();
	
  
}


function draw() 
{
	Engine.update(engine);
  background(backg2Img);
  if(gameState === "LOGIN"){
	//text("TREASURE HUNT", )
	//text("Hi! Ready for an adventure?")
	//text("Then Press SPACE to Start!")
  }

  if(keyCode === 32 && gameState === "LOGIN"){
	gameState = "STORY";
	//text("STORY: ")
	//text("You have been given a very dangerous task!")
  }

  if(keyDown("UP_ARROW") && count===1)
  {
		////girl.y = girl.y-5;
		girl.velocityY=-5;
		//girl.visible=false;
  }

  if(keyDown("UP_ARROW") && count===2)
  {
		////boy.y = boy.y-5;
		boy.velocityY=-5;
  }

  if ((keyCode === 103 || keyCode === 71)  && count !==2 && count!==1) 
	{
		//console.log("Hello!");
        count=1;
		girl = createSprite(100,680,10,10);
		girl.addImage("gImg", girlImg);

	}

	else if ((keyCode === 98 || keyCode === 66)&& count!==1 && count!==2)
	{
		count=2;
		//console.log("Hello!");
		boy = createSprite(100,685,10,10);
		boy.addImage("bImg", boyImg);

	}

	bg2.velocityX = -5;
	//console.log(bg2.width);
	if( bg2.x < 0)
	{
		bg2.x = bg2.width/2;
	}

  highGround();
  drawSprites();
  ground1.display();
}

function Mykey() 
{
	
	
}

//function jumping(){

//}

function highGround() {
	if (frameCount % 180 === 0) {
	  var highground1 = createSprite(2200,120,10,10);
	  highground1.y = Math.round(random(250,650));
	  highground1.addImage(highgroundImg);
	  highground1.velocityX = -6;
	  highground1.scale = 0.8;
	  
	  highground1.lifetime = 500;
	
	  highgroundsGroup.add(highground1);
	}
  }
  
