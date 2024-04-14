const add = (a,b) => a+b
const subtract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => a/b

let firstNumber
let operator
let secondNumber

let number;

function operate(number1, number2, operators ){

    switch(operator) {
        case "+":
            return  number = add(Number(number1),Number(number2))
            break
        case "-":
            return  number = subtract(Number(number1),Number(number2))
            break
        case "*":
            return  number = multiply(Number(number1),Number(number2))
            break
        case "/":
            return  number = divide(Number(number1),Number(number2))
            break
    }   
}

function getValue(){
    number = window.prompt("Input number:")
}

function display(){
    
    const display = document.querySelector('.display')
    display.textContent=number
}


const number1 = document.querySelector('.firstNumber')
number1.addEventListener('click', e => {
    getValue()
    display()  
    firstNumber = number
    console.log(firstNumber)
}
)

const number2 = document.querySelector('.secondNumber')
number2.addEventListener('click', e => {
    getValue()
    display()  
    secondNumber = number
    console.log(secondNumber
    )
    }
)
const addButton = document.querySelector('.add')
addButton.addEventListener('click', e => {
    operator = '+'
    console.log(operator)
})
const subtractButton = document.querySelector('.subtract')
subtractButton.addEventListener('click', e => {
    operator = '-'
    console.log(operator)
})
const multiplyButton = document.querySelector('.multiply')
multiplyButton.addEventListener('click', e => {
    operator = '*'
    console.log(operator)
})
const divideButton = document.querySelector('.divide')
divideButton.addEventListener('click', e => {
    operator = '/'
    console.log(operator)
})

const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', e => {
    operate(firstNumber, secondNumber, operator)
    console.log( operate(firstNumber, secondNumber, operator))
    display()
})