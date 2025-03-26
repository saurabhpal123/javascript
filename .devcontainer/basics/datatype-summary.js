//Primitive datatype 
// 7 Types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456789234123n


//non primitive datatype or reference type
// Array, Objects, Function

const heros = ["shaktiman", "nagraj", "denga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "saurabhSurya"
let anothername = myYoutubename
anothername = "surabnaua"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "saurabh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// stack give copy but heap give reference