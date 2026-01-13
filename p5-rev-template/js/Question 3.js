"use strict";

function setup() {
    console.log("go")
    createCanvas(640, 640);
    drawSky();
}

//vairables

let sky = {
    r: 30,
    g: 10,
    b: 110,
}

let square = {
    x: 30,
    y: 30,
}

let square2 = {
    x: 0,
    y: 0,
}

let square3 = {
    x: 300,
    y: 0,
}

let colour = {
    r: 225,
    g: 126,
    b: 195,
}

//draws
function draw() {
    drawSky();
    drawSquares();
    drawSquares2();
    drawSquares3();
}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}

//squares

function drawSquares() {
    push();
    fill(colour.r, colour.g, colour.b);
    rect(square.x, square.y + 20, 55, 55);
    pop();
}

function drawSquares2() {
    push();
    fill(colour.r + 90, colour.g + 80, colour.b);
    rect(square2.x + 10, square2.y, 55, 55);
    pop();
}

function drawSquares3() {
    push();
    fill(colour.r - 20, colour.g + 80, colour.b);
    rect(square3.x, square3.y = square3.y + 1, 55, 55);
    pop();
}

function mousePressed() {
    square.x = square.x + 10
}

function keyPressed() {
    if (keyCode === 32) {
        square2.y = square2.y + 20
    }
}