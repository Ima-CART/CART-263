class CelestialFlower {

    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        // this.petalColor = petalColor;
        // this.centreColor = centreColor;
        // this.vx = math.random() *5 + 1
        // this.vy = (math.random() - 0.5) / 2
        this.createHTMLelements()





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
        this.html_element.style.borderRadius = `20px`;
        this.html_element.style.boxShadow = `0px 0px 40px 5px rgb(109, 57, 251)`;
        document.querySelector("#sky-canvas").appendChild(this.html_element);


    }


    // update() {
    //     this.x += this.vx;
    //     this.y += thix.vy;



    // }










}