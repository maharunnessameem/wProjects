//problem 1
function anaToVori(ana) {
    if (typeof ana == 'string') {
        return 'please enter a number';
    }
    else {
        const vori = ana / 16;
        return vori;
    }
}
//const ana1 = anaToVori('meem');
const ana1 = anaToVori(32.16);
console.log(ana1);

//problem 2
function pandaCost(singaraQuantity, sumochaQuantity, jilapiQuantity) {
    const perSingaraPrice = 7;
    const perSumochaPrice = 10;
    const perJilapiPrice = 15;

    if (singaraQuantity < 0 || sumochaQuantity < 0 || jilapiQuantity < 0) {
        return 'please enter a positive number';
    }

    else {
        const singaraPrice = perSingaraPrice * singaraQuantity;
        const sumochaPrice = perSumochaPrice * sumochaQuantity;
        const jilapiPrice = perJilapiPrice * jilapiQuantity;

        const totalPrice = singaraPrice + sumochaPrice + jilapiPrice;

        return totalPrice;
    }
}
//const result = pandaCost(-1, 0, -1);
const result = pandaCost(5, 6, 7);
console.log(result);


//problem 3

function picnicBudget(person) {
    const first100Persons = 5000;
    const second100Persons = 4000;
    const remainingPersons = 3000;

    if (typeof person == 'string') {
        return 'please enter a number';
    }
    else if (person < 0) {
        return 'please enter a positive number';
    }
    else if (person <= 100) {
        const totalAmount = person * first100Persons;
        return totalAmount;
    }
    else if (person <= 200) {
        const firstDencePersons = 100 * first100Persons;
        const restPerson = person - 100;
        const secondDencePersons = restPerson * second100Persons;
        const totalAmount = firstDencePersons + secondDencePersons;
        return totalAmount;
    }
    else {
        const firstDencePersons = 100 * first100Persons;

        const restPerson = person - 200;

        const secondDencePersons = 100 * second100Persons;
        const restDencePersons = restPerson * remainingPersons;

        const totalAmount = firstDencePersons + secondDencePersons + restDencePersons;

        return totalAmount;

    }
}

//const persons = picnicBudget('meem');
//const persons = picnicBudget(-5);
const persons = picnicBudget(299);
console.log(persons);

//problem 4

function oddFriend(names) {
    if (typeof names !== "object") {
        return 'please enter an array';
    }
    else {
        for (let i = 0; i < names.length; i++) {
            const element = names[i];
            if (element.length % 2 !== 0) {
                return element;
                break;
            }


        }
    }
}
const friends = oddFriend(['meem', 'saima', 'subah', 'priyankaa', 'mou', 'sanjida', 'hira']);
//const friends = oddFriend('meem', 'saima', 'mou');
console.log(friends);