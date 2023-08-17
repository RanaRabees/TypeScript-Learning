// // -------------------------------------------- TS Simple Types
// // Explicit of TypeScript
// let Explicit: string = "Explicit Type";
// console.log(Explicit);
// // Implicit of TypeScript
// let Implicit = "Implicit  Type";
// console.log(Implicit);
// // -------------------------------------------- TS Special Types
// // Any of TypeScript
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// console.log(u);
// // Any of TypeScript
// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v); // no error as it can be "any" type
// console.log(v);
// // Unknown of TypeScript
// let w: unknown = 1;
// w = "string"; // no error
// w = {
//     runANonExistentMethod: () => {
//         console.log("I think therefore I am");
//     }
// } as { runANonExistentMethod: () => void }
// // How can we avoid the error for the code commented out below when we don't know the type?
// // w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
// if (typeof w === 'object' && w !== null) {
//     (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// // Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// // Never of TypeScript
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
// console.log(x);
// // Undefined & Null of TypeScript
// let y: undefined = undefined;
// console.log(typeof y);
// let z: null = null;
// console.log(typeof z);
// // Undefined & Null of TypeScript
