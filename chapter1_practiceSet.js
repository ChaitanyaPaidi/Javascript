//1. Create a variable of type string and try to add a number to it
let a="Hello"
console.log(a+20)//The number gets concatenated with the string


//2. Use typeof operator to find the datatype of the string in the last question
console.log(typeof (a+20))

//3. create a const object in js. Can you change it to hold a number later?
const b={
    name:"Javascript",
    section: 1
}
// b=90 The answer is no you cannot change it

//4. Try to add a new key to the const object in problem 3 
b['friend']="Java"//Updation to a js object
console.log(b)

//5. Write a js program to create a word-meaning dictionary of five words
let dictionary={
    Selenophile:"Person who is Obsessed with moon",
    Aurora:"Natural color emission in the sky",
    Bioluminescence:"Emission of light from aqua life",
    blackhole:"Nothing has enough energy to escape its horrizon"
}
console.log(dictionary);

