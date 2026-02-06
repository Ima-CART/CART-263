window.onload = setup
function setup() {
    // console.log("running setup");
    // console.log(document.getElementById("one"));
    // console.log(document.querySelector("#one"));
    // console.log(document.getElementsByTagName("div"));

    // let allDivs = document.getElementsByTagName("div")
    // console.log(allDivs.length);

    // console.log(document.querySelectorAll("div"));

    // console.log(document.getElementsByClassName("square_shape"));
    // console.log(document.querySelectorAll(".square_shape"));

    // console.log(document.getElementsByTagName("div").length);
    // console.log(document.getElementsByTagName("div")[0]);

    // console.log(document.getElementById("two").innerHTML);

    // console.log(document.getElementById("two").textContent);

    // console.log(document.querySelector("#five").getAttribute("id"));

    // console.log(document.querySelector("#two").classList);

    // console.log(document.querySelector("#five").getAttributeNames());


    // console.log(document.querySelector("#one").style);

    // console.log(document.querySelector("#six").style.background);


    // console.log(document.querySelectorAll("span")[0].parentElement)

    // console.log(document.querySelectorAll("span")[0].parentElement.parentElement)

    // console.log(document.querySelector(".wrapper_flex_box").children)

    // document.getElementById("two").children[0].innerHTML = "<h3> Hello Js <h3>";

    // let childrenOfTwo = document.getElementById("two").children
    // for (let i = 0; i < childrenOfTwo.length; i++){
    //     childrenOfTwo[i].innerHTML = "Hello Js"
    // }

    // document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>";

    // document.querySelector(".square_shape").classList.remove("square_shape");
    // document.querySelector(".square_shape").classList.add("another_class");

    document.querySelector("h1").setAttribute("id", "newId")

    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";
    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)

    let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box")
    let toRemove = document.getElementById("six");
    parentElementToRemoveFrom.removeChild(toRemove);

    document.querySelector("#four").style.background = "cornflowerBlue";


}



