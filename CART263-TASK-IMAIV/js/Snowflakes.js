class SnowFlakes {
    constructor(x, y, size, speed, drift) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 5; //adding random sizes
        this.speed = Math.random() * 2 + 1;//adding randomness
        this.drift = (Math.random() - 0.5) * 2
        // this.size = size;
        // this.speed = speed;
        // this.drift = drift;
        this.velocityX = 0;
        this.velocityY = 0;
        this.createHTMLelement();

    }





    createHTMLelement() {
        this.html_element = document.createElement("div");
        this.html_element.classList.add("snowflake");
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
                let newSnowflake = new SnowFlakes(randomX, randomY, Math.random() * 10 + 5, Math.random() * 3 + 2, 0);
                snowFlakes.push(newSnowflake);
            }

            // Remove the clicked snowflake from the array
            snowFlakes = snowFlakes.filter(snowflake => snowflake !== this);

            // Optionally, you can also hide or remove the clicked snowflake element from the DOM
            snowSelf.html_element.style.display = "none";



        }
    }


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

    update() {

        this.y += Math.random() * this.speed;
        this.x += this.drift + wind;
        // this.x += wind// uses the winds that has been defined in the main.js

        this.html_element.style.left = this.x + "px";
        this.html_element.style.top = this.y + "px";
        // reset when off screen
        if (this.y > window.innerHeight) {
            this.y = 0;
            this.x = Math.random() * window.innerWidth;
        }


    }









}