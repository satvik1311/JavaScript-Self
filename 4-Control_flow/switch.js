const month = 3;
switch (month) {
    case 1:
        console.log("january");                
        break;
    case 2:
        console.log("FEb");                
        break;
    case 3:
        console.log("MArch");                
        break;
    case 4:
        console.log("April");                
        break;

    default:
        console.log("No month to be displayed");
        
        break;
}

// truthy value
const userEmail="satvik@ai";
if(userEmail){
    console.log("Got user email");
    
}
else {
    console.log("User does not have email");
    
}

// falsy values
//  false , 0 , -0 , BigInt : 0n . "", undefined , null . NaN

// truthy value
//  "0" , 'false' , "false" , " ", {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1);

val2 = null ?? 10
console.log(val2);


// ternary operatior
const iceTea = 100;
iceTea>=90 ? console.log("more than 80") : console.log("less than 80");

