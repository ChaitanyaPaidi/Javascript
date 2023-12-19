let todos=[
    {
        id:1,
        text: 'Complete a YouTube video lecture🤩',
        isCompleted: true
    },
    {
        id:2,
        text: 'Text girlfriend and flirt her for atleast 10 minutes😉',
        isCompleted: true
    },
    {
        id:3,
        text: 'Getup from the beautiful dream since there is no girlfriend😪',
        isCompleted: false
    },
]
//Looping through object literals/arrays with a for loop
for(let t of todos){
    console.log(t.text)
}
console.log("\n")

//HIGHER ORDER ARRAY METHODS
//1.forEach
todos.forEach(function(todo) {
    console.log(todo.text)
});
console.log("\n") 

//2.map-map returns an array of elments, which are returned using a funciton inside it
const Ttext=todos.map(function(todo){
    return todo.text
})
console.log(Ttext)
console.log("\n") 

//3.filter- filter returns the values which are satisfies the given condition in a function inside it   
const to=todos.filter(function(todo){
    return todo.isCompleted==true;
})
console.log(to)
console.log("\n")

//map and filter
const dup=todos.filter(function(todo){
    return todo.isCompleted==true
}).map(function(todo){
    return todo.text
})
console.log(dup)
console.log("\n")