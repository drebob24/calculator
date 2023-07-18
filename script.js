let num1 = 0;
let num2 = 0;
let operator = '';
let input1 = false;
let input2 = false;
let oper = false;

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
            operator = text;
            oper = true;
            input1 = true;
            break;
        case 'equal':
            evaulateEqualsInput();
            break;
    }
}

function evaulateEqualsInput(){
    if (input2){
        operate();
        display.textContent = num1;
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