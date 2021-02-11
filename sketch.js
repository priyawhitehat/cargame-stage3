var database,ballposition,position;
var form;
var player;
var game;
var gameState = 0;
var playerCount = 0;
var allplayers;
var car1,car2,car3,car4;
var cars;
var car1Img,car2Img,car3Img,car4Img,groundImg,track1Img,track2Img;


function preload()
{
    car1Img = loadImage("car1.png");
    car2Img = loadImage("car2.png");
    car3Img = loadImage("car3.png");
    car4Img = loadImage("car4.png");
    groundImg = loadImage("ground.png");
    track1Img = loadImage("track.png");
    track2Img = loadImage("track.jpg");

}


function setup(){
    database = firebase.database();
    createCanvas(displayWidth/2-20,displayHeight/2-30);
    game = new Game();
    game.getState();
    game.start();


}

function draw(){
    background("white");
    
    if(playerCount===4)
    {
        game.update(1)
    }

  //  game.getState();
    console.log(gameState);
    if(gameState===1)
    {
        clear();
        game.play();
    }
    drawSprites();


}