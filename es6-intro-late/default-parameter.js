function add(num1, num2 = 0) {
    //option 2
    //num2 = num2 || 0;
    //option1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 10);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const fullName1 = fullName('Meem');
console.log(fullName1);