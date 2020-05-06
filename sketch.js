// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/
var gameState = "loaded";

function setup() {
    // Setup the canvas, the ground , the tanker, the shooting ball and the bubble balls. 

    var canvas = createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;
                                                                                         
    var ground = new Ground (800,400,400,50);
    var tanker = new tanker()

}

function draw() {
// Remember to update the Matter Engine and set the background.
background("blue");

ground.display();
tanker.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
    gameState = "launched";
















    
}