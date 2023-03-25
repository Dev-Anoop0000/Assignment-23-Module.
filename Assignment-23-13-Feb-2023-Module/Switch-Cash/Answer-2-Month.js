// Please run the program to see the the output.

console.log(`Question-2 :- . Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.`);
console.log(`Answer-2 :-`);
const prompt = require("prompt-sync")();

let month_number = parseInt(prompt("Enter the month number : "));
console.log(typeof month_number);

switch(month_number){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 10:
        console.log("September");
        break;
    case 11:
        console.log("October");
        break;
    case 12:
        console.log("November");
        break;
    default:
        console.log(`Please enter the value between 1 to 12.`);
    }

    // Answer-2 End.....