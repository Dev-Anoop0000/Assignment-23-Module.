// Please run the program to see the output.....
//This program is about to know weekend....

console.log(`Questin-1 :- Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.`);

console.log("Answer-1 :-");

const prompt = require("prompt-sync")();
let day = prompt("Enter the day : ");

switch(day){
    case (("Monday") || ("monday")):
        console.log(`There are 5 day(s) until the weekend.`);
        break;

    case "Tuesday":
        console.log(`There are 4 day(s) until the weekend.`);
        break;
    case "Wednesday":
        console.log(`There are 3 day(s) until the weekend.`);
        break;
    case "Thursday":
        console.log(`There are 2 day(s) until the weekend.`);
        break;
    case "Friday":
        console.log(`There are 1 day(s) until the weekend.`);
        break;
    case "Saturday":
        console.log(`There are  0 day(s) until the weekend.`);
        break;
    case "Sunday":
        console.log(`Hello Boss , Today ! is sunday.`);
        break;
    default:
        console.log("Opps !!! , You entered invalid day name....");
    }
    

    // Answer-1 End.........