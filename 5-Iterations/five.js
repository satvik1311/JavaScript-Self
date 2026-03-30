// for Each
const coding = ["js","ruby","python","cpp","java"]

// coding.forEach( val => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })
const myCoding = [
    {
        langName : "Javascript",
        lanFile : "js"
    },
    {
        langName : "Java",
        lanFile : "js"
    },
    {
        langName : "python",
        lanFile : "py"
    }
]
myCoding.forEach((item) =>{
    console.log(item.langName);
    

})
