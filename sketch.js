var gameState = 0;
var playerCount;
var database;
var game,form,player;

function setup(){
  createCanvas(600,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

}

function draw(){

}
