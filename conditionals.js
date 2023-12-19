const x='10'
if(x==10)
    console.log("x is 10")
//Here though 10 is declared as string and when we compares it  with a number it still works and that's what we use '==' for. 
//It checks independent of the datatype used

const y='10'
if(y===10)
    console.log("y is 10")
//And whereas '===' works as we expected for '==' 
const z=10
if(z==10)
    console.log("z is 10")

let c=10
const color=c>10?'red':'purple'
console.log(color)
switch(color){
    case 'red':
        console.log("color is red")
        break;
    case 'purple':
        console.log("color is purple")
        break;
    default:
        console.log("color is neither red nor purple")
        break;
}