/*const form = document.getElementById('form');
form.addEventListener('submit', (evnt) => {
    evnt.preventDefault();
    const firstname = document.getElementById('firstname').value.toUpperCase();
    const lastname = document.getElementById('lastname').value.toUpperCase();
    const email = document.getElementById('email').value.toUpperCase();
    const age = document.getElementById('age').value;

    console.table({ firstname, lastname, email, age });
});*/
// Variables, types of variables, loops, conditions, collections, objects, functions

// let, const

function isEven(num) {
    if (num === 0) {
        return true;
    }
    return (num % 2) === 0;
}

console.log(`0 is even = `, isEven(0));
console.log(`3 is even = `, isEven(3));
console.log(`-4 is even = `, isEven(-4));
console.log(`18 is even = `, isEven(18));
console.log(`10145570 is even = `, isEven(10145570));