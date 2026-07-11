let clockElement = document.getElementById("clock");
let countdownElement = document.getElementById("countdown");

let targetDate = new Date("2027-01-01T00:00:00");

function UpdateClock(){
    let now = new Date();
    let hours = now.getHours().toString().padStart(2,"0");
    let minutes = now.getMinutes().toString().padStart(2,"0");
    let seconds = now.getSeconds().toString().padStart(2,"0");

    let timeString = hours + ":" + minutes + ":" + seconds;

    console.log(timeString);
    clockElement.textContent =timeString;
}


function updateCountdown(){
    let now = new Date();
    let difference = targetDate - now;

    let totalSeconds = Math.floor(difference / 1000);

    let days = Math.floor(totalSeconds / (60 * 60 * 24));
    let hours = Math.floor(totalSeconds / (60 * 60)) % 24;
    let minutes = Math.floor(totalSeconds / 60 ) % 60;
    let seconds = totalSeconds % 60 ;

    let countdownString = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

    countdownElement.textContent = countdownString;
}

UpdateClock();
setInterval(UpdateClock, 1000);

updateCountdown();
setInterval(updateCountdown,1000);

