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
    return false
}

const isPalindrome2 = (str: string): boolean => {
    for (let i: number = 0; i < str.length; i++){
        // console.log(str[str.length - 1 -i])
        if (str[i] !== str[str.length - 1 - i]) return false
    }
    return true
}
// console.log(isPalindrome2('racecar'))

const hasTargetSum = (array:number[], target: number): boolean => {
    for (let i: number = 0; i < array.length; i++){
        let num1: number = array[i]
        for (let j: number = i+1; j < array.length; j++){
            let num2: number = array[j]
            if (num1 + num2 == target) return true
        }
    }
    return false
}
// console.log(hasTargetSum([1, 2, 5], 4))
//------------------------------------------------------------------------------------
