let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    displayValue = Math.sqrt(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}

function calculateSquare() {
    displayValue = Math.pow(parseFloat(displayValue), 2);
    document.getElementById('display').value = displayValue;
}

function calculatePower() {
    appendToDisplay('^');
}

function calculateSin() {
    displayValue = Math.sin(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}

function calculateCos() {
    displayValue = Math.cos(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}

function calculateTan() {
    displayValue = Math.tan(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}

function calculateLog() {
    displayValue = Math.log(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}

function calculateExp() {
    displayValue = Math.exp(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}
