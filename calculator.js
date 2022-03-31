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

//listen for each number button
//if its clicked, display it in output
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', ()=>{
        if(output.innerText.length >= 7){return;}
        output.innerText += numberButtons[i].innerText;
    })
}

//listen for each type of operation (+, -, /, x)
//store number in output, then clear
//add number to operand array
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', ()=>{
        let number = parseInt(output.innerText);

        operand.push(number);
        operation.push(operationButtons[i].innerText);
        output.innerText = '';

        console.log(operand);
        console.log(operation);
    })
}

clear.addEventListener('click', ()=>{
    output.innerText = '';
    operand = [];
    operation = [];
});

equalsButton.addEventListener('click', ()=>{
    operand.push(parseInt(output.innerText));
    console.log(operand);

    output.innerText = '';

    output.innerText = compute(operand, operation);
});

function compute(operand, operation){
    let total = 0;

    for (let i = 0; i < operand.length; i++) {

        for (let j = 0; j < operation.length; j++) {
            switch(operation[i]){
                case '+':
                    //sum
                    total += operand[i];
                    break;
                case '-':
                    //subtraction
                    break;
                case 'x':
                    //multiply
                    break;
                case '÷':
                    //divide
                    break;
            }
            
        }
        
    }
    console.log(total);
    return total;
}