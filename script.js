


const countdownEl = document.getElementById('countdown');
const inputFields = document.getElementById('inputFields');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const newTimerButton = document.getElementById('newTimerButton');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

let startingHours = 0
let startingMinutes = 0
let startingSeconds = 45

let time = (startingHours * 60 * 60)+(startingMinutes*60) + startingSeconds;

function updateCountdown(){
    hoursInput.value = ""
    minutesInput.value = ""
    secondsInput.value = ""
    
    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time % 3600 / 60);
    let seconds = time % (3600 / 60);

    hours = hours < 10 ?  '0'+hours : hours
    minutes = minutes < 10 ?  '0'+minutes : minutes
    seconds = seconds < 10 ?  '0'+seconds : seconds

    countdownEl.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    time === 0 ? alertOnTimeUp() : time --;
}
updateCountdown()

let myInterval

startButton.addEventListener("click", ()=>{
    console.log("Hello start")
    if (inputFields.style.display != "none" && (hoursInput.value === "" && minutesInput.value === "" && secondsInput.value === "")){
        alert("Please enter values!")
    }
    else if (inputFields.style.display != "none"){
        startButton.style.display = "none"
        pauseButton.style.display = "inline-block"
        inputFields.style.display = "none"
        countdownEl.style.display = "block"
        time = (Number(hoursInput.value) * 60 * 60)
        +(Number(minutesInput.value)*60) 
        + Number(secondsInput.value);
        updateCountdown()        
        myInterval = setInterval(updateCountdown, 1000);
    }
    else {
        startButton.style.display = "none"
        pauseButton.style.display = "inline-block"
        clearInterval(myInterval)
        updateCountdown()        
        myInterval = setInterval(updateCountdown, 1000);
    }
})

pauseButton.addEventListener("click", ()=>{
    clearInterval(myInterval)
    pauseButton.style.display = "none"
    startButton.style.display = "inline-block"
    startButton.innerText = "Continue"
})

resetButton.addEventListener("click", ()=>{
    pauseButton.style.display = "none"
    startButton.style.display = "inline-block"
    startButton.innerText = "Start"
    time = 0
    updateCountdown()
})

newTimerButton.addEventListener("click", ()=>{
    console.log("new timer")
    inputFields.style.display = "block"
    countdownEl.style.display = "none"
    pauseButton.style.display = "none"
    startButton.style.display = "inline-block"
})

function alertOnTimeUp(){ 
    // window.alert("Time is up!")
    clearInterval(myInterval)
}