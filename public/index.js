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
    return false;
};
const isPalindrome2 = (str) => {
    for (let i = 0; i < str.length; i++) {
        // console.log(str[str.length - 1 -i])
        if (str[i] !== str[str.length - 1 - i])
            return false;
    }
    return true;
};
// console.log(isPalindrome2('racecar'))
const hasTargetSum = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let num2 = array[j];
            if (num1 + num2 == target)
                return true;
        }
    }
    return false;
};
// console.log(hasTargetSum([1, 2, 5], 4))
//------------------------------------------------------------------------------------
