window.onload = go;
/* function that runs on window load */
let snowflakes = [];

function go() {
    console.log("here we go")

    /*sky object */
    let sky = {
        // The color of the sky (background)
        skyColor: {
            r: 245,
            g: 245,
            b: 245,
        },
        //the sky element
        skyDiv: document.createElement("div"),
    }

    let ground = {
        // The color of the sky (background)
        groundColor: {
            r: 255,
            g: 255,
            b: 255,
        },
        //the sky element
        groundDiv: document.createElement("div"),
    }



    function createBackgroundForWinter() {
        ground.groundDiv.classList.add("ground");
        ground.groundDiv.style.background = `rgb(
        ${ground.groundColor.r},
        ${ground.groundColor.g},
        ${ground.groundColor.b}
        )`;
        document.querySelector("#winter-canvas").appendChild(ground.groundDiv);

        sky.skyDiv.classList.add("sky");
        sky.skyDiv.style.background = `rgb(
        ${sky.skyColor.r},
        ${sky.skyColor.g},
        ${sky.skyColor.b}
        )`;
        document.querySelector("#winter-canvas").appendChild(sky.skyDiv);


    }


    createBackgroundForWinter()















}