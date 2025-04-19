// let smallImages = document.getElementsByClassName("oldImg");
// for (let i=0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");

// for (let i=0; i<links.length; i++) {
//     links[i].style.color = "yellow";
// }
 let para1 = document.createElement("p");
 para1.innerText ="Hey I'am red!";
 document.querySelector("body").append(para1);

 para1.classList.add("red");


 let h3 = document.createElement("h3");
 h3.innerText="I'm a blue h3!";
 document.querySelector("body").append(h3);

 h3.classList.add("red");

 