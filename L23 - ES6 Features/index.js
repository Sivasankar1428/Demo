/*
Arrow Functions
Variable Declarations
Template Literals
Object Destructuring
Default Parameters
Spread Operator
*/


//ES5 Arrow Functions
function add(a,b){
    return a+b;
}
console.log(add(4,5));

//ES6 Arrow Functions
const add1 = (a,b)=> a-b;
console.log(add1(1000,200))

//ES5 Variable Declarations
var num = 10; 

//ES6 Variable Declarations intro in this version 
let num1 = 10;
const num2 = 20;

//ES5 Template Literals
var name = 'Sivasankar';
console.log('Hello '+name+ ' !')

//ES6 Template Literals
console.log(`Hello ${name} !`)

//ES5 Object Destructuring
var emp = {firstName : 'Sivasankar', age: 25};
console.log(emp.firstName);
console.log(emp.age);

//ES6 Object Destructuring
const {firstName, age} = emp;
console.log(firstName);
console.log(age);

//ES5 Default Parameters
function fname (name){
    name = name || 'Guest';
    console.log('Hello '+ name + ' !');
}
fname();
fname('Siva');

//ES6 Default Parameters
function fname1(name = 'Guest'){
    console.log(`Hello ${name} !`);
}
fname1();
fname1('Sivasankar');

//ES5 Spread Operator
let arr = ['siva',25,4.2];
let arr1 = ['siva',25,4.5];
let arrConcat = arr.concat(arr1,arr);
console.log(arrConcat);

//ES6 Spread Operator
let combined = [...arr,...arr1,...arr]
console.log(combined);




 

