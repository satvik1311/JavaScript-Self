// object litrals 
const mySymbol = Symbol("key1");
const JsUser = {
    name: "Satvik",
    [mySymbol]: "mykey1",
    age: 22,
    location: "Dehradun",
    email: "satvik.gaur12@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday "]
};
// object mutable hote h aur inko access 
// ka do tareeka hote h dot notation aur bracket notation

// dot notation 
/*
console.log(JsUser.name);
console.log(JsUser.age);

// bracket notation
console.log(JsUser["location"]);
console.log(JsUser["email"]);
console.log(typeof mySymbol);


JsUser.age = 23; // object ke property ko update krna
console.log(JsUser.age);

// agar values ko change ni krna h to freeze mardo 
Object.freeze(JsUser);
JsUser.age = 24; // object ke property ko update krna
console.log(JsUser); // freeze krne ke baad age change ni hoga

*/

JsUser.greeting = function(){
    console.log(`Hello Js user, i am ${this.name}`);
}
JsUser.greeting()

 