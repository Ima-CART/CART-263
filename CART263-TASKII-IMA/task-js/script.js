window.onload = go();

function go() {

 /***** GIVEN :: ******************************/
/* function to go through the buttons and select which canvas to activate */
  function mainMenu() {
    document.querySelectorAll(".ani-title").forEach(function (el) {
      el.addEventListener("click", function (e) {
        //reset the canvases with button every click
        document.querySelector("#draw-a").innerHTML=''
        document.querySelector("#draw-b").innerHTML=''
        document.querySelector("#draw-c").innerHTML=''
        document.querySelector("#draw-d").innerHTML=''

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
  function goOne(){
  console.log("in one")
   //PART 1: create an array called `cat_array` to hold 10 `cats`
   
   //PART 2: add 10 `cats` to to the `cat_array` using the `createCat()`-
   // Each `cat` should be 50px by 50px  
   // cats 1-5 should be have a y value of 50 and x going from 10 - 210 
   //cats  6-10 should have a y value of 200 and x going from 10 - 210 
   // the objects all need to be in the div with id `draw-a`

   //PART 3: use a setTimeout to change the src property of the first 5 images to be cat_4_b.svg in 10 seconds.
   //Use another setTimeout to change the src property of the last 5 images to be cat_4_c.svg in 15 seconds


   //PART 4: comment out ALL of PART 3 and use a setInterval to every 2 seconds to starting with the first image:
   // set the opacity of the next cat image to 0 
   // ending with the 10th image (will be 20 seconds later)
   // After the last image has had its opacity set to 0 clear the setInterval

   /***** GIVEN :: ******************************/
  // function that generates a cat image in a div 
    function createCat(parentDiv,x,y,w,h){
        let outer_img = document.createElement("div");
        let img = document.createElement("img")
        outer_img.classList.add("out-cont")
        outer_img.appendChild(img)
        img.src = "task-assets/cat_4.svg"
        img.classList.add("img-class-cat");
        outer_img.style.height = h+"px"
        outer_img.style.width = w+"px"
        outer_img.style.left = x+"px"
        outer_img.style.top = y+"px"
        outer_img.style.opacity = "1";
        parentDiv.appendChild(outer_img)
        return outer_img;

    }
 }

 /************************************************************** */
 /* second canvas function*/ 
  /************************************************************** */
 function goTwo(){
 console.log("in two")
  //PART 0: create a variable called `numDogs` to hold the value `2` - 
  // this will be the number of dogs we start with

  //PART 1: create an array called `dog_array` to hold 2 `dogs`
   
   //PART 2: add 2 `dogs` to to the `dog_array` using the `createDog()`-
   //Each `dog` should be 100px by 100px  
   // dog 1 should be have a y value of 50 and x of 110 and an id of "a_dog"
   //dog 2 should have a y value of 50 and x of 220 and an id of "b_dog"
   // the objects all need to be in the div with id `draw-b`

   //PART 3: - the createDog() has an  event listener for `click` on the `img` variable:
   // Please complete the `checkCollision` call back function to have the following functionality:
   //A: use a `setTimeout` to change the img `src` to be `dog_c.svg` 2 seconds after the image is clicked
   //B: use another `setTimeout` to run after 3 seconds to create another dog 
   // at a random position between 0 and 200 on the x and 0 and 400 on the y
   // -> then add this new dog to the `dog_array` and ensure that it has an id of `dog_${numDogs}`
    
      /***** GIVEN :: ******************************/
    // function that generates a dog image in a div 
    function createDog(parentDiv,x,y,w,h,id){
        let outer_img = document.createElement("div");
        let img = document.createElement("img")
        outer_img.classList.add("out-cont")
        outer_img.appendChild(img)
        img.src = "task-assets/dog_a.svg"
        img.classList.add("img-class-dog");
        outer_img.style.height = h+"px"
        outer_img.style.width = w+"px"
        outer_img.style.left = x+"px"
        outer_img.style.top = y+"px"
        outer_img.style.opacity = "1";
        img.addEventListener("click",checkCollision)
        outer_img.id = id
        parentDiv.appendChild(outer_img)
        return outer_img;

    }
       /***** GIVEN :: ******************************/
    //callback function 
    function checkCollision(e){
      numDogs++;
      let el = e.target
      console.log(el)
   }
  }

 /************************************************************** */
/* third canvas function*/ 
 /************************************************************** */
  function goThree(){
  console.log("in in three")
    //PART 1: create an a variable called `dog` to hold a `dog`
    //and a variable called `cat` to hold a `cat`
    //use the  `createDog()` and the `createCat()` respectively to assign 
    // new objects to the variables `dog` and `cat`.
    // the objects all need to be in the div with id `draw-c` and should be 50 by 50.
    // the x and y positions can be anything, and the ids can be anything (unique).

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
        if(dogSpeedX>0){
          dog.style.transform='scale(1,1)';
        }
        else{
          dog.style.transform='scale(-1,1)';
        }
        
      }//checkEdgesDog
 }
/* fourth canvas function*/ 
  function goFour(){
  console.log("in in four")
  // FREESTYLE USING WHATEVER (your own shapes/images... text...)
  // use window.requestAnimationFrame() to create your own animation


    
 }
}
