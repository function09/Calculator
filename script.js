const display = document.querySelector('#display');
const operandButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete')
let arrayX = [];
let arrayY = [];
let x = '';
let y = '';
let operator = null;
let solution = null;

function add(x, y) {
    return x+y
};

function subtract(x, y) {
    return x-y
};

function multiply(x, y) {
    return x*y
};

function divide(x, y) {
    if (y === 0){
        return 'Error divide by 0'
    }
    else {
        return x/y
    }
};

function operate(operator, x, y) {

    if (operator == "+") {
        return add(x, y);
    }
    else if (operator == "-") {
        return subtract(x, y);
    } 
    else if (operator == "×") {
        return multiply(x, y);
    }
    else if(operator === "÷") {
        return divide(x, y);  
    }
         
};

function storeVariableX() {
    x = Number(arrayX.join(''));
    display.textContent = arrayX.join('');
};

function storeVariableY() {
    y = Number(arrayY.join(''));
    display.textContent = arrayY.join('');
};

operandButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        if(operator === null){
            if(e.target.value === '.' && arrayX.includes('.')) {
                return;
            }
            arrayX.push(e.target.textContent);
            storeVariableX();
        }
        else if(operator !== null || x === solution) {
            if(e.target.value === '.' && arrayY.includes('.')){
                return;
            }
            arrayY.push(e.target.textContent);
            storeVariableY();  
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.textContent;
    });
});

equalButton.addEventListener('click', () => {
    
    if(arrayX !== [] && arrayY !== [] && operator !== null) {

        solution = parseFloat(operate(operator, x, y).toFixed(8));

        display.textContent = solution;

        arrayX = [];
        arrayY = [];
        x = operate(operator, x, y);
        y = '';
        operator = null;  
    }
    else if(display.textContent === '0') {
        return; 
    }
});

clearButton.addEventListener('click', () => {
    arrayX = [];
    arrayY = [];
    operator = null;
    x = '';
    y = '';
    display.textContent = '0';
});

deleteButton.addEventListener('click', () => {
    if(display.textContent = arrayX.join('') && y == '') {
        arrayX.pop();
        x = Number(arrayX.join(''));
        display.textContent = arrayX.join('');
    }
    else if(display.textContent = arrayY.join('') && x !== '') {
        arrayY.pop();
        y = Number(arrayY.join(''));
        display.textContent = arrayY.join('');
    }
    else if(display.textContent = solution) {
        display.textContent = '0'
    }
});