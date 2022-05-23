var bottleColor = "yellaw";
var waterQuantity = 1;
var isFull = false;

// Array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('logens'); //-1
items.push('envelope');
items.push('watch');
items.pop();

// conditionals
if (items.length >= 4) {
    console.log('You have too many stuff on your desk.');
}
else if (items.length == 4) {
    console.log('you only have one hali items');

}
else {
    console.log('WOW! you have a clean desk');
}