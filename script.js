// functions for basic calculator operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// variables for storing values and operators
let firstNum;
let secondNum;
let operator;

// operate function to take two nums and operator and call one of the basic functions
function operate (operator, num1, num2) {
    // can I make this cleaner and just use the operator parameter as the function name?
    if (operator == "add") {
        return add(num1, num2);
    } else if (operator == "subtract") {
        return subtract(num1, num2);
    } else if (operator == "multiply") {
        return multiply(num1, num2);
    } else if (operator == "divide") {
        return divide(num1, num2);
    }
}

// variable to store the screen value at any given time
let display = document.querySelector("#screen");
let displayNum = display.innerHTML;

// function to update screen display when digits are pressed