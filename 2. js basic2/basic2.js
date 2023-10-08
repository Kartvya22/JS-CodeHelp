// this is code of me 
console.log('hello! i am kishu')

// // object in js - object is collection of key value pair and it have property and behaviour
// object is real world entity
// example of object - car , car have property like color, height, weight and behaviour like running

// function is also an object in javaScript

// // simple creation of rectangle object in js
// let rectangle = {
//     length : 4, // length ae property chhe rectangle object ni
//     breadth : 6, // breadth ae pan property chhe rectangle object ni

//     draw : function() { // draw ae beahviour chhe karan k tema function banavyu, and aa function ne method kevay karan k ae object ni andar banavavama aavyu chhe
//         console.log("drawing rectangle");
//     }

//     // aa rite pan darshavi sakay
//     // draw() {
//     //     console.log("drawing rectangle");
//     // }
// };

// // print this rectangle object
// console.log(rectangle);
// // we can call property or behaviour by .(dot) operator
// console.log(rectangle.length);
// console.log(rectangle.breadth);
// console.log(rectangle.draw); 
// console.log(rectangle.draw());


// creat factory function for object 
// factory function banaviae tyare function nu name camelCase notation ma aapvu for ex. numberOfStudent
function createRectangle(l,b) {
    let rectangle = {
        length : l,
        breadth : b,
        draw() {
            console.log("drawing rectangle");
        }
    }
    return rectangle;
}

// creat object by factory function 
let recObj1 = createRectangle(2,3);
let recObj2 = createRectangle(5,6);
let recObj3 = createRectangle(10,15);
// print object 
console.log(recObj1);
console.log(recObj1.length);
console.log(recObj2);
console.log(recObj2.breadth);
console.log(recObj3);
console.log(recObj3.draw());


// constructor function
// constructor function is used to intialize or define the property or mehods 
// constructor function banaviae tyare function name Pascal Notation ( first latter of every word is capital ) ma aapvu for ex. NumberOfStudent

function MyRectangle(len,bre) {
    // this keyword refers to current object and if no object declared then it's refers to empty object
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log("drawing");
    }

}

// creat object using constructor function
let rectangleObject = new MyRectangle(4,6);
// new is keywords that returns empty object 
console.log(rectangleObject);


// dynamic nature of object - means we can add or remove items(property) in object

// add 
rectangleObject.color = "blue";
console.log(rectangleObject);

// remove(delete)
delete rectangleObject.length;
console.log(rectangleObject); 

// types in js
// 1. primitive type or value - in js primitive are copied by their value
// 2. reference type or object - in js reference are copied by their address/reference

// call by value concept
let b = 10;
function inc(b){
    b++; 
}
inc(b);
console.log(b);
// it's returns b=10 because b is call by value

// call by reference concept 
let c = {value:10};
function inc(c){
    c.value++;
}
inc(c);
console.log(c);
console.log(c.value);
// it's returns c=11 because c is call by reference(all c are refer to one address)

let rectangle = {
    length : 2, 
    breadth : 4
}

// for-in loop : it is used for iterating the object
for(let key in rectangle){
    console.log(key)
    console.log(rectangle[key])
}

// for of loop : it is used on iterables like array,maps
for(let key of Object.keys(rectangle)){
    console.log(key)
}
for(let key of Object.entries(rectangle)){
    console.log(key)
}

// how to check particular property is present or not in object

console.log("check the length property is present in rectangle")
if("length" in rectangle){
    console.log("present"); 
}
else{
    console.log("absent");
}
// length is present in rectangle object

console.log("check the color property is present in rectangle")
if("color" in rectangle){
    console.log("present");
}
else{
    console.log("absent");
}
// color is absent in rectangle object

// object cloning method 

// // 1. iteration

// let src = {
//     a:10,
//     b:11,
//     c:12
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(src);
// console.log(dest);

// // 2. assign

// let src = {
//     a:10,
//     b:11,
//     c:12
// };

// let src1 = {
//     d:20,
//     e:21
// }

// let dest = Object.assign({},src);
// // Object.assign is inbuilt function in js for copy(cloning) the object

// console.log(src);
// console.log(dest);

// // we can copy one or more object into one object by assign function 

// let dest1 = Object.assign({},src,src1);
// console.log(dest1);

// // 3. spread 
 
// let src = {
//     a:10,
//     b:11,
//     c:12
// };

// let dest = {...src};

// console.log(src);
// console.log(dest);

// Garbage Collection 
// -> when any const variable not used any more then it's deallocate memory 
// -> we have no control over garbage collector when to start or stop
// -> always runs in background 
