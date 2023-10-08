
// // 1. Math in-built mehtod
// console.log(Math.random());
// console.log(Math.round(2.49))
// console.log(Math.round(2.50))
// console.log(Math.round(Math.random()*100))
// console.log(Math.max(2,6,4,3))
// console.log(Math.min(2,6,4,3))
// console.log(Math.abs(-10))
// // math property
// console.log(Math.PI);
// console.log(Math.SQRT1_2)
// console.log(Math.SQRT2)


// string object 
// IN javascript there are two types of string : 
// 1. this is string object created by new keyword and String constructor
let firstName = new String("Kartvya")
console.log(typeof(firstName))
// 2. this is string pimitive type 
let lastName = "darji"
console.log(typeof(lastName))
// jyare aapne sadi string ne .(dot) notation use kariae to javascript aene as a object treat karva mande chhe.
console.log(lastName.length)

// method or property of string object
console.log(firstName.length);
console.log(firstName[0])
console.log(firstName.includes('rtvy'))
console.log(firstName.startsWith('kar'))
console.log(firstName.endsWith('vya'))
console.log(firstName.indexOf('v'))
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.replace('Kartv','ki'))

let a = "  hello  ";
console.log(a.trim());

let message = "this is my first message";
let words = message.split(' ')
console.log(words)

// escape sequence = jyare forward(\) slash vade koi character k new line print karaviae aene 
// example - \n(for new line), \'(add '), \"(add "), \\(add only one \) etc
let message1 = "this is \n my \"second\" \n  message";
console.log(message1)

// above is not very sufficient method so we use template literals
// template literals  also called backticks(`) : aema jevu lakhiae aevu j same print thase  
// back ticks ma tame koi pan variable pan call karavi sako using ${variable_name} - one type of placeholder
let message2 = 
` Hello HR

 Thanks for Opportunity
 
 Regards,
 ${firstName}`;
console.log(message2);


// Date object

let date1 = new Date()
console.log(date1)

let date2 = new Date('august 22 1980 07:30')
console.log(date2)

// set method of date
let date3 = new Date(2003, 5, 16, 8)
console.log(date3)
date3.setFullYear(1947)
console.log(date3)
date3.setMonth(11)
console.log(date3)
date3.setDate(28)
console.log(date3)

// get method of date
let year = date1.getFullYear();
console.log(year)
let month = date1.getMonth();
console.log(month)


