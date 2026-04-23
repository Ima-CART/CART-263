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
        document.querySelector("#winter-canva").appendChild(this.html_element);

    }

    update() {

        this.y += this.speed;
        this.x += this.drift;

        // reset when off screen
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }


    }










}