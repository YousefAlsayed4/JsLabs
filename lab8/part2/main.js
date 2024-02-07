const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const daysElements = Array.from(document.querySelectorAll(".day"));
const hoursInput = document.querySelector(".hoursIn");
const minutesInput = document.querySelector(".minutesIn");
const secondsInput = document.querySelector(".secondsIn");
const setButton = document.querySelector(".setBtn");
const clearButton = document.querySelector(".clearBtn");
daysElements.unshift(daysElements.pop());

setButton.addEventListener('click', function () {
    setAlarm();
});

clearButton.addEventListener('click', function () {
    clearAlarm();
});

function setAlarm() {
    const alarmTime = calculateMilliseconds();
    const currentTime = Date.now();
    const timeUntilAlarm = alarmTime - currentTime;

    if (timeUntilAlarm > 0) {
        setTimeout(() => {
            alert("Get Up!!");
        }, timeUntilAlarm);
    } else {
        alert("Invalid time. Please enter a future time.");
    }
}

function calculateMilliseconds() {
    return hoursInput.value * 60 * 60 * 1000 + minutesInput.value * 60 * 1000 + secondsInput.value * 1000;
}

function clearAlarm() {
    // Clear any existing timeouts
    const existingTimeouts = setTimeout(() => {});
    for (let i = 0; i < existingTimeouts; i++) {
        clearTimeout(existingTimeouts[i]);
    }

    // Clear input fields
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";

    alert("Alarm cleared.");
}

setInterval(updateTime, 1000);
function updateTime() {
    const date = new Date();
    hoursElement.textContent = date.getHours().toString().padStart(2, '0');
    minutesElement.textContent = date.getMinutes().toString().padStart(2, '0');
    secondsElement.textContent = date.getSeconds().toString().padStart(2, '0');
    for (let i = 0; i < daysElements.length; i++) {
        daysElements[i].classList.remove("infocus");
        if ((new Date()).getDay() == i) {
            daysElements[i].classList.add("infocus");
        }
    }
}
