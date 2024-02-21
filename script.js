let display = document.getElementById('display');

function appendSymbol(symbol) {
    display.value += symbol;
}

function appendNumber(number) {
    display.value += number;
}

function appendDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function operate(operator) {
    display.value += operator;
}


function calculate() {
    try {
        let expression = display.value;

        // Replace all instances of unary minus with a placeholder text
        expression = expression.replace(/(^|[-+*/\(])-(\d+(\.\d+)*)/g, "$1~$2");

        // Evaluate the expression
        let result = eval(expression.replace(/~/g, '-'));

        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result.toString();
        }
    } catch (error) {
        display.value = 'Error';
    }
}
function calculateRoot() {
    try {
        let value = parseFloat(display.value);
        if (isNaN(value) || value < 0) {
            display.value = 'Error';
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
