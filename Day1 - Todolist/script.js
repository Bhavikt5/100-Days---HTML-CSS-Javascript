const input = document.getElementById("input");
const form = document.getElementById("form");
const content = document.getElementById("content");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  if (input.value === "") {
    alert("Enter ToDo!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("lists");
    content.appendChild(li);
    let trash = document.createElement("button");
    const trashClass = ["trash", "fa-solid", "fa-trash"];
    trash.classList.add(...trashClass);
    li.appendChild(trash);

    saveData();

    input.value = "";
  }
}

content.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentNode.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", content.innerHTML);
}

function showData() {
  content.innerHTML = localStorage.getItem("data");
}

showData();
