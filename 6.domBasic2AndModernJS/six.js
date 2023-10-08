// * browser event
// browser annouce something is called browser event
// if any content is changed in it's propery is called event

// //  koi pan event perform thay to tene monitorEvents() vade dekhi sakay
// monitorEvents(document);
// unmonitorEvents(document); 

// ** eventTarget
// one type of interface(bluePrint) and it is top level entity
// in this interface(blueprint) implemented by object that can receive events & may have listeners for them
// eventTarget <- node <- element 
// herer eventtarget is top level entity so it's have property and method 
// node is inherit with eventtarget so it's take all propert and method of eventtarget and it also have it's own property and method
// element is inherit with node and node ingerit with evernttarget so element take both property and mehod and it also have it's own property and mehtod

// eventtarget have 3 method :
// 1. addEventListener(), 2. romoveEventListener(), 3. dispatchEvent()

// 1.addEventListener()

// syntax - <event_target>.addEventListener(<event-to-listen-for>, <funcion-to-run-when-event-happened>)
// <event_target> is anything like document, p element, div element
// <event-to-listen-for> is event type like click, double click, scroll etc
// <function> is define what to do when event happens
// <phase of event>(third parameters of addEventListener) ae by default bubbling phase ma kam kare chhe
// example1
// document.addEventListener('click', () => {
//     console.log('I clicked on document');
//     // document.write('helloo');
// })
// example2
let a = document.getElementsByTagName('h2')[0];
console.log(a)
// a.addEventListener('click',function(){
//     a.style.background = 'red';
// })

// // alag thi function banai ne tema nam lakhi sakiae
function test() {
    a.style.background = "green";
    console.log("i am testing function");
}
a.addEventListener('click', test);
// hamesa sepreate function banavu jethi remove karvu hoy to kari sakay



// => type Coercion : where js will try to convert the items being compered to same type
// ex : loose equality 1 == '1'(true, allow by js) and strict equality 1 === '1'(false,prevent kare)
// loose equality comes in this section 



// 2. removeEventListener() 
// it have condition to remove EventListener : it must have same target, same event type and same funtion as addEventListener

// remove karva mate hamesa function seprate hovu jaruri chhe
a.removeEventListener('click',test)

// ** phases of an Event
// syntax : .addEventListener(event,function,phase of event)
// <phase of event> ae by default false hoy and ae bubbling phase ma kam kare chhe
// 1. Capturing phase
// syntax : .addEventListener(event,function, true)
// for capturin phase we write true in third parameter
// 2. At target phase
// 3. Bubbling phase - by default accure

// ** the event object
let b = document.querySelector('#para');
// console.log(b)
b.addEventListener('click', function(i) {
    console.log(i)
})

// ** the default action
// ex : anchor tag (<a>) is open link in window
// here we use .preventDefault() method to prevent its default behaviour 
// here third link means amazonn link is not open because of we prevent it's default behaviour

let link = document.querySelectorAll('a');
let thirdLink = link[2];
console.log(thirdLink);
thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maja aaya');
}) 


// ** Avoid too many event

// let myDiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = 'this is para ' + i;
//     newElement.addEventListener('click', function(event){
//         console.log('i have clicked on para ' , i);
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
// the above code creat different different object so it's take too many memory 
// so we can optimize this code

// // optimized code
// let myDiv = document.createElement('div');
// // let myfunc = function(event){
// //     console.log(event.target.textContent);
// // }
// function myFunc(event){
//     console.log(event.target.textContent);
// }
// myDiv.addEventListener('click', myFunc);

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = 'this is para ' + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// // ** 
// let article = document.querySelector('#wrapper');
// article.addEventListener('click', function(event){
//     console.log(' click kia hai ' + event.target.textContent);
// })
//  problem in this code solve in below mehod


// ** nodeName() property
// nodeName means most of capital name of tag name
// there is problem because if we click on para then it's run para and span both but we don't want this 
// we want print only if we click on span 
let article = document.querySelector('#wrapper');
article.addEventListener('click', function(event){
    if(event.target.nodeName === "SPAN"){
        console.log(' click kia hai ' + event.target.textContent);
    }
})


// // ** DOMContentLoaded 
// html file ma samjavelu chhe