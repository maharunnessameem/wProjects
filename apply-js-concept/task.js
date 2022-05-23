//Celsius to fahrenheit
function getFahrenheit(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}
const myCelsius = getFahrenheit(25);
console.log(myCelsius);

//Fahrenheit to celsius

function getCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}
const myfahrenheit = getCelsius(77);
console.log(myfahrenheit);


//grade calculation
let number = 75;
if (number >= 80 && number <= 100) {
    console.log("The grade is A+");
}
else if (number >= 70 && number < 80) {
    console.log("The grade is A");
}
else if (number >= 60 && number < 70) {
    console.log("The grade is A-");
}
else if (number >= 33 && number < 60) {
    console.log("The grade is B");
}
else {
    console.log("The grade is F");
}


//interest calculation
function getAmount(principle, interest, time) {
    let total = principle + principle * (interest / 100) * time;
    return total;

}
const myTotal = getAmount(200, 5, 5);
console.log(myTotal);