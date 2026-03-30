//  for of loop
// array specific loop hote h
/*
const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
    
    
} 

const greetings = "Hello world";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
    
}
*/
// Maps

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

console.log(map);
for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
    
    
}

const myObj ={
    'game 1' : "NFS",
    'game 2' : "Spiderman",

}
// for (const [key,value] of myObj) {
//     console.log(`${key} :- ${value}`);
    
    
// }
// object mai jesa map[key,value] pe for-of loop se iterate krte h waisa possible ni hoga  object per


