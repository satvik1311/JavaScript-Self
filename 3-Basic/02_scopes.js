// ================== SCOPE FULL REVISION CODE ==================

// Global Scope (ye sab jagah accessible hota hai)
var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

console.log(globalVar);   // ✅
console.log(globalLet);   // ✅
console.log(globalConst); // ✅


// ================== BLOCK SCOPE ==================

if (true) {
    // let & const = block scope (sirf is {} ke andar kaam karega)
    let a = 10;
    const b = 20;

    // var = block ko ignore karta hai (function/global scope hota hai)
    var c = 30;

    console.log("Inside block:", a, b, c); // ✅ sab chalega
}

// console.log(a); ❌ error (block ke bahar access nahi)
// console.log(b); ❌ error
console.log(c); // ✅ chal gaya (var ka scene alag hai)


// ================== FUNCTION SCOPE ==================

function one() {
    const userName = "Satvik";

    function two() {
        const website = "YouTube";

        // inner function outer ko access kar sakta hai
        console.log("Inner function:", userName); // ✅
    }

    // console.log(website); ❌ outer inner ko access nahi kar sakta

    two();
}

one();


// ================== NESTED IF SCOPE ==================

if (true) {
    const userName = "Satvik";

    if (userName === "Satvik") {
        const website = "Google";

        // NOTE: yaha spelling galat likhoge toh error ayega
        console.log(userName + " " + website); // ✅
    }

    // console.log(website); ❌ yaha access nahi milega
}


// ================== HOISTING CONCEPT ==================

// var hoisting (undefined milega)
console.log(x); // undefined
var x = 5;

// let & const hoisting (error - TDZ)
 // console.log(y); ❌ Cannot access before initialization
let y = 10;


// ================== IMPORTANT NOTES ==================

/*
1. let & const = block scope
2. var = function/global scope (block ignore karta hai)

3. inner scope outer ko access kar sakta hai
   outer scope inner ko access nahi kar sakta

4. hoisting:
   var -> undefined
   let/const -> error (TDZ - Temporal Dead Zone)

5. best practice:
   ❌ var avoid karo
   ✅ let & const use karo

6. const ko reassign nahi kar sakte
   let ko kar sakte ho

7. debugging tip:
   spelling mistake (userName vs username) se bhi error aata hai
*/

// jab variables function hold krein to unko expression bol dete hai 

 console.log("Function 1 : "+ addone(5)); // yaha se access ho jayega ye when normally fumction ki trh treat kr rhe h 
function addone(num){
    return num+1;
}

//  but
// addTwo(5)
// lekinjab hum variables mai function define krte h 
// aur usko initialization se pehla use krte h to vo BT dega
const addTwo = function(num){
    return num+2;
}
console.log("Function 2 : "+ addTwo(5))
// correct way !


