window.onload = go;
/* function that runs on window load */
let snowFlakes = [];

function go() {
    console.log("here we go")

    /*sky object */
    let sky = {
        // The color of the sky (background)
        skyColor: {
            r: 154,
            g: 215,
            b: 255,
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

    //add snowflakes
    console.log(snowFlakes)
    for (let i = 0; i < 20; i++) {
        snowFlakes.push(new SnowFlakes(Math.random() * window.innerWidth, Math.random() * innerHeight, 10, 5, 5))
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




    //animation
    window.requestAnimationFrame(animate)
    function animate() {
        for (let i = 0; i < snowFlakes.length; i++) {
            snowFlakes[i].update();

        }
        window.requestAnimationFrame(animate);
    }










}