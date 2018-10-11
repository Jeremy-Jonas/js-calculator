var inputVal = '';
var total = '0';
var currentOperation = '+';
refreshDisplay();

function digit(num) {
    inputVal += num;
    var decimalPoint = function (){
        if(num === "decimal") {
        inputVal = inputVal + '.'
        }
    }
    refreshDisplay(); 
}
                                                                            
function operator(operation) {
    if (inputVal.length > 0 && currentOperation !== "") {
        updateTotal();
        clearInput();
        currentOperation = operation;
        refreshDisplay();
    }
}

function updateTotal () {
    switch (currentOperation){
        case '+':
            var temp = parseFloat(total) + parseFloat(inputVal);
            total = temp.toString();
            break;
        case '-':
            var temp = parseFloat(total) - parseFloat(inputVal);
            total = temp.toString();
            break;
        case '*':
            var temp = parseFloat(total) * parseFloat(inputVal);
            total = temp.toString();
            break;
        case '/':
            var temp = parseFloat(total) / parseFloat(inputVal);
            total = temp.toString();
            break;
    } 

}

function calculate() {
    if(inputVal.length > 0) {
        updateTotal();
        clearInput();
        currentOperation = '';
        refreshDisplay();
    }

}

function clearInput() {
    inputVal = '';
}

function refreshDisplay() {
    if (inputVal.length > 0) {
        document.getElementById('display').innerHTML = inputVal;    
    } else {
        document.getElementById('display').innerHTML = total;
    }
}

function reset() {
    location.reload(true);
}