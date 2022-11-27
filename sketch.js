var fondo;
var bed;
var bedimg;
var choba;
var chobaimg;
var menubutton;
var menubuttonimg;
var menu;
var menuimg;
var PLAY = 1;
var SHOP = 0;
var gameState = PLAY;

function preload (){
    menubuttonimg = loadImage("assets/menubutton.png");
    menuimg = loadImage("assets/menu.png");
fondo = loadImage("assets/fondo.png");
bedimg = loadImage("assets/bed.png")
chobaimg = loadImage("assets/choba.png")

}


function setup (){
bed = createSprite(1500,700,50,50);
bed.addAnimation("bed",bedimg);
bed.scale = 2;
choba = createSprite(1500,650,40,40);
choba.addAnimation("choba",chobaimg);
choba.scale = 0.3;
menubutton = createSprite(displayWidth/2-900,displayHeight/2-480,40,40);
menubutton.addAnimation("menubutton",menubuttonimg);
menubutton.scale = 2;
menu = createSprite(displayWidth/2-200,displayHeight/2-200,40,40);
menu.addAnimation("menu",menuimg);
menu.scale = 2
menu.visible = false;

}


function draw (){
createCanvas ( displayWidth,displayHeight);
background(fondo);
if (gameState === PLAY){
    if(keyDown("m")){
 gameState = SHOP;
}
} else if(gameState=SHOP){
  
   menu.visible = true;
   menubutton.visible = false;
    }

drawSprites();

}