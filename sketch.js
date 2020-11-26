
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dObj,pObj,gObj;
var world;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	 
	
	pObj = new paper(200,450,70);
	gObj = new ground (width/2,670,width,20);
	dObj = new dustbin(1200,650);

	var render = Render.create({
		element:	document.body,
		engine:		engine,
		options:	{
			width : 1600,
			height: 700,
			wireFrames: false,
		}
	})

	Engine.run(engine);
   Render.run(render);  
}


function draw() {
  rectMode(CENTER);
  background(230);

  
  pObj.display();
  gObj.display();
  dObj.display();

 // drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(pObj.body,pObj.body.position,{x: 130, y: -145})
	}
}





