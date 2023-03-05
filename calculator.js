// operators for calculator
const add = (a, b) => a + b

const subtract = (a, b) => a - b

const divide = (a, b) => a / b 

const multiply = (a, b) => a * b

let firstOperand = ""
let secondOperand = ""
let currentOperator = ""

let currentDisplay = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", () => {
    if (secondOperand === "" && currentOperator != "" || currentDisplay.value == 0) {
        firstOperand = Number(currentDisplay.value);
        currentDisplay.value = "";
    };
    currentDisplay.value += number.innerHTML;
    if (currentOperator != "") secondOperand = Number(currentDisplay.value);
}));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", () => {
    if (currentOperator != "" && secondOperand === "") {
        currentOperator = operator.innerHTML;
    };
    if (currentOperator != "" && secondOperand != "") {
        currentDisplay.value = roundResult(operate(currentOperator, firstOperand, secondOperand));
        secondOperand = "";
    };
    currentOperator = operator.innerHTML;
    console.log(currentOperator);
}
));

function roundResult (number) {
    return Math.round(number * 1000)/1000
};

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a,b)
    } else if (operator === "*") {
        return multiply(a,b)
    } else if (operator === "/") {
        return divide(a,b)
    };
};

function reset() {
    currentDisplay.value = "" 
    firstOperand = ""
    secondOperand = ""
    currentOperator = ""
};

let clear = document.getElementById("clear");
clear.addEventListener("click", reset);
