//tostring - converts to string

let num=[1,2,3,4]
let b=num.toString()
console.log(b)
console.log("\n")

//join() - joins each element of the array with the specified value
let c=num.join("and")
console.log(c)
console.log("\n")

//delete - deletes the specified index of array but leaves the space for it as it is denoting as <1 empty item>, you can check this by printing the lengths before and after deletion, there won't be any changes
let num1=[5,6,7,8]
console.log(num1.length)
delete num1[0]
console.log(num1)
console.log(num1.length)
console.log("\n")

//conacatenate - merges two arrays and returns the concatenation of the two arrays
let newArray=num.concat(num1)
console.log(newArray)
let num2=[9,10,11,12]
newArray=num.concat(num1,num2)//You can even concatenate more than two arrays
console.log(newArray)
newArray=num.concat(num1,num2,num)
console.log(newArray)
console.log("\n")


//sort - This sort function sorts the array in alphabetical order
let n=[34,2,3,5,6,78,34,2,35,67]
n.sort()
console.log(n)
console.log("\n")

//You can fix this using a user defined compare function
let compare=(a,b)=>{
    return a-b
}
n1=[34,2,3,5,6,78,34,2,35,67]
n1.sort(compare)
console.log(n1)
console.log("\n")

//reverse - reverses the original array
n1.reverse()
console.log(n1)
console.log("\n")

//splice - It primarly takes three arguments-> first one is the index from where you want to delete, second one is upto where you want to delete and teh remainig arguments are the elements that you want to insert in place of the deleted ones and it returns the deleted values by updating the array with added values
let n2=[24,34,23,56,778,90]
let res=n2.splice(2,4,20,40,3)
console.log(n2)
console.log(res)
console.log("\n")

//slice - slices out a piece from an array and it creates a new array
i=[24,34,23,56,778,90]
let newi=i.slice(3)
console.log(newi)