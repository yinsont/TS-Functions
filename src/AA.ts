//App Academy Open

const plusFive = (num: number): number => {
    return num += 5
}
// console.log(plusFive(10));  // => 15
// console.log(plusFive(2));   // => 7
// console.log(plusFive(-8));  // => -3


const averageOfTwo = (num1: number, num2: number): number => {
    return (num1+num2)/2
}
// console.log(averageOfTwo(3, 7)); // => 5
// console.log(averageOfTwo(16, 5)); // => 10.5
// console.log(averageOfTwo(2, 7.5)); // => 4.75

const divideByThree = (num: number): number => {
    return num/3
}
// console.log(divideByThree(9)); // => 3
// console.log(divideByThree(15)); // => 5
// console.log(divideByThree(98)); // => 32.666666666666664


const whisper = (str: string): string => {
    return '...' + str.toLowerCase() + '...'
}
// console.log(whisper("Hey Buddy")); // => "...hey buddy..."
// console.log(whisper("YEA! that was fun")); // => "...yea! that was fun...

const averageOfFour = (num1: number, num2: number, num3: number, num4: number): number => {
    return (num1+num2+num3+num4)/4
}
// console.log(averageOfFour(10, 10, 15, 5)); // => 10
// console.log(averageOfFour(3, 10, 11, 4)); // => 7
// console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

const yell = (str: string): string => {
    return str.toUpperCase() + '!!!'
}
// console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
// console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"

const echo = (str: string): any => {
    console.log(str.toUpperCase() + ' ... ' + str + ' ... ' + str.toLowerCase())
}
// echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
// echo("hey"); // => prints "HEY ... hey ... hey"
// echo("JUMp"); // => prints "JUMP ... JUMp ... jump"