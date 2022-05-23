// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;

// }
// console.log(factorial);


function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
myNum = 7;
// factorial(myNum);
console.log(factorial(myNum));

var num2 = factorial(5);
console.log('Factorial of 5 is', num2);