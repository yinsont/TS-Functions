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
