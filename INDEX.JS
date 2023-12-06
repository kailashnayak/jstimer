let stopwatch;
let isRunning = false;
let seconds = 0;

document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('pauseBtn').addEventListener('click', pauseStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatch = setInterval(updateDisplay, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let displayString = '';

  if (hours > 0) {
    displayString += padWithZero(hours) + ':';
  }

  if (minutes > 0 || hours > 0) {
    displayString += padWithZero(minutes) + ':';
  }

  displayString += padWithZero(remainingSeconds);

  document.getElementById('display').innerText = displayString;
  seconds++;
}

function padWithZero(number) {
  return number < 10 ? '0' + number : number;
}
