// const coding = ["js","ruby","python","cpp","java"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
    
// })

// forEach kbhi return nhi krta h !


// console.log(values);

 /*
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) =>{ return num > 4}
// )
// console.log(newNums);

// using foreach
/*
const newNums = []
myNums.forEach( (num)=>{
 
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);



const books = [
    {title: 'Book one', genre:'Fiction' , publish:1981 , edition: 2004},
    {title: 'Book two', genre:'Non-Fiction' , publish:2000 , edition: 2008},
    {title: 'Book three', genre:'History' , publish:1999 , edition: 2007},
    {title: 'Book four', genre:'Non-Fiction' , publish:1989 , edition: 2007},
    {title: 'Book five', genre:'Science' , publish:2009 , edition: 2014},
    {title: 'Book six', genre:'Fiction' , publish:1987 , edition: 2004},
    {title: 'Book seven', genre:'History' , publish:1981 , edition: 2004},
    {title: 'Book eight', genre:'Science' , publish:2011 , edition: 2004},
    {title: 'Book nine', genre:'Non-Fiction' , publish:1981 , edition: 1998}
]

let userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction' && bk.publish >= 2000)
 
console.log(userBooks);
*/


// ===============================
// JavaScript filter() Method Notes
// ===============================

// filter() ek array method hai
// Ye ek NEW array return karta hai
// Sirf woh elements rakhta hai jo condition TRUE karte hain


// -------------------------------
// Syntax
// -------------------------------

// array.filter(callback(element, index, array))

// Common use:
// array.filter((item) => condition)


// -------------------------------
// Kaise kaam karta hai
// -------------------------------

// 1. Har element pe loop chalta hai
// 2. Agar condition true -> element include
// 3. Agar false -> skip


// -------------------------------
// IMPORTANT: return keyword
// -------------------------------

// Agar {} use karte ho to return likhna zaruri hai
// Arrow function ka short form me return automatically hota hai


// -------------------------------
// filter vs map
// -------------------------------

// filter -> select/remove elements
// map -> modify/transform elements


// -------------------------------
// Important Points
// -------------------------------

// 1. Original array change nahi hota
// 2. New array return hota hai
// 3. Callback function boolean return karta hai
// 4. Empty array bhi return ho sakta hai


// -------------------------------
// Real-life use cases
// -------------------------------

// - Data filtering (users, products, etc.)
// - Search functionality
// - Data cleaning


// ===============================
// END
// ===============================


// ===============================
// filter() - Real World Example
// ===============================

// Scenario:
// Ek e-commerce app me products ka data hai
// Hume sirf woh products chahiye:
// - category = 'electronics'
// - price < 50000
// - rating >= 4

const products = [
  { name: "Laptop", category: "electronics", price: 60000, rating: 4.5 },
  { name: "Phone", category: "electronics", price: 30000, rating: 4.2 },
  { name: "Shoes", category: "fashion", price: 2000, rating: 4.1 },
  { name: "Headphones", category: "electronics", price: 2000, rating: 3.8 },
  { name: "TV", category: "electronics", price: 45000, rating: 4.3 }
];

// filter apply
const filteredProducts = products.filter(product =>
  product.category === "electronics" &&
  product.price < 50000 &&
  product.rating >= 4
);

console.log(filteredProducts);

// Output:
// Phone, TV
// ===============================
