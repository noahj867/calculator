// operators for calculator
const add = (a, b) => a + b

const subtract = (a, b) => a - b

const divide = (a, b) => a / b 

const multiply = (a, b) => a * b

// add operator or number to calculator's input field
let display = document.getElementById("display");
const inputs = document.querySelectorAll(".input");
inputs.forEach(input => input.addEventListener("click", () => {
    display.value += input.innerHTML; 
}
));

// evaluate function when user clicks "=" button 
let operate = document.getElementById("operate");
operate.addEventListener("click", evaluate());
function evaluate () {
    display.value = eval(display.value)
    return display.value
};

// clear calc
let clear = document.getElementById("clear");
clear.addEventListener("click", reset());

const reset = () => display.value = ""




// when an operator is pressed save display box and save operator
// then when you press  


// when an operator is pressed save display box and save operator
// then when you press  

// // // operators for calculator
// const add = (a, b) => a + b

// const subtract = (a, b) => a - b

// const divide = (a, b) => a / b 

// const multiply = (a, b) => a * b

// function evaluate () {
//     input.value = eval(input.value)
//     return input.value
// };

// // add operator or number to calculator's input field
// let input = document.getElementById("input");
// const numbers = document.querySelectorAll(".number");
// numbers.forEach(number => number.addEventListener("click", () => {
//     input.value += number.innerHTML; 
// }
// ));

// const operators = document.querySelectorAll(".operator");
// operators.forEach(operator => operator.addEventListener("click", () => {
//     input.value += operator.innerHTML; 
// }
// ));

// // evaluate function when user clicks "=" button 
// let operate = document.getElementById("operate");
// operate.addEventListener("click", () => {
//     evaluate(input.value)