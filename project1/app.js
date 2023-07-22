//* Variaveis

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, officia?"`,
    person: `Mago`
},
{
    quote: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nobis!"`,
    person: `Ylan`
},
{
    quote: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, odit."`,
    person: `Vinicio`
},]

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

