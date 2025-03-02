// DOM Manipulation

//For Single Elements
const mainHeader = document.getElementById('main-header');
console.log(mainHeader);
mainHeader.textContent = 'Heading'
mainHeader.style.color = 'yellow';


//For multiple elements using a class name.

const items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].innerHTML = 'Hello';
items[0].style.background = 'yellow'


//multiple elements by tag name

const similarTagItem = document.getElementsByTagName('li');
console.log(similarTagItem);

for (let i = 0; i < similarTagItem.length; i++){
    similarTagItem[i].style.background = 'purple';
}


//first matching element 
const item = document.querySelector('.title');
console.log(item.textContent);
item.style.color = 'white';
item.style.background = 'black';


// Select input and form
const input = document.getElementById('input-bar'); 
const form = document.querySelector('.form-data');
const itemList = document.getElementById('items'); // The <ul> where new items will be added

