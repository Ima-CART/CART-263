"use strict";

//variables

// let counter = 0;

let sky = {
    r: 30,
    g: 10,
    b: 110,
}


function setup() {
    console.log("go")
    createCanvas(645, 645);
    drawSky();
}



//draws
function draw() {
    drawSky();

    textSize(28)
    fill("#fff")
    textAlign(CENTER, CENTER)
    text("test", 325, 325)


    for (let i = 0; i <= 9; i++) {
        text(i, 50 + i * 35, 50)

    }


    for (let i = 0; i <= 15; i++) {
        text(i, 50, 50 + i * 35)


    }

}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}




