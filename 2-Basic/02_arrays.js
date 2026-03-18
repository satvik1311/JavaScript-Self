const marvel_heroes = ["thor" , "IronMan" , "Spiderman"];

const dc = ["superman" , "flash" , "batman"];

// marvel_heroes.push(dc);

// console.log(marvel_heroes); // ye kya krta h existing array mai ak array dadega if oush methd use krenge to 


// const all = marvel_heroes.concat(dc); // ye kya krta h new array mai ak merged array dadega if concat methd use krenge to 

// console.log(all);


// spread operator

const all_new_heroes = [...marvel_heroes , ...dc]; // ye kya krta h new array mai ak merged array dadega if spread operator use krenge to 

// console.log(all_new_heroes);

// Flat method 

const newArr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]];

// console.log(newArr.flat(Infinity)); // ye kya krta h nested array ko single level array mai convert krta h if flat method use krenge to  Infinity is used to flatten the array to any depth.


// string ko array banan gho to .from use krlo 
const str = "Hello World";

const arrFromStr = Array.from(str);
console.log(arrFromStr);