let num=[2,3,4,5,6]

//forEach loop-> Calls a function once for each array element
num.forEach((element)=>{
    console.log(element*element)
})
console.log("\n")

//Array.from
let name="Javascript"
let arr=Array.from(name)
console.log(arr)
console.log("\n")

//for...of
for(let i of num){
    console.log(i)
}
console.log("\n")


//for...in
for(let i in num){
    console.log(num[i])
}