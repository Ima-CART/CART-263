class Moon {
  /* moons revolve around planets */
  /* the function used to create an actual moon */
  constructor(angleToParent, size, parent_planet, radius, speed) {
    this.parent_planet_x = parent_planet.x + parent_planet.size / 2;
    this.parent_planet_y = parent_planet.y + parent_planet.size / 2;
    this.start_angle = angleToParent;
    this.radiusToParent = radius;
    this.size = size;
    this.moon_speed = speed;
    this.size = size;
    this.color = parent_planet.color
    this.updatePos();
    this.createHTMLelements();
  }

  /* the function used to create the html elements that make a moon visible in the browser */
  createHTMLelements() {
    this.html_element = document.createElement("div");
    this.html_element.classList.add("moon");
    this.html_element.style.left = this.x + "px";
    this.html_element.style.top = this.y + "px";
    this.html_element.style.width = this.size + "px";
    this.html_element.style.height = this.size + "px";
    this.html_element.style.borderRadius = this.size + "px";
    this.html_element.style.background = this.color;
    document.querySelector("#sky-canvas").appendChild(this.html_element);

  }

  update() {
    this.updateAngle(); //update angle (for circular motion)
    this.updatePos(); //update pos (x and y)
    this.updateHTML(); //update HTML
  }
  updateAngle() {
    this.start_angle += this.moon_speed;
  }
  updatePos() {
    console.log(this.radiusToParent)

    //use trigonometry to calculate the placement of child planet
    // y = sin(startAngle)* r + cy
    // x = cos(startAngle)* r + cx

    this.x = this.parent_planet_x +
      Math.cos(this.start_angle) * this.radiusToParent - this.size / 2;
    this.y = this.parent_planet_y +
      Math.sin(this.start_angle) * this.radiusToParent - this.size / 2;
  }

  updateHTML() {
    this.html_element.style.left = this.x + "px";
    this.html_element.style.top = this.y + "px";
  }
}
