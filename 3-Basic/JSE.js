// ===============================
// JAVASCRIPT EXECUTION CONTEXT
// ===============================

// JavaScript code 2 phases me run hota hai:

// 1) MEMORY CREATION PHASE (CREATION PHASE)
// - Variables ke liye memory allocate hoti hai
// - Variables ko initial value: undefined
// - Functions poore store ho jaate hain

// 2) EXECUTION PHASE
// - Code line by line execute hota hai
// - Variables ko actual values milti hain
// - Calculations perform hoti hain


// ===============================
// EXECUTION CONTEXT TYPES
// ===============================

// 1) GLOBAL EXECUTION CONTEXT (GEC)
// - Sabse pehle create hota hai
// - 'this' keyword yaha point karta hai:
//      Browser → window
//      Node.js → global

// 2) FUNCTION EXECUTION CONTEXT (FEC)
// - Har function call pe naya context banta hai
// - Isme hota hai:
//      - Local variables
//      - Arguments
//      - Scope chain

// - Function complete hone ke baad:
//      → ye context delete ho jata hai
//      → control wapas Global Execution Context me jata hai

// 3) EVAL EXECUTION CONTEXT
// - eval() se banta hai
// - Rarely use hota hai (generally avoid)


// ===============================
// EXECUTION FLOW
// ===============================

// Step 1: Global Execution Context create hota hai
// Step 2: Memory Creation Phase run hoti hai
// Step 3: Execution Phase run hoti hai

// Step 4: Jab function call hota hai:
//      → New Execution Context banta hai
//      → Uska bhi Memory + Execution Phase run hota hai

// Step 5: Function khatam hone ke baad:
//      → Execution Context destroy ho jata hai
//      → Control wapas Global Execution Context me aata hai


// ===============================
// IMPORTANT NOTE
// ===============================

// Har function ke liye:
// → New Variable Environment + Execution Thread banta hai

// Return hone ke baad:
// → Control wapas Global Execution Context me chala jata hai


// ===============================
// SIMPLE EXAMPLE
// ===============================

var a = 10;

function add(num1, num2) {
    var total = num1 + num2;
    return total;
}

var result = add(5, 3);

// Memory Phase:
// a → undefined
// add → function definition
// result → undefined

// Execution Phase:
// a → 10
// result → 8


// ===============================
// CALL STACK (Execution Stack)
// ===============================

// Call Stack ek data structure hai (LIFO - Last In First Out)
// - Jo function sabse last me aata hai, wo sabse pehle execute hoke bahar jata hai

// Iska kaam:
// → Execution Context ko manage karna
// → Track karna kaunsa function run ho raha hai


// ===============================
// WORKING OF CALL STACK
// ===============================

// Step 1: Sabse pehle Global Execution Context stack me push hota hai

// Step 2: Jab function call hota hai:
// → Uska Execution Context stack me push hota hai

// Step 3: Jab function complete hota hai:
// → Uska context stack se pop (remove) ho jata hai

// Step 4: Control next context pe chala jata hai


// ===============================
// EXAMPLE
// ===============================

function one() {
    console.log("one");
    two();
}

function two() {
    console.log("two");
    three();
}

function three() {
    console.log("three");
}

one();


// ===============================
// CALL STACK FLOW
// ===============================

// Initial:
// [ Global Execution Context ]

// one() call:
// [ GEC, one() ]

// two() call:
// [ GEC, one(), two() ]

// three() call:
// [ GEC, one(), two(), three() ]

// three() finished:
// [ GEC, one(), two() ]

// two() finished:
// [ GEC, one() ]

// one() finished:
// [ GEC ]


// ===============================
// IMPORTANT POINTS
// ===============================

// ✔ Stack follows LIFO (Last In First Out)
// ✔ Har function ka apna execution context hota hai
// ✔ Stack overflow tab hota hai jab recursion limit cross ho jaye

// Example of Stack Overflow:
function test() {
    test(); // infinite recursion
}
test();

// → Error: Maximum call stack size exceeded