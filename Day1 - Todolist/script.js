const formSubmit = document.getElementById("form");
const input = document.getElementById("input");
const postTask = document.getElementById("getLists");
const postedTask = document.getElementById("postedTask");
const message = document.getElementById("message");
const pendingDiv = document.querySelector(".pendingDiv");

formSubmit.addEventListener("submit", submitTask);

console.log("App Started");

function submitTask(e) {
  e.preventDefault();

  const inputValue = input.value;
  taskArray.push(inputValue);

  postTask.innerHTML += `<div class="lists">
                            <p>${inputValue}</p>
                            <button class="trash" type="menu">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div> `;

  console.log(taskArray);

  if (taskArray.length > 0) {
    message.innerHTML = `You have ${taskArray.length} pending tasks`;
    pendingDiv.style.display = "flex";
  }
  console.log(deleteTasks);

  console.log(postTask);
}

// const taskArray = [];

const taskArray = [];

const removeTask = () => {
  for (let i = 0; i < taskArray.length; i++) {
    deleteTasks[i].addEventListener("click", (i) => {
      console.log(i);
    });
  }
};

const lists = document.querySelectorAll(".lists");
const deleteTasks = document.getElementsByClassName("trash");

deleteTasks.forEach((i) => {
  i.addEventListener("click", () => {
    console.log("click");
  });
});
// for (let i = 0; i < deleteTasks.length; i++) {
//   deleteTasks[i].addEventListener("click", () => {
//     console.log("delete task");
//   });
// }
