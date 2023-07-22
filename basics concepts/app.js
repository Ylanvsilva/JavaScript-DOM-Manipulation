// //* getElementById()
// const title = document.getElementById('main-heading');

// console.log(title);

// //* getElementsByClassName()
// const listItems = document.getElementsByClassName('list-items')

// console.log(listItems);

// //* getElementsByTagName()
// const listItem = document.getElementsByTagName('li');

// console.log(listItem);

// //* querySelector()
// const container = document.querySelector('div');

// console.log(container);

// //* querySelectorAll()
// const containers = document.querySelectorAll('div');

// console.log(containers)

//* DOM Manipulation
//* Style Elements
// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items')

// for(i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';
// }

//* Creating Elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //* Adding Elements

// ul.append(li)

// //* Modifying the text

// li.innerText = 'X-men';

// //* Modifying Attributes & Classes

// li.classList.add('list-items')

// console.log(li.classList.contains('list-items'))

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'))

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

//* Remove Elements

// li.remove()

//* Parent Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

//* Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//* Sibling Node Traversal

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');

// console.log(div.childNodes)

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);