// Select Every Count Container
let countContainer = document.querySelectorAll(".count-digit");
let timeDisplay = document.getElementById('time-display');
let timeUpDisplay = document.getElementById('time-up');

console.log(timeDisplay, timeUpDisplay)

// Select option buttons
let startAction = document.getElementById("start");

const stopAction = document.getElementById("stop-timer");
// const resetAction = document.getElementById("reset-timer");

// Default inital value of timer
let defaultValue = 0.5 * 60;

// variable to the time
var countDownTime = defaultValue;

// variable to store time interval
var timerID;

// Variable to track whether timer is running or not
var isStopped = true;

// Function calculate time string
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
      minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
      seconds = "0" + seconds;
  }
  return minutes + seconds;
};

let timeUpActive = () => {
  timeUpDisplay.classList.remove("non-active");
  timeDisplay.classList.remove("active");
  timeUpDisplay.classList.add("active");
  timeDisplay.classList.add("non-active");
}

let timeUpClear = () => {
  timeUpDisplay.classList.remove("active");
  timeDisplay.classList.remove("non-active");
  timeUpDisplay.classList.add("non-active");
  timeDisplay.classList.add("active");
}

let setDefValue = () => {
  let setTime = document.getElementById("input").value;
  defaultValue = setTime * 60;
  resetTimer();
  startTimer();
    
}

// Function to display coundown on screen
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// Function to start Countdown
const startTimer = () => {
  timeUpClear();
    if (isStopped) {
        isStopped = false;
        // timerID = setInterval(runCountDown, 500);
        timerID = setInterval(() => {
            runCountDown();
        }, 1000);
    }
};

let runCountDown = () => {
    //  decrement time
    countDownTime -= 1;
    //Display updated time
    renderTime();

    // timeout on zero
    if (countDownTime <= 0) {
        stopTimer();
        countDownTime = defaultValue;
    }
}

// Function to stop Countdown
const stopTimer = () => {
  timeUpActive();
  isStopped = true;
//   document.getElementById('time-display').innerHTML = "Time UP!";
  if (timerID) {
    clearInterval(timerID);
  }
};

// Function to reset Countdown
const resetTimer = () => {
  stopTimer();
  countDownTime = defaultValue;
  renderTime();
};

// Attach onclick event to buttons
// startAction.onclick = startTimer;
// startAction.onclick = console.log("Start");

// resetAction.onclick = resetTimer;
stopAction.onclick = stopTimer;

// Function to display coundown on screen
// const renderTime = () => {
//   const time = findTimeString();
//   countContainer.forEach((count, index) => {
//     count.innerHTML = time.charAt(index);
//   });
// };

// function to execute timer
// let runCountDown = () => {
//     console.log("run count down");
//   // decement time
//   countDownTime -= 1;
//   //Display updated time
//   renderTime();

//   // timeout on zero
//   if (countDownTime === 0) {
//     stopTimer();
//     // Play alarm on timeout
//     timeoutAudio.play();
//     countDownTime = defaultValue;
//   }
// };