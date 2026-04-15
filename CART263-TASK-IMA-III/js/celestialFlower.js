class CelestialFlower {

    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.createHTMLelements();

    }

    createHTMLelements() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add("celestialFlower");
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.height = this.size + "px";
        this.html_element.style.width = this.size + "px";
        /**
         * `` Can be used when declaring a value with px
         * Without it, the system gives an error
         */
        this.html_element.style.borderRadius = `8px`;
        this.html_element.style.boxShadow = `0px 0px 40px 5px rgb(157, 126, 193)`;
        document.querySelector("#sky-canvas").appendChild(this.html_element);
    }

    /**
     * Updating the postion of the objects
     */
    update() {
        //Original idea
        // this.x += this.vx;
        // this.y += this.vy;
        // this.html_element.style.left = this.x + "px";
        // this.html_element.style.top = this.y + "px";

        // /**
        //  * If the celestialFlowers reached either the height or width 
        //  * They will restart.
        //  */
        // if (this.x > window.innerWidth) {
        //     this.x -= window.innerWidth;
        // }
        // if (this.y > window.innerHeight) {
        //     this.y -= window.innerHeight;
        // }

        this.x += this.vx;
        this.y += this.vy;

        /**
         * wanted to try a new animation to make the flower float
         * Using date.now meaning that the flower will change over time depending on the time in real life
         * When restarting the celestial will not be the same. It gives a more wavy motion
         */
        this.x += Math.sin(this.y * 0.01 + Date.now() * 0.001) * 0.3;
        this.y += Math.cos(this.x * 0.01 + Date.now() * 0.001) * 0.3;

        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        /**
         * I wanted to make sure that when the celestials reached the height and the width reappear the opposite direction
         * Added for if statement if both the x and the y became 0. So no matter which direction the boundaries were met the flowers
         * would reappear the opposite way. From top to bottom, from bottom to top and the same can be said about the lefy and right.
         */

        if (this.x > window.innerWidth) this.x = 0;
        if (this.x < 0) this.x = window.innerWidth;

        if (this.y > window.innerHeight) this.y = 0;
        if (this.y < 0) this.y = window.innerHeight;
    }

    // keyDownCreateCelestial(key) {
    //     console.log("Spacebar pressed!")
    //     if (key === " ") {
    //         celestial.push(new CelestialFlower(x, y, size, color))
    //         this.update()
    //     }




    // }








}