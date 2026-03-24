const user = {
    userName: "Satvik",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName} , Welcome to Website`);
        // console.log(this);
       //this keyword crrent context/value ki baat krta h        
        
    }
    

}
// user.welcomeMessage()
// user.userName = "Rashi"
// user.welcomeMessage() //Context change ho gya

// console.log(this);

// empty object

// function chai(){
//     console.log(this);

    
// }
// chai();


//  +++++++++++++++++++++++ Arrow Funvtion +++++++++++++++++++++++++

const chai = () => {
    let userName = "Satvik";
    console.log(this.userName);
    
}
// chai();

const addTwo= (num1 , num2) => {
    return num1+num2;
}
console.log(addTwo(3,4));

// basic way ^

// Implicit return 
const addTwoo= (num1 , num2) => (num1+num2);
console.log(addTwo(3,4));


// How to return an object 
const obj= (num1 , num2) => (
    {userName: "Satvik"}
);
console.log(obj());

