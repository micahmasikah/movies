const form = document.getElementById('form');
form.addEventListener('submit', (evnt) => {
    evnt.preventDefault();
    const firstname = document.getElementById('firstname').value.toUpperCase();
    const lastname = document.getElementById('lastname').value.toUpperCase();
    const email = document.getElementById('email').value.toUpperCase();
    const age = document.getElementById('age').value;

    console.table({ firstname, lastname, email, age });
});