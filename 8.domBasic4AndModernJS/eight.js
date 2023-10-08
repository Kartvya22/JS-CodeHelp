// Asynchronous js
// asynchronous code means execute to thase pan kyare thase ae nai khabar
// jyare stack khali hase tyare async code execute thase
// js work asynchronous with the help of event loop

// setTimeOut and addEventListener is asynchrous code

// ** API - Application Programming Interface
// * API establish the cummunication between two system or software component or frontend with backend
// * Interface = interface is one type of cummunicator of two different person or system or device

// ** features of async code
// clean & concise
// better error handling
// easier debugging

// ** Promise
// promise is used to make code async in nature
// it use for parallelly execution in background
// it has function and function have two parameter resolve and reject
// resolve means promise is fullfiled and reject means promise is rejected
// if we not specified promise is resolve or reject then it is in pending state

// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside the Promise1')
//     },4000);
//     // resolve(1234); // fulfiled the promise
//     // reject(new Error('bhaisaab error aa raha hai'))  // rejected the promise
// });

// // if any promise completed then we use then() method
// // if promise is resolve we use then() method to print value and if promise is rejected we use catch() method to handle an error
// meraPromise1.then((value)=>{console.log(value)}) // in case of resolve promise
// meraPromise1.catch((error)=>{console.log("your promise is not fulfield")}) // in case of reject promise

// // we can combine and also print error in then method
// meraPromise1.then((value)=>{console.log(value)}, (error)=>{console.log("your promise is not fulfield")})

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside the Promise2')
//     },2000);
//     resolve(6789); // fulfiled the promise
//     // reject(new Error('bhaisaab error aa raha hai'))  // rejected the promise
// });

// console.log('pehla');
// console.log(meraPromise1);
// console.log(meraPromise2);

// // ** example of chainnig of promises by then method
// let wada1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("setTimeout1 started");
//     }, 2000);
//     console.log("im inside wada1");
//     resolve(true);
// });

// let output = wada1.then(() => {
//     let wada2 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("setTimeout2 started");
//         },3000);
//         console.log("im inside wada2");
//         resolve("wada2 resolved");
//     });
//     return wada2;
// });

// output.then((value) => console.log(value));
// console.log(wada1);
// console.log(output);

// // if we have many promise then we can confuse in the chaining of promise by then() method
// // to solve this problem we using async and await

// ** Async - Await
// it is special syntax used to work with promises
// Async function always returns promise

// // * simple async function example
// // Async function always returns promise
// async function abcd() {
//   return "kartvya";
// }
// console.log(abcd()); // it return promise

// // * async-await example
// async function utility() {

//   let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi me bhot garmi hai");
//     }, 2000);
//   });

//   let hydraMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hyderabad is cool");
//     }, 5000);
//   });

//   let dM = await delhiMausam;
//   // jya sudhi uper vali line nu execution puru nai thay tya sudhi niche ni line execute nai thay because of await
//   let hM = await hydraMausam;

//   return [dM,hM];

// }

// console.log(utility());

// ** Fetch API
// fetch api returns a promise
// it hava two parameter : ferch('url', options)
// koi api aevi hoy jene fetch karavti vakhate potani key(username) pan nakhavu pade for security
// option ma j security key and post method ae badhu aave

// * JSON
// convert all content into json file
// json is stand for javascript object notation
// means json convert all content to obejct formate of javascript
// json is lightweight format for storig and transporting data

// // * GET call using fetch call
// // it is used for retrieve data
// async function utility1() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   console.log(content);
//   console.log(content);
//   let output = await content.json();
//   // converting fetched content/data into json formate
//   console.log(output);
// }

// console.log(utility1());

// jyare aapde request kariae tyare koik var aapdi key means username or something credential moklva pade jene aapde request header dwara mokli sakay

// // * POST method

// async function helper() {

//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       body: "anything",
//       title: "kishu",
//       userId: 154,
//       weight: 90,
//       status1: true,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   let content1 = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let response1 = content1.json();

//   return response1;

// }

// console.log(helper()); // return promise

// async function utility2() {
//   let ans = await helper();
//   console.log(ans);
// }

// utility2();  // return object

// ** closures
// nested function hoy tyare closure bane chhe
function outer() {
  let name = "this is name";
  function inner() {
    console.log(name);
  }
  return inner;
}

let hi = outer();
hi();

// here outer function no closure banse  
// here when outer function is close then it store required function logic and variable in the lexical-environment(surrounding state) for inner function use is called closure


// // ** example of scope of variable
// // check all posibilities by comment and uncomment variable a

// // let a = 'kartvya';
// function f1(){
//   let a = 'kishan';
//   function f2(){
//     // let a = 'kishu';
//     console.log(a)
//   }
//   f2();
//   // console.log(a)
// }
// f1();
// // console.log(a)

// homework :
// classes & export modules in js