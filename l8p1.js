// // forEach
// let arr =[1,2,3,4,5];

// function print(el){
//     console.log(el);
// }
// arr.forEach(print);

// //or
// arr.forEach(function(el) {
//     console.log(el);

// });

// let students = [
//     {
//         name: "Ramesh",
//         marks:95,
//     },
//     {
//         name:"Anisha",
//         marks:78,
//     },
//     {
//         name:"rajat",
//         marks:92,

//     },
// ];

// let gpa = students.map((el) =>{
//     return el.marks/10;
// });

// arr.forEach((student) => {
//     console.log(student.marks);
// });

//Map function

// let num =[1,2,3,4];
// let double = num.map(function(el){
//     return el*2;
// });

// let num = [1,2,3,4];

// let double =num.map((el)  => {
//     return el*el;
// });

// Filter

// let newArr = Array.filter();

// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter( (num) => (num%2 == 0 ));

//    Every
// let  arr = [1,4,2,5,6,7,2,9,2];

// let max = -1;

// for(let  i=0; i<arr.length; i++) {
//     if( max <arr[i]) {
//         max =arr[i];
//     }
// }

// console.log(max);

//practice qs
// qsno1

// let nums = [10,20,30,40,6 ];

// let ans = nums.every((el) => el % 10 == 0);

// console.log (ans);

// qno2
// function getMin(nums){
//     let min =nums.reduce((min, el) => {
//         if(min < el ) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return min;
// }
// let nums = [10,20,30,40,6 ];

//default parameters

// function sum(a=2 ,b) {
//     return a+b;
// }

// sum(1,3); //4
// sum(1); // a=1,b=undefined

//spread(Array literals)

// let arr = [1,2,3,4,5];
// let newarr = [...arr];

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [ ...even,...odd];

// spread(object literals)

// const data = {
//     email :"ironman@gmail.com" ,
//     password: "abcd",
// };
// const dataCopy = {...data , id :1234, country:"india"};

// let arr= [1,3,5,7,9];
// let obj1 = {...arr};

//Rest
// function sum (...args) {
//     //arguments
//     for (let i=0; i < args.length; i++) {
//         console.log("you gave us: ",args[i]);
//     }
// }

// function min (){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }

// Rest
// function sum(...args) { //arguments
//      for(let i=0 ; i<args.length; i++ ) {
//             console.log ("you gave us :",args[i]);
//      }

//     }

//     function min() {
//         console.log(arguments) ;
//         console.log(arguments.length);
//         arguments.push(1);//  arguments.push is not a function

//     }

// function sum(...args) {
//     return arguments .reduce ((sum,el) => sum + el);
// }

// function min(...args) {
//     return args.reduce((min,el)  => {
//         if(min > el){
//             return el;
//         } else {
//             return min;
//         }
//     })
// }

// Destructuring

//   let names = [ "tony","bruce","peter","steve"];
//   let winnerup = names[0];
//      let runnerup = names[1];
//   let secondRunnerup = names[2];

//  let [winner, runnerup,secondRunnerup,others] = names;

// Destructuring object

// const student ={
//     name:"karan",
//     age:14,
//     class:9,
//     subjects:["hindi","english","math","science"],
//     username:"tiwaryramesh95",
//     password:"we3wa",

// };

// let {username : user,password:secret} = student;

// Js part 8

// qno1
// let nums = [1,2,3,4,5];
// const square =nums.map((num)  => num*num);
// console.log(square);

// let sum = square.reduce((acc,cur) => acc +cur ,0);

// let avg =sum / nums.length;
// console.log(avg);

//  qno2
// let numbers=[2,4,6,8,-2,-4];

// console.log(numbers.map((number) => number +5));

// qno 3

// let strings = ["adam", "bob", "catlyn", "donald", "eve"];
// console.log(strings.map((string) => string.toUpperCase()));

//  qno 4

// const doubleAndReturnArgs= (arr, ...args) => [
//     ...args,
//     ...args.map((v) => v*2),
// ];
// doubleAndReturnArgs([1,2,3],4,4); //[1,2,3,8,8]
// doubleAndReturnArgs([2],10,4); //[2,20,8]

// qno5

// const mergeObjects = (obj1,obj2) => ({...obj1,obj2});
// mergeObjects({a: 1, b: 2},{c: 3 d: 4 });