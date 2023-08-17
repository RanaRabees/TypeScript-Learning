// // -------------------------------------------- TypeScript Functions
// console.log('TypeScript Functions');
// // Return Type
// // the `: number` here specifies that this function returns a number
// function getTime(): number {
//     return new Date().getDate()
// }
// console.log(getTime());
// // Void Return Type
// function printHello(): void {
//     console.log('Hello!');
// }
// printHello();
// // Parameters
// function multiply(a: number, b: number) {
//     return a * b;
//   }
//   console.log(multiply(2,5))
// // Optional Parameters
// the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
// }
// console.log(add(2, 5))
// // Default Parameters
// function pow(value: number, exponent: number = 10) {
//     return value ** exponent;
// }
// console.log(pow(10));
// // Named Parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
