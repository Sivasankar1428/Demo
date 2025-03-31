// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */

// Calling the function

// function fname (){
//     console.log('Hi Guys');
// }
// fname();


// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/


// function fname(a,b){
//     console.log(a+b);
// }
// fname(10,20);


// Default Parameter

// function fname(colour = 'Red'){
//     console.log(`The colour is ${colour}`);
// }
// fname('Black');
// fname();

// Function with Return Type

// function fname (a,b){
//     return a+b;
// }
// let nums = fname(10,20);   
// console.log(nums);


///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/

// With Argument

let fname = function(){
    console.log('Hi');
}
fname();
// Function Expression with Return Type

let ffname = function(a,b){
    return a+b;
}
console.log(ffname(10,20));

///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.
const fname1 =(nName)=>{
    return `Hi it's ${nName} here?`;
}

console.log(fname1('Siva'));


// With Argument

// Arrow Function with Return Type

// Shorter Way
const fname2 =(a,b)=>a-b;
console.log(fname2(10,20));

//Function Calling Other Function


function fnname (Nname){
console.log(`Hi ${Nname} welcome`);
}


function fnname1 (Nname){
    let personName = Nname;
    fnname(personName);
}
fnname1('Sivasankar');
//Anonymous Functions: Later on Course on Arrays

setTimeout (()=>{
    console.log('siva');
},2000);
/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */
