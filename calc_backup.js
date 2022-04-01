/*
when numbers and clicked, followed by an operation (+, -, /, x),
store current number in output and clear output
store operation chosen
listen for more numbers, repeat until equals button is clicked

when equals is clicked
*/


//number buttons
const numberButtons = document.getElementsByClassName('btn number');

//operation buttons
const operationButtons = document.getElementsByClassName('btn operation');

//clear button
const clear = document.getElementById('clear');

//equals button
const equalsButton = document.getElementById('equal');

//output div
const output = document.getElementById('output');

let operand = [];
let operation = [];
let tempOutput = 0;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', ()=>{
        if(output.innerText.length > -1){
            clear.innerText = 'C';
        }
        if(output.innerText.length >= 7){return;}
        output.innerText += numberButtons[i].innerText;
    })
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', ()=>{
        if(output.innerText.length < 1){
            return;
        }
        if(clear.innerText = 'C'){
            clear.innerText = 'AC';
        }
        let number = parseInt(output.innerText);
        operand.push(number);
        operand.push(operationButtons[i].innerText);
        output.innerText = '';
        console.log(operand);
    })
}

clear.addEventListener('click', ()=>{
    output.innerText = '';
    clear.innerText = 'AC';

    if(clear.innerText = 'AC'){
        operand = [];
        output.innerText = '';
    }
});

equalsButton.addEventListener('click', ()=>{
    operand.push(parseInt(output.innerText));
    output.innerText = compute(operand);
    operand = [];
});

//still need to figure out order of operations
//100 - 50 * 2 = 0, currently returning 100
// 100 - (50 * 2)
function compute(operand){
    let total = operand[0];

    for (let i = 1; i < operand.length; i++) {
        
        switch (operand[i]){
            case '+':
                //sum
                total += operand[i + 1];
                break;
            case '-':
                //subtract
                total -= operand[i + 1];
                break;
            case 'x':
                //multiply
                total *= operand[i + 1];
                break;
            case '÷':
                //divide
                total /= operand[i + 1];
                break;
            case !isNaN(operand[i]):
                //is a number

                break;
        }
    }
    
    return total;
}