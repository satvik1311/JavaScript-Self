// Map functions:
// ===============================
// JavaScript map() Method Notes
// ===============================

// map() ek array method hai
// Ye ek NEW array return karta hai
// Har element ko modify/transform karta hai


// -------------------------------
// Syntax
// -------------------------------

// array.map(callback(element, index, array))

// Common use:
// array.map((item) => transformation)


// -------------------------------
// Kaise kaam karta hai
// -------------------------------

// 1. Har element pe loop chalta hai
// 2. Har element pe transformation apply hota hai
// 3. Result ek naye array me store hota hai


// -------------------------------
// IMPORTANT: return keyword
// -------------------------------

// Agar {} use karte ho to return likhna zaruri hai
// Arrow function ke short form me return automatically hota hai


// -------------------------------
// map vs filter
// -------------------------------

// map -> modify/transform elements
// filter -> select/remove elements


// -------------------------------
// Important Points
// -------------------------------

// 1. Original array change nahi hota
// 2. New array return hota hai
// 3. Har element ka output array me same length maintain hota hai
// 4. Callback function transformed value return karta hai


// -------------------------------
// Real-life use cases
// -------------------------------

// - Data transformation (API response format karna)
// - UI rendering (React me lists display karna)
// - Values modify karna (price, names, etc.)


// ===============================
// END
// ===============================

// Chaining:

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => 
//     num+10;
// )
const newNums = myNums
                    .map( (num)=> num*10 )
                    .map( (num) =>  num + 1 )
                    .filter( (num)=> num>40 )
console.log(newNums);






