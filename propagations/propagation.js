//* Event Probagation

window.addEventListener('click', function() {
    console.log('Window');
}, false);

document.addEventListener('click', function() {
    console.log('document');
}, false);

document.querySelector('.div2').addEventListener('click', function(e) {
    // e.stopPropagation()
    console.log('div 2');
}, {once: true});

document.querySelector('.div1').addEventListener('click', function() {
    console.log('div 1');
}, false);

document.querySelector('.button').addEventListener('click', function(e) {
    e.preventDefault()
    console.log(e.target.innerText = 'clicked!');
}, false);