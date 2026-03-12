
window.onload = function () {
    console.log("keys");


    let speedX = 5;

    window.addEventListener("keydown", function (event) {
        console.log(event);

        /**
         * Inputting the value of the key pressed
         */
        document.querySelector("#textContainer").textContent += `${event.key} `;
        document.querySelector("#textContainer").textContent += `${event.code} `;


        /**
         * Using the left and right arrow to move box A left and right at the speedX=5 
         * The function to control the speed is outside the callback function,
         */
        if (event.key === "ArrowRight") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) + speedX + "px";

        } else if (event.key === "ArrowLeft") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) - speedX + "px";
        }

        else if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(226, 112, 177)";
        }


        /**
         * Using the spacebar key to change the color of Box B to orange
         */
        // else if (event.code === "Space") {
        //     document.getElementById("boxB").style.background = "orange";

        // }


        /**
         * Toggling Box B color from orange to blue, using the spacebar button
         */
        else if (event.code === "Space") {
            let bool = document.getElementById("boxB").getAttribute("custom-bool");
            if (bool === "off") {
                document.getElementById("boxB").style.background = "orange";
                document.getElementById("boxB").setAttribute("custom-bool", "on");
            } else {
                document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
                document.getElementById("boxB").setAttribute("custom-bool", "off");
            }
        }


    });


    /**
     * Adding a new callback for a function whe the key is released.
     */
    window.addEventListener("keyup", function (event) {
        console.log("keyup");
        //2: change color when space is down

        if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
        }
        else {
            console.log(`key up not shift:`);
            console.log(event);
        }
    });




}
