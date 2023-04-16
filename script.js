const buttons = document.querySelectorAll('.calc-keys');
const clearBtn = document.querySelector('.clear-btn');
const equalBtn = document.querySelector('.equal-btn');
const operand = document.querySelector('.operand');
const result = document.querySelector('.result');
const backBtn = document.querySelector('.back-btn');

let output = '';
let string;
let opr = '';
let num = '';


Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        string = e.target.innerHTML;
        if (string == '=') {
            evaluate(opr);
            result.innerHTML = `${output}`;
        } 
        else if (string == '+' || string == '-' || string == '%') {
            opr = string;
            output += opr;
            operand.innerHTML = `${output}`;
        } 
        else if (string == 'x') {
            opr = '*';
            output += opr;
            operand.innerHTML = `${output}`;
        }
        else if (string == '÷') {
            opr = '/';
            output += opr;
            operand.innerHTML = `${output}`;
        }
        else if (string == 'AC') {
            output = '';
            operand.innerHTML = `${output}`;
            result.innerHTML = `${output}`;
        }
        else {
            num = e.target.innerHTML;
            output += num;
            operand.innerHTML = `${output}`;
        }
    });
});

const evaluate = (opr) => {
    if (opr == '') return;
    try {
        switch (opr) {
            case '+':
                output = eval(output);
                break;
            case '-':
                output = eval(output);
                break;
            case '*':
                output = eval(output);
                break;
            case '/':
                output = eval(output);
                break;
            case '%':
                output = eval(output);
                break;
            default:
                break;
        }
    } catch (error) {
        alert('invalid operator / input');
    }
};

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "https://ahtritcodes.github.io/college-calculator/";
})