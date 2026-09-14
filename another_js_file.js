let num1 = parseFloat(prompt('Enter your first number: '));
let num2 = parseFloat(prompt('Enter your second number: '));
let operator = prompt('Enter your operator: ');

function calculator(a,b){
    if(operator == "+"){
        return a+b;
    }

    else if(operator == "-"){
        return a-b;
    }
    else if(operator == "*"){
        return a*b;
    }
    else if(operator == "/"){
        return a/b;
    }
}

// function add(a,b){
//     return a+b;
// }

console.log("Your result is: " + calculator(num1,num2));