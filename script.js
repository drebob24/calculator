let num1 = 0;
let num2 = 0;
let operator = '';
let input1 = false;
let input2 = false;
let oper = false;
let decimal = false;

const display = document.querySelector('.display');
display.textContent = 0;

function addition(x, y){
    return sum = x + y;
}

function subtraction(x, y){
    return difference = x - y;
}

function multiplication(x, y){
    return product = x * y;
}

function division(x, y){
    if (y === 0){
        input1 = false;
        input2 = false;
        oper = false;
        return "Invalid"
    }
    return quotient = x / y;
}

function operate(){
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator){
        case '+':
            num1 = addition(num1, num2)
            break;
        case '−':
            num1 = subtraction(num1, num2);
            break;
        case '×': 
            num1 = multiplication(num1, num2);
            break;
        case '÷': 
            num1 = division(num1, num2);
            break;
    }
    display.textContent = num1;
    decimal = false;
    if (num1 === 'Invalid'){
        num1 = 0;
        num2 = 0;
    }
}

const btns = document.querySelectorAll('button');
btns.forEach(input => {
    input.addEventListener('click', (e) => {
        let inputClass = e.target.classList.value;
        let inputText = e.target.textContent;
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
            evaulateEqualsInput();
            break;
        case 'special':
            handeSpecial(text);
            break;
    }
}

function evaulateEqualsInput(){
    if (input2){
        operate();
        input1 = false;
        input2 = false;
        oper = false;
    }
    else {
        display.textContent = num1;
        input1 = false;
        oper = false;
    }
}

function evaluateNumberInput(value){
    if (!input1){
        num1 = value;
        display.textContent = num1;
        input1 = true;
    }
    else if (!oper){
        num1 += value;
        display.textContent = num1;
    }
    else if (!input2){
        num2 = value;
        display.textContent = num2;
        input2 = true;
    }
    else {
        num2 += value;
        display.textContent = num2;
    }
}

function handleOperaters(sign){
    if(!oper){
        operator = sign;
        oper = true;
        input1 = true;
        decimal = false;
    }
    else{
        operate();
        operator = sign;
        input2 = false;
    }
}

function handeSpecial(value){
    switch(value){
        case '.':
            if (!decimal){
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
    num1 = 0;
    num2 = 0;
    operator = '';
    input1 = false;
    input2 = false;
    oper = false;
    decimal = false;
    display.textContent = num1;   
}

function handleBackspace(){
    if (input2){
        num2 = num2.slice(0, -1);
        display.textContent = num2;
    }
    else {
        num1 = num1.slice(0, -1);
        display.textContent = num1;
    }
}

function handlePercentage(){
    if (input2){
        num2 = num2/100;
        display.textContent = num2;
    }
    else {
        num1 = num1/100;
        display.textContent = num1;
    }
}