// Primitive Data Types Summary

// 7 Primitive Data Types in JavaScript:
// String , Number , null , undefined , Boolean , Symbol , BigInt

// how to declare symbols
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

// Symbol is used to create unique identifiers for object properties


// Reference Data Type: (Non-Primitive)
// Arrays , Objects , Functions 

const heros = ["shaktiman" , "naagraj" , "doga"];

const myObj = {
    name : "Satvik",
    age : 21,
    isLoggedIn : false
};

const myfunction = function myFunc(){
    console.log("Hello World");
}
myfunction();
// Summary:
// Primitive data types are stored directly in the location that the variable accesses.
// Reference data types are stored in heap memory, and the variable contains a reference to that memory location.
// Primitive types are immutable (cannot be changed), while reference types are mutable (can be changed).
// Understanding these differences is crucial for effective programming in JavaScript.


