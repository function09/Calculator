const display = document.querySelector('#display');
const operandButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
let arrayX = [];
let arrayY = [];
let operator = null;

function add(x, y){
    return x+y
};

function subtract(x, y){
    return x-y
};

function multiply(x, y){
    return x*y
};

function divide(x, y){
    return x/y
};

function operate(operation, x, y){
   
    if (operation == "add"){
        return add(x, y);
    }
    else if (operation == "subtract"){
        return subtract(x, y);
    } 
    else if (operation == "multiply"){
        return multiply(x, y);
    }
    else if(operation === "divide") 
        return divide(x, y);   
};

function storeVariableX(){
    x = Number(arrayX.join(''));
    display.textContent = Number(arrayX.join('')); 
};

function storeVariableY(){
    y = Number(arrayY.join(''));
    display.textContent = Number(arrayY.join(''));
};

operandButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        if(operator === null){
            arrayX.push(e.target.textContent);
            storeVariableX();
            console.log(arrayX); 
        }
        else if(operator !== null){
            arrayY.push(e.target.textContent);
            storeVariableY();
            console.log(arrayY); 
        }  
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        
        operator = e.target.textContent
        console.log(operator)
    });
});

clear.addEventListener('click', () => {
    arrayX = [];
    arrayY = [];
    operator = null;
    x = '';
    y = '';
    display.textContent = '0';
});
