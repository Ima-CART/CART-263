window.onload = go;

let stars = [];
let planets = [];

let sun = null;

function go() {
    let possiblePlanetColors = ["#ce3ede", "#3e93de", "#66de3e", "#de663e", "#933ede", "#ebeef1"]

    //add 20 stars
    for (let i = 0; i < 20; i++) {
        stars.push(new Star(Math.random() * window.innerWidth, Math.random() * window.innerHeight))
    }


    // add a Sun
    sun = new Sun(window.innerWidth / 2, window.innerHeight / 2);

    //add a planet
    planets.push(new Planet(window.innerWidth / 4, window.innerHeight / 4, 80, possiblePlanetColors[0], 2));


    //add a planet
    planets.push(new Planet(window.innerWidth - 200, window.innerHeight / 2, 80, possiblePlanetColors[1], 3));

    //add a planet
    planets.push(new Planet(window.innerWidth / 2, window.innerHeight / 12, 80, possiblePlanetColors[2], 4))

    //add a planet
    planets.push(new Planet(window.innerWidth / 16, window.innerHeight - 200, 80, possiblePlanetColors[3], 2))


    //animation
    window.requestAnimationFrame(animate)

    function animate() {

        for (let i = 0; i < stars.length; i++) {
            stars[i].update()
        }
        for (let i = 0; i < planets.length; i++) {
            planets[i].update()
        }
        window.requestAnimationFrame(animate)
    }

}