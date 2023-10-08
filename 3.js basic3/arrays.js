// Arrays is object or reference type in js
// Arrays is collection of items(items may be not similar in js)

// creation of array
let numbers = [4,8,9,1,7,2,3];
console.log(numbers);

// 1. insertionn element have 3 type

// I. end ma add karvo - push
numbers.push(5);
console.log(numbers);
// II. start ma add karvo - unshift
numbers.unshift(9);
console.log(numbers);
// III. middle of array - splice
numbers.splice(2,1,'a','b','c');
console.log(numbers);

// 3. Removing Element 
// I. end mathi remove karvano - pop
numbers.pop();
console.log(numbers);
// II. starting mathi remove karvano - shift
numbers.shift();
console.log(numbers);
// III. middle mathi remove karvano - splice 
numbers.splice(2,3)
console.log(numbers);

// 2. searching element in arraya

// I. searching in primitives arrays

console.log(numbers.indexOf(9)) // je pela element hoy aeni j index batavse
console.log(numbers.indexOf('a')) 
console.log(numbers.indexOf('kartvya')) // jo koi element present na hoy to -1 index batavse

// we want to check it a number exist in an array 
if(numbers.indexOf(1) != -1){
    console.log("present");
}
else{
    console.log("absent");
}
// above is not sufficient way 
console.log(numbers.includes(1));

// second parameter is used for startin index of searching - here it start searching from 2nd index
console.log(numbers.indexOf(4,2)) 

// II. seraching element in arrays with objects
let courses = [
    {
        no : 1,
        naam : 'kartvya'
    },
    {
        no : 2, 
        naam : 'kishan'
    }
];
console.log(courses);
console.log(courses.includes( {no:1, naam:'kartvya'} )) // its return false because it's reference type

// for solving this problem we use call back function or predicate function

let course = courses.find(function(i){
    return i.naam === 'kartvya';
})
console.log(course)

// arrow function - aema jo aek j parameter hoy to brack na lakhiae to chale otherwise lakhvu j pade
// aane biji rite arrow function vade pan kari sakay
let course1 = courses.find(course => course.naam==="kishan");
console.log(course1)

// 4. convert array to empty array

let arr = [1,2,3,4,5];
let arr1 = arr;

// // I. first rit
// arr = []; // aanathi pan array empty thai jay pan ae sufficient way nathi karan k aena referal valo array empty na thay

// // II. second rit
// arr.length = 0; // aa sufficient way chhe karan k aema referal valo array pan empty thai jay chhe

// // III. third rit
// arr.splice(0,arr.length) // aa pan sufficient way j chhe

// IV. fourth rit // aa pan best practise nathi
while(arr.length!=0){
    arr.pop();
}

// // II and III ae best practice chhe and II to best preferable chhe

console.log(arr)
console.log(arr1)


// 5. combining the arrays - concat method

let first = [1,2,3,4]
let second = ["a","kartvya",4,true,6]
let third = ["kishan",8,9]

let combined1 = first.concat(second);
console.log(combined1);

let combined2 = second.concat(first,third) // we can also combine one or more array
console.log(combined2)

// 6. slice array (one type of subaaray)

let a = ['a','b','c','d','e','f']
let slice1 = a.slice(2,5) // it takes elements of array from 2 to 4 beacause it take lastindex-1
console.log(slice1)
let slice2 = a.slice(1) // it takes elements from 2 to ending index of array 
console.log(slice2) 
let slice3 = a.slice() // empty slice method create a copy of array
console.log(slice3)
console.log(a)


// 7. spread operator(...) - use for combining, make copy etc.
// I. for combining
let fourth = [1,2,3]
let fifth = [4,5,6]
let combine = [...fourth,'a',false,...fifth,'b']
console.log(combine)
// II. for making copy
let another = [...combine]
console.log(another)


// // 8. iterating an array
let arr2 = [1,2,3,4,5]
// // I. for-of loop
// for(let i of arr2){
//     console.log(i)
// }
// // II. for-each loop
// arr2.forEach(function(n){
//     console.log(n)
// })
// for each loop as arrow function
arr2.forEach(n => console.log(n))

// 9. joining array into string
let arr3 = [10,20,30,40,50]
const joined = arr3.join(', ')
// join method andar je lakhiae ae basis par array seprate thay chhe 
console.log(joined)
console.log(typeof(joined))

// 10.split string into array
let message = `this is my first message`;
let parts = message.split(' ');
console.log(parts)
console.log(typeof(parts))
// now we create string
let joined1 = parts.join('_');
console.log(joined1)
console.log(typeof(joined1))

// 11. sorting arrays

// sorting arrays on 
let numbers2 = [400,30,1000,50,20];
for(let i in numbers2){
    i = parseInt(i)
}
numbers2.sort() // by default ae arrays ne string ma laine pachhi sort kare chhe 
// sort method take array element as string and then default convert in ascending order
console.log(numbers2)
numbers2.reverse()
console.log(numbers2)
// here is problem to sort the array because it take element as string and string is not propely sort in ascending array

let months = ['feb','aug','jan','dec','march']
months.sort()
console.log(months)


// 12. filtering arrays
let number3= [-1,3,0,-4,7,-2,5]
let positive = number3.filter(function(value){
    return value >= 0;
});
console.log(positive)
// using arrow function
let negative = number3.filter(value => value < 0 )
console.log(negative)


// 13. mapping arrays - maps each element of array to somethig else
let numbers4 = [6,7,8,9]
// let items4 = numbers4.map(function(value){
//     return 'student_no ' + value;
// })
let items4 = numbers4.map(value => 'student_no ' + value)
console.log(items4)

// 14. mapping Object
let numbers5 = [1,-2,3,-4,5]
let filtered = numbers5.filter(value => value >= 0)
let items = filtered.map(function(num){
    return {value:num}; // return object literal {}
})
console.log(items)

// homework - try to do combine and slice method on object array
// homework - sorting array
