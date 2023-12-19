let singleQuotes='String under single quotes'
let doubleQuotes="String under double quotes"
console.log(singleQuotes)
console.log(doubleQuotes)

//concatenation
console.log("The first senetence is "+singleQuotes)
console.log(singleQuotes.concat(" is a friend of ",doubleQuotes))


//length
let s='chaitanya'
console.log(s.length)


//slice - 0 to n-1
let sub="Javascript"
console.log(sub.slice(2,4))
console.log(sub.slice(2))

//replace
console.log(sub.replace("va","av"))



//toUppercase and toLowercase
console.log(s.toUpperCase())
console.log(s.toLowerCase())

//charAt,substring,charCodeAt
console.log(s.charAt(3))
console.log(s.substring(0,3))
console.log(s.charCodeAt(4))//Prints the ASCII code of the string that is present at the specified index

//split - splits the string on the basis of the specified value
console.log(s.split(""))
console.log(s.split("i"))

//join-joins all the values by placing a specified value at each element
//Also note that join only works on the string whose value already got splited by any value
let str1=s.split("")
let str=str1.join("+")
console.log(str)


//trim-removes unneccessary white spaces before start of the string and after it ends
let friend="     Javascript   "
console.log(friend)
console.log(friend.trim())



let fr="Raman"+"Shivika"+"Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])
console.log(fr[5])
console.log(fr)






