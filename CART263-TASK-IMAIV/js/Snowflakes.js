class SnowFlakes {
    constructor(x, y, size, speed, drift) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 5; //added random sizes
        this.speed = Math.random() * 2 + 1;//added randomness
        this.drift = (Math.random() - 0.5) * 2//added randomness
        // this.size = size;
        // this.speed = speed;
        // this.drift = drift;
        this.velocityX = 0;
        this.velocityY = 0;
        this.createHTMLelement();


    }





    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add("snowFlake");
        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        this.html_element.style.height = this.size + "px";
        this.html_element.style.width = this.size + "px";
        this.html_element.style.borderRadius = `8px`
        document.querySelector("#winter-canvas").appendChild(this.html_element);


        /**
         * Adding a snowburst to the snowflake
         * When the snowflake is click they will become small snowflakes in different directions
         */
        let snowSelf = this
        this.html_element.addEventListener("mousedown", snowBurst)

        function snowBurst(e) {


            // The position where the click happened (center of the burst)
            let burstX = snowSelf.x;
            let burstY = snowSelf.y;

            // Creating several new snowflakes around the clicked one
            for (let i = 0; i < 10; i++) {
                let randomX = burstX + (Math.random() - 0.5) * 50;  // Spread out randomly
                let randomY = burstY + (Math.random() - 0.5) * 50;  // Spread out randomly
                let newSnowflakes = new SnowFlakes(randomX, randomY, Math.random() * 10 + 5, Math.random() * 3 + 2, 0);
                snowFlakes.push(newSnowflakes);
            }



            // Remove the clicked snowflake from the array
            snowFlakes = snowFlakes.filter(snowflakes => snowflakes !== snowSelf);

            //Hiding the actually snowflake that burst
            snowSelf.html_element.style.display = "none";



        }
    }

    // Apply night mode effect
    applyNightMode(isNight) {
        if (isNight) {
            // Apply darker and glowing effect when night
            this.html_element.style.filter = "brightness(0.5)";
            this.html_element.style.boxShadow = "0 0 30px 5px rgba(254, 255, 255, 0.61)";
            // this.html_element.style.borderRadius = this.size
        } else {
            // Reset the effect to normal brightness during the day
            this.html_element.style.filter = "brightness(1)";
            this.html_element.style.boxShadow = "none"
        }
    }

    /**
     * The keyboard will handle the drift. 
     * The snow will drift see up or slow down depending on the drift value
     */
    handleKeyDownInSnow(key) {


        if (key === "ArrowLeft") {
            console.log("left");
            this.drift -= 0.1;

        }
        if (key === "ArrowRight") {
            console.log("right");
            this.drift += 0.1;
        }

    }

    /**
     * Add collison to the snowflake
     * If the snowflakes collides with the snowman it disappears
     */
    //Function is passing through the snowman so flake can recognise the snowman
    checkCollisionWithSnowman(snowMan) {
        // Check if the snowflake is inside the snowman's area
        if (
            this.x > snowMan.x &&
            this.x < snowMan.x + snowMan.size &&
            this.y > snowMan.y &&
            this.y < snowMan.y + snowMan.size
        ) {
            return true;  // Snowflake is inside the snowman area
        }
        return false;  // No collision
    }

    //passing through the snowman
    update(snowMan) {

        this.y += Math.random() * this.speed;
        this.x += this.drift + wind;
        // this.x += wind// uses the winds that has been defined in the main.js

        // Check for collision with the snowman
        if (this.checkCollisionWithSnowman(snowMan)) {
            // Handle the collision
            this.x = snowMan.x + snowMan.size / 2 - this.size / 2; // Align it to the snowman's center
            this.y = snowMan.y + snowMan.size;  // Place it on top of the snowman (or inside it)
            return;  // Don't let the snowflake continue falling
        }

        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        // reset when off screen
        if (this.y > window.innerHeight) {
            this.y = 0;
            this.x = Math.random() * window.innerWidth;
        }


    }









}