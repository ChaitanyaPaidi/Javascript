//object is a group of key-value pair
//key : value ->Property
//key : function -> method 
let obj={
    name:"Java",
    Lastname:"script",
    address:{
        city:"None",
        state:"None"
    }
    ,age:35,
    nums:[1,2,3,4,5,],
    hello: function(){
        console.log("Hello function is called ")
    }
}

    // console.log(obj.name)
    // console.log(obj.Lastname)
    // console.log(obj.address)
    // console.log(obj.age)
    // console.log(obj.nums)
    // obj.hello()
    // obj.name

    console.log(obj)//You can directly print all the key-value pairs that have been put under the object

    //SET/UPDATE-You can set new values and update with new entries as well which is as follows 
    obj.age=16
    obj.friends=["a","b","c","d"]
    console.log("---------------------------------------------------------")
    console.log(obj);
    
    //delete-using delete we can delete a specified key
    delete obj.address
    console.log(obj) 

    //for in loop and another way to access the elements of an object
    for(let key in obj){
        console.log(key,":",obj[key])
    }

    //Another example
    let d="age"
    console.log(obj.age)
    console.log(obj["age"])//Like arrays we can use indexing method against a key to access the value assigned to that specified key
    console.log(obj[d])
    console.log(obj.xyz)//When you try to print the value for a key that does'nt exist in the defiend object, it prints undefined

    //Destructuring - Making the keys as variables and accessing their value directly without using the object in the console statement
    let{name,Lastname}=obj
    console.log(name,Lastname)
    
//Object literals with arrays
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
console.log(todos[0].text)
console.log(todos[1].isCompleted)
console.log(todos[2].text)

//Looping through object literals/arrays with a for loop
for(let t of todos){
    console.log(todos.text)
}

//Looping through object literals/arrays with a for each loop
todos.forEach(function(todo) {
    console.log(todo.text)
});
//So whenever, after writing a js code and use it to get the desired results in the sever side, the Js code is converted into JSON code
//Using the following code we can see the converted version of our java code for the object todos defined above
const todoJSON=JSON.stringify(todos)
console.log(todoJSON)

