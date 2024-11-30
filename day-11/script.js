const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
console.log(listContainer);

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});
function addTask() {
  if (inputBox.value == "") {
    alert("You most write something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    let span = document.createElement("span");
    span.innerHTML = "<i class='fa-solid fa-trash'> </i>";
    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toUpperCase() === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName.toUpperCase() === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
