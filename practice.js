console.log('Hello world');
let name = "john";
let greeting = `eyy yoo ${name} `;

console.log(greeting);

let count = 0;
count++;
console.log(count); // 1

function greet(){
    console.log('Hello user')
}
greet();

function greet_user(username){//username is the parameter
    console.log("Hello, " + username);
}
greet_user("Bruce");//Bruce is the argument

function add(a, b){
    return a + b;//this is just the calulation. Like it stores the result here. U need 
    //To store it to use it
}
console.log(add(2,3));
//or
let sum = add(17,19);
console.log(sum);

let random = Math.random();
console.log(random);//random number between 0 and 1

let random_int = Math.floor(Math.random() *10)+1;
console.log(random_int);

//ACTIVITY 1

function add(a,b){ //parameters
    return a + b;
}
let add_numbers = add(3,6); //arguments 3,6
console.log(add_numbers);

//Activity 3
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

alert(`Your result of ${num1} ${operator} ${num2} is:  ` + calculator(num1,num2));

//enter numbers
//enter your operator

//Activity 4
let box1 = "value1";
let box2 = "value2";

console.log(box1 + " " + box2)
//box3 = value1
let box3 = box1;
console.log(box3);
//box1 = value2 box2 = nothing
box1 = box2;
//box2 = value1
box2 = box3;
console.log(box1 + " " + box2);
