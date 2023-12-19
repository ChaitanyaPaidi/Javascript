//1. for loop- Loops a block of code number of times
for(let i=0;i<5;i++){
    console.log(i)
}

//2. for-in loop- loops through the keys of an object
let obj={
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e"
}
for (let i in obj){
    console.log(i)
}
for(let i in obj){
    console.log(obj[i])
}

//3. for-of loop- loops through the values of an object
for (let i of "Javascript"){
    console.log(i)
}
for (let i of "Javascript"){
    console.log(i)
}
