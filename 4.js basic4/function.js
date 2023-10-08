// 1. function 

// function is a block of code that fulfill a specific task
// syntax : 
// function function_name(parameters){
//     console.log('body of function')
// }

// example of simple function creation

// I.function declaration
function run(){
    console.log('function declaration');
}
// call or invoke function -
run();

// **hoisting : 
// hoisting is the process of moving the function declaration to the top of the file. done automatically by js engine
// in javascript we can also call function  before it dedeclaration


// II. function assignment - it's assign function to another variable

// a. named function assignment
let stand = function walk(){
    console.log('Named assignment function');
}
// function call or invoke
// walk() // give error because it's assign to other variable
stand();

// now we assign to other variable
let jump = stand;
jump();

// b. anonymous function assignment
let f1 = function() {
    console.log('Anonymous assignment function')
}
f1();

// *parameters..
function sum(a,b){
    console.log(arguments);
    return a+b;
}
// console.log(sum(1,2)); // 3
// console.log(sum(1)); // take second parameter as undefined and op = NaN (not a number)
// console.log(sum()); // take both parameter as undefined and op = NaN (not a number)

console.log(sum(1,2,3,4)); // ignore extra parameter and op = 3
// this ignored parameter ae arguments ma hase. and here arguments are object


// *dynamic function with any numbers of parameter 
function sum1(){
    let total = 0;
    for(let i of arguments){
        total = total + i;
    }
    return total;
};
let ans1 = sum1(1,2,3,4,5,6);
console.log(ans1);
let ans2 = sum1(1,2,3)
console.log(ans2);
let ans3 = sum1(1,2,3,'a',2,4)
console.log(ans3);


// *rest operator(...) - used for passing an arguments . we can not use any parameter or arguments after rest operator
// rest parameter must be last formal parameter in any function

function sum2(k, ...i){
    console.log(i);
}
// ahiya k ma first call element jase and bija badha i ma 
let a1 = sum2(1,2,3,4,5);
console.log(a1);
// console.log(typeof(a1));
let a2 = sum2(1,2,3)
console.log(a2);

// * default parameter - 
// default parameter have rule : if we start default parameter from 2nd parameter then all the parameter comes after 2nd parameter is must be default
// here r is default parameter - if user not enter r value then it's automaticlay take 5
// here y is also default parameter - if user not enter y value then it's take 10
function interest(p,r=6,y=10){
    return p*r*y/100;
}
console.log(interest(1000, 10, 5)) // if any paramater is not declared by user then it's give error so we can use default paramere
console.log(interest(1000))

// // * other extra

// let person = {
//     fName:'kartvya',
//     lName:'darji'
// }
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }

// console.log(fullName());
// // issue - read only 


// * GETTER & SETTER
// I. getter - access properties
// II. setter - change or mutate property

// let person = {
//     fName:'kartvya',
//     lName:'darji',
//     get fullName(){
//         return `${person.fName}  ${person.lName}`;
//     },
//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// }

// let getFullName = person.fullName;
// console.log(getFullName);
// //or
// console.log(person.fullName)

// person.fullName = 'mitesh bharatbhai prajapati';
// console.log(person.fullName);


// // * error handling
// // try , catch and throw
// // try - je code ma error hoy aevu lage ae code ne try ma mukvo
// // throw - jo condition false hase to new error throw karse 
// // catch - throw mathi aaveli error catch karse and aene print karavse
// let person = {
//     fName:'kartvya',
//     lName:'darji',
//     get fullName(){
//         return `${person.fName}  ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof(value) != 'string'){
//             throw new Error('you have not sent a string');
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// }

// try {
//     person.fullName =1;
//     // console.log(typeof(person.fullName));
//     console.log(person.fullName);
// }
// catch(e){
//     alert(e);
// }

// // * scope
// // I.let - let keyword ni lifetime ae aena nearest bracket({}) jetlo hoy chhe
// {
//     var a = 5;
//     let b = 10;
//     const c = 12;
// }
// console.log(a); // it's print as 5
// // console.log(b); // it's show error beacuse let is scoped variable
// // console.log(c); // it's also scoped with brackets

// // II. var - var keyword ae function ma scope hoy chhe and jo var ae function ni bar define hoy to ae aakhi file ma access thai sake
// function hello(){
//     var gretting = 'hellooo';
// }
// console.log(gretting);

// example
function a(){
    const ab = 5;
}
const ab = 7;
function b(){
    const ab = 15;
}
console.log(ab)

// * total of an array
let arr = [1,2,3,4];
let total = 0;
// we not use for in loop because it takes string as input and iterable par hamesa for of loop j lage
for(let i of arr){
    total += i;
}
console.log(total);
// above calcualtion is also calculated by reduce mehod

// * reducing an array
// example : we can reduce our array into sum of array

let totalSum = arr.reduce((accumulator,currentValue) => accumulator + currentValue , 0);
// internally work : accumulator = accumulator + currentvalue ;
// 0 ae accumulator mate intialvalue define kare chhe . jo aapne 0 na lakhiae to by default accumulator ae array no first element lese and currentValue array no second element lese
console.log("total sum : " , totalSum);
console.log(typeof(totalSum))




// Homework - finally valo block kyare chale ?