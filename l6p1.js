// function hello() {
//     console.log("hello");
// }

// function printName(){
//     console.log("apna college");
//     console.log("shradha khapra");
// }

// function print1to5(){
//     for(let i=1; i<=100000; i++){
//         console.log(i);
//     }
// }
// function isAdult() {
//     let age =13;
//     if(age >=18) {
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }

//  print1to5();

//  practice quesrtion

// create a function that prints a poem4

// function printPoem(){
//     console.log("Twinkle twinkle little start");
//     console.log("How i wonder what you are");
// } 
// printPoem()

// practice quesrtion

// function rollDice() {

//   let rand = Math.floor (Math.random()*6) +1;
// console.log(rand);
// }



    //Functions with arguments 

    // function  printName(name,age ){
    //  console.log(`${name}'s age is ${age}.`);
    // } 
    // printName("Ram" ,23);
    // printName("Ramesh", 23);


    // function sum(a,b) {
    //     console.log(a+b);
    // }
    // function calcAvg(a,b,c) {
    //     let avg = (a+b+c)/3;
    //     console.log(avg);
    // }
    // function printTable(n){
    //     for (let i=n; i<=n*10; i+=n) {
    //         console.log(i);
    //     }
    // }
    // printTable(5)


               // Return
         









               //Scope


           //function scope
    //  let sum = 54; f//global scope
     
    //  function calSum(a,b) {
    //     let sum = a+b; //function scope
    //     console.log(sum);

    //  } 

    //  calSum(1,2);



       //block scope
    //    {
    //     var a = 25;

    //    }
    //    console.log(a);




    // for(let i=1; i<=5; i++) {
    //     console.log(i);
    // }

    // console.log(i);

    //  let age =25;
    // if(age >=18) {
    //     let str ="adult";
    //     console.log(str);
    // }

    // function outerFunc() {
        
    //     function innerFunc(){
    //       console.log(x);
    //       console.log(y);
    //     }
    //     let x= 5;
    //     let y= 6;
    //    innerFunc();

    // }

     //hoisting

     //
    //  let greet = "hello";

    //  function changeGreet() {
    //   let greet = "namaste";
    //   console.log(greet);
    //   function inneergreet(){
    //     console.log(greet);
    //   }

    //  }
    //  console.log(greet);
    //  changeGreet();
    
    // function expressions 

    // let name ="Ramesh"
    // let x=5;

    //  let sum = function(a,b) {
    //   return a+b;
    //  }

    //  let hello = function(){
    //   console.log("hello");
    //  }

    //  hello=function() {
    //   console.log("namaste");
    //  }

     

    // greet function
    //  function multipleGreet(func,count){
    //  for(let i=1; i<=count; i++) {
    //   func();
    //   }
    //  }
    // let greet = function(){
    //   console.log ("hello")
    // }
    // multipleGreet(function(){console.log("namste")},100);

          // Higher order functions

//     function oddEvenTest(request) {
//       if (request == "odd"){
//        return function(n) {
//         console.log(!(n%2 ==0));
//        }
//       } else if (request == "even"){
//       return function(n) {
//         console.log(n%2 ==0);

//     }
//   } else {
//     console.log("wrong request");
//   }

// }


 
// function oddOrEvenFactory(request) {
//     if(request == "odd"){
//       let odd = function(n) {
//         console.log(!(n%2==0));
//       }
//       return odd;

//     }
//     else if (request == "even"){
//       let even =function(n){
//         console.log(n%2 ==0);
//     }
//     return even;
//  } else {
//   console.log("wrong request")
//  }

// }
// let request ="odd";
  
// const calculator = {
//    num: 55,
//   add: function(a,b){
//        return a+b;
//   },
//   sub: function(a,b) {
//       return a-b;
//   },
//   mul: function(a,b) {
//     return a*b;
//   }
// }
// const calculator = {
//   add(a,b) {
//     return a+b;
//   },sub(a,b){
//     return a-b;
//   }
// }

     //js part 6
     //qno1
    //  let arr=[8,9,10,1,2,3,4,5,6,7];
    //  let num=5;
     
    //  //elements larger than a number num 

    //  function getElements(arr,num) {
    //   for(let i=0;i<arr.length;i++) {
    //     if(arr[i]>num) {
    //       console.log(arr[i]);
    //     }
    //   }
    // }
    // getElements(arr,num);
 

       //qno2
      //  let str ="abcdabcdefgggh";

      //  //function to get string with all unique elements
      //  function getUnique(str) {
      //   let ans="";
      //   for (let i =0 ; i<str.length;i++) {
      //     let currChar = str[i];
      //     if (ans.indexOf(currChar) == -1) {
      //       //if current character is not added ,then add it in Ans .
      //       //otherwise it is a duplicate.
      //       ans += currChar;
      //     }
      //   }
      //   return ans;   
      //  }

      //  getUnique(str);


      //  qno3

      // let country = ["Australia","Germany","united State of America"];

      // function longestName(country) {
      //   let ansIdx = 0;
      //   for (let i=0; i< country.length;i++){
      //     let ansLen = country[ansIdx].length;
      //     let currLen =country[i].length;
      //     if (currLen > ansLen) {
      //       ansIdx = i;
      //     }
      //   }
      //   return country[ansIdx];
      // }

      // longestName(country);



      // qno4
      // let str ="ertyuikmnbvdcvb";
      // function countVowels(str){
      //   let count =0;
      //   for (let i=0; i<str.length; i++) {
      //     if(
      //       str.charAt(i) =="a" ||
      //       str.charAt(i) =="e" ||
      //       str.charAt(i) =="i" ||
      //       str.charAt(i) =="o" ||
      //       str.charAt(i) =="u" 
      //     ){
      //       count++;
      //     }
      //   }
      //   return count;
      // }

      // qno5
      let start = 100;
      let end = 200;
      function generateRandom(start,end) {
        let diff = end - start ;
        return Math.floor(Math.random() *diff) +start;
      }



