let display = document.getElementById('display')
let first_num = "";
let last_num = "";
let operator = null;


function appendvalue(value){
    if(operator===null){
        first_num += value;
        display.value = first_num;
    }    
    else{
        last_num += value;
        display.value = last_num;
    }
}

function cleardisplay(){
    first_num = "";
    last_num = "";
    operator= null;
    display.value="";
}

function setoperator(op){
    if(first_num==="") return;

    if(operator === null){
        operator = op;
        display.value = operator;
    }
}

function calculate(value){
    let result;
    num1 = parseFloat(first_num);
    num2 = parseFloat(last_num);

    if(isNaN(num1) || isNaN(num2)) {
        display.value = "Error";
        return;
    }

    switch (operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 === 0 ? Infinity : num1/num2;
            break;
        default:
            result = "Error";
    }

    display.value = result;
    first_num = result.toString();
    last_num = "";
    operator = null;


}
