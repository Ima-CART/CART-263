window.onload = setup;
function setup() {
    console.log("event!")
    // let intoBoolean = "inactive"
    // let sIntoBoolen ="active"


    // let introSection = document.getElementById("intro");
    // introSection.addEventListener("click", mouseIntroHandler)

    let allSections = document.querySelectorAll(".mouseclick-active-section");
    for (let element of allSections) {
        element.addEventListener("click", changeOpacityOfSction)
    }

    function changeOpacityOfSction(e) {
        let classToAdd = `${this.id}-section-active`
        let classToAddP = `${this.id}-section-p-active`

        if (this.getAttribute("custom-bool") === "inactive") {
            this.classList.add(classToAdd)
            document.querySelector(`#${this.id} p`).classList.add(classToAddP)


            this.setAttribute("custom-bool", "active")
            console.log(this);

        }

        else {
            this.classList.remove(classToAdd);
            document.querySelector(`#${this.id} p`).classList.remove(classToAddP)
            this.setAttribute("custom-bool", "inactive")

        }
    }

    function mouseIntroHandler(e) {
        console.log("hello")
        //console.log(e);
        // console.log(this);
        this.classList.add("intro-section-active");

        this.style.background = `rgba(214, 110, 239, 0.5)`
        console.log(document.querySelector(`#${this.id} p`));
        document.querySelector(`#${this.id}p`).style.background = `rgba(214, 110, 239, 0.5)`
        //    console.log("#intro p")
        //     console.log("#" + "this.id" + "p")
        //     `#${this.id} p`      
        // this.style.setProperty("opacity", ".5");
        // document.querySelector(`#${this.id} p`).style.setProperty("opacity", ".75");
        document.querySelector(`#${this.id} p`).classList.add("intro-section-p-active");
        document.querySelector(`#${this.id}p`)
        classList.add("intro-section-p-active");






    };

}