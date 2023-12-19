//array declaration
//Note if you declare the array with "const" keyword, you cannot rewrite that array but you can add or remove elements to it
let arr=[1,2,3,4,5,];
console.log(arr)

//1.length
console.log(arr.length)
console.log("\n")

//Print using loops
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("\n")

//2.push and unshift
arr.push("Push pushes it to the Last")
arr.unshift("Unshift pushes to the front")
console.log(arr)
console.log("\n")
//You can put any type of data in teh the Javascript arrays

//3.pop and shift
arr.pop()//removes the last value of the array
arr.shift()//removes the first value of the array
console.log(arr)

//4.slice- works just like how slicing works in python ->(source,destination-1)
console.log(arr.slice(-7))
console.log(arr.slice())//prints all elements 
console.log(arr.slice(2,4))
//Also as we know that slicing doesn't change the original value of the array

//5.splice
arr.splice(2,1)//on it's call goes to index 2 and removes 1 element after it and then continues to print remaining 
console.log(arr)
//But note that it doesn't prints a copy, it updates the array and prints 

//6.indexof- when used by specifying a value, prints the index of that value
//7.includes- lets us know whether the specified value is presnt in the array or not
console.log(arr.indexOf(5))
console.log(arr.includes(4))
