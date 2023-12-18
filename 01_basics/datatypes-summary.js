// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non primitive)

const id = Symbol('123')
const anotherId = Symbol('123');

// console.log(id === anotherId);


// Array, Objects, Functions

const heroes = ["Shaktiman", "naagraj", "doga"];

let myObj = {
    name: "kaustav",
    age: 27
}

const myFunction = function(){
    console.log("hello world")
}

// console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive types)

let myYoutubename = "kaustavmajumdar"

let anothername = myYoutubename

anothername = "davidBeckham";

// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
// console.log(userTwo)

userTwo.email = "user@yahoo.com";

console.log(userTwo);
console.log(userOne);
