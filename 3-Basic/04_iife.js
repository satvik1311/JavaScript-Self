// Immediately Invoked Function (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
})();
//  global scope ki wjh se polution hoti h kyi baar
//  to jab global scope ka pollution hatana ho to hum IIFE use krtlete h
// aur iska scope end krne ke liye ';' use krna padta hai 

((ans)=> {
    console.log(`DB is Gonna connect ${ans}`);
    
})("Satvik sir!");

// using arrow function bhi ye function kaam 
// krta h bas semicolon ka dhyan rkhna hota h 

