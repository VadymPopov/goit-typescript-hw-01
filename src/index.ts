import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

// Basic types
// const total: number = 100;
// const name: string = 'Vadym';
// let isActive: boolean = false;
// let empty: null = null;
// let nothing: undefined = undefined;


// Array
// const arr: number[] = [1,2,3,4,5,6,7,8,9,10,0];

// Object
// let user: {name:string, age:number} ={
//   name: 'Vadym',
//   age: 28
// };

// type User = {
//   name: string;
//   age: number;
// }

// const userTwo: User = {
//   name: 'Alina',
//   age: 25
// }


// type eventType = 'lesson' | 'deadline';

// const event: eventType = 'deadline';

// let age: any = 10;
// age = 'Peter';


// let something: unknown =  'Bobby';

// something = 12;

// something.toFixed(2);

// type size = 'small' | 'medium' | 'large';


// Enum
// enum Sizes {
//   small = 'small',
//   medium = 'medium',
//   large = 'large'
// }


// const buttonTwo: size = 'large';
// const buttonThree: Sizes = Sizes.large;


// Function
// 1. Void
// function addString(numOne: number, numTwo: number): void{
//   console.log(numOne + numTwo);
// }

// addString(5,10);


// type User = {
//   name: string;
// }

// function greating (user: User):void{
//   console.log(`Hello ${user.name}`);
// }

// greating({name: 'Vadym'});



// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// }

// function userConstructor(name: string, age: number, hobby:string): User {
//   return {
//     name,
//     age,
//     hobby
//   }
// }


// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string)=>{};

// }

// const Car = {
//   color: 'red',
//   price: 1000,
//   currency: 'USD',
//   start(color){
//     console.log('Start'+ this.color)
//   }
// }

// Optional type
// type User = {
//   name: string;
//   age: number;
//   role?: string;
// }

// const userFour: User = {
//   name: 'Bob',
//   age: 24
// }

// const admin: User = {
//   name: 'Peter',
//   age: 42,
//   role: 'Admin'
// }





