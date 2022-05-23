var skyColor = 'white';

var phones = ['iphone', 'xiaomi', 'samsung', 'lg', 'htc'];
phones[3] = 'walton';

//check oppo not exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('opps! Amir khan oppo is missing');
}
//if  lg is available
if (phones.indexOf('lg') != -1) {
    console.log('lg is avaiable now');

}
//loop
var num = 0;
while (num <= 10) {
    num++;
}

for (var i = 0; i < phones.length; i++) {

}
//function
function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}
addThreeNumbers(87, 41, 56);

//object
var microband = {
    brand: 'blue yeti',
    price: 120,
    color: "black"
}