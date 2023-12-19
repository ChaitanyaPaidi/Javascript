// filter()

const array =[1,2,3,4,5];

function transform(i){
  return i*2;
}
const ans = array.map(transform);
console.log(ans)



// map function()
const arr = [3, 8, 15, 22, 7, 14, 9, 4, 11, 18];

function even(n){
  return n%2===0;
}
function odd(n){
  return n%2!==0;
}

const evenNum = arr.filter(even);
const oddNum = arr.filter(odd);

console.log("Even numbers:", evenNum);
console.log("Odd numbers:", oddNum);