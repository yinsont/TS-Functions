"use strict";
const circle = (diam) => 'Circumf = ' + Math.PI * diam;
// console.log(circle(3))
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (arr) => {
    let ans = arr.slice(0, 2);
    return ans;
};
// console.log(returnFirstTwoDrivers(drivers))
const returnLastTwoDrivers = (arr) => {
    let ans = arr.slice(-2);
    return ans;
};
// console.log(returnLastTwoDrivers(drivers))
const selectingDrivers = [
    returnFirstTwoDrivers(drivers),
    returnLastTwoDrivers(drivers),
];
// console.log(selectingDrivers)
const containsDuplicates = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        // console.log(num1)
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            // console.log(num1,num2)
            if (num1 == num2)
                return true;
        }
    }
    return false;
};
// console.log(containsDuplicates([1,2,3,4]))
const isPalindrome = (str) => {
    if (str.split('').reverse().join('') == str)
        return true;
    // console.log(newStr)
    // if (newStr == str) return true
    return false;
};
console.log(isPalindrome('racecar'));
