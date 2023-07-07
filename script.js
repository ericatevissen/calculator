function sum(num1, num2) {
    result = num1 + num2;
    return Math.round(result * 100) / 100;
}
function substract(num1, num2) {
    result = num1 - num2;
    return Math.round(result * 100) / 100;
}
function multiply(num1, num2) {
    result = num1 * num2;
    return Math.round(result * 100) / 100;
}
function divide(num1, num2) {
    result = num1 / num2;
    return Math.round(result * 100) / 100;
}

let num1 = "";
let num2 = "";
let operator;

const screen = document.querySelector('#screen')
const container = document.querySelector('#container');

container.addEventListener('click', () => {
    if (event.target.classList.contains('digit') && typeof operator === 'undefined') {
        const digit = event.target.innerText;
        num1 += digit;
        screen.innerText += digit;
    }
    else if (event.target.classList.contains('digit') && typeof operator !== 'undefined') {
        const digit = event.target.innerText;
        num2 += digit;
        screen.innerText += digit;
    }
    else if (event.target.classList.contains('operator') && num1.length !== 0 && typeof operator === "undefined") {
        operator = event.target.innerText
        screen.innerText += operator
    }
    else if (event.target.id === 'equal' || event.target.classList.contains('operator') && num2.length !== 0) {
        num1 = Number(num1);
        num2 = Number(num2);

        switch (operator) {
            case '/':
                if (num2 === 0) alert("You can't divide by 0");
                screen.innerText = divide(num1, num2);
                break;
            case 'x':
                screen.innerText = multiply(num1, num2);
                break;
            case '+':
                screen.innerText = sum(num1, num2);
                break;
            case '-':
                screen.innerText = substract(num1, num2);
        }

        num1 = screen.innerText;
        num2 = "";
        operator = undefined;
    }
    else if (event.target.id === 'clear') {
        num1 = "";
        num2 = "";
        operator = undefined;
        screen.innerText = "";
    }
});
