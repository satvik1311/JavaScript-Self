// signleton

const tinderUser = new Object();


 tinderUser.id = "123abc";
 tinderUser.name = "Satvik";
 tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Satvik",
            lastname: "Gaur"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
};

const obj2 = {
    3: "c",
    4: "d",
};
const obj4 = {
    5: "e",
    6: "f"
}

// combining objects

// const obj3 = { obj1 , obj2}  //is trh object ke andar object ajayega just like array
// console.log(obj3);

const obj3 = Object.assign({} , obj1 , obj2,obj4)
// console.log(obj3);

// using spread operator 

const obj_sp = {...obj1,...obj2,...obj4};
// console.log(obj_sp);


// jab database se value ati h 

const users = [
    {
        id: 1,
        email:"satvik@gmail.com"
    },
     {
        id: 2,
        email:"satvik2@gmail.com"
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
