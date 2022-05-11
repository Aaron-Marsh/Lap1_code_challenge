const form = document.querySelector('form');
let searchresult = document.getElementById('searchresult');
let logocontainer = document.getElementsByClassName('logocontainer');

const input = document.querySelector('input[type="search"]');
const googlesearch = document.getElementById('buttonS');
const feelinglucky = document.getElementById('buttonL')

function noResult() {
    searchresult.textContent = 'Not a result. Try searching for dogs';
}
console.log('hello test')

googlesearch.addEventListener('click', (e) => {
    e.preventDefault()
  
    

    if (input.value === 'dogs' || 'pasta') {
        form.style.display = "none";
        // logocontainer.setAttribute("style", "display: none;");
        fetch(`http://localhost:3000/${input.value}`)
        .then(resp => resp.text())
        .then(dog => {
            searchresult.textContent = dog;
        })
    } 
    else {
        noResult();
    }

})

feelinglucky.addEventListener('click', (e) => {
    e.preventDefault()
    
    
    if (input.value === 'dogs' || 'pasta') {
    fetch(`http://localhost:3000/${input.value}/random`)
        .then(resp => resp.text())
        .then(dog => {
        searchresult.textContent = dog;
        })
    } 
    else {
        noResult();
    }

})
