function clearDisplay() {
    document.getElementById("display1").value = "";
}

function deleteLast() {
    let display = document.getElementById("display1").value;
    document.getElementById("display1").value = display.substring(0, display.length - 1);
}

function appendToDisplay(value) {
    document.getElementById("display1").value += value;
}

function calculateResult() {
    let expression = document.getElementById("display1").value;
    try {
        document.getElementById("display1").value = eval(expression);
    } catch {
        document.getElementById("display1").value = "Error";
    }
}
function appendToDisplay(value) {
    const display = document.getElementById('display1');
    
    const currentInput = display.value;
    const lastNumber = currentInput.split(/[\+\-\*\/\(\)]/).pop();

    if (value === '.' && lastNumber.includes('.')) {
            return;
    }
  display.value += value;
}
