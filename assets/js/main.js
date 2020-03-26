const clock = document.querySelector(".clock");
const darkMode = document.querySelector(".darkMode");

let seconds = 0;
let timer;

function initClock() {
  timer = setInterval(function() {
    seconds++;
    clock.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

function getTimeFromSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC"
  });
}

document.addEventListener("click", function(event) {
  const element = event.target;

  if (element.classList.contains("start")) {
    clock.classList.remove('stopped-button')    
    clearInterval(timer);
    initClock();
  }
  if (element.classList.contains("stop")) {
    clock.classList.add('stopped-button')    
    clearInterval(timer);
  }
  if (element.classList.contains("restart")) {
    clock.classList.remove('stopped-button')    
    clearInterval(timer);
    clock.innerHTML = "00:00:00";
    seconds = 0;
  }
});

darkMode.addEventListener("click", function(event) {
  const bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode");
});