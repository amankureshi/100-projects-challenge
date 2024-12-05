let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const millisecondsContainer = document.getElementById("milliseconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const startTimer = () => {
  clearInterval(interval);
  interval = setInterval(startWatch, 10);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  millisecondsContainer.innerHTML = "00";
  secondsContainer.innerHTML = "00";
  minutesContainer.innerHTML = "00";
  hoursContainer.innerHTML = "00";
  clearInterval(interval);
};

function startWatch() {
  milliseconds++;
  if (milliseconds < 9) {
    millisecondsContainer.innerHTML = `0${milliseconds}`;
  } else if (milliseconds > 99) {
    milliseconds = 0;
    millisecondsContainer.innerHTML = "00";
    seconds++;
  } else {
    millisecondsContainer.innerHTML = milliseconds;
  }
  if (seconds < 10) {
    secondsContainer.innerHTML = `0${seconds}`;
  } else if (seconds > 59) {
    minutes++;
    seconds = 0;
    secondsContainer.innerHTML = "00";
  } else {
    // secondsContainer.innerHTML = `0${minutes}`;
    secondsContainer.innerHTML = seconds;
  }

  if (minutes < 10) {
    minutesContainer.innerHTML = `0${minutes}`;
  } else if (minutes > 59) {
    hours++;
    minutes = 0;
    minutesContainer.innerHTML = "00";
  } else {
    minutesContainer.innerHTML = minutes;
  }
  if (hours < 10) {
    hoursContainer.innerHTML = `0${hours}`;
  } else {
    hoursContainer.innerHTML = hours;
  }
}
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
