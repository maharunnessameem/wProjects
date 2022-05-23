// const numbers = [44, 23, 34, 32, 54, 5, 78];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);


//using function
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;

    }
    return sum;
}
let sum1 = arrayTotal([4, 5, 6, 7]);
console.log(sum1);