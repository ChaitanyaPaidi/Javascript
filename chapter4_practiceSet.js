// 1. what will be the following result in javascript -> console.log("Java\"".length)
console.log("Java\"".length)

// 2.Explore the includes, startswith and endswith function of a string
const sentence='The quick brown fox jumps over a lazy dog'
const word='fox2'
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`)

console.log(sentence.startsWith("The"))
console.log(sentence.endsWith("og"))

// 3. Write a program to convert a given string to lowercase
let g="JAVASCRIPT"
console.log(g.toLowerCase())

// 4.Extract the amount out of this string "Please give Rs 1000"
let s="Please give Rs 1000"
let amount=s.slice("Please give Rs ".length)
console.log(amount)

// 5. Try to change 4th character of a given string were you able to do it
//No because of strings are immutable 