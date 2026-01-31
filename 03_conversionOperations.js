let score = true ;

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);
// NaN => Not a Number
// NaN is a type of number in JS
// NaN is falsy value

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// "" => 0
// " " => 0
// "satvik" => NaN
// null => 0
// undefined => NaN

//  for Boolean
let isLoggedIn = 1 ;

console.log(typeof isLoggedIn);
let valueInBoolean = Boolean(isLoggedIn);
console.log(typeof valueInBoolean);
console.log(valueInBoolean); 
// falsy values => 0 , "" , null , undefined , NaN , false
// truthy values => "satvik" , 33 , -33 , true , " " , [] , {} , function(){}   
//  for String
let someNumber = 33 ;       
let valueInString = String(someNumber);
console.log(typeof valueInString);
console.log(valueInString);
// String => "33"   
// Boolean => "true" / "false"
// null => "null"
// undefined => "undefined"
// NaN => "NaN"
// Object => "[object Object]"
