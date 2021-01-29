var zombie1;
var zombie2 ;
var zombie3;
var player;
var bullet;
var life= 10;

function preload(){
  zombie1= loadImage("zombie/zombie1.png")
  zombie2= loadImage("zombie/zombie2.png")
  zombie3= loadImage("zombie/zombie3.png")
  zombie4= loadImage("zombie/zombie4.png")
  zombie5= loadImage("zombie/zombie5.png")
  zombie6= loadImage("zombie/zombie6.png")
  zombie7= loadImage("zombie/zombie7.png")
  zombie8= loadImage("zombie/zombie8.png")
  zombie9= loadImage("zombie/zombie9.png")
  zombie10= loadImage("zombie/zombie10.png")
  zombie11= loadImage("zombie/zombie11.png")
  zombie12= loadImage("zombie/zombie12.png")
  zombie13= loadImage("zombie/zombie13.png")
  zombie14= loadImage("zombie/zombie14.png")
  zombie15= loadImage("zombie/zombie15.png")
  zombie16= loadImage("zombie/zombie16.png")
  zombie17= loadImage("zombie/zombie17.png")
  zombie18= loadImage("zombie/zombie18.png")
  zombie19= loadImage("zombie/zombie19.png")
  zombie20= loadImage("zombie/zombie20.png")
  zombie21= loadImage("zombie/zombie21.png")
  zombie22= loadImage("zombie/zombie22.png")
  zombie23= loadImage("zombie/zombie23.png")
  zombie24= loadImage("zombie/zombie24.png")
  playerImg= loadImage("zombie/player.png")
  bulletImg= loadImage("zombie/bullet.png")
  heartImg= loadImage("zombie/heart.jpg")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player=createSprite(width-270, height/2);
  player.addImage(playerImg);

  bulletGroup= new Group();
  zombieGroup= new Group();
  
}

function draw() {
  background(0);  
text("life=:"+life +10, 100, 50)
createZombie();
if (keyWentDown(LEFT_ARROW)) {
createBullet();
}
for(var i = 0;i<zombieGroup.length;i++){
  if(bulletGroup.isTouching(zombieGroup.get(i))){
  zombieGroup.get(i).destroy();
  bulletGroup.destroyEach();
  }
}
for(var i = 0;i<life;i++){
  image(heartImg, 50*i+50, 50, 50, 50)
}
if (zombieGroup.isTouching(player)){
life = life-1
}
drawSprites();

}
function createBullet(){
  bullet=createSprite(player.x-265,player.y-169);
  bullet.addImage(bulletImg);
  bullet.velocityX = random(-3, -8);
  bulletGroup.add(bullet);

}
function createZombie(){
  
  
  
    if(frameCount % 10 === 0) {
      var zombie=createSprite(0,random(0, height),10,40);
      zombieGroup.add(zombie)
      zombie .velocityX = random(2, 10);
      zombie.debug=true;
zombie.setCollider("rectangle", 0, 0,250, 350)
      
      //generate random zombie s
      var rand = Math.round(random(1,24));
     
     switch(rand){
       case 1:zombie.addImage(zombie1);
       break;

       case 2:zombie.addImage(zombie2);
       break;

       case 3:zombie.addImage(zombie3);
       break;

       case 4:zombie.addImage(zombie4);
       break;

       case 5:zombie.addImage(zombie5);
       break;

       case 6:zombie.addImage(zombie7);
       break;

       case 7:zombie.addImage(zombie7);
       break;

       case 8:zombie.addImage(zombie8);
       break;

       case 9:zombie.addImage(zombie9);
       break;

       case 10:zombie.addImage(zombie10);
       break;

       case 10:zombie.addImage(zombie10);
       break;

       case 11:zombie.addImage(zombie11);
       break;

       case 12:zombie.addImage(zombie12);
       break;

       case 13:zombie.addImage(zombie13);
       break;

       case 14:zombie.addImage(zombie14);
       break;

       case 15:zombie.addImage(zombie15);
       break;

       case 16:zombie.addImage(zombie16);
       break;

       case 17:zombie.addImage(zombie17);
       break;

       case 18:zombie.addImage(zombie18);
       break;

       case 19:zombie.addImage(zombie19);
       break;

       case 20:zombie.addImage(zombie20);
       break;

       case 21:zombie.addImage(zombie21);
       break;

       case 22:zombie.addImage(zombie22);
       break;

       case 23:zombie.addImage(zombie23);
       break;

       case 24:zombie.addImage(zombie24);
       break;

       
     }       //assign scale and lifetime to the zombie            
     zombie.scale = 0.5;
     zombie.lifetime = width/2;
    }
  
  
}
