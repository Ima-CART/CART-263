class Tree {
    constructor(x, y, size) {
        this.x = (Math.random() * window.innerWidth) - 100;
        this.y = y;
        this.size = size;
        this.createHTMLelement();

    }

    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add('tree');
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.width = this.size + "px";
        this.html_element.style.height = this.size + "px";
        /**Add image */
        this.img_element = document.createElement("img");
        this.img_element.src = "assets/Snow-covered-trees.png"
        this.img_element.style.width = "100%";
        this.img_element.style.height = "100%";
        this.html_element.append(this.img_element);

        document.querySelector("#winter-canvas").appendChild(this.html_element);



    }
    /**
     * Apply night mode. Same concept as the rest of the object
     * Tree will be darker when it is night
     */
    applyNightMode(isNight) {

        if (isNight) {
            this.html_element.style.filter = "brightness(0.6)";
            this.html_element.style.opacity = 0.8;

        } else {
            this.html_element.style.filter = "brightness(1)";
            this.html_element.style.opacity = 1;
        }
    }











}