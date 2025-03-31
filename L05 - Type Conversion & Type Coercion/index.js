//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

// String to Number
let nName = '555';
console.log(typeof nName);
let num = Number(nName);
console.log(num);
console.log(typeof num);

// Number to String

let nNum = 555;
console.log(typeof nNum);
let Str = String(nNum);
console.log(Str);
console.log(typeof Str);

// Boolean to String
let Bool = true;
console.log(Bool);
console.log(typeof Bool);
let Str1 = String(Bool);
console.log(Str1);
console.log(typeof Str1);

// String to Boolean
let Str2 = 'true';
console.log(Str2);
console.log(typeof Str2);
let Bool1 = Boolean(Str2);
console.log(Bool1);
console.log(typeof Bool1);

// Parsing integers and floats

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number

// Boolean and Number

// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks
