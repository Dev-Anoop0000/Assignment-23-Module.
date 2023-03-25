// Please Run the program to see OUTPUT....
// Program for traffic light....

let Que_1 =`Question-1 :- Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop`;
console.log(Que_1);
let Ans_1 = "Answer-1 :-";
console.log(Ans_1);
let trafficalight = "green";

if (trafficalight == "red"){
    console.log("Vihicles must stop.");
}
else if (trafficalight == "orange"){
    console.log("Vehicles must wait. The signal is changing to red or green.");
}
else if (trafficalight == "green"){
    console.log("Vehicles may proceed with caution.");
}
else{
    console.log("Invalid traffic Light.");
}