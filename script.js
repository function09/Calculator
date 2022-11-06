const display = document.querySelector('#display');
const operandButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
let arrayX = [];
let arrayY = [];
let operator = null;
let solution = null;

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
    if(y === 0){
        return 'Error divide by 0'
    }
    else{
        return x/y
    }
};

function operate(operator, x, y){

    if (operator == "+"){
        return add(x, y);
    }
    else if (operator == "-"){
        return subtract(x, y);
    } 
    else if (operator == "×"){
        return multiply(x, y);
    }
    else if(operator === "÷") 
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
        }
        else if(operator !== null || x === solution){
            arrayY.push(e.target.textContent);
            storeVariableY();  
        }  
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.textContent
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

equalButton.addEventListener('click', () =>{

    if(arrayX !== [] && arrayY !== [] && operator !== null){
        solution = operate(operator, x, y);
        
        display.textContent = solution;

        arrayX = [];
        arrayY = [];
        x = solution;
        y = '';
        operator = null;
    }
    else if(display.textContent === '0'){
        return 
    }
});
