class CelestialFlower {

    constructor(x, y) {
        this.x = x;
        this.y = y;






    }

    createHTMLElements() {
        this.html_element = document.createElement("div")
        this.html_element.classList.add("celestialFlower")
        this.html_element.style.left = this.x + "px"
        this.html_element.style.top = this.y + "px"
        this.html_element.style.boxShadow = `0px 0px 40px 5px ${this.color}`;


    }











}