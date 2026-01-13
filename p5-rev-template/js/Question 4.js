"use strict";

function setup() {
    console.log("go")
    createCanvas(645, 645);
    drawSky();
}

//vairables

let sky = {
    r: 30,
    g: 10,
    b: 110,
}

let colour = {
    r: 0,
    g: 0,
    b: 0,
}

let colour2 = {
    r: 0,
    g: 0,
    b: 0,
}

let colour3 = {
    r: 0,
    g: 0,
    b: 0,
}

//draws
function draw() {
    drawSky();
    drawRect1();
    drawRect2();
    drawRect3();

    if (mouseX < 215) {
        colour.r = 255
        colour.g = 255
        colour.b = 255
    }
    else {
        colour.r = 0
        colour.g = 0
        colour.b = 0
    }

    if (mouseX > 215 && mouseX < 430) {
        colour2.r = 255
        colour2.g = 255
        colour2.b = 255
    }
    else {
        colour2.r = 0
        colour2.g = 0
        colour2.b = 0
    }

    if (mouseX > 430) {
        colour3.r = 255
        colour3.g = 255
        colour3.b = 255
    }
    else {
        colour3.r = 0
        colour3.g = 0
        colour3.b = 0
    }

}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}

//rectangles

function drawRect1() {
    push();
    noStroke();
    fill(colour.r + 27, colour.g + 105, colour.b + 33)
    rect(0, 0, 215, height);
    pop();
}

function drawRect2() {
    push();
    noStroke();
    fill(colour2.r + 34, colour2.g + 159, colour2.b + 227)
    rect(215, 0, 215, height);
    pop();
}

function drawRect3() {
    push();
    noStroke();
    fill(colour3.r + 105, colour3.g + 241, colour3.b + 255);
    rect(430, 0, 215, height);
    pop();
}
