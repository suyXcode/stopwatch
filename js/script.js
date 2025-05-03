let startTime, interval;
let running = false;
let elapsed = 0;

function updateDisplay() {
  const display = document.getElementById("display");
  const time = Date.now() - startTime + elapsed;
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  display.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  if (!running) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  if (running) {
    clearInterval(interval);
    elapsed += Date.now() - startTime;
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(interval);
  running = false;
  elapsed = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (!running) return;
  const lapTime = document.getElementById("display").textContent;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(li);
}
