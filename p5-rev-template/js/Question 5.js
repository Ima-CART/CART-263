"use strict";

let counter = 0


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

let orgSquare = {
    x: 30,
    y: 30,
    w: 50,
    h: 50,
    fill: {
        r: 222,
        g: 131,
        b: 62,
    }
}


//draws
function draw() {
    drawSky();
    displaySquare();
    fill("#ffff")
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Clicks:" + counter, 200, 200)


    // if (mouseX < 215) {
    //     colour.r = 255
    //     colour.g = 255
    //     colour.b = 255
    // }
    // else {
    //     colour.r = 0
    //     colour.g = 0
    //     colour.b = 0
    // }

    // if (mouseX > 215 && mouseX < 430) {
    //     colour2.r = 255
    //     colour2.g = 255
    //     colour2.b = 255
    // }
    // else {
    //     colour2.r = 0
    //     colour2.g = 0
    //     colour2.b = 0
    // }

    // if (mouseX > 430) {
    //     colour3.r = 255
    //     colour3.g = 255
    //     colour3.b = 255
    // }
    // else {
    //     colour3.r = 0
    //     colour3.g = 0
    //     colour3.b = 0
    // }

}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}

function displaySquare() {
    push();
    noStroke();
    fill(orgSquare.fill.r, orgSquare.fill.g, orgSquare.fill.b);
    rect(orgSquare.x, orgSquare.y, orgSquare.w, orgSquare.h);
    pop();

}

function mousePressed() {

    if (mouseX > orgSquare.x && mouseX < orgSquare.x + orgSquare.w && mouseY > orgSquare.y && mouseY < orgSquare.y + orgSquare.h)
        counter++;
}


