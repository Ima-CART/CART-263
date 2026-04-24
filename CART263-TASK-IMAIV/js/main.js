window.onload = go;
/* function that runs on window load */
let centerX = window.innerWidth / 2;
let mouseX = 0;
let snowFlakes = [];
let tree = [];
let wind = 0;//a constant influence that will change over time
/**Add the wind direction and it's limit
 * I wanted the snowflakes to oscillate but at the same time
 * not go completely far in the screen
 */
let minWind = -2;
let maxWind = 2;
let windDirection = 1;

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

    /**Ground Object */
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
        snowFlakes.push(new SnowFlakes(Math.random() * window.innerWidth, Math.random() * innerHeight, 0, 0, 0))
    }

    //add the snowman
    snowman = new SnowMan(window.innerWidth / 2, 500, 200)

    //add tree
    for (let i = 0; i < 5; i++) {
        tree.push(new Tree(0, 445, 230))
    }


    //add Arctic Wolf
    arcticWolf = new ArcticWolf(window.innerWidth - 200, 500, 180)

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

    //add mouse event listener
    window.addEventListener("mousemove", moveWind)

    function moveWind(e) {
        mouseX = e.clientX;


    }

    function updateWindDirection() {
        let windFactor = (mouseX - centerX) / centerX; // How far from center the mouse is


        windDirection = windFactor * maxWind;

        // Optionally, clamp the wind direction to a max and min
        if (windDirection > maxWind) windDirection = maxWind;
        if (windDirection < minWind) windDirection = minWind;
    }

    // second mouse listner when click a new now appears
    window.addEventListener("mousedown", createSnowFlakes)

    function createSnowFlakes(e) {
        let newSnowFlakes = new SnowFlakes(Math.random() * window.innerWidth, 0, 0, 0, 0);
        // let newSnowFlakes = new SnowFlakes(e.clientX, e.clientY)
        snowFlakes.push(newSnowFlakes)

    }

    /**
     * Add Event listener for the wind drift using the keyboard
     */
    window.addEventListener("keydown", function handleKeyDown(event) {
        /** This does not work since I am calling the changes in the array 
         * Not the individual snow flakes
         *  snowFlakes.handleKeyDownInSnow(event.key) 
         */
        for (let i = 0; i < snowFlakes.length; i++) { snowFlakes[i].handleKeyDownInSnow(event.key); }

        //handle the controls for the fox
        arcticWolf.handleKeyDownInArcticFox(event.key);
    })


    //animation
    window.requestAnimationFrame(animate)
    function animate() {
        for (let i = 0; i < snowFlakes.length; i++) {
            snowFlakes[i].update(snowman);//pass throught the snowman so that snowflake can interact
        }
        updateWindDirection();

        /**Wanted to add more smoothness to the snowfalling
         * Added a second value in order for the snow to follow the mouse and not abruptly
         * change direction base on where the mouse was
         */
        targetWind = (mouseX - centerX) / centerX * maxWind;// the desire wind section based on the mouse
        wind += (targetWind - wind) * 0.1;
        /**Snow will be oscillating back forth so it looks smoother*/
        // if (wind > maxWind) { windDirection = -1 }
        // if (wind < minWind) { windDirection = 1 }
        /**Wind always need to be updated in the animation 
         * if not it will be flat and not work
         */
        // wind += .01 * windDirection;
        window.requestAnimationFrame(animate);

        arcticWolf.update();
    }










}