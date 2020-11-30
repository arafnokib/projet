var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var playerCountRef;
var plane1;
var plane2;
var plane3;
var plane4;
var planes;


function preload(){
   
}

function setup(){
    createCanvas(displayWidth - 20,displayHeight - 20);
    database = firebase.database();
   // form = new Form();
   game = new Game();
   game.getState();
   game.start();

    
}

function draw(){
    
   // form.display();
    
    if(playerCount === 4){
        game.update();

    }

    if (gameState === 1){
      //  clear();
        game.play();
    }
    
    //background(205);
    //drawSprites();
}

