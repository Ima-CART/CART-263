class SnowMan {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.createHTMLelement();

    }

    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add('snowMan');
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.width = this.size + "px";
        this.html_element.style.height = this.size + "px";
        /**Add image */
        this.img_element = document.createElement("img");
        this.img_element.src = "assets/watercolor-snowman.png"
        this.img_element.style.width = "100%";
        this.img_element.style.height = "100%";
        this.html_element.append(this.img_element);

        document.querySelector("#winter-canvas").appendChild(this.html_element);



    }

    applyNightMode(isNight) {

        if (isNight) {
            this.html_element.style.filter = "brightness(0.6)";
            this.html_element.style.opacity = 0.8;
            this.html_element.style.boxShadow = "0 0 80px rgba(111, 195, 248, 0.65)"; // Soft glow effect
            this.html_element.style.borderRadius = "500px"
        } else {
            this.html_element.style.filter = "brightness(1)";
            this.html_element.style.opacity = 1;
            this.html_element.style.boxShadow = "none"
        }
    }







}