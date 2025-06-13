

let display = document.getElementById('display')

let numB = document.querySelectorAll('[data-number]')

numB.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.dataset.number
    })
})


let firstNumber = null;
let operator = null;

let opB = document.querySelectorAll('[data-operator]')


opB.forEach(button => {
    button.addEventListener('click', () => {
        firstNumber = parseFloat(display.value)
        operator = button.dataset.operator;
        display.value =""
    })
 })

 let eqB = document.getElementById('equals')

 eqB.addEventListener('click', () => {
    let secondNumber = parseFloat(display.value);
    let result = null;

    if(operator === "+") {
        result = firstNumber + secondNumber
    }
    else if (operator === "-") {
        result = firstNumber - secondNumber
    }
     else if (operator === "*") {
        result = firstNumber * secondNumber
    }
     else if (operator === "/") {
        if(secondNumber === 0 ) {
            result = "Error"
        } else{
        result = firstNumber / secondNumber}
    }
    else if (result === null) {
        display.value = "Invalid Operation"
    } else {
        display.value === result;
    }

    display.value = result
    
 });


 const clB = document.getElementById('clear');

 clB.addEventListener('click', () => {
    display.value = null;
    firstNumber = null;
    secondNumber = null;
 })


