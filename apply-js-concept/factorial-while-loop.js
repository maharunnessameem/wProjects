// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const num = getFactorial(7);
// console.log(num);


//while loop reverse
// function getFactorial(number) {
//     let factorial = 1;
//     i = number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// const num = getFactorial(5);
// console.log(num);

//For loop reverse
function getFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
const num = getFactorial(4);
console.log(num);