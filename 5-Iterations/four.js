const myObject = {
    js : 'javascript',
    cpp : "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
  
    console.log(`${key} is shortcut for ${myObject[key]}`);
    
    
}

// for in on arrays
const programming = ["js","rb","py","java","cpp"];
for (const key in programming) {
  console.log(programming[key]);
  
    
    
}

// for in on maps
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
for (const key in map) {
  
    
    console.log(key);
    
}

// it wont work because maps are not iterable