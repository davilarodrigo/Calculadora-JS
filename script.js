var display = document.querySelector(".calc-display-content")
var numberKeys = document.querySelectorAll(".calc-number")

numberKeys.forEach(key => {
    key.addEventListener("click", function(){
        clickNumber(key.textContent)
    })
});

function clickNumber(number)
{
    if(display.textContent==0){
        display.textContent="";
    }

    if(display.textContent.length<9){
        display.textContent+=number;
    }

}

display.textContent="0"



