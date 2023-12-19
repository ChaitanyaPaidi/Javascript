// 1. Use logical operators to find out whether the age of a person lies between 10 and 20
let age=20
if(10<=age<=20){
    console.log("Yes")
}
else{
    console.log("No")
}

// 2. Demonstrate the use of switch case statements in js


// 3. Write a Js program to find out whether a number is divisible by 2 and 3
let number=25
if(number%2==0 && number%3==0){
    console.log("Yes")
}
else{
    console.log("No")
}

// 4. Write a Js program to find out whether a number is divisible by either 2 or 3
let n=86
if(n%2==0 || n%3==0){
    console.log("Yes")
}
else{
    console.log("No")
}

//5. Print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary operator
let a=78
a>18?console.log("Yes"):console.log("No")