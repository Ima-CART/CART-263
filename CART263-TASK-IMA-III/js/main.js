window.onload = go;

let stars = [];
let planets = [];
let celestialFlowers = []
let sun = null;

console.log(celestialFlowers)

function go() {
    let possiblePlanetColors = ["#ce3ede", "#3e93de", "#66de3e", "#de663e", "#933ede", "#ebeef1"]
    // let petalColor = {

    //add 20 stars
    for (let i = 0; i < 20; i++) {
        stars.push(new Star(Math.random() * window.innerWidth, Math.random() * window.innerHeight))
    }

    // add a Sun
    sun = new Sun(window.innerWidth / 2, window.innerHeight / 2);
    //add SunFrog
    sunFrog = new SunFrog(window.innerWidth / 2, window.innerHeight - 449, 50)

    //add a planet
    planets.push(new Planet(window.innerWidth / 4, window.innerHeight / 4, 80, possiblePlanetColors[0], 2));


    //add a planet
    planets.push(new Planet(window.innerWidth - 200, window.innerHeight / 2, 80, possiblePlanetColors[1], 3));

    //add a planet
    planets.push(new Planet(window.innerWidth / 2, window.innerHeight / 12, 80, possiblePlanetColors[2], 4))

    //add a planet
    planets.push(new Planet(window.innerWidth / 16, window.innerHeight - 200, 80, possiblePlanetColors[3], 2))


    //add updated planets
    planets[3].addCustomRadius()
    planets[2].addCustomSpeed()

    //add celestialFlowers
    celestialFlowers.push(new CelestialFlower(window.innerWidth / 8, window.innerHeight - 50, 20))
    celestialFlowers.push(new CelestialFlower(window.innerWidth / 8, window.innerHeight - 50, 20))



    /**
     * Event listener for the mouse down
     * Create a new star depending where the mouse is clicked
     */
    window.addEventListener("mousedown", createStar)

    function createStar(e) {
        console.log(e.target)
        let newStar = new Star(e.clientX, e.clientY) //creates a new star wherever the mouse is clicked
        stars.push(newStar)


    }


    /**
     * Keydown for when a spacebar is pressed a new celestial flower is create
     * important note constructor cannot have keycode in there. It has to be what will be passed through
     */
    window.addEventListener("keydown", function handleKeydown(event) {
        console.log(" ")
        if (event.key === " ") {
            //if statement to make sure nothing more than 20 celestial flower
            if (celestialFlowers.length < 20) {
                let newCelestial = new CelestialFlower(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 20)
                celestialFlowers.push(newCelestial)
            }
        }
    })


    //animation
    window.requestAnimationFrame(animate)

    function animate() {

        for (let i = 0; i < stars.length; i++) {
            stars[i].update()
        }
        for (let i = 0; i < planets.length; i++) {
            planets[i].update()
        }
        //animation for celestial
        for (let i = 0; i < celestialFlowers.length; i++) {
            celestialFlowers[i].update()
        }
        //animation for sunFrog
        sunFrog.update()

        window.requestAnimationFrame(animate)
    }

}
