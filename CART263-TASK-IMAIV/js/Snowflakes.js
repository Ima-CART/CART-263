class SnowFlakes {
    constructor(x, y, size, speed, drift) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.drift = drift;
        this.createHTMLelement();

    }

    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add("snowflake");
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.height = this.size + "px";
        this.html_element.style.width = this.size + "px";
        this.html_element.style.borderRadius = `8px`
        document.querySelector("#winter-canvas").appendChild(this.html_element);

    }

    update() {

        this.y += Math.random() * this.speed;
        // this.x += this.drift;
        this.x += wind// uses the winds that has been defined in the main.js

        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        // reset when off screen
        if (this.y > window.innerHeight) {
            this.y = 0;
            this.x = Math.random() * window.innerWidth;
        }


    }









}