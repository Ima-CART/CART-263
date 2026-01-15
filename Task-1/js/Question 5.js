"use strict";

let counter = 0

//variables

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


let rdSquare = {
    x: 100,
    y: 30,
    w: 50,
    h: 50,
    fill: {
        r: 255,
        g: 0,
        b: 0,
    }
}
let radius = 50

let ellipseAlpha = 10


function setup() {
    console.log("go")
    createCanvas(645, 645);
    drawSky();
}



//draws
function draw() {
    drawSky();
    displaySquare();
    displayRdSquare();
    checkMouseSquareOverlap();
    checkMouseRdSquareOverlap();


    if (counter >= 1 && counter <= 10) {
        let i = 0
        let currentRadius = radius;
        let currentAlpha = ellipseAlpha

        while (i < counter) {
            fill(255, currentAlpha);
            noStroke();
            ellipse(width / 2, height / 2, currentRadius * 2);

            currentAlpha += 10
            currentRadius += 25


            i++
        }
    }


    // Bonus
    // function drawCircle(x, y, r, alpha) {
    //     noStroke();
    //     fill(255, ellipseAlpha);
    //     ellipse(x, y, r * 2);
    // }

    // if (counter >= 1 && counter <= 10) {
    //     let i = 0
    //     let currentRadius = radius;
    //     let currentAlpha = ellipseAlpha

    //     while (i < counter) {
    //         fill(255, currentAlpha);
    //         noStroke();
    //         drawCircle(width / 2, height / 2, currentRadius, currentAlpha);
    //         currentAlpha += 10
    //         currentRadius += 25


    //         i++
    //     }
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


    // fill: {
    //   r: 222,
    //   g: 131,
    //    b: 62,
    // }

    //light orange r:250 g:195 b:112
}

function displayRdSquare() {
    push();
    noStroke();
    fill(rdSquare.fill.r, rdSquare.fill.g, rdSquare.fill.b);
    rect(rdSquare.x, rdSquare.y, rdSquare.w, rdSquare.h);
    pop();
}

function checkMouseSquareOverlap() {

    if (mouseX > orgSquare.x && mouseX < orgSquare.x + orgSquare.w && mouseY > orgSquare.y && mouseY < orgSquare.y + orgSquare.h) {
        // fill(orgSquare.fill.r + 28, orgSquare.fill.g + 64, orgSquare.fill.b + 50);
        orgSquare.fill.r = 250
        orgSquare.fill.g = 195
        orgSquare.fill.b = 112

    }
    else {
        // fill(orgSquare.fill.r, orgSquare.fill.g, orgSquare.fill.b);
        orgSquare.fill.r = 222
        orgSquare.fill.g = 131
        orgSquare.fill.b = 62

    }


}

function checkMouseRdSquareOverlap() {

    if (mouseX > rdSquare.x && mouseX < rdSquare.x + rdSquare.w && mouseY > rdSquare.y && mouseY < rdSquare.y + rdSquare.h) {
        rdSquare.fill.r = 255
        rdSquare.fill.g = 163
        rdSquare.fill.b = 163

    }
    else {
        rdSquare.fill.r = 255
        rdSquare.fill.g = 0
        rdSquare.fill.b = 0

    }

}

function mousePressed() {

    if (mouseX > orgSquare.x && mouseX < orgSquare.x + orgSquare.w && mouseY > orgSquare.y && mouseY < orgSquare.y + orgSquare.h) {
        counter++;
    }

    if (mouseX > rdSquare.x && mouseX < rdSquare.x + rdSquare.w && mouseY > rdSquare.y && mouseY < rdSquare.y + rdSquare.h) {
        counter--;
    }

}


