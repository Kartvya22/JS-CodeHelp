// * Window - top level entity or object
// window is global objected created by browser . it's represent a browser window
// DOM, BOM and JS core includes in window


// * BOM - BROWSER OBJECT MODEL
// it allows js to cummunicate with browser about matters rather than content
// code(content) no upyog karya vagar browser sathe communicate karva mate vapray chhe
// process of dom converting character(like in html h is charachater) to dom
// character -> tags -> token(tokenizer handale karta he) -> nodes -> DOM


// ** DOM - DOCUMENT OBJECT MODEL
// it converts whole html code into js object and this js object called document
console.log(document)
console.log(document.body)

// I. getElementById :
// it is called on ducument object & it returns a single object bacause id is unique

// II. getElementsByClassName :
// it is called on ducument object & it returns one or more array-like object (html collection)

// III. getElementsByTagName :
// it is called on ducument object

// IV. getElementsByName :

// V. $0 is important in console

// VI. querySelector :
// it returns single object in output
// #idName is use for selecting element by id name
// tagName is use for selecting element by tag name
// .className is use for selecting element by class name
// if it have more than one element than it return first element of all selected element

// VII. querySelectorAll :
// it returns multiple object in output
// work as querySelector but it returns all the selected element

// * Upadating existing content

// I. innerHTML
// let a = document.getElementsByClassName('first')[0]
// // or
let a = document.querySelector('.first');
// A. get the inner html content
console.log(a);
console.log(a.innerHTML); // jetli pan andar html content hase te dekahy 
// B. set the inner html content
a.innerHTML = '<h5>h5 heading</h5>';
console.log(a.innerHTML); // updated html content

// II. outerHTML
// homework karvu

// III. textContent & 
// IV. innerText
// both are use for get and set textual content
// textContent ae badha content ne display kare chhe including hiding element and 
// innerText ae badha content ne dispalay kare chhe excluding hiding element
console.log(a.textContent) // only returns textual content and also if there are any hiding content
console.log(a.innerText) // it also rerurns only textual content but not displaying hiding content


// // * Adding new element/content
// let b = document.getElementById('head');
// let newPara = document.createElement('p');
// // .createElement vade navo element bane chhe
// console.log(newPara);
// b.appendChild(newPara); // ae b ma navo element add kar dese
// // .appendChild thi selected element na last ma navo element add thay chhe
// console.log(b)

// * adding text node at the last of selected element

// // I. bevkoof tarika
// let b = document.getElementById('head');
// let elePara = document.createElement('p');
// let textPara = document.createTextNode('I am the text')
// elePara.appendChild(textPara);
// b.appendChild(elePara);
// console.log(b);


// // II. easy and quick tarika
// let c = document.getElementById('head');
// let elePara = document.createElement('p');
// elePara.textContent = 'I am the text';
// c.appendChild(elePara);
// console.log(c);

// in this there is drawback because new element is add at last of element

// * adding html content at any location of selected element
// .insertAdjacentHTML(location/position,html content) it has to be called with 2 parameter or arguments
// there are four position : beforeBegin , afterBegin , beforeEnd, afterEnd

// * remove content

// I. parent.removeChild(child_node)
// drawback - parent khabar hovu bu jaruri chhe

// // II. pela j .parentElement method vaprine parent sodhi levano
// let c = document.getElementById('head');
// let d = c.parentElement;
// d.removeChild(c)
// console.log(d)

// * styling page or content using js

// I. only style method
// drawback - at a time we can modifies only one property
let c = document.getElementById('head');
c.style.color = 'red';
c.style.backgroundColor = 'grey';

// II. cssText method
let e = document.querySelector('.main');
console.log(e)
e.style.cssText = 'color:green; background-color:yellow; font-size:30px;';

// III. setAttribute method
e.setAttribute('style','color:yellow; background-color:black;');
// it also use for multiple work like assign id
e.setAttribute("id","kishu");
console.log(e)

// * classList
// it returns an array of classes or object of classes
let f = document.querySelector('.second')
console.log(f.classList)
// I. remove
f.classList.remove('third')
console.log(f.classList)
// II. add
f.classList.add('sixth')
console.log(f.classList)
// III. toggle
// toggle method ae jo class already hoy to remove kare and na hoy to add kare
f.classList.toggle('seven');
console.log(f.classList)
f.classList.toggle('fourth');
console.log(f.classList)
// IV.contains 
// it returns true or false based on class is present of not respectively
console.log(f.classList.contains('sixth'));
console.log(f.classList.contains('hundraded'));


