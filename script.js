var display = document.querySelector(".calc-display-content")
var numberKeys = document.querySelectorAll(".calc-number")


function displayValue(value) {
    display.textContent = value;
}

function displayAppendValue(value) {
    if (display.textContent == 0) {
        display.textContent = "";
    }

    if (display.textContent.length < 9) {
        display.textContent += value;
    }
}

function clickNumber(number) {
    displayAppendValue(number);
}

function start() {
    numberKeys.forEach(key => {
        key.addEventListener("click", function () {
            clickNumber(key.textContent)
        })
    });
    
    document.querySelector(".calc-clear").addEventListener("click", function () {
        reset();
    });
     
    reset();
}

function reset() {
    displayValue("0");
}

start();