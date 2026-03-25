window.onload = function () {
    // Our garden
    let garden = {

        // An array to store the individual birds
        birds: [],
        // How many birds in the garden
        numBirds: 10,

        numDogs: 10,
        dogs: [],
        // An array to store the individual flowers
        flowers: [],
        // How many flowers in the garden
        numFlowers: 20,

        /*grass object */
        grass: {
            // The color of the grass (background)
            grassColor: {
                r: 120,
                g: 180,
                b: 120,
            },
            //the grass element
            grassDiv: document.createElement("div"),
        },

        /*sky object */
        sky: {
            // The color of the sky (background)
            skyColor: {
                r: 83,
                g: 154,
                b: 240,
            },
            //the sky element
            skyDiv: document.createElement("div"),
        },

        /*sun object */
        // sun: {
        //     sunColor: {
        //         r: 240,
        //         g: 206,
        //         b: 83,
        //     },
        //     //the sun element
        //     sunDiv: document.createElement("div"),
        // },
    };

    //call constructor
    /**
     * In the case of the sun, because in the class the function is being passed through
     * an x and a y, it is important to include the position in the variable that will call the class
     */
    let sun = new Sun(10, 10)

    // let flower = createFlower();
    //Calling the constructor function of flower
    let newFlower = new Flower

    // add numFlowers at one time
    for (let i = 0; i < garden.numFlowers; i++) {
        // let flower = createFlower()

        let x = i * 50
        let y = Math.random() * 120;
        let size = Math.random() * 30 + 50;
        let stemLength = Math.random() * 50 + 50;

        let petalColor = {
            r: parseInt(Math.random() * 155) + 100,
            g: parseInt(Math.random() * 155) + 100,
            b: parseInt(Math.random() * 155) + 100,
        };

        let centreColor = {
            r: parseInt(Math.random() * 155) + 100,
            g: parseInt(Math.random() * 155) + 100,
            b: parseInt(Math.random() * 155) + 100,
        };
        let newFlower = new Flower(x, y, size, stemLength, petalColor, centreColor)
        garden.flowers.push(newFlower);
    }

    //add dogs

    // Create the correct number of dogs and put them in our array
    for (let i = 0; i < garden.numDogs; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * 100;
        let dog = new Dog(x, y, 15, 15);
        garden.dogs.push(dog);
    }
    //add birds

    //create some birds
    for (let i = 0; i < garden.numBirds; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * 100;
        let bird = new Bird(x, y, 15, 15);
        garden.birds.push(bird);
    }

    function renderAnimals() {
        // Go through all the animals and move, wrap, and display them
        for (let i = 0; i < garden.dogs.length; i++) {
            let dog = garden.dogs[i];
            dog.renderAnimal();
        }

        // Go through all the birds and move, wrap, and display them
        for (let i = 0; i < garden.birds.length; i++) {
            let bird = garden.birds[i];
            bird.renderAnimal();
        }
    }




    function createAndRenderTheGarden() {
        /* note how we use dot notation....*/
        //sky
        garden.sky.skyDiv.classList.add("sky");
        garden.sky.skyDiv.style.background = `rgb(
        ${garden.sky.skyColor.r},
        ${garden.sky.skyColor.g},
        ${garden.sky.skyColor.b}
        )`;
        document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);

        // //sun - IN the sky
        // garden.sun.sunDiv.classList.add("sun");
        // garden.sun.sunDiv.style.background = `rgb(
        // ${garden.sun.sunColor.r},
        // ${garden.sun.sunColor.g},
        // ${garden.sun.sunColor.b}
        // )`;
        // //append to the SKY div
        // document.getElementsByClassName("sky")[0].appendChild(garden.sun.sunDiv);

        //grass
        garden.grass.grassDiv.classList.add("grass");
        garden.grass.grassDiv.style.background = `rgb(
        ${garden.grass.grassColor.r},
        ${garden.grass.grassColor.g},
        ${garden.grass.grassColor.b}
        )`;
        document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);
    }

    // //call the function to create the garden
    createAndRenderTheGarden();
    renderAnimals()
    // renderFlower(flower);

    sun.renderSun();

    for (let i = 0; i < garden.flowers.length; i++) {
        garden.flowers[i].renderFlower()

    }

    /**
     * the key eventlistener is not attached to a specific object or a div
     * it is called in the garden js as the key event listener is applied to all
     * It is important to specific what function this class is affecting, as putting it
     * in the sun class is instruct the script to only apply a key event listener in that
     */
    window.addEventListener("keydown", function handleKeyDown(event) {
        //call the handleKeyDown method in sun


        sun.handleKeyDownInSUn(event.key)
    });

    function updateGarden() {
        // Go through all the animals and move, wrap, and display them
        for (let i = 0; i < garden.dogs.length; i++) {
            let dog = garden.dogs[i];
            dog.move();
            dog.wrap();
        }


        // Go through all the birds and move, wrap, and display them
        for (let i = 0; i < garden.birds.length; i++) {
            let bird = garden.birds[i];
            bird.move();
            bird.wrap();
        }

        window.requestAnimationFrame(updateGarden)
    }
    /**
     * The request Animation needs to be called in the updategarden and in the window.onload
     * so that the animation will run smoothly and continiously, if only called in the update garder
     * it will only run once and that is all
     * You need to call the animation inside the update garden and again outside the function needs to be called
     * It's basically saying call and run continously.
     */
    window.requestAnimationFrame(updateGarden)


}



