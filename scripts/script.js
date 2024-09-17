// Selecting Elements by ID
// 1. cache element in a variable
// 2. select document then get element by id method
// 3. in quotes write the id your are searching for
let firstName = document.getElementById(`name`);

//Changed the TEXT node inside of the heading element
firstName.innerText = 'Michelle';
// console.log(firstName)

// Selecting elements by name - selects ALL elements with matchin name attribute. returs nodeList
// 1. cache element into a variable
// 2. select document then use method
// 3. in quotes write name you are looking for
let listItems = document.getElementsByName(`li`);
listItems[1].innerText = 'More horses'; //html collection - can live update as the webpage changes
// console.log(listItems[1])

// Selecting elements by css selector -selects by ANY css selector and only selects FIRST matching item
// 1. cache element into a cariable
// 2. select document and thne use method
// 3. in quotes write the css selector you are looking for
let newItems = document.querySelectorAll('.listItems');
newItems[0].innerText = 'All of them Horsies';

// newItems.forEach(el => el.innerText = 'All them Horsies')
// console.log(newItems) //nodelist once it is collected can never change

// We can navigate from one node to another in JS using the parent/child relationship - using dot notation
// .parentNode
// .childNodes
// .nextElementSiblings

let list = document.getElementsByTagName(`ul`);
// console.log(list[0])  //list witll consolelog a html collection (array like object) with all instances of ul in our document

// Creating new elements for the DOM - createElement()
// 1. create variable to cache new element into
// 2. call upon the document object
// 3. use createElement
// 4. in parenthases and in quotes specify what element I want to create
let newLi = document.createElement('li');

newLi.innerText = `Ponies`; // Add inner text to li/element node

// Adding elements to the DOM - .appendChild()
// 1. get element you wish to add new node to from the DOM
// 2. state element we are adding new element to, then dot notation then add method
// 3. add new item as argument to appendChild mehtod
list[0].appendChild(newLi); // ** a node can only exist in one place at a time
// list[0].prepend(newLi)
// list[0].insertBefore(newLi, list[0].childNodes[2]) // WIll conflict with other prepend of same node.

// Removing elements from DOM
    // 0. ***** if saving removed element create variable to cache removed element in
    // 1. list parent elememt to remove node from.
    // 2. dot notation
    // 3. removeChild() method
    // 4. in parens state what child is to be removed

    let removed = list[0].removeChild(list[0].firstElementChild)

console.log(removed)

// You can nest/chain appendchild/createElement together to created nested structures
let app = document.getElementsByTagName('body');
// app[0]
//   .appendChild(document.createElement('div'))
//   .appendChild(document.createElement('ul'))
//   .appendChild(document.createElement('li')).textContent = 'Nested structures!';


let newRemoved = app[0].removeChild(list[0])

// console.log(newRemoved)


let container = document.getElementById('container')

container.innerHTML = '<h1>Dylan is the GOAT</h1>' // InnerHTML adds html to a parent element using a string