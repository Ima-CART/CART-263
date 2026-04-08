class Planet {
/* the function used to create an actual planet */
  constructor(x, y, size, color, numberMoons) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    // call the function to generate the html elements
    this.createHTMLelements()
    this.moons = [];


    //add some moons - use the planet as the center and the moons will 
    // be positioned around the planet
    for (let i = 0; i < numberMoons; i++) {
      let angle = (1 / (i + 1)) * Math.PI;
      let radius = 60+ (i*30)
      this.moons.push(new Moon(angle, 15, this, radius, Math.random()/50+.01));
    }

  }
/* the function used to create the html elments that make a planet visible in the browser */
  createHTMLelements(){
    this.html_element = document.createElement("div");
    this.html_element.classList.add("planet");
    this.html_element.style.left = this.x + "px";
    this.html_element.style.top = this.y + "px";
    this.html_element.style.width = this.size + "px";
    this.html_element.style.height = this.size + "px";
    this.html_element.style.background = this.color;
    this.html_element.style.borderRadius = this.size + "px";
    this.html_element.style.boxShadow = `0px 0px 40px 5px ${this.color}`;
    document.querySelector("#sky-canvas").appendChild(this.html_element);
  }

  /* the function that will be called that will update the planets properties */
  update() {
    for (let i = 0; i<this.moons.length; i++) {
      // this update function is in the moon class
      this.moons[i].update();
    }
  }
}
