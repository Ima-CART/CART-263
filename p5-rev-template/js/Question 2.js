"use strict";

function setup() {
    console.log("go")
    createCanvas(640, 640);
    drawSky();
    drawEllipse(50, 50, 50, 50, 250, 126, 195);
    drawEllipse(200, 300, 90, 90, 125, 115, 175);
    drawEllipse(300, 200, 150, 150, 61, 135, 232);
}



//vairables

let sky = {
    r: 30,
    g: 10,
    b: 110,
}

let circle = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
}

let colour = {
    r: 225,
    g: 126,
    b: 195,
}

//draws
function draw() {



}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}

//cicles

function drawEllipse(x, y, w, h, r, g, b) {
    push();
    fill(r, g, b);
    ellipse(x, y, h, w);
    pop();
}