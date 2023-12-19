const a1=['a','b','c','d']
const a2=['e','f','g','h']
const r=[...a1,...a2]
console.log(r)

const array2D = [1,2,3,[4,5,6],7,[8,9]]
const anotherArray=array2D.flat(Infinity)//flat returns a new array with all sub arrays concatenated into it recursivey and you can pass the depth as an arguement to it, specifies the no.of instances of sub arrays you want to merge with.
console.log(anotherArray)

console.log(Array.isArray("chaitanya"))
console.log(Array.from("chaitanya"))// converts the given string into an array
console.log(Array.from({n:"chaitanya"}))//Returns an empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3))
