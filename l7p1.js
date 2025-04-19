    //this 

// const student ={
//    name : "Ramesh",
//    age:23,
//    eng: 95,
//    math: 93,
//    phy:97,
//    getAvg(){
//       console.log(this);
//     let avg =(this.eng + this.math +this.phy)/3;
//     console.log(avg);
//    }
// }
 


     //try and catch


// function getAvg() {
//    console.log(this);
// }

// console.log("hello");
// console.log("hello");
// try{
// console.log(a);
// }catch(err){
// console.log("caught an error.. a is not defined ");
// console.log(err);

// }
// console.log("hello2");
// console.log("hello3");
// console.log("hello4");



      //Arrow func
// const sum =(a,b) => {
//    console.log(a+b);
// };
// const cube =(n) => {
//    return n*n*n
// };

// const pow = (a,b) => {
//    return a**b;
// }
// const hello=() =>{
//    console.log("hello world");

// };

// // implicit return
//  const mul =(a,b) => a * b;

//   set timeout
//  setTimeout(function,timeout)

   // console.log("Hi there!");

   // setTimeout ( ()=> {
   //    console.log("Apna College");
   // },7000);

   //  console.log("welcome to");
   //  console.log("welcome to");
   //  console.log("welcome to");
   

   //    set intrval
   // let id = setInterval ( ()=> {
   //        console.log("Apna College");
   //    },2000);

   //    console.log(id);

   //    let id2 = setInterval ( ()=> {
   //       console.log("Apna College");
   //   },2000);

   //   console.log(id2);

      
   //this with Arrow function
   
//    const student = {
//     name:"aman",
//     marks:95,
//     prop:this,//global scope
//     getName:function() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks:() =>{
//         console.log(this); //parents scope
//         return this.marks;
//     },
//     getInfo1:function(){
//         setTimeout( ()  => {
//             console.log (this);//student
//         },2000);
//     },
//     getInfo2: function() {
//         setTimeout( function() {
//             console.log(this)  //window
//         },2000);
//     }
//    };

   

// practice question

// write an arrow function that returns the  square of a number 'n'.


//  const square = (n) => n *n ;
//  console.log (square (4));

// write a function that prints "Hello world " 5 times at intervals of 2s each
   
//  let id = setInterval ( ()=> {
//         console.log("Hello world");
//      },2000);

//      setTimeout (()=> {
//         clearInterval(id)
//         console.log("clear interval ran")
//      },10000);

// js (part 7) practice solutions

// qno1

// const arrayAverage = (arr) => {
//    let total = 0;
//    for (let number of arr) {
//       total += number;

//    }
//    return total /arr.length;

// };

// let arr = [1,2,3,4,5,6];
// console.log(arrayAverage(arr));

// qno2
// let num = 4;
 
// const isEven = (num) => num%2==0;
//qno3
   // const object ={
   //    message:"Hello, World!",

   //    logMessage() {
   //       console.log (this.message)
   //    }
   // };
   // setTimeout(object.logMessage,1000);

   //qno4
   // let length =4;
   // function callback(){
   //    console.log(this.length); 
   // }
   // const object ={
   //    length:5,
   //    method(callback){
   //       callback();
   //    },
   // };

   // object.method(callback,1,2);
   