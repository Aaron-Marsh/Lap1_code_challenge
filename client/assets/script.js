const form = document.querySelector('form')
let searchresult = document.getElementById('searchresult')

const input = document.querySelector('input[type="search"]');
const googlesearch = document.getElementById('buttonS');

input.addEventListener('search', (e) => {
//  console.log("The term searched for was " + input.value);
    
    e.preventDefault()

    fetch(`http://localhost:3000/${input.value}`)
        .then(resp => resp.text())
        .then(dog => {
        searchresult.textContent = dog;
    })
})

googlesearch.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('button pressed')
})
