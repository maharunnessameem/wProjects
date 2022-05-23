/*
chairwood =3cft/chair
tablewood = 10cft/table
bedwood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    //wood calculation
    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    const calculate = chairWood + tableWood + bedWood;

    return calculate;
}
const result = woodCalculator(0, 0, 1);
console.log(result);