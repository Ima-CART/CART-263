window.onload = function () {
    console.log("move");

    // we want to do something when the mouse is over the box :)
    let drawBox = document.querySelector("#draw-box-a");

    //A: add event listener + callback
    drawBox.addEventListener("mousemove", moveCallBack);

    function moveCallBack(e) {
        console.log("mouse move");
        // B: note these are the same ... 
        console.log(this);
        console.log(e.target);

        //C: get the mouse coords relative to the WINDOW...
        drawBox.innerHTML = `x: ${e.clientX}, y:${e.clientY}`;


        /**Using getBoundingClientRect to render the calculations */
        let rect = this.getBoundingClientRect();
        console.log(rect);
        //DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetX = e.clientX - rect.x;
        let offsetY = e.clientY - rect.y;
        // drawBox.innerHTML = `offset_x: ${offsetX}, offset_y:${offsetY}`;

        /**
         * Drawing the square that will follow the mouse
         */
        let pointDiv = document.createElement("div");
        pointDiv.classList.add("point");
        pointDiv.style.left = offsetX + "px";
        pointDiv.style.top = offsetY + "px";
        this.appendChild(pointDiv);

    }
}