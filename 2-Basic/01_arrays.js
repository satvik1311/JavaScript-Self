// arrays


// declaration of an array 
const myArr = [0,1,2,3,4,5];

const myHeroes = ['Shaktiman ' , ' arsh ', 'Satvik'];

const myArr2 = new Array(1,2,3,4,5,6,7,8);

// Array Methods


//  myArr.push(6);
//  console.log(myArr);
//  myArr.pop();
//     console.log(myArr);

//  myArr.unshift(0);
//  console.log(myArr);
//  myArr.shift();
//  console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); //Strring mai convert krdiya isne
// console.log(typeof newArr);
// console.log(myArr);


// Slice , Splice 
console.log("A ", myArr)    ;
const myn1 = myArr.slice(1,3);

console.log( myn1);
console.log("B ", myArr)    ;

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)    ;
console.log(myn2);


