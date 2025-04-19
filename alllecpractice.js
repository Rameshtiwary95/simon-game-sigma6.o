// let car=("maruti","toyota","Audis");
// // str.slice()
//str.trim()

//practice q

// let months =['january','july','march','august'];
  
//l5p1 practice
// function sum(a,b) {
//     console.log("hello");
//     console.log("hello");
//     return a+b;
//     console.log("hello2");
//     console.log("hello2");

// }
// function isAdult(age) {
//     if(age>=18) {
//         return "adult";
//     }else {
//         return "not adult";

//     }
// }


// function getSum(n) {
//     let sum = 0;

//     for(let i=1; i<=n;i++) {
//         sum += i;

//     }
//     return sum;
// }

//create a function that returns the concation 
// of all string in an array
// let str =["hi","hello","bye","!"];
 
// function  concat(str) {
//     let result="";
//     for(let i=0; i<=str.length;i++) {
//         result += str[i];
//     }

//     return result;
// }

//  lecture 8

// let nums = [1,2,3,4,5,6,7,8,9];
// let ans =  nums.filter((el)=> {
//     return el % 2 !=0;

// });

let nums = [1,2,3,4];
let finalVal =  nums.reduce((res,el)  => res +el);
console.log(finalVal);