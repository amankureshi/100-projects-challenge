const btn = document.getElementById("btn");
const container = document.getElementById("container");
const btnSuccess = document.getElementById("btn-success");
const btnWarning = document.getElementById("btn-warning");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-triangle-exclamation");
  notif.appendChild(icon);
  notif.innerHTML += " This is an Error message !";
  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

btnSuccess.addEventListener("click", () => {
  successNoti();
});

function successNoti() {
  const notif = document.createElement("div");
  notif.classList.add("succuess");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-check");
  notif.appendChild(icon);
  notif.innerHTML += " This is a success message!";
  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

btnWarning.addEventListener("click", () => {
  warningNoti();
});

function warningNoti() {
  const notif = document.createElement("div");
  notif.classList.add("warning");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-ban");
  notif.appendChild(icon);
  notif.innerHTML += "This is  warning message!";
  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
