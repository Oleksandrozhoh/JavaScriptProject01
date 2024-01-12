// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// // any data type declared with let keyword
// let name = "Alex";
// let $function = 28;
// let PI = 3.14; // coustant values can be named with uppercase

// let notAssignedValue;
// console.log(typeof true);
// console.log(typeof "true");
// console.log(typeof 23);
// console.log(typeof notAssignedValue);
// console.log(notAssignedValue); // both DT and value will be equal to undifined

// // typeof error:
// console.log(typeof null); // prints object, which is not correct the typeof null is null (bug never corrected for legasy reasons)

// string litteral
const variable = "haha";
const str = `Im testing ${variable}`;
console.log(str);

// If statement
const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`here is your DL`);
} else {
  console.log(`you still need to wait ${18 - age} years before you can get DL`);
}

// type conversion (explicit casting)
console.log(Number("1") + 1); // === to 2
// type coercion
console.log("12" - "10"); // === 2 because - sign will trigger coersion from str to number

let n = "1" + 1;
n = n - 1; //=== will result in 10 because after the concationation - symbol will trigger the coercion

//truthy and falsy values
//Will result in false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));

//Will result in true
console.log(Boolean("Alex"));
console.log(Boolean({}));

let notDeclaredVariable;
if (notDeclaredVariable) {
  // type coercion will implicitly convert type to bool
  console.log("variable is declared");
} else {
  console.log("variable is NOT declared");
}

// equality operatiors
let age1 = 18;
if (age1 === 18) {
  //strict equality operator
  console.log("you are 18!");
} else {
  console.log("you are not 18");
}

let age2 = "18";
if (age2 == 18) {
  //loose equality operator
  console.log("you are 18!"); // will return true since after the coercion the values are the same
} else {
  console.log("you are not 18");
}

// prompt the user
// const value = prompt("what is your favourite number???");
// console.log(typeof value);
// console.log(typeof Number(value));

// switch statments: both syntax and concepts are the same as for java

const day = "monday";
switch (day) {
  case "monday":
    console.log("Monday is here");
    break;
  case "tuesday":
    console.log("Tuesday is here");
    break;
  case "wednesday":
    console.log("Wednesday is here");
    break;
  case "thursday":
    console.log("Thursday is here");
    break;
  case "friday":
    console.log("Friday is here");
    break;
  default:
    console.log("Option is not defined");
}

// expression: produces some kind of value
3 + 4;
19991;
(true && false) || !true;

// statement: does not produce value if statement, switch statement for example
if (23 > 10) {
  const str = "some string";
}

// conditional operator ( ternaries ) same syntax as in java === expression
const age3 = 23;
const answer =
  age3 >= 19 // assigning conditional statement result to a variable in a single line
    ? console.log("you can have some wine")
    : console.log("you are too yang to drink");

// sinse its an expression we can use it in a string litteral
const myString = `can I drink some wine? - ${
  age3 >= 19 ? "you can have some wine" : "you are too yang to drink"
}`;
console.log(myString);

const bill = 275;
let tip = bill > 50 && bill < 300 ? "15%" : "20%";
console.log(tip);
