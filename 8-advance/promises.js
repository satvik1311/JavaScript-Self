// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography , network
//     setTimeout(function(){
//         console.log("Async Task is complete");
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log(`Promise Cosumed`);
    
// })  
 
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log(`Async Task 2`);
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// const promiseThree = new Promise( function(resolve , reject){
//     setTimeout(function(){
// resolve({username: "Satvik" , email: "satvik@evigway.com"}) //resolve ke parameter mai data pass kr skte ho
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// }) 

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Satvik", password: "123"})
//         }
//         else {
//             reject(`Error: Something went wrong`)
//         }

//     },1000)
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
    
// })
// .then((username)=>{
//     console.log(username);
    

// })
// .catch(function(err){
//     console.log(err);
    
// }).finally(()=>{
//     console.log(`The Promise is either resolved or rejected`);
    
// })



// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "JavaScript", password: "123"})
//         }
//         else {
//             reject(`Error: Js  went wrong`)
//         }

//     },1000)
// });

// async function consumePromisefive(){
//    try{
//      const response = await promiseFive
//     console.log(response);
//    }
//    catch(error){
//     console.log(error);
    
//    }
    
// }
// consumePromisefive()

// async function getAllUser(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//     } catch (error) {
//         console.log("e:",error);
        
        
//     }
// }
// getAllUser()


// same code in .then .catch


fetch('https://api.github.com/users/satvik1311')
.then((response)=>{
 return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((err)=>{
console.log(err);

})