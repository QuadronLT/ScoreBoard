let count1 = 0;
let count2 = 0;

let scoreEl1 = document.querySelector(".score1");
let scoreEl2 = document.querySelector(".score2");

function score1a() {
  count1 += 1;
  scoreEl1.textContent = count1;
}
function score1b() {
  count1 += 2;
  scoreEl1.textContent = count1;
}
function score1c() {
  count1 += 3;
  scoreEl1.textContent = count1;
}
function score1d() {
  count1 -= 1;
  scoreEl1.textContent = count1;
}
function score1e() {
  count1 -= 2;
  scoreEl1.textContent = count1;
}
function score1f() {
  count1 -= 3;
  scoreEl1.textContent = count1;
}

function score2a() {
  count2 += 1;
  scoreEl2.textContent = count2;
}
function score2b() {
  count2 += 2;
  scoreEl2.textContent = count2;
}
function score2c() {
  count2 += 3;
  scoreEl2.textContent = count2;
}
function score2d() {
  count2 -= 1;
  scoreEl2.textContent = count2;
}
function score2e() {
  count2 -= 2;
  scoreEl2.textContent = count2;
}
function score2f() {
  count2 -= 3;
  scoreEl2.textContent = count2;
}

function reset1() {
  count1 = 0;
  count2 = 0;
  scoreEl1.textContent = "00";
  scoreEl2.textContent = "00";
}



// Global variables

const timeEl = document.querySelector(".timer");
const startBtn = document.getElementById("startTimer");
const stopBtn = document.getElementById("pauseTimer");
const resetBtn = document.getElementById("resetTimer");

let seconds = 600;
let interval = null;

// Event listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset2);
// Update the timer

function timer () {
  seconds--;

  // Format our time
  
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;

  timeEl.textContent = `${mins}:${secs}`;
}

function start () {
  if (interval) {
    return
  }
  interval = setInterval(timer, 1000);
}

function stop () {
  clearInterval(interval);
  interval = null;
}

function reset2() {
  stop();
  seconds = 600;
  timeEl.textContent = "10:00";
}


