function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenceAnimals = 10 * animalDensityFirst10Miles;

        const restMiles = miles - 10;
        const secondDenceAnimals = restMiles * animalDensitySecond10Miles;

        const totalAnimals = firstDenceAnimals + secondDenceAnimals;

        return totalAnimals;
    }
    else {
        const firstDenceAnimals = 10 * animalDensityFirst10Miles;

        const restMiles = miles - 20;
        const secondDenceAnimals = 10 * animalDensitySecond10Miles;

        const restDenceAnimals = restMiles * animalDensityRestMiles;

        const totalAnimals = firstDenceAnimals + secondDenceAnimals + restDenceAnimals;

        return totalAnimals;
    }
}

const animals = animalCount(25);
console.log(animals);