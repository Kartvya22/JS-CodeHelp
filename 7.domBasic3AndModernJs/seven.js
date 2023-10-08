// please show the robert philip javascript event loop video

// javascript is Single threding language 
// single threading means one command at a time means at a time aek j command run thay

// *** performance

// how to write effecient & performing code
// event loop

// ** reflow and repaint
// repaint ae reflow karta fast hoy chhe
// jetla reflow and repaint vadhare hase aetlo j time vadhare jase 
// and jetla reflow and repaint ochha hase aetlo j code optimized hase and time consuming nai hoy
// *reflow : reflow is the process of caluclation of the content to be add in document
// means jyare koi navi vastu add karvi hoy aetle pela aenu calculation thase k ketla size ni chhe ketla pixcal ni chhe kai jagya ae mukavani chhe aene reflow kahe chhe
// *repaint : repaint is the process of adding new content into the page
// means jyare reflow thai jay aena pacchi aa actual ma content ne teni jgya ae add kari dese


// ** performance.now()
// use to measurre speed of code
// it is very accurate function
// it is standard way to measure how long your code taken to run

// example 1
const t1 = performance.now();
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = "this is para " + i ;
    document.body.appendChild(newElement);  // 100 reflow and 100 repaint
}
const t2 = performance.now();
console.log('example 1')
console.log("this took " + (t2-t1) + " ms");

// // example 2 (optimising example 1 code)
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i=0; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para ' + i;
//     myDiv.appendChild(newElement); 
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log('example 2')
// console.log('this is took ' + (t4-t3) + ' ms')




// ** Document Fragment
// it is light weight document object

// example 3
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = "this is para " + i ;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);  // 1 reflow and 1 repaint
const t6 = performance.now();
console.log('example 3')
console.log("this took " + (t6-t5) + " ms");



// ** the call stack
// jyare koi function call thase tyare te stack ma add thase and jyare function puru thase tyare stack mathi remove thai jase

function a(){
    b();
    console.log("this is function a");
    c();
}
function b(){
    console.log("this is function b");
    d();
}
function c(){
    console.log("this is funcion c");
}
function d(){
    console.log("this is function d");
}
// funcition call
a();
d();

// *Observation
// I. run-to-complition nature to code
// II. js is does not execute multiple lines/function at the same time
// III. js check the code top to bottom


// ** Event loop

// I. call stack
// II. browser
// III. event queue

// example
console.log("hi")
document.addEventListener('click',function(){
    console.log("hello")
})
console.log("namastey")

// process of example :
// please show the robert philip javascript event loop video
// first line execute thasse tyare te stack ma add thse  and execute thaya bad stack mathi remove thase pacchi biji line ma addeventlistener aavse to ae stack ma add thase and thodi var ma function browser ne aapine remove thai jase . have jo user click karse to j aa browser aa function ne event queue ne aapse and event queue check karse k jo stack ma koi function hase k stack empty nai hoy to ae function run nai thay . jyare third line execute thse tyre console.log function stack ma jase and puru thase aetle remove thai jase. have jyare stack empty thase tyare event queue ma padela badha function first in first out niyam pramane execute thase 
// event queue ae hamesa stack empty hase tyare j execute thase

// * points of event loop
// Async code execute using js event loop
// Async code handling by browser
// when call stack is empty then all code of queue is moves on call stack and code is execute

// ** setTimeout 
// setTimeout is one type of Async code 
// it hase two parameter function and time in milisecond
// it is used for execute code after some time mention after function and time mentioned in miliseconds
// je time mentioned karvama aave chhe ae minimum time hoy chhe means k ae function ne run thava mate mentioned time karta pan vadhare samay lagi sake. karan k jo stack khali j na hoy to 
setTimeout(function(){
    console.log('i am setTimeout');
}, 2000 );
// this function execute after 2 second and 2 second is minimum time 
// 2 second thi vadhu pan thai sake

// ** extra

// setInterval(() => {
//     console.log('heloo')
// }, 1000);