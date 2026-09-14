//activity 1
function formatFullName(firstName, lastName) {
    if (firstName == "" || lastName == "") {
        console.log("Invalid name input");
    }
    else {
        console.log(lastName[0].toUpperCase() + lastName.slice(1, lastName.length) +
            "," + firstName[0].toUpperCase() + firstName.slice(1, firstName.length));
    }

}
formatFullName('hal', 'jordan');
//activity 2
function calculateTotalCost(price, quantity, taxRate) {
    if (Number.isInteger(price) & Number.isInteger(quantity) & Number.isInteger(taxRate)) {
        let totalCost = (price * quantity) * (1 + taxRate);
        return totalCost;
    }
    else {
        console.log("Invalid Input");
    }

}
console.log(calculateTotalCost(4, 56, 20));
//activity 3
// If the person is over 18 and employed, they are eligible.
// If the person is over 18 but unemployed, they are conditionally eligible.
// If the person is 18 or younger, they are not eligible.
function checkEligibility(age, isEmployed) {
    if (age > 18 & isEmployed == true) {
        console.log("Good job youre an adult and you have a job");
    }
    else if (age > 18 & isEmployed == false) {
        console.log("Hmm youre 18 but unemployeed. Technically youre an adult I guess. Hope youre a student");
    }
    else {
        console.log("You are not an adult and you have no job.");
    }
}

checkEligibility(19, false);

//Task 4
function calculateTotalCostWithDiscount(price, quantity, taxRate, discount) {
    if (Number.isInteger(price) & Number.isInteger(quantity) & Number.isInteger(taxRate)
        & Number.isInteger(discount)) {
        
        let totalCost = (price * quantity) * (1 + taxRate);
        return totalCost;
    }
    else {
        console.log("Invalid Input");
    }

}