// Reduce:
// ===============================
// JavaScript reduce() Method Notes
// ===============================

// reduce() ek array method hai
// Ye ek SINGLE value return karta hai (number, object, array, etc.)
// Pure array ko ek value me reduce/convert karta hai


// -------------------------------
// Syntax
// -------------------------------

// array.reduce(callback(accumulator, currentValue, index, array), initialValue)


// -------------------------------
// Kaise kaam karta hai
// -------------------------------

// 1. Har element pe loop chalta hai
// 2. accumulator value store karta hai (result)
// 3. currentValue current element hota hai
// 4. Har iteration me updated accumulator return hota hai
// 5. End me final accumulator value return hoti hai


// -------------------------------
// IMPORTANT: initialValue
// -------------------------------

// initialValue accumulator ki starting value hoti hai
// Agar initialValue nahi diya:
// - first element accumulator ban jata hai
// - iteration second element se start hota hai


// -------------------------------
// IMPORTANT: return keyword
// -------------------------------

// Agar {} use karte ho to return likhna zaruri hai
// Arrow function short form me return automatically hota hai


// -------------------------------
// reduce vs map vs filter
// -------------------------------

// reduce -> single value me convert karta hai
// map -> transform karta hai (same length)
// filter -> select/remove karta hai


// -------------------------------
// Important Points
// -------------------------------

// 1. Original array change nahi hota
// 2. Single value return hoti hai
// 3. accumulator har step pe update hota hai
// 4. Complex operations ke liye powerful method hai


// -------------------------------
// Real-life use cases
// -------------------------------

// - Total/sum calculate karna
// - Counting/grouping data
// - Object/array build karna
// - Complex data processing


// ===============================
// END
// ===============================


const myNums = [1,2,3]

// simple function:

// const sum = myNums.reduce( function(acc,cv)  { 
//     console.log(`acc: ${acc} curr value: ${cv}`);
    
//     return acc + cv },0  )

// arrow function
const sum = myNums.reduce( (acc,cv)=> (acc+cv),0 )

console.log(sum);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
      },
        {itemName: "py Course",
        price: 999
        },

        {itemName: "mobile dev Course",
        price: 5999
    },
        {itemName: "Data Science Course",
        price: 12999
    }
    
]

const totalPrice = shoppingCart.reduce( (acc,item) => (acc+item.price),0)

console.log(totalPrice);

