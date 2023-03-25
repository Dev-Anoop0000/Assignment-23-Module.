let type = "Type of Data :";
let exp = "Example :=> ";


let Que_1 = `Question-1 :- Specify an example for all the datatypes in javascript , store the values in a variable , and verify the typeof value store.`;
console.log9=(Que_1,"\n");
let Ans_1 = `Answer-1 :- `;
console.log(Ans_1);

// 1. String.....
let var1 = "I am happy to be String."
console.log(type, typeof var1);
console.log(exp, var1, "\n");

// 2. Number.....

    // i). Integer.....
    let var2A = 9;
    console.log(type, typeof var2A);
    console.log(exp, var2A, "\n");

    // ii). Float.....
    let var2B = 2.5;
    console.log(type, typeof var2B);
    console.log(exp, var2B, "\n");

    // iii). Infinty......
    let var2C = Number.POSITIVE_INFINITY;
    console.log(type, typeof var2C);
    console.log(exp, var2C, "\n");

    //iv). Not a Number....
    let var2D  = NaN;
    console.log(type, typeof var2D);
    console.log(exp, var2D, "\n");

// 3. Bigint......
let var3 = 10245n;
console.log(type, typeof var3);
console.log(exp, var3, "\n");

// 4. Boolean....
let var4 = true;
console.log(type, typeof var4);
console.log(exp, var4, "\n");

// 5. Undefined.....
let var5 = undefined;
console.log(type, typeof var5);
console.log(exp, var5, "\n");

// 6. Null.....
let var6 = null;
console.log(type, typeof var6);
console.log(exp, var6, "\n");

// 7. Symbol.....
let var7 = Symbol("Anoop with PW Skills");
console.log(type, typeof var7);
console.log(exp, var7, "\n");

// 8. Object.....
let var8 = {name: "Anoop", mentor: "PW Skills", course: "Web Developement"};
console.log(type, typeof var8);
console.log(exp, var8, "\n");

// Answer 2 End......


// Thank You...