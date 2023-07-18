let num1, num2, operator, input1, input2, oper, decimal;

const display = document.querySelector('.display');
display.textContent = 0;

const addition = (x,y) => x + y;
const subtraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = (x, y) => y !== 0 ? x / y : "Invalid";

function operate(){
    num1 = Number(num1);
    num2 = Number(num2);
    num1 =  operator === '+' ? addition(num1, num2) :
            operator === '−' ? subtraction(num1, num2) :
            operator === '×' ? multiplication(num1, num2) :
            operator === '÷' ? division(num1, num2) :
            num1;
    display.textContent = num1;
    decimal = false;
    num1 === 'Invalid' ? num1 = num2 = operator = 0 : num1;
}

const btns = document.querySelectorAll('button');
btns.forEach(input => {
    input.addEventListener('click', (e) => {
        const inputClass = e.target.classList.value;
        const inputText = e.target.textContent;
        evaluateInput(inputClass, inputText);
    })
})

function evaluateInput(type, text){
    switch(type){
        case 'num':
            evaluateNumberInput(text);
            break;
        case 'oper':
            handleOperaters(text);
            break;
        case 'equal':
            operate();
            input1 = input2 = oper = false;
            break;
        case 'special':
            handeSpecial(text);
            break;
    }
}

function evaluateNumberInput(value){
    if (!input1){
        num1 = value;
        input1 = true;
    }
    else if (!oper){
        num1 += value;
    }
    else if (!input2){
        num2 = value;
        input2 = true;
    }
    else {
        num2 += value;
    }
    display.textContent = input2 ? num2 : num1;
}

function handleOperaters(sign){
    if (!oper) {    
        //if an operator has not been selected flag that it has, 
        //set num1, and reallow decimals for num2 input
        oper = input1 = true;
        decimal = false;
    }
    else {
        //if an operator has been selected already, run operate() and reset
        //flag to overwrite num2
        operate();
        input2 = false;
    }
    operator = sign;
}

function handeSpecial(value){
    switch(value){
        case '.':
            if (!decimal){
                //if decimal not used, treat as a number and flag its use
                evaluateNumberInput(value);
                decimal = true;
            }
            break;
        case 'AC':
            resetCalc();
            break;
        case '⌫':
            handleBackspace();
            break;
        case '%':
            handlePercentage();
            break;
    }
}

function resetCalc(){
    num1 = num2 = 0;
    operator = '';
    input1 = input2 = oper = decimal = false;
    display.textContent = num1;   
}

function handleBackspace(){
    input2 ? num2 = num2.slice(0, -1) : num1 = num1.slice(0, -1);
    display.textContent = input2 ? num2 : num1;
}

function handlePercentage(){
    input2 ? num2 /= 100 : num1 /= 100;
    display.textContent = input2 ? num2 : num1;
}