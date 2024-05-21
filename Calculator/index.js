const display = document.getElementById("display");

function writeToDisplay(input){
    if(display.value === "Error" || display.value === "undefined" || display.value === "NaN" || display.value === "Infinity")
    {
        display.value = input;
    }
    else{
    display.value += input;
    }

}

function calculation(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = " ";
}

function deleteFromDisplay(){
    display.value = display.value.slice(0, -1);
}