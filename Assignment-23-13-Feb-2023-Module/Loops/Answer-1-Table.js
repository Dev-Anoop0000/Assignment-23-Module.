// Please run the progrm too see the output...

console.log(`Question-1 :-  Write a program that generates the multiplication table in the textbook format for a given number.`);
console.log(`Answer-1 :- `);

let prompt = require("prompt-sync")();

let num = prompt("Enter the number which table , you want : ");
for (let i=1; i<=10; i++){
    console.log(`${num} * ${i} = ${num*i}`);
}

// Answer-1 End.....
