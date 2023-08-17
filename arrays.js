// // -------------------------------------------- TypeScript Arrays
// console.log('TypeScript Arrays!');
// // Array of TypeScript With Error
// const names: string[] = [];
// names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(names);
// // Array of TypeScript
// const names: string[] = [];
// names.push("Rana"); // no error
// names.push("Rabees"); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(names);
// // Readonly of TypeScript
// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// // names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// // try removing the readonly modifier and see if it works?
// console.log(names);
// // Type Inference of TypeScript
// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// // comment line below out to see the successful assignment 
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// // if you want to correct it so do this:
// // numbers.push(2);
// console.log(numbers);
// let head: number = numbers[0]; // no error
// console.log(head);
