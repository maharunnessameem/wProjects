const business = 450;
const minister = 550;
const army = 600;
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('minister er pola is bigger');
// }


// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     }
//     else {
//         return second;
//     }
// }

// const largest = findLargest(354, 241);
// console.log('largest is', largest);

//find largest number of three number
function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

const largest = findLargest(22, 25, 21);
console.log('Largest is', largest);

//find smallest
function findSmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}
const smallest = findSmallest(22, 25, 21);
console.log('Smallest is', smallest);

//compare
// if (business > minister && business > army) {
//     console.log('Business is bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('Minister is bigger');
// }
// else if (army > business && army > minister) {
//     console.log("Army is bigger");
// }

//var max = Math.max(business, minister, army);
//console.log('largest is', max);

