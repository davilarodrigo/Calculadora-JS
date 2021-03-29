var display = document.querySelector(".calc-display-content")
var numberKeys = document.querySelectorAll(".calc-number")
var operatorKeys = document.querySelectorAll(".calc-operator")

var previousValue = 0
var currentOperation = ""

var resetDiplayNextTime = false

var displayCotainsDot = false;

function displayValue(value) {
    display.textContent = value;
}

function getDisplayValue() {
    return display.textContent-0;
}

function displayAppendValue(value) {

    if (resetDiplayNextTime) {
        resetDisplay()
        resetDiplayNextTime=false;
    }

    //console.info(getDisplayValue())
    if (getDisplayValue() == "0" && value != ".") {
        display.textContent = "";
        displayCotainsDot = false;
    }

    if (value == ".") {
        if (displayCotainsDot) {
            return;
        }
        displayCotainsDot = true;
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

    operatorKeys.forEach(key => {
        key.addEventListener("click", function () {
            performOperation(key.textContent)
        });

    })

    document.querySelector(".calc-clear").addEventListener("click", function () {
        resetCalc();
    });

    resetDisplay();
}

function performOperation(operation) {
    console.info("previousValue: "+getDisplayValue())    
    resetDiplayNextTime=true;
    
    if (currentOperation == "=") {
        
    }
    
    if (currentOperation == "+") {        
        displayValue(previousValue + getDisplayValue())
    }
    
    if (currentOperation == "-") {
        displayValue(previousValue - getDisplayValue())
        
        
    }
    if (currentOperation == "x") {
        displayValue(previousValue * getDisplayValue())
        
        
    }
    if (currentOperation == "/") {
        if(getDisplayValue()==0){
            resetCalc()
            displayValue("#¡DIV/0!")
        }else{
            displayValue(previousValue / getDisplayValue())
        }
    }
    
    previousValue = getDisplayValue() - 0
    currentOperation = operation;

}
function getResult() { }

function resetCalc() {
    resetDisplay()
    currentOperation = ""
    previousValue = 0
    currentValue = 0
}

function resetDisplay() {
    displayValue("0");
    displayCotainsDot = false;
}

start();