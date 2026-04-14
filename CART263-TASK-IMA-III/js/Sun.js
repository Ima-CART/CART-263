class Sun {
    /* the function used to create an actual sun */

    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    /* the function used create the html elments that will display a sun */
    createHTMLElements() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add("sun")
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        document.querySelector("#sky-canvas").appendChild(this.html_element)

    }


}