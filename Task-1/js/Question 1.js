"use strict";

function setup() {
    console.log("go")

}

function setup() {
    createCanvas(640, 640);
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
    drawSky();
    drawCircle1();
    drawCircle2();
    drawCircle3();

}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}

//cicles
function drawCircle1() {
    push();
    fill(colour.r, colour.g, colour.b);
    ellipse(circle.x + 50, circle.y + 50, circle.height, circle.width);
    pop();
}

function drawCircle2() {
    push();
    fill(colour.r - 80, colour.g, colour.b);
    ellipse(circle.x + 200, circle.y + 300, circle.height + 40, circle.width + 40);
    pop();
}

function drawCircle3() {
    push();
    fill(colour.r - 200, colour.g + 40, colour.b + 120);
    ellipse(circle.x + 300, circle.y + 200, circle.height + 100, circle.width + 100);
    pop();
}