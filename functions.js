//Non primitive-> arrays,objects,functions

//1
function first(){
    console.log("Hello from the first function")
}
//functions in javascript returns anything that is meant to and you can call with anything in the function call 
//it executes and return what's that valid
first()
first(20)
first([1,2,3,])

//2
function name(chaitanya){
    console.log("Name recieved is ",chaitanya)
}
name()
name(20)
name([1,2,3,])
//Here in the first call since we did not sent any parameter it prints undefined

//3
function ReturnTest(){
    return "I returned"
}
let r=ReturnTest([1,4,5,66,7])
console.log(r)


//4
function test(){
    let r=Math.random()>0.5?true:"Less than 0.5"
    return r
}
console.log("Result is:",test())

//5 - Arrow functions
const dup=num1=>num1+5//This is another way of defining a function '=>' means returning what's there after this opeartor
console.log(dup(5))

//constructor function
function Person(firstName,LastName,dob){
    this.firstName=firstName
    this.LastName=LastName
    // this.dob=dob
    this.dob=new Date(dob)//The "Date" object is used to assign the actual date format unlike the one in the above line which takes it as a string
}

//Instantiate object
const p1=new Person('Chaiatanya','Paidi','5-6-2003')
const p2=new Person('Paidi','chaitanya','12-11-2004')
console.log(p1)
console.log(p1.dob)
console.log(p2.dob)
//And the Date object also has methods 
console.log(p1.dob.getFullYear())
console.log(p2.dob.getMonth())

//Using prototype property we will be able to get only the value and not it's key
Person.prototype.getFullName=function() {
    return `${this.firstName} ${this.LastName}`
}
console.log(p1.getFullName())
console.log(p1)


//class 
class person{
    constructor(firstName,LastName,dob){
        this.firstName=firstName
        this.LastName=LastName
        this.dob=dob
    }
    getBirthYear(){
        return this.dob.getFullYear()
    }
    getFullName(){
        return `${this.firstName} ${this.LastName}`
    }
}
const person1=new person('Chaiatanya','Paidi','5-6-2003')
const person2=new person('Paidi','chaitanya','12-11-2004')

console.log(person2.getFullName())
console.log(person1)
