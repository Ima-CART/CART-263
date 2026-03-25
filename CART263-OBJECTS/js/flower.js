/**
 * Always label a class with uppercase
 * To differentiate the codes
 */

class Flower {
    /**
     * function that is called specifically to make the object
     * When a function is inside a class, it knows it is apart of that class 
     * no need to include  in the beginning
     */
    constructor(x, y, size, stemLength, petalColor, centreColor) {
        /**
         * We use = to assign what is attached to it compared to the colon.
         * When declaring a variable in the constructor the = is the one to assign it instead
         * But outside of the constructor we use the colon.
         *  All member (flower) properties needs to be prefixed with this.
         */
        //binding variable

        // Position and size information
        this.x = x
        this.y = y
        this.size = size;
        this.stemLength = stemLength
        this.stemThickness = 10;
        this.petalThickness = 8;
        this.flowerStemDiv = document.createElement("div");
        this.flowerPetalDiv = document.createElement("div");

        // Color information
        this.stemColor = {
            r: 50,
            g: 150,
            b: 50,
        };
        this.petalColor = petalColor
        this.centreColor = centreColor

        // console.log(this) // this is the flower object
        this.flowerStemDiv.addEventListener("click", growStem)
        this.flowerPetalDiv.addEventListener("click", changePetalColor)

        let objectThis = this;
        /**
         * Javascript overwrite the this in the event listener. The this that was once in the object
         * has now become a div in the event listener so it is no longer the same thing
         * One way to override it is to make a new variable to store this for example let objectThis=this;
         * 
         */
        function growStem(e) {
            console.log(e.target)
            console.log(this) // the div with the event listener for click
            console.log(objectThis.stemLength)

            objectThis.stemLength = objectThis.stemLength + 10;

            //update the actual div...
            objectThis.flowerStemDiv.style.height = objectThis.stemLength + "px";
            objectThis.flowerStemDiv.style.top = objectThis.y - objectThis.stemLength + "px";

            // and also the petal element needs to move up
            objectThis.flowerPetalDiv.style.top =
                objectThis.y - objectThis.stemLength - objectThis.size / 2 + "px";
        }

        function changePetalColor(e) {
            console.log(e.target)
            objectThis.centreColor.r -= 5;
            objectThis.centreColor.g -= 5;
            objectThis.centreColor.b -= 5;

            objectThis.flowerPetalDiv.style.background = `rgb(
        ${objectThis.centreColor.r},
        ${objectThis.centreColor.g},
        ${objectThis.centreColor.b}
        )`;


        }

    }

    //to render a flower (passed as an argument)
    /**
     * No neeed to pass the flower inside as it is in the class
     * All the flower instances get changed to this
     */
    /**
 * Because renderFlower is inside the flower object the period/dot can be used
 * 
 */
    renderFlower() {
        this.flowerStemDiv.classList.add("flower");
        this.flowerStemDiv.style.width = this.stemThickness + "px";
        this.flowerStemDiv.style.height = this.stemLength + "px";
        this.flowerStemDiv.style.background = `rgb(
        ${this.stemColor.r},
        ${this.stemColor.g},
        ${this.stemColor.b}
        )`;
        this.flowerStemDiv.style.left = this.x + "px";
        this.flowerStemDiv.style.top = this.y - this.stemLength + "px";
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.flowerStemDiv);

        this.flowerPetalDiv.classList.add("petal");
        this.flowerPetalDiv.style.width = this.size + "px";
        this.flowerPetalDiv.style.height = this.size + "px";
        this.flowerPetalDiv.style.borderRadius = this.size + "px"

        this.flowerPetalDiv.style.background = `rgb(
        ${this.centreColor.r},
        ${this.centreColor.g},
        ${this.centreColor.b}
        )`;
        this.flowerPetalDiv.style.left = (this.x - this.size / 2) + "px";
        this.flowerPetalDiv.style.top = (this.y - this.stemLength - this.size / 2) + "px";
        this.flowerPetalDiv.style.borderWidth = this.petalThickness + "px";
        this.flowerPetalDiv.style.borderColor = `rgb(
        ${this.petalColor.r},
        ${this.petalColor.g},
        ${this.petalColor.b}
        )`;
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.flowerPetalDiv);

    }
}