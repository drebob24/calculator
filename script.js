let num1 = 0;
let num2 = 0;
let operator = '';

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
    console.log("hi");

    switch(operator){
        case '+':
            addition(num1, num2)
            break;
        case '-':
            subtraction(num1, num2);
            break;
        case '*': 
            multiplication(num1, num2);
            break;
        case '/': 
            division(num1, num2);
            break;
    }
}