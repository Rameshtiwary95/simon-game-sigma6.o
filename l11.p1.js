// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

 // synchronous nature

// setTimeout(() =>{
//     console.log("apna college");  
// },2000);

// console.log("hello")

// h1 = document.querySelector("h1");

// setTimeout(() =>{
//     h1.style.color = "red";  
//     },1000);

//  setTimeout(() =>{
//     h1.style.color = "orange";  
//      },2000);

// setTimeout(() =>{
//     h1.style.color = "green";  
//      },3000);

//  setTimeout(() =>{
//     h1.style.color = "orange";  
//      },4000);
    

h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
    h1.style.color = color;
    if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green",1000, () => {
         changeColor("yellow",1000, () => {
            changeColor("blue",1000, () => {

            });
         })   
        });
    });
});






