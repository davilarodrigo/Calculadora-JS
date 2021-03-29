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
    return display.textContent - 0;
}

function displayAppendValue(value) {

    if (resetDiplayNextTime) {
        resetDisplay()
        resetDiplayNextTime = false;
    }

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
    var operationResult;
    resetDiplayNextTime=true;

    if (currentOperation == "+") {        
        operationResult=previousValue + getDisplayValue()
    }
    
    if (currentOperation == "-") {
        operationResult=previousValue - getDisplayValue()              
    }
    if (currentOperation == "x") {
        operationResult=previousValue * getDisplayValue()
    }    
    if (currentOperation == "/") {
        if(getDisplayValue()==0){
            resetCalc()
            displayValue("#¡DIV/0!")
        }else{
            operationResult=previousValue / getDisplayValue()
        }
    }

    if(currentOperation==""){
        console.info("first operation")
        operationResult=getDisplayValue();
    }
        
    previousValue=operationResult
    currentOperation = operation;

    console.info("operationResult: "+operationResult)
    if (operation == "=") {
        currentOperation=""
        displayValue(operationResult);
        
    }else{        
        displayValue(operation)
    }
    

}

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