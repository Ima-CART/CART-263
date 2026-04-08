window.onload = goApp;

async function goApp() {
  console.log("hello fetch II");
  // try {
  //   let response = await fetch("https://jsonplaceholder.typicode.com/posts"); //response
  //   let posts = await response.json();
  //   console.log(posts);
  //   for (let i = 0; i < 10; i++) {
  //     document.querySelector("#output_rev").innerHTML +=
  //       `POST ${i} title:  ${posts[i].title}`
  //   }
  // } catch (err) {
  //   console.log(err);
  // }


  try {

    let urlA = `https://cataas.com/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square&json=true`
    let urlB = `https://cataas.com/cat?json=true` //? means that you are making an query
    //
    let response = await fetch(urlA) //response
    let response2 = await fetch(urlB)
    let cat = await response.json();
    let cat2 = await response2.json();
    console.log(cat)
    displayOnSite(cat.url)
    displayOnSite(cat2.url)

  }
  catch (err) {
    console.log(err);
  }

  function displayOnSite(path) {
    console.log(path)
    document.querySelector("#output_rev").innerHTML += `<img style = "width:90%"src= ${path} />`
  }


}
