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


const containsDuplicates = (arr:number[]): boolean => {
    for (let i:number = 0; i < arr.length; i++){
        let num1: number = arr[i]
        // console.log(num1)
        for (let j:number = i+1; j < arr.length; j++){
            let num2: number = arr[j]
            // console.log(num1,num2)
            if (num1 == num2) return true
        }
    }
    return false
}
// console.log(containsDuplicates([1,2,3,4]))

const isPalindrome = (str: string): boolean => {
    if (str.split('').reverse().join('') == str) return true
    // console.log(newStr)
    // if (newStr == str) return true
    return false
}
console.log(isPalindrome('racecar'))