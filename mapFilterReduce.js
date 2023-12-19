let arr=[45,67,89]

//Array map method-> Creates a new array by performing some operation on each array element
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(a)
console.log("\n")

//Array filer method-> Filters an array with values that satisfies the given condition and creates a new array
let arr2=[34,5,6,23,34,5]
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2)
console.log("\n")

//Array reduce method-> 
let arr3=[23,3,454,623,4,5,]
let a3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)

//THIS IS JUST ANOTHER WAY TO USE REDUCE FUNCITON THAT MEANS WE CAN EVEN PASS FUNCITON AN ARGUMENT TO THE REDUCE METHOD AND WORKS THE SAME
// const reduc_func=(h1,h2)=>{
//     return h1+h2
// }
// let newarr3=arr3.reduce(reduc_func)
// console.log(newarr3)