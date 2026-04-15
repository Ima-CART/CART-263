class SunFrog {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.createHTMLelement();
        this.angle = Math.random() * Math.PI * 2

    }

    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add("sunFrog");
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.height = this.size + "px";
        this.html_element.style.width = this.size + "px";
        this.html_element.style.borderRadius = this.size + "px"
        this.html_element.style.boxShadow = `0px 0px 30px 10px rgba(54, 173, 78, 0.75)`;
        /**
         * Decided to try adding an image using inside an object
         */
        this.img_element = document.createElement("img")
        this.img_element.src = "assets/cute-frog-element.png"
        this.img_element.style.width = "100%";
        this.img_element.style.height = "100%";
        this.html_element.append(this.img_element);

        document.querySelector("#sky-canvas").appendChild(this.html_element);


    }

    update() {

        this.angle += 0.01;
        this.x += Math.sin(this.angle) * 0.5;
        this.html_element.style.left = this.x + "px";

    }


}