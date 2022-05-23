function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;

}

var myinches = 132;
var feet = inchToFeet(myinches);
console.log('myinches in feet', feet);

var dadiInches = 144;
var dadiFeet = inchToFeet(dadiInches);
console.log(dadiFeet);

var naniInches = 156;
var naniFeet = inchToFeet(naniInches);
console.log(naniFeet);

var nanaInches = 168;
var nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);


//mile to km
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('Marathon in km:', marathon);

