"use strict";

//variables

let circleSize = 64.5;
let circleColor;
let isCircle = true;


let sky = {
    r: 30,
    g: 10,
    b: 110,
}


function setup() {
    console.log("go");
    createCanvas(645, 645);
    randomColor();

}



//draws
function draw() {
    drawSky();
    fill(circleColor);

    for (let x = circleSize / 2; x < width; x += circleSize) {
        for (let y = circleSize / 2; y < height; y += circleSize) {

            if (isCircle) {
                ellipse(x, y, circleSize, circleSize)
            }

            else { rect(x - circleSize / 2, y - circleSize / 2, circleSize, circleSize) }

        }
    }
}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}

function randomColor() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    circleColor = color(r, g, b);
}

function keyPressed() {
    if (keyCode === 32) { randomColor(); }

}

function mousePressed() {
    isCircle = !isCircle
}


