/* <div>////////////////////////1
        <ul>
        <li>One</li>
        <li>two</li>
        <li>three</li>
        </ul>
     */

// let  div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function () {
//     console.log("div was clicked");
// })

// div.addEventListener("click",function (event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// div.addEventListener("click",function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
// })



/////////////

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText ="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    console.log(event.target);
    console.log("button clicked");
});


// let delBtns = documents.querySelectorAll(".delete");
// for(delBtn of delBtns)  {
//     delBtn.addEventListner("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

