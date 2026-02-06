
window.onload = function () {
    console.log("move");
    let box = this.document.querySelector("#draw-box-a");
    box.addEventListener("mousemove", drawBoxCallBack);

    let particle = this.document.createElement("div")
    particle.classList.add("point")
    box.appendChild(particle);

    function drawBoxCallBack(e) {
        console.log("moving")
        // console.log(this)
        console.log(e)
        console.log(this.getBoundingClientRect())
        let offSetX = e.clientX - this.getBoundingClientRect().x
        let offSetY = e.clientY - this.getBoundingClientRect().y

        particle.style.left = offSetX + "px"
        particle.style.top = offSetY + "px"

        // this.innerHtML = ` x: ${offSetX} y: ${offSetY}`;
        // this.innerHtML = `x: ${e.clientX} y: ${e.clientY}`;
    }
}
