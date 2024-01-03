let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  document.getElementById("hours").innerText = padTime(hours);
  document.getElementById("minutes").innerText = padTime(minutes);
  document.getElementById("seconds").innerText = padTime(seconds);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("hours").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
