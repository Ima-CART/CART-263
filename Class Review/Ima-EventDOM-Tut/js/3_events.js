window.onload = setup;
function setup() {
    console.log("events!")

    /**Because of the redundany, using a more cleaner simpler version */
    // let introSection = document.querySelector("#intro");
    // introSection.addEventListener("click", function (e) {
    //     console.log(this);
    //     console.log(e)

    //     //a:
    //     this.style.background = `rgba(214, 110, 239, 0.5)`

    /** This section using the same concept, but instead is changeing the p backgroud section
     * of the intro. Using This id for the intro ` p to change the paragraph section
     */

    //     console.log(document.querySelector(`#${this.id} p`));
    //     document.querySelector(`#${this.id} p`).style.background = `rgba(214, 110, 239 ,.75)`;


    // });


    // let introSection = document.querySelector("#intro");
    // introSection.addEventListener("click", function (e) {
    //     console.log(this);
    //     this.style.setProperty("opacity", ".5"); //Using the inline to change the opacity. It does the same as the top.
    //     //same as
    //     //this.style.opacity = 0.5;
    //     /**This does not work because the parent opacity is lower than the child */
    //     // document.querySelector(`#${this.id} p`).style.setProperty("opacity", ".75");

    // })


    /**Using css-class element */
    // let introSection = document.querySelector("#intro");
    // introSection.addEventListener("click", function (e) {
    //     console.log(this);
    //     this.style.background = `rgba(214, 110, 239, 0.5)`
    //     document.querySelector(`#${this.id} p`).classList.add("intro-section-p-active");


    // })

    /** Applying the changes to each section by using loop
     * and applying it to the classlist.  
     */

    let allSections = document.querySelectorAll(".mouseclick-active-section");
    //go through each section and apply the event listener
    /**The event function goes inside the loop as the 
     * loop applies to everything. Function needs to be in the curly brackets.
     */
    for (let element of allSections) {
        console.log(element)

        //add click to each element
        element.addEventListener("click", function (e) {
            console.log(this);


            //check if is inactive
            if (this.getAttribute("custom-bool") === "inactive") {
                console.log("is inactive");
                console.log(this.id)

                // :: new access the class of parent (this)
                let class_to_add = `${this.id}-section-active`;
                this.classList.add(class_to_add)
                // :: new access the class of child 
                let class_to_add_p = `${this.id}-section-p-active`;
                document.querySelector(`#${this.id} p`).classList.add(class_to_add_p)

            }





        })




    }




}
