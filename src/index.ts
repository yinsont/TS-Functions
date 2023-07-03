const circle = (diam: number): string =>
'Circumf = ' + Math.PI * diam

// console.log(circle(3))


let drivers: string[] = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (arr: string[]): string[] => {
    let ans: string[] = arr.slice(0,2)
    return ans
}
// console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = (arr:string[]): string[] => {
    let ans: string[] = arr.slice(-2)
    return ans
}
// console.log(returnLastTwoDrivers(drivers))

const selectingDrivers: string[][] = [
    returnFirstTwoDrivers(drivers),
    returnLastTwoDrivers(drivers),
];
// console.log(selectingDrivers)

