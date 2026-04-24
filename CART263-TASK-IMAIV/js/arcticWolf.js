class ArcticWolf {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.vx = -1
        this.createHTMLelement();
    }

    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add('arcticWolf');
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.width = this.size + "px";
        this.html_element.style.height = this.size + "px";
        /**Add image */
        this.img_element = document.createElement("img");
        this.img_element.src = "assets/Arctic-cute-wolf.png"
        this.img_element.style.width = "100%";
        this.img_element.style.height = "100%";
        this.html_element.append(this.img_element);

        document.querySelector("#winter-canvas").appendChild(this.html_element);

    }

    update() {
        // this.x -= 1
        /**The arctic wolf restarts when it reaches 0 */
        // // Check if the wolf has moved off the screen on the left side
        // if (this.x + this.size < 0) {
        //     // Reset position to the right side
        //     this.x = window.innerWidth;
        // }

        // Check if the wolf has reached the left or right edge
        // Move the wolf in the current direction
        this.x += this.vx;

        // If the wolf reaches the left edge, flip the image and reverse direction
        if (this.x <= 0) {
            this.x = 0;
            this.vx = Math.abs(this.vx); // Move right
            this.img_element.style.transform = "scaleX(-1)"; // Flip image to face right
        }

        // If the wolf reaches the right edge, flip the image and reverse direction
        if (this.x >= window.innerWidth - this.size) {
            this.x = window.innerWidth - this.size;
            this.vx = -Math.abs(this.vx); // Move left
            this.img_element.style.transform = "scaleX(1)"; // Flip image to face left
        }


        this.html_element.style.left = this.x + "px";
    }







}