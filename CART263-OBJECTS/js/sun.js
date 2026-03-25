class Sun {


    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 1; //for movement on x
        this.vy = 1; //for movement on y
        this.sunColor = {
            r: 240,
            g: 206,
            b: 83,
        }
        //the sun element
        this.sunDiv = document.createElement("div")
        /**
         * If in the garden you add a postion of the sun to be complete away from the original design
         * If you add the key listener it will jump. But to keep everything consistent and moving without jumping
         * It would be a good idea to add
         * this.sunDiv.style.left=x+"px"
         * this.sunDiv.style.top=y+"px"
         */
    }

    renderSun() {
        //sun - IN the sky
        this.sunDiv.classList.add("sun");
        this.sunDiv.style.background = `rgb(
        ${this.sunColor.r},
        ${this.sunColor.g},
        ${this.sunColor.b}
        )`;
        //append to the SKY div
        document.getElementsByClassName("sky")[0].appendChild(this.sunDiv);

    }

    /**
     * Because the keyeventlistener is not attached to anything, 
     * in this class it is possible to use this compared to having the mouse listener being attached to a specific div
     */
    handleKeyDownInSUn(key) {
        // console.log("key pressed");
        // console.log(this);
        //console.log(event);

        //LINEAR MOVEMENT
        //go up
        if (key === "w") {
            console.log("up");
            this.y -= this.vy;
            this.updateDivPos();
        }
        if (key === "a") {
            console.log("left");
            this.x -= this.vx;
            this.updateDivPos();
        }
        if (key === "s") {
            console.log("down");
            this.y += this.vy;
            this.updateDivPos();
        }
        if (key === "d") {
            console.log("right");
            this.x += this.vx;
            this.updateDivPos();
        }
    }

    updateDivPos() {
        this.sunDiv.style.left = this.x + "px";
        this.sunDiv.style.top = this.y + "px";
    }



}