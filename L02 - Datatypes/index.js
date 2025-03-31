// Datatypes
// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.
let num = 25;
console.log(num);
console.log(typeof num );

//2.String - Represents a sequence of characters.
let name1 = 'siva';
console.log(name1);
console.log(typeof name1);

//3.Boolean - Represents a logical entity and can have two values: true or false.
var bool = false;
console.log(bool);
console.log(typeof bool);

//4.Undefined - A variable that has been declared but not assigned a value.
const emptyTxt = undefined;
console.log(emptyTxt);
console.log(typeof emptyTxt);


//5.Null - Represents the intentional absence of any object value.
let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);
console.warn('demo')
console.error('demo')


//6.Symbol - Represents a unique and immutable value, often used as object property keys.
let sym = Symbol('key');
console.log(sym);
console.log(typeof sym);

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).
let bigNUm = 875445054794544n;
let bigNum1 = BigInt(5654646494955465);
console.log(bigNUm);
console.log(bigNum1);
console.log(typeof bigNUm);
console.log(typeof bigNum1);        

//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/
let person={
    nameOfPerson : 'Siva',
    age : 25,
    valid : true,

};

console.log(person);
console.log(person.age);
console.log(person.nameOfPerson);
console.log(person.valid);
//2.Array
//A special type of object used for storing ordered collections of values.
let arr = [1,1213184n,'c','siva',10.32];
console.log(arr);
console.log(arr[2],arr[4]);

//3.Function
//A special type of object that is callable and can perform an action.
function fname(){
    console.log("Hi i'm siva");
}
fname();  //calling function

//4.Date - A built-in object for handling dates and times.
function todayDate(){
    let a = new Date();
    console.log(a);
}
todayDate();
