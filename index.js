const display = document.getElementById('display')


  document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click',() => {
        display.value += button.dataset.number})


let firstNumber = null;
let operator = null;
// parseFloat used to change the string to number
document.getElementById('plus').addEventListener
('click', () => {
    firstNumber = parseFloat(display.value);
    operator = '+';
    display.value = '';
});

document.getElementById('equals').addEventListener
('click', () => {
    if(firstNumber !== null && operator === '+') {
        const secondNumber = parseFloat(display.value);
        const result = firstNumber + secondNumber;
        display.value = result;
        firstNumber = null;
    }
})

,

document.getElementById('clear').addEventListener
('click', () => {
    display.value ='';
    firstNumber = null;
    operator = null;

})
// then the clear button is clicked display value will be emplity and also first number and operator will be empity 






