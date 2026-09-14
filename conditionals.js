let age = 18;
 
if (age >= 18) {
  console.log("You are eligible to vote.");
}

//switch
let temperature = 75;
switch(temperature){
    case 25:
        console.log('temperature is 25');
        break;
    case 75:
        console.log('temperature is 75 its warm');
        break;
}

let grade = parseFloat(prompt("Enter the number grade of your exam: "));
switch(grade){
    case 50:
        console.log("You didnt fail. ");
        break;
    
    case 80:
        console.log("You did well!");
        break;
    default:
        console.log("enter a grade");
        break;
}