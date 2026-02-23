const colorBox = document.querySelector("#colorBox");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");


// Generate a random color
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


// start and stop
let intervalID;

const startChnagingColor = function(){
    
    function changeBgColor(){
        colorBox.style.backgroundColor = randomColor();
    }

    intervalID = setInterval(changeBgColor, 500);
};

const stopChnagingColor = function() {
    clearInterval(intervalID);
    colorBox.style.backgroundColor = "rgb(173, 168, 168)";
};

startBtn.addEventListener("click", startChnagingColor);

stopBtn.addEventListener("click", stopChnagingColor);