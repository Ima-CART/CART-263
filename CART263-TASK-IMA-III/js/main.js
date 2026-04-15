window.onload = go;

let stars = [];
let planets = [];
let celestialFlowers = []
let sun = null;

console.log(celestialFlowers)

function go() {
    let possiblePlanetColors = ["#ce3ede", "#3e93de", "#66de3e", "#de663e", "#933ede", "#ebeef1"]
    // let petalColor = {
    //     r: 77,
    //     g: 160,
    //     b: 233,
    // }
    // let centreColor = {
    //     r: 4,
    //     g: 49,
    //     b: 153,
    // }
    //add 20 stars
    for (let i = 0; i < 20; i++) {
        stars.push(new Star(Math.random() * window.innerWidth, Math.random() * window.innerHeight))
    }

    // add a Sun
    sun = new Sun(window.innerWidth / 2, window.innerHeight / 2);

    sunFrog = new SunFrog(window.innerWidth / 2, window.innerHeight - 449, 50)
    //add a planet
    planets.push(new Planet(window.innerWidth / 4, window.innerHeight / 4, 80, possiblePlanetColors[0], 2));


    //add a planet
    planets.push(new Planet(window.innerWidth - 200, window.innerHeight / 2, 80, possiblePlanetColors[1], 3));

    //add a planet
    planets.push(new Planet(window.innerWidth / 2, window.innerHeight / 12, 80, possiblePlanetColors[2], 4))

    //add a planet
    planets.push(new Planet(window.innerWidth / 16, window.innerHeight - 200, 80, possiblePlanetColors[3], 2))



    planets[3].addCustomRadius()
    planets[2].addCustomSpeed()

    celestialFlowers.push(new CelestialFlower(window.innerWidth / 8, window.innerHeight - 50, 20))
    celestialFlowers.push(new CelestialFlower(window.innerWidth / 8, window.innerHeight - 50, 20))




    window.addEventListener("mousedown", createStar)

    function createStar(e) {
        console.log(e.target)
        let newStar = new Star(e.clientX, e.clientY) //creates a new star wherever the mouse is clicked
        stars.push(newStar)


    }


    window.addEventListener("keydown", function handleKeydown(event) {
        console.log(" ")
        if (event.key === " ") {
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
        for (let i = 0; i < celestialFlowers.length; i++) {
            celestialFlowers[i].update()
        }
        sunFrog.update()

        window.requestAnimationFrame(animate)
    }

}
