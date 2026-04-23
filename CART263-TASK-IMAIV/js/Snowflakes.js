class Snowflakes {
    constructor(x, y, size, speed, drift) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.drift = drift;
        this.vx = this.vx;
        this.vy = this.vy;
        this.createHTMLelement();

    }

    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add("snowflake");
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.height = this.size + "px";
        this.html_element.style.weight = this.size + "px";


    }











}