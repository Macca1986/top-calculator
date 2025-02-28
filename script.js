// functions for basic calculator operations
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "Impossible";
    } else {
        return num1 / num2;
    }   
}

// variables for storing values and operators and whether operator was just clicked
let firstNum;
let secondNum;
let operator;
let result;
let operatorLastClick = false;

// operate function to take two nums and operator and call one of the basic functions
function operate (operator, num1, num2) {
    // can I make this cleaner and just use the operator parameter as the function name?
    if (operator == "plus") {
        return add(num1, num2);
    } else if (operator == "minus") {
        return subtract(num1, num2);
    } else if (operator == "times") {
        return multiply(num1, num2);
    } else if (operator == "divide") {
        return divide(num1, num2);
    }
}

// variable to store the screen value at any given time
let display = document.querySelector("#screen");
let displayNum = display.innerHTML;

// function to update screen display when digits are pressed
function updateScreen (digitPressed) {
    if (operatorLastClick) {
        displayNum = digitPressed;
        display.innerHTML = displayNum;
        operatorLastClick = false;
        console.log("operator last clicked: " + operatorLastClick);
    } else {
        displayNum += digitPressed;
        display.innerHTML = displayNum;
    } 
}

// event listeners on digit buttons to update screen on button click
const digitButtons = document.querySelectorAll(".digit");

for (let i = 0; i < digitButtons.length; i++) {
    let currentButton = digitButtons[i];
    currentButton.addEventListener("click", (event) => {
        updateScreen(event.target.innerHTML);
    });
}

// event listeners on operator buttons to update operator on click
const operatorButtons = document.querySelectorAll(".operator");

for (let i = 0; i < operatorButtons.length; i++) {
    let currentButton = operatorButtons[i];
    currentButton.addEventListener("click", (event) => {
        if (firstNum !== undefined && operator !== undefined && !operatorLastClick) {
            // Perform operation before setting new operator
            secondNum = display.innerHTML;
            result = operate(operator, firstNum, secondNum);
            display.innerHTML = result;
            firstNum = result; // Store result as the new firstNum for continued operations
        } else {
            firstNum = display.innerHTML; // Store first number if it's the first operation
        }

        operator = event.target.id; // Update the operator
        operatorLastClick = true; // Indicate that an operator was just clicked
    });
}

// event listener for equals button
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", (event) => {
    if (firstNum !== undefined && operator !== undefined) {
        secondNum = display.innerHTML;
        result = operate(operator, firstNum, secondNum);
        display.innerHTML = result;
        displayNum = result;
        firstNum = result; // Store result as firstNum for continued calculations
        operator = undefined; // Reset operator after equals
        operatorLastClick = false;
    }
});

// event listener for clear button 
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", (event) => {
    display.innerHTML = "";
    displayNum = "";
    firstNum = 0;
    secondNum = 0;
    result = 0;
})
