const name = "Satvik-fc";
const repoCount = 13;

// console.log(name + repoCount + " jod");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Ripper-fc");
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,2);
console.log(anotherString);

const new1 = "   satvik    ";
console.log(new1);
console.log(new1.trim());



const url = "https://satvik.com/satvik%20gaur";

console.log(url.replace('%20','-'));

console.log(url.includes('satvik'));

console.log(gameName.split('-'));



