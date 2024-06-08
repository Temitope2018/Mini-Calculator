const myVariable = document.getElementById("display");

function appendToDisplay(input){
    myVariable.value += input;
}
function clearDisplay(){
    myVariable.value = "";
}

function calculate(){
    try{
        myVariable.value = eval(myVariable.value);
    }
    catch(error){
        myVariable.value = "Error";
    }
}





