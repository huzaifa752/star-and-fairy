var starImg,bgImg,fairybody
var star, starBody;
var fairy,fairyimg
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here

	fairyimg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

    



	//create fairy sprite and add animation for fairy
	

   


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy = createSprite(80,470,10,10)
	fairy.isStatic =true
	fairy.addAnimation("fairy",fairyimg)
	
	fairy.scale=0.2
	
	/*fairybody = Bodies.rectangle(80,470,10,10)
	World.add(world,fairybody)*/



}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  /*fairy.x=fairybody.position.x
  fairy.y=fairybody.position.y*/



  


  console.log(star.y);

  //write code to stop star in the hand of fairy

  if (star.y>470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);

  }

  drawSprites();
}



function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === (RIGHT_ARROW)){
		fairy.x=fairy.x+15
	}
	if (keyCode === (LEFT_ARROW)){
	  fairy.x=fairy.x-15
	
}
}
