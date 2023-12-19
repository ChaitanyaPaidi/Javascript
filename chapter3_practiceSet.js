// 1. Write a program to print the marks of a student in an object using a for loop
student={
    "Chaitanya1":90,
    "Chaitanya2":80,
    "Chaitanya3":90
}
for(let i=0;i<Object.keys(student).length;i++){
    console.log(Object.keys(student)[i]+" -> "+ student[Object.keys(student)[i]])
}
// console.log(student)

// 2. Write a program in Q1 using for in loop

for(let i in student){
    console.log(student[i])
}

//3. write a program to print try again until the user enters the correct number
// let n=4
// let i
// while (i!=n) {
//     i=prompt("Enter a number")Note that prompt won't work in the editors since its defined in client side
//     console.log("Try again")
// }
// console.log("Success!")

// 4. write a function to find mean of five numbers
function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
console.log(mean(1,2,3,4,5))

// By using arrow function
const mean1=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}
console.log(mean1(1,2,3,4,5))