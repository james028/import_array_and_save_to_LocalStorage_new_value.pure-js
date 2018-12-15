import arr from "./arr";

const form = document.getElementById("form");
const ul = document.getElementById("ul");
const button = document.getElementById("button");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const showArray = e => {
  e.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item.title;
    ul.appendChild(li);
  });

  data.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item.title;
    document.getElementById("ul").appendChild(li);
  });
};

showArray(arr);

form.addEventListener("submit", e => {
  e.preventDefault();

  itemsArray.push({
    title: e.target.elements.val.value
  });
  localStorage.setItem("items", JSON.stringify(itemsArray));
  e.target.elements.val.value = "";
});

button.addEventListener("click", function() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
