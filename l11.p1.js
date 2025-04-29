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
    

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green",1000, () => {
//          changeColor("yellow",1000, () => {
//             changeColor("blue",1000, () => {

//             });
//          })   
//         });
//     });
// });


// callbacks nesting callback hell

// function  savetoDb(data ,success, failure) {
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }else {
//         failure();
//     }
// }

// savetoDb(
//     "apna college",
//     () =>{
//         console.log("sucess: your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb("Ramesh",
//                      ()=> {
//                     console,log("sucess3: data3 saved");
//                 },
//                 ()=>{
//                 console.log ("failure3: weak connection. data not saved");     
//                 }
//             );
//             },
//             ()=>{
//                 console.log ("failure2: weak connection. data not saved");   
//             }
//         );
//     }, 
//     ()=> {
//         console.log("failure : weak connection. data not saved");
//     }  
// )      
// function  savetoDb(data) {
//     return new Promise((resolve , reject) => {
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if (internetSpeed > 4) {
//         resolve("success : data was saved");
//     }else {
//         reject("failure : weak connection");
//     }
//     });
// }
// // let request = savetoDb("apna college"); //rej- promice object
// // request
// savetoDb("apna college")
// .then (() => {
//     console.log("promice was resolved");
//     // console.log (request);
// })
// .catch(() => {
//     console.log ("promice was rejected");
//     // console.log (request);

// });



// function  savetoDb(data) {
//     return new Promise((resolve , reject) => {
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if (internetSpeed > 4) {
//         resolve("success : data was saved");
//     }else {
//         reject("failure : weak connection");
//     }
//     });
// }
// savetoDb("apna college")
// .then (() => {
//     console.log("data1 saved");
//      return savetoDb("helloworld")
//     })
// .then(() => {
//     console.log("data2 saved");
// })
// .catch(() =>{
//     console.log("promice was rejected");
// });


function  savetoDb(data) {
    return new Promise((resolve , reject) => {
    let internetSpeed = Math.floor(Math.random() *10) + 1;
    if (internetSpeed > 4) {
        resolve("success : data was saved");
    }else {
        reject("failure : weak connection");
    }
    });
}
savetoDb("apna college")
.then (() => {
    console.log("data1 saved");
     return savetoDb("helloworld");
    })
.then(() => {
    console.log("data2 saved");
    return savetoDb("Ramesh");
})
.then(() =>{
   console.log("data3 saved");
})
.catch(() =>{
    console.log("promice was rejected");
});