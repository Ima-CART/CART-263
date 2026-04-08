window.onload = goApp;
/**
 * Fetch allows you to get external information from an external source. There is an Api created that 
 * allows you to fetch JSON files. 
 */

/**
 * async is letting javascript know that there will be a await function and the focus on that first
 * It is best to have an await so that while something is running the user will not be able to click or
 * use the keyboard and disrupt the function cause it to be lost.
 */
async function goApp() {
    console.log("hello fetch")

    try {

        /**
         * Await is a built in function in which what are you are accessing will take top priority.
         * It will always make sure the system or sites wait until everything is loaded before it continues
         * 
         */

        let response = await fetch('../files/tests.json'); //response
        console.log(response)
        let parsedResultJS = await response.json();
        console.log(parsedResultJS)

        // let textResult = await response.text();
        // console.log(textResult)
        displayResults(parsedResultJS)
    }

    /**
     * Catch is needed in order to catch the errors of either a json, a video, a camera file etc..
     * Without it the system will continue to run and you will not see any of the error which will cause
     * a problem at the end.
     */
    catch (err) {

        console.log(err)


    }


    function displayResults(parsedResultJS) {
        for (let i = 0; i < parsedResultJS.length; i++) {
            console.log(parsedResultJS)

            //the object
            let donutObj = parsedResultJS[i];
            //container
            let containerDiv = document.createElement("div");
            containerDiv.classList.add("donutItem");
            document.querySelector("#output").appendChild(containerDiv);

            let title = document.createElement("h3");
            title.textContent = donutObj.name;
            containerDiv.appendChild(title)

            //access the image
            let donutImage = document.createElement("img");
            donutImage.src = donutObj.image;
            containerDiv.appendChild(donutImage)


        }


    }




}

