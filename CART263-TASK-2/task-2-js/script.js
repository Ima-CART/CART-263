window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")






















    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */
    /***OUTPUT: console.log(document.getElementsByTagName("p"))
     * This console log selects the paragraph as a list and shows all the tag name paragraph
     * in the html document
    */


    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */
    /***OUTPUT: console.log(document.getElementsByTagName("p")[0]);
     console.log(document.getElementById("1"));
     *  There are 2 console log which chooses the first paragraph on specifying the paragraph as an array
     The second way would be the look into the id
     */


    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */
    /***OUTPUT: console.log(document.getElementsByClassName("inner-container"))
     * The console log selects all the elements with the class name inner-container. It provides a list
     * of all the different inner container in the console.
    */


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */
    /***OUTPUT: console.log(document.getElementsByTagName("img")[10])
     *  The console log that selects the last image element by using the img tag. The last image can be chosen
     * by selecting the right array.
    */


    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */
    /***OUTPUT:  5A: console.log(document.querySelector("h2"))
     console.log(document.getElementsByTagName("h2"))
     
     5B: console.log(document.getElementsByTagName("h2").length)
     
     5C: const h2Element = document.querySelector('h2');
     if (h2Element) {
        console.log(h2Element.textContent);
        } 
        
        const h2Element = document.querySelector('h2');
        const textContent = h2Element.textContent
        console.log(textContent)
        * 
        */


    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */
    /***OUTPUT: console.log(document.getElementById("parent"))
     * The console log that select the element with the id parent. 
    */


    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE */

    /** let text = document.getElementById("1").textContent
     document.getElementById("1").innerHTML = "Ima Williams January 20th 2026" */

    /*************************************** */

    /* 2: Select all elements in the HTML that have the class name content-container
    and change the background color ... of first and second ...*/
    /***CODE  */

    /** document.querySelectorAll(".content-container")[0].style.background = "orange"
     document.querySelectorAll(".content-container")[1].style.background = "purple" */


    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */

    /** document.querySelectorAll("img")[0].src = "task-2-images/seven.png"
     document.querySelectorAll("img")[1].src = "task-2-images/seven.png"
     document.querySelectorAll("img")[2].src = "task-2-images/seven.png" */


    /*************************************** */
    /* 4: Select the third paragraph element on the page and
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE  */

    /** document.getElementById("3").innerHTML = "<h2> TEST 123</h2>" */


    /*************************************** */
    /* 5: Select the fourth paragraph element on the page and
    add to the existing content an h2 element containing the text `TEST 123`
    /***CODE */

    /**document.getElementById("4").innerHTML += "<h2>TEST 123</h2>" */

    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    /***CODE  */

    /* let paragraph = document.getElementById("5")
    let newImage = document.createElement("img")
    newImage.src = "task-2-images/one.png"
    paragraph.appendChild(newImage)
    document.getElementById("5").classList.add("newStyle")*/



    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];,
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.
    /***CODE */

    /*let colors = ['red', 'blue', 'green', 'orange']
    let innerContainers = document.querySelectorAll(".inner-container")
    innerContainers[0].style.backgroundColor = colors[0];
    innerContainers[1].style.backgroundColor = colors[1];
    innerContainers[2].style.backgroundColor = colors[2];
    innerContainers[3].style.backgroundColor = colors[3];
    
    colors.forEach((color, index) => {
       innerContainers[index].style.backgroundColor = color;
       });*/


    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */


    let allPTagsThree = document.getElementsByTagName("p")
    function customCreateElement(parent) {
        let newParagraph = document.createElement("p")
        newParagraph.textContent = "using create Element"
        newParagraph.style.backgroundColor = "green"
        newParagraph.style.color = "white"
        parent.appendChild(newParagraph)



    }

    for (let i = 0; i < allPTagsThree.length; i++) {
        customCreateElement(allPTagsThree[i]);
        i++
    }

    // console.log(document.getElementsByTagName("p"))


    /***EXPLANATION::
     * The result of this function has selected all the <p> tag elements across the html and creates a new elements.
     * I then created a new variable that would created another "P" element within the current p tag and added 2 different styles.
     * A background color was set to green and the color of the text was white. All the changes where set in a new function
     * customCreateElement calling to the parent, which would allow the p element to be process within parent elements. the new
     * variable was then appened to the parent element where the changes would be applied. In order to have the changes appear
     * in each different content-container I created a loop in which the changed would apply to all the paragraph after creating a \
     * variable of all the p tags in the beginner. The index (i) would not be greater than the length of the allPtagThree variable
     * and it would contiune to loop through them all until it reaches the end. I added an i++ in the parenthesis to have the function
     * loop contstantly and another one at the end so it would not go to infinity and crash the browser.    
     * 
    */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
otherwise lat it have the content `ODD`.*/

    /***CODE */

    function customNewBoxCreate(parent) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("testDiv");
        parent.appendChild(newDiv);
        return newDiv;
    }


    let newGrid = document.getElementById("new-grid")
    let gridSize = 40

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {

            let returnedDiv = customNewBoxCreate(newGrid);
            returnedDiv.style.top = gridSize * r + "px";
            returnedDiv.style.left = gridSize * c + "px";

            if ((r % 2) == 0) {
                returnedDiv.style.backgroundColor = "white"

            }

            else {

                returnedDiv.style.backgroundColor = "cornflowerblue"
            }
        }
    }

    /***EXPLANATION::
     * Following the instruction of the task. A new function was created in order to build the grid. 
     * The function was used to create a box by adding a newDiv variable that would create a new element.
     * I added a style class to the new div element so that it would be applied to all the newDiv. I appened
     * the child element to the parent and return the newDiv so that it would go back to the top. Two new variable
     * was created outsided the nested loop that was be implement in the function. The variable newGrid would be applied
     * in the element ID "new-grid". I gave the grid a size based on the style test-div which had a height of 40 and width of 40.
     * In the nested loop I needed to create loops that would apply to the row and the column. The variables were set for r to equal
     * row and c to equal column. The row and column could not be more that 10 and since it was a loop it would applied constantly
     * until the number of boxes in the grid was 100. In the nest loop I created a returnDiv variable that wpuld equal the 
     * customNewBoxCreate(newgrid) to have it called in element new-grid. A new style was added to both the r and the c. Row 
     * had the style top and c had the style left. In order to have the grids appears the gridSize was mutiplied by the r to 
     * have it appear along the top space by space. The same id was applied to the c to have the columns appear on the left. 
     * The most important was to add the "px" add the px was indicating to the loop that the units was in px. Without it there
     * would be only one square. Bonus: For the second background color I used the modulus or % operator to indicate of the  r%2 == 0
     * the background color would be white. The 0 indicated that there would be no remainder meaning that it was number is even
     * else if there is a remainder it would be odd. The color was applied to the rows that had even and odd numbers while if the 
     * the number waS odd the color would be cornflowerblue.
     * 
     * 
    */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
    then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

    /***CODE */


    let newGrid2 = document.getElementById("new-grid-three")
    let gridSize2 = 40

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {

            let returnedDiv = customNewBoxCreate(newGrid2);
            returnedDiv.style.top = gridSize2 * r + "px";
            returnedDiv.style.left = gridSize2 * c + "px";

            if ((c % 3) == 0) {
                returnedDiv.style.backgroundColor = "red"
                returnedDiv.textContent = "0"

            }

            else if ((c % 3) == 1) {

                returnedDiv.style.backgroundColor = "orange"
                returnedDiv.textContent = "1"
            }

            else {

                returnedDiv.style.backgroundColor = "yellow"
                returnedDiv.textContent = "2"
            }


        }
    }



    /***EXPLANATION::
     *  For the bonus question, the same set up and function as the task number 2 grid is applied. A second variable was created 
     * for the bonus task and it will be documented in the element new-grid-three and the variable for the size has been changed
     * to newGrid2. For the bonus section in the nested there are three condition and it will be applied to the c(column) instead of 
     * the rows. Using the dvision of 3 if c%3 == 0, it has no remainder the  backgroundcolor style will be set to red and the
     * textcontent will say zero. Else if c%3 === 1, the remainder is 1 the backgroundcolorstyle will be changed to orange and the
     * textcontain will say one. Else, if the first 2 conditions are not met the background color will equal yellow and the
     * textcontent will say two as it is the last one  remaining number. 
     * 
    */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}