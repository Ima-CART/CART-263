window.onload = go;

function go() {
  console.log("go")
  /***** GIVEN :: ******************************/
  /* function to go through the buttons and select which canvas to activate */
  function mainMenu() {
    document.querySelectorAll(".ani-title").forEach(function (el) {
      el.addEventListener("click", function (e) {
        //reset the canvases with button every click
        document.querySelector("#draw-a").innerHTML = ''
        document.querySelector("#draw-b").innerHTML = ''
        document.querySelector("#draw-c").innerHTML = ''
        document.querySelector("#draw-d").innerHTML = ''

        if (this.id === "one") {
          goOne();
        } else if (this.id === "two") {
          goTwo();
        }
        else if (this.id === "three") {
          goThree();
        }
        else if (this.id === "four") {
          goFour();
        }
      }); //event
    }); //for each
  }

  //call 
  mainMenu();
  /************************************************************** */
  /* first canvas function*/
  /************************************************************** */
  function goOne() {
    console.log("in one");
    //PART 1: create an array called `cat_array` to hold 10 `cats`  
    let cat = [];
    //PART 2: add 10 `cats` to the `cat_array` using the `createCat()`-
    // Each `cat` should be 50px by 50px
    // cats 1-5 should be have a y value of 50 and x going from 10 - 210
    //cats  6-10 should have a y value of 200 and x going from 10 - 210
    // the objects all need to be in the div with id `draw-a`

    /**
     * For loop that will access the first 5 elements of the array
     */
    for (let i = 0; i < 5; i++) {
      cat.push(
        createCat(document.querySelector("#draw-a"), i * 50 + 10, 50, 50, 50),
      );
    };


    /**
     * The for loop for the last 5 elements of the array
    */
    for (let i = 5; i < 10; i++) {
      cat.push(
        createCat(document.querySelector("#draw-a"), (i - 5) * 50 + 10, 200, 50, 50)
      );
    };

    //PART 3: use a setTimeout to change the src property of the first 5 images to be cat_4_b.svg in 10 seconds.
    //Use another setTimeout to change the src property of the last 5 images to be cat_4_c.svg in 15 seconds

    /**
     * The set timeout targeting the first 5 elements and changing the content
     * There is no need to create new cat. I am only changing the current cat element to a different picture
     */
    // setTimeout(function () {
    //   for (let i = 0; i < 5; i++) {
    //     cat[i].querySelector("img").src = "task-assets/cat_4_b.svg"
    //     console.log(i)

    //   };
    // }, 10000);

    /**
     * The second timeout targetting the last 5 elements of the array and change the image
     */

    // setTimeout(function () {
    //   for (let i = 5; i < 10; i++) {
    //     cat[i].querySelector("img").src = "task-assets/cat_4_c.svg "

    //   };
    // }, 15000);

    //PART 4: comment out ALL of PART 3 and use a setInterval to every 2 seconds to starting with the first image:
    // set the opacity of the next cat image to 0
    // ending with the 10th image (will be 20 seconds later)
    // After the last image has had its opacity set to 0 clear the setInterval

    let i = 0
    // setInterval(function () {

    //   console.log(i)

    //   if (i < cat.length) {
    //     cat[i].querySelector("img").style.opacity = "0";

    //     i++
    //   }
    // }, 2000);

    let ref = setInterval(changeOpacity, 2000)
    function changeOpacity() {

      if (i < cat.length) {
        cat[i].querySelector("img").style.opacity = "0";

        i++
      }

      else {
        clearInterval(ref)
      };
    };

    /***** GIVEN :: ******************************/
    // function that generates a cat image in a div 
    function createCat(parentDiv, x, y, w, h) {
      let outer_img = document.createElement("div");
      let img = document.createElement("img")
      outer_img.classList.add("out-cont")
      outer_img.appendChild(img)
      img.src = "task-assets/cat_4.svg"
      img.classList.add("img-class-cat");
      outer_img.style.height = h + "px"
      outer_img.style.width = w + "px"
      outer_img.style.left = x + "px"
      outer_img.style.top = y + "px"
      outer_img.style.opacity = "1";
      parentDiv.appendChild(outer_img)
      return outer_img;

    };
  };

  /************************************************************** */
  /* second canvas function*/
  /************************************************************** */
  function goTwo() {
    console.log("in two");
    //PART 0: create a variable called `numDogs` to hold the value `2` - 
    // this will be the number of dogs we start with
    let numDogs = 2;

    //PART 1: create an array called `dog_array` to hold 2 `dogs`
    let dog = [];

    //PART 2: add 2 `dogs` to to the `dog_array` using the `createDog()`-
    //Each `dog` should be 100px by 100px
    // dog 1 should be have a y value of 50 and x of 110 and an id of "a_dog"
    //dog 2 should have a y value of 50 and x of 220 and an id of "b_dog"
    // the objects all need to be in the div with id `draw-b`

    /**
     * Creating the two different dogs in the array and passing throught the parentDiv,x,y,w,h,id)
     */
    dog.push(
      createDog(document.querySelector("#draw-b"), 110, 50, 100, 100, "a_dog"),
    );

    dog.push(
      createDog(document.querySelector("#draw-b"), 220, 50, 100, 100, "b_dog"),
    );


    //PART 3: - the createDog() has an  event listener for `click` on the `img` variable:
    // Please complete the `checkCollision` call back function to have the following functionality:
    //A: use a `setTimeout` to change the img `src` to be `dog_c.svg` 2 seconds after the image is clicked
    //B: use another `setTimeout` to run after 3 seconds to create another dog 
    // at a random position between 0 and 200 on the x and 0 and 400 on the y
    // -> then add this new dog to the `dog_array` and ensure that it has an id of `dog_${numDogs}`

    /***** GIVEN :: ******************************/
    // function that generates a dog image in a div 
    function createDog(parentDiv, x, y, w, h, id) {
      let outer_img = document.createElement("div");
      let img = document.createElement("img")
      outer_img.classList.add("out-cont")
      outer_img.appendChild(img)
      img.src = "task-assets/dog_a.svg"
      img.classList.add("img-class-dog");
      outer_img.style.height = h + "px"
      outer_img.style.width = w + "px"
      outer_img.style.left = x + "px"
      outer_img.style.top = y + "px"
      outer_img.style.opacity = "1";
      img.addEventListener("click", checkCollision)
      outer_img.id = id
      parentDiv.appendChild(outer_img)
      return outer_img;

    };


    /***** GIVEN :: ******************************/
    //callback function 

    /**
     * Using the checkCollision and writing 2 setTimeout inside the function to add the a and the b
     * It is possible to add 2 setTimeout function to allow two things to happen at the same time
     */
    function checkCollision(e) {
      numDogs++;
      let el = e.target;
      console.log(el)

      setTimeout(function () {
        el.src = "task-assets/dog_c.svg";



      }, 2000);

      setTimeout(function () {

        /**
         * The dogs need to appear at different X and Y so in this case there needs to be a new Y and an new X
         * They need to appear at random so needs Math.random()
         */
        let newX = Math.random() * 200;
        let newY = Math.random() * 400;

        /**
         * Added a new variable for the dog in order to change the height, width and the id
         * Then push the new dog into the dog array
         */
        let newDog = createDog(document.querySelector("#draw-b"), newX, newY, 50, 50, `dog_${numDogs}`)

        dog.push(newDog)

      }, 3000);

    };

  };

  /************************************************************** */
  /* third canvas function*/
  /************************************************************** */
  function goThree() {
    console.log("in in three")
    //PART 1: create an a variable called `dog` to hold a `dog`
    //and a variable called `cat` to hold a `cat`
    //use the  `createDog()` and the `createCat()` respectively to assign
    // new objects to the variables `dog` and `cat`.
    // the objects all need to be in the div with id `draw-c` and should be 50 by 50.
    // the x and y positions can be anything, and the ids can be anything (unique).

    let dog = createDog(document.querySelector("#draw-c"), 150, 75, 50, 50, "sammy_d")
    let cat = createCat(document.querySelector("#draw-c"), 50, 10, 50, 50, "fluff_kins")


    // PART 2A:
    // animate the dog: within the `animate()` function, move the dog on the x axis using the
    // `dogSpeedX` variable

    //PART 2B:
    //use the checkEdgesDog() function (given) to ensure that the dog will switch direction when it is at the edge of the canvas

    // PART 3A:
    // animate the cat: within the `animate()` function, move the cat on the y axis using the
    // `catSpeedY` variable

    //PART 3B:
    //create a `checkEdgesCat()` function  to:
    //1: ensure that the cat will switch direction when it reaches the edges of the canvas on the y axis
    //2: flip the cat when it switches direction.
    //(HINT::) use thecheckEdgesDog() function as inspiration :)
    //3: call this function ...

    /***** GIVEN :: ******************************/
    // function that generates a dog image in a div
    function createDog(parentDiv, x, y, w, h, id) {
      let outer_img = document.createElement("div");
      let img = document.createElement("img");
      outer_img.classList.add("out-cont");
      outer_img.appendChild(img);
      img.src = "task-assets/dog_c.svg";
      img.classList.add("img-class-dog");
      outer_img.style.height = h + "px";
      outer_img.style.width = w + "px";
      outer_img.style.left = x + "px";
      outer_img.style.top = y + "px";
      outer_img.style.opacity = "1";
      outer_img.id = id;
      parentDiv.appendChild(outer_img);
      return outer_img;
    }

    /***** GIVEN :: ******************************/
    // function that generates a cat image in a div
    function createCat(parentDiv, x, y, w, h) {
      let outer = document.createElement("div");
      let img = document.createElement("img");
      outer.classList.add("out-cont");
      outer.appendChild(img);
      img.src = "task-assets/cat_4_c.svg";
      img.classList.add("img-class-cat");
      outer.style.height = h + "px";
      outer.style.width = w + "px";
      outer.style.left = x + "px";
      outer.style.top = y + "px";
      outer.style.opacity = "1";
      parentDiv.appendChild(outer);
      return outer;
    }

    /***** GIVEN :: ******************************/
    //variables that will control the speed on the x for the dog,
    //and the speed on the y for the cat
    let dogSpeedX = 2;
    let catSpeedY = 2;

    /***** GIVEN :: ******************************/
    window.requestAnimationFrame(animate);
    /***** GIVEN :: ******************************/
    //the function that is called every frame
    function animate() {
      /**Part 2A
       * ParseInt is needed because it strings so it is including the unit and adding it with the dogspeed and 
       * concatenate the px to the dog speed
       */
      dog.style.left = parseInt(dog.style.left) + dogSpeedX + "px"

      /**
       * Part 2B
       * Adding the checkEdgeDog so the dog doesn't go out of bounds
       */
      checkEdgesDog();

      /**
       * Part 3A
       */
      cat.style.top = parseInt(cat.style.top) + catSpeedY + "px"

      checkEdgesCat();
      window.requestAnimationFrame(animate);
    }
    /***** GIVEN :: ******************************/
    // the function to check if the dog is at the edge of the canvas and needs
    //to switch direction
    function checkEdgesDog() {
      let boundaries = document.querySelector("#draw-c").getBoundingClientRect();
      if (
        parseInt(dog.style.left) > boundaries.width - parseInt(dog.style.width) ||
        parseInt(dog.style.left) <= 0
      )
        dogSpeedX *= -1;
      //flip the image using scale...
      if (dogSpeedX > 0) {
        dog.style.transform = 'scale(1,1)';
      }
      else {
        dog.style.transform = 'scale(-1,1)';
      }

    }//checkEdgesDog

    /**
     * Part 3B 
     * Creating a function for checkEdgesCat
     */
    function checkEdgesCat() {
      let boundaries = document.querySelector("#draw-c").getBoundingClientRect();

      if (parseInt(cat.style.top) > boundaries.height - parseInt(cat.style.height) ||
        parseInt(cat.style.top) <= 0
      )
        catSpeedY *= -1;

      //flip the image
      if (catSpeedY > 0) {
        cat.style.transform = 'scale(1,1)';
      }
      else {
        cat.style.transform = 'scale(1,-1)'
      }
    };
  }


  /* fourth canvas function*/
  function goFour() {
    console.log("in in four")
    // FREESTYLE USING WHATEVER (your own shapes/images... text...)
    // use window.requestAnimationFrame() to create your own animation

    /**
     * Variables for the red panda and two bamboo
     */
    let rdPanda = createrdPanda(document.querySelector("#draw-d"), 220, 100, 180, 180, "red_panda")
    let bamboo = createBamboo(document.querySelector("#draw-d"), 50, 285, 100, 100, "green_bamboo")
    let bamboo2 = createBamboo(document.querySelector("#draw-d"), document.querySelector("#draw-d").getBoundingClientRect().width - 150, 0, 100, 100, "green_bamboo")


    /**
     * Creating the two functions that creates the red panda and the bamboo
     */
    function createrdPanda(parentDiv, x, y, w, h,) {
      let outer = document.createElement("div");
      let img = document.createElement("img");
      outer.classList.add("out-cont");
      outer.appendChild(img);
      img.src = "task-assets/red-panda-watercolor.png";
      img.classList.add("img-class-rdPanda");
      outer.style.height = h + "px";
      outer.style.width = w + "px";
      outer.style.left = x + "px";
      outer.style.top = y + "px";
      outer.style.opacity = "1";
      parentDiv.appendChild(outer);
      return outer;
    }

    function createBamboo(parentDiv, x, y, w, h,) {
      let outer = document.createElement("div");
      let img = document.createElement("img");
      outer.classList.add("out-cont");
      outer.appendChild(img);
      img.src = "task-assets/bamboo-plant.png";
      img.classList.add("img-class-bamboo");
      outer.style.height = h + "px";
      outer.style.width = w + "px";
      outer.style.left = x + "px";
      outer.style.top = y + "px";
      outer.style.opacity = "1";
      parentDiv.appendChild(outer);
      return outer;
    }


    /**
     * Animation for the red panda pulsing/oscillation
     * Animation for the bamboo
     */

    window.requestAnimationFrame(pulseAnimate);
    window.requestAnimationFrame(animate);


    /**
     * Adding a pulse/oscillating animation to the red panda
    */
    let theta = 0
    function pulseAnimate() {
      let mappedNum = mapNumRange(Math.sin(theta), -1, 1, 5, 200)
      rdPanda.style.width = (mappedNum) + "px";
      rdPanda.style.height = (mappedNum) + "px";
      theta += 0.01;

      window.requestAnimationFrame(pulseAnimate)
    }

    const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
      ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin



    /**
     * Bamboo animtion 
     */

    //Speed of the bamboo moving at speed on the x axis
    let bambooSpeedX = 2;
    function animate() {

      /*
      * Adding 2 bamboos that move in 2 different directions
      */
      bamboo.style.left = parseInt(bamboo.style.left) + bambooSpeedX + "px"
      bamboo2.style.left = parseInt(bamboo2.style.left) - bambooSpeedX + "px"


      /**
       * Adding the checkEdgeBamboo so the dog doesn't go out of bounds
      */
      checkEdgesBamboo();

      window.requestAnimationFrame(animate);
    }

    /**
     * Setting the boundaries for the bamboos so that it goes back and forth
     */
    function checkEdgesBamboo() {
      let boundaries = document.querySelector("#draw-d").getBoundingClientRect();
      if (
        parseInt(bamboo.style.left) > boundaries.width - parseInt(bamboo.style.width) ||
        parseInt(bamboo.style.left) <= 0
      )
        bambooSpeedX *= -1;
      //flip the image using scale...
      if (bambooSpeedX > 0) {
        bamboo.style.transform = 'scale(1,1)';
      }
      else {
        bamboo.style.transform = 'scale(-1,1)';
      }

    }
  }
}
