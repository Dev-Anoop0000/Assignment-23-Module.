// Please run the program to see output.....

console.log(`Question-3 :- Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.`);
console.log("Answer-3 :- ");

const prompt = require("prompt-sync")();
let num = prompt("Enter the number  ; ");
if (num % 5 == 00 && num % 3 == 0){
    console.log("FizzBuzz");
}
else if (num % 3 == 0){
    console.log("Fizz");
}
else if (num % 5 == 0){
    console.log("Buzz");
}
else{
    console.log("Invalid Number");
}

// end program....