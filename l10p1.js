
/* <h3>Generate a random color </h3>
 <br/>
  <button> Generate Color</button>
  <br/>
//   <div> This is your new color</div> */



// html part jisme aae apply hua hai upper wala  

/////////////////////////////html 1
// let btn = document.querySelector("button");


// btn.addEventListener("click" , function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor; 

//     console.log ("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() *255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green},${blue})`;
//     return color;
// }

////////////////////////////////////////////////////////  2

/* <button>Click me !</button>
 <h1>Use of "this" in Event Listners</h1>
 <h3>Let's demo it on elements</h3>
 <p>This is a sample paragraphs</p> */
 ///////////html

// console.log("JavaScript file is loaded!");

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);
    
// h3.addEventListener("click", changeColor);
    
    
   /////////////////////////////////

   // let btn =document.querySelector("button");

//    btn.addEventListener("click",function(event) {
//     console.log(event);
//     console.log("button clicked");
//    });

///////////////////////////////
// let btn =document.querySelector("button");


//    btn.addEventListener("dblclick",function(event) {
//     console.log(event);
//     console.log("button clicked");
//    });

///////////////////////
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//    console.log("key = ",event.key);
//    console.log("code = ",event.code); 
//   console.log("key was pressed");
// });


/////////////////////////////////////
/* <input placeholder="Move your character"/>
<button>Click me !</button>
<script src="l10p1.js" ></script> */


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//    console.log("code = ", event.code);//ArrowUp(U), ArrowDown,(D) ArrowLeft(L),ArrowRight(R)
//    if(event.code == "KeyU") {
//       console.log("character moves up");
//    } else if(event.code == "KeyD") {
//       console.log("character moves down");
//    }else if(event.code == "KeyL") {
//       console.log("character moves left");
//    }else if(event.code == "KeyR") {
//       console.log("character moves right");
//    }      
// });


/////////////////////////////////////////////

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//    event.preventDefault();
//    alert("form submitted");
// });

//////////////////

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//    event.preventDefault();
//    console.dir(form)
//  let user = document.querySelector("#user");
//  let pass = document.querySelector("#pass");
 
//  console.log(user.value);
//  console.log(pass.value);

//  alert(`Hi ${user.value},your password is set to ${pass.value}`);
// });
////////////////////////////////////////////////////////

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//    event.preventDefault();
//    console.dir(form)

//  let user = this.elements[0];
//  let pass = this.elements[1];

//  console.log(user.value);
//  console.log(pass.value);
 
 
//  alert(`Hi ${user.value},your password is set to ${pass.value}`);
// });

//////////////////////////////////////////////////////////////

/* <form action="/action">
    <input placeholder="username" type="text" id="user"/>
    <input placeholder="password" type="password" id="pass">
    <button>Register</button>
   </form> */

   //////////////////////////////////////////
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//    event.preventDefault();
// });
//  let user = document.querySelector("#user"); 

//  user.addEventListener("change", function () {
//    console.log("change event");
//    console.log("final value = ",this.value);
//  });
//  user.addEventListener("input", function() {
//    console.log("input event");
//    console.log("final value = ",this.value);

//  });

///////////////////////////////////

let inp =document.querySelector("#text");
let p =document.querySelector("p");

inp.addEventListener("input", function (){
   console.log(inp.value);
   p.innerText = inp.value;
})