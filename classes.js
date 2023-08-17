// // -------------------------------------------- TypeScript Classes
// console.log('TypeScript Classes');
// // Members: Types
// class Person {
//     name: string;
// }
// const person = new Person();
// person.name = "RanaRabees";
// console.log(person);
// // Members: private
// class Person {
//     private name: string;
//     public constructor(name: string) {
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// const person = new Person("RanaRabees");
// console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
// // Members: Readonly
// class Person {
//     private readonly name: string;
//     public constructor(name: string) {
//         // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// const person = new Person("RanaRabees");
// console.log(person.getName());
// // Inheritance: Implements
// interface Shape {
//     getArea: () => number;
//   }
//   class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}
//     public getArea(): number {
//       return this.width * this.height;
//     }
//   }
//   const myRect = new Rectangle(10,20);
//   console.log(myRect.getArea());
// // Inheritance: Extends
// interface Shape {
//     getArea: () => number;
// }
// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) { }
//     public getArea(): number {
//         return this.width * this.height;
//     }
// }
// class Square extends Rectangle {
//     public constructor(width: number) {
//         super(width, width);
//     }
//     // getArea gets inherited from Rectangle
// }
// const mySq = new Square(20);
// console.log(mySq.getArea());
// // Override
// interface Shape {
//     getArea: () => number;
// }
// class Rectangle implements Shape {
//     // using protected for these members allows access from classes that extend from this class, such as Square
//     public constructor(protected readonly width: number, protected readonly height: number) { }
//     public getArea(): number {
//         return this.width * this.height;
//     }
//     public toString(): string {
//         return `Rectangle[width=${this.width}, height=${this.height}]`;
//     }
// }
// class Square extends Rectangle {
//     public constructor(width: number) {
//         super(width, width);
//     }
//     // this toString replaces the toString from Rectangle
//     public override toString(): string {
//         return `Square[width=${this.width}]`;
//     }
// }
// const mySq = new Square(20);
// console.log(mySq.toString());
// // Abstract Classes
// abstract class Polygon {
//     public abstract getArea(): number;
//     public toString(): string {
//       return `Polygon[area=${this.getArea()}]`;
//     }
//   }
//   class Rectangle extends Polygon {
//     public constructor(protected readonly width: number, protected readonly height: number) {
//       super();
//     }
//     public getArea(): number {
//       return this.width * this.height;
//     }
//   }
//   const myRect = new Rectangle(10,20);
//   console.log(myRect.getArea());
