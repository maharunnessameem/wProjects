function bringSingara(taka) {
    console.log('Singara er jonno dise', taka);
    console.log('Mamma singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;

}

// bringSingara(100);

var money = 90;
var singara = bringSingara(money);
console.log('Ai nen singara', singara);