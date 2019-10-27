
// Variables 

var username = "John";
let lastname = "Carter" // let and var are nearly the same

const PI = 3.1415; // constant

console.log(PI)

// If-else statement

let passwordDB = "pepe123"
let input = "asdasdasdasd"

let result = input == passwordDB;


if (result == true){
    console.log("Correct login");
}
else {
    console.log("Incorrect password");
}

// Switch statement

let typeCard = "Nothing"

switch(typeCard){
    case "Debit Card":
        console.log("This is a Debit Card");
        break;
    case "Credit Card":
        console.log("This is a Credit Card");
        break;
    default:
        console.log("No card");
}

// While loop

let count = 50;

while(count > 0){
    console.log("Hello World");
    count--;
}

// For loop

let names = ["Ryan", "Joe", "John"];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// Functions 

function greeting(name) {
    console.log("Hello " + name);
}

greeting("Artur");