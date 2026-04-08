class Star {
  /* the function used to create an actual star */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theta = 0;
    this.createHTMLelements();
  }

  /* the function used to create the html elements that make a 
      star visible in the browser */

  createHTMLelements() {
    this.html_element = document.createElement("div");
    this.html_element.classList.add("star");
    this.html_element.style.left = this.x + "px";
    this.html_element.style.top = this.y + "px";
    document.querySelector("#sky-canvas").appendChild(this.html_element);
  }

  /* the function used to animate a star */

  update() {
    let val = mapRange(Math.sin(this.theta),-1,1, 2,5)
    this.html_element.style.width = val+ "px";
    this.html_element.style.height = val+ "px";
    this.html_element.style.borderRadius = val+ "px";
    this.theta += 0.05;
  }


}

function mapRange(value, inputMin, inputMax, outputMin, outputMax) {
  return (value - inputMin) * (outputMax - outputMin) / (inputMax - inputMin) + outputMin;
}


