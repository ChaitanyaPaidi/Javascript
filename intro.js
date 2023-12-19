console.log("Helo Js world");

//const keyword
const x=23;
console.log(x)

//declare variable-let
let a;
//a is undefined currently
console.log(a);

a=10;
console.log(a);



a=9.3;
//Just add comma to contenate with a string
console.log("String conatenation",a);

//Other way
var age=19
console.log(`Age is ${age}`)

a="Hello";
console.log(a);

//variable types: primitive types: number,string,boolean,null,undefined;
//Note that Javascipt is very similar to Java
let number=10
let flag=0;
for(let i=1;i<=number;i++){
    console.log(i);
}
number=23;
for(let i=2;i<number;i++){
    if(number%i==0){
        flag=1
        break
    }
}
if(!flag) console.log(number," is prime")
else console.log(number," is not prime")
//Similarly we also have while loop and the working is same as how they do in other programming languages

//Math.round()
const c =7.7483
console.log(Math.round(c))
console.log(Math.trunc(c))


