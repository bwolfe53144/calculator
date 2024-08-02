
displayNumber = "0";
operand = "0";
firstNumber = 0;
totalNumber = 0;

/*Define calculator functions */
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;
let remainder = (a,b) => a % b;

const screen = document.getElementById("screen");
screen.innerText = displayNumber;

/* Button functions */
function numFunction(num) {
    if (displayNumber == "0" || displayNumber == totalNumber) {
        displayNumber = num;
    } else {
        displayNumber += num;
        if (displayNumber.length >= 9) {
            displayNumber = displayNumber.slice(0,8);
        }
    }
screen.innerText = displayNumber; 
}

function periodFunction(num) {
if (displayNumber.includes(".")) {
    displayNumber = displayNumber;
} else {
    displayNumber += num;
}   
}

function remove() {
    operand = "0";
    displayNumber = "0";
    firstNumber = 0;
    totalNumber = 0;
    screen.innerText = displayNumber;
}

function changeSign(num) {
    displayNumber = String(parseFloat(displayNumber) * -1);
    screen.innerText = displayNumber;
}

function operator(e){
    if (operand == "0") {
        operand = e;
        firstNumber = parseFloat(displayNumber);
        displayNumber = "0";
        screen.innerText= displayNumber;
    } else {
        calculate(firstNumber, displayNumber);
    }
}

/* Function to calculate the numbers */
function calculate(a,b) {
    b = parseFloat(b);
    if (operand === "add") {
        totalNumber = add(a,b);
    } else if (operand === "subtract") {
        totalNumber = subtract(a,b);
    } else if (operand === "multiply") {
        totalNumber = multiply(a,b);
    } else if (operand === "divide") {
        totalNumber = divide(a,b);
        if (b === 0) {
            totalNumber = "Uncool!";
        } 
    } else if (operand === "remainder") {
        totalNumber = remainder(a,b);
    }
    if (totalNumber == "Uncool!") {
        screen.innerText = "Uncool!";
        totalNumber = 0;
        displayNumber = "0";
        firstNumber = 0;
        operand = "0";
    } else {
    totalNumber = String(totalNumber);
    if (totalNumber.length >= 9) {
        totalNumber = totalNumber.slice(0,8);
    }
    totalNumber = String(parseFloat(totalNumber));
    displayNumber = totalNumber;
    screen.innerText = displayNumber;
    operand = "0";
    }
}