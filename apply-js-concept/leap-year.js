function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is your year leap year', isYourYearLeapYear);



// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = 2100;
const isYearLeapYear = checkLeapYear(year);