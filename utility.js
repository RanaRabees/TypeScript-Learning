// // -------------------------------------------- TypeScript Utility Types
// console.log('TypeScript Utility Types');
// // Partial
// interface Point {
//     x: number;
//     y: number;
//   }
//   let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
//   pointPart.x = 10;
//   console.log(pointPart);
// // Required
// interface Car {
//     make: string;
//     model: string;
//     mileage?: number;
// }
// let myCar: Required<Car> = {
//     make: 'GLI',
//     model: 'Rana',
//     mileage: 12000 // `Required` forces mileage to be defined
// };
// console.log(myCar);
// // Record
// const nameAgeMap: Record<string, number> = {
//     'Rana': 21,
//     'Rabees': 25
// };
// console.log(nameAgeMap);
// // Omit
// interface Person {
//     name: string;
//     age: number;
//     location?: string;
//   }
//   const bob: Omit<Person, 'age' | 'location'> = {
//     name: 'Rana'
//     // `Omit` has removed age and location from the type and they can't be defined here
//   };
//   console.log(bob);
// // Pick
// interface Person {
//     name: string;
//     age: number;
//     location?: string;
//   }
//   const bob: Pick<Person, 'name'> = {
//     name: 'Bob'
//     // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
//   };
//   console.log(bob);
// // Exclude
// type Primitive = string | number | boolean;
// const value: Exclude<Primitive, string> = true;
// // a string cannot be used here since Exclude removed it from the type.
// console.log(typeof value);
// // ReturnType
// type PointGenerator = () => { x: number; y: number; };
// const point: ReturnType<PointGenerator> = {
//   x: 10,
//   y: 20
// };
// // Parameters
// type PointPrinter = (p: { x: number; y: number; }) => void;
// const point: Parameters<PointPrinter>[0] = {
//     x: 10,
//     y: 20
// };
// // Readonly
// interface Person {
//     name: string;
//     age: number;
// }
// const person: Readonly<Person> = {
//     name: "Dylan",
//     age: 35,
// };
// person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
