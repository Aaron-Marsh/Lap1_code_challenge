const form = document.querySelector("form");
let searchresult = document.getElementById("searchresult");
let logocontainer = document.getElementsByClassName("logocontainer");

const input = document.querySelector('input[type="search"]');
const googlesearch = document.getElementById("buttonS");
const feelinglucky = document.getElementById("buttonL");

function noResult() {
  searchresult.textContent = "Not a result. Try searching for dogs";
}
console.log("hello test");

googlesearch.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "dogs" || "pasta") {
    fetch(`http://localhost:3000/${input.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        // changeSite();
        appendData(data);
      });
  } else {
    noResult();
  }
});

feelinglucky.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "dogs" || "pasta") {
    fetch(`http://localhost:3000/${input.value}/random`)
      .then((resp) => resp.json())
      .then((data) => {
        let list = document.getElementById("listItems");
        let div = document.createElement("div");
        div.setAttribute("id", "listOfSearch");
        let br = document.createElement("br");
        let a = document.createElement("a");
        a.setAttribute("id", "ancor");
        div.textContent = `Search Result: ${data.name}`;
        a.textContent = `${data.website}`;
        a.href = `${data.website}`;
        list.appendChild(div);
        div.appendChild(br);
        div.appendChild(a);
        form.style.display = "none";
      });
  } else {
    noResult();
  }
});

function changeSite() {
  location.href = "./search.html";
}
function noResult() {
  searchresult.textContent = "Not a result. Try searching for dogs";
}
function appendData(data) {
  let list = document.getElementById("listItems");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "listOfSearch");
    let br = document.createElement("br");
    let a = document.createElement("a");
    a.setAttribute("id", "ancor");
    div.textContent = `Search Result ${i + 1}: ${data[i].name}`;
    a.textContent = `${data[i].website}`;
    a.href = `${data[i].website}`;
    list.appendChild(div);
    div.appendChild(br);
    div.appendChild(a);
    form.style.display = "none";
  }
}

// module.exports = "dogInfo";
// let dogInfo = searchresult.textContent;
//         dogInfo = dog;
//         changeSite();
//         return dogInfo;
