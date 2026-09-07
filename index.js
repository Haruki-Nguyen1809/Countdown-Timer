let totalSeconds;
let timerID;
const generateEl = document.getElementById('generate');
const secondEl = document.getElementById('second');
const timerEl = document.getElementById('timer');
const messageEl = document.getElementById('message');

generateEl.addEventListener('click', function() {
    let inputValue = secondEl.value;
    secondEl.value = "";
    totalSeconds = Number(inputValue);
    if (isNaN(totalSeconds) || inputValue === "") { // Number("") = 0 => totalSeconds cannot be used here, instead we can use inputValue (typeof = string)
        return alert('Please type in correct number!')
    }
    timerID = setInterval(countdown, 1000);
})


function countdown() {
    totalSeconds--;
    let minute = Math.floor(totalSeconds / 60);
    let second = Math.floor(totalSeconds % 60);
    if (second < 10) {
        timerEl.textContent = `${minute}:0${second}`;
    } else {
        timerEl.textContent = `${minute}:${second}`;
    }
    countdownFinished();
}


function countdownFinished() {
    if (totalSeconds === 0) {
        clearInterval(timerID);
        messageEl.textContent = 'Hết giờ rồi!' 
    }
}