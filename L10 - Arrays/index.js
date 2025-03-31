/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets
let arr =['siva', 10, 10.23,'c'];
console.log(arr);
arr[3]='sankar';
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    console.log(arr[i])
    
}


arr.push(12);       //adding last element 
console.log(arr);


arr.pop();          //remove last element
console.log(arr);

arr.unshift('welcome');     //add in front
console.log(arr);

arr.shift();            //remove first element 
console.log(arr);


arr.push(12);
arr.unshift('welcome');
console.log(arr);

//for each print element in line wise
arr.forEach(function(x){
    console.log(x);
});

//for Eaach in shorter way
arr.forEach((x,index)=>{ console.log(`${x} , ${index}`);});

//concat arrays
let arr3 = ['siva','sankar'];
let arr1 = ['pandian'];
let arr2 = [25];
let arrConcat = arr3.concat(arr1).concat(arr2);
console.log(arrConcat);

let arrConcat1 = arrConcat.concat(arr);
console.log(arrConcat1);

for (let a = 0; a< arrConcat1.length ; a++){
        console.log(arrConcat1[a]);
}

console.log(arrConcat1.lastIndexOf('sankar'));
console.log(arrConcat1.indexOf('sankar'));
console.log(arrConcat1.includes('siva'));
 

let emp = [
    {Id : 123, Name: 'Siva', Age : 25},
    {Id : 213, Name: 'Sankar', Age : 24},
    {Id : 342, Name: 'Raju', Age : 29}
]

console.log(emp);

emp.forEach((emp1)=>{
    console.log(`Employee Id: ${emp1.Id}`);
    console.log(`Employee Name: ${emp1.Name}`);
    console.log(`Employee Age: ${emp1.Age}`);
    console.log('--------------')
});

let findArr = emp.find((x)=>x.Id === 213);
console.log(findArr);

let b = emp.map((employee)=>{
    console.log(`Name : ${employee.Name}, DOB: ${new Date().getFullYear()-employee.Age}`)
})


// Accessing Array Elements:

// Change Value in Array

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/

/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length

// More Array Methods

/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/

/*
Remove element from array
Removes the last element from an array and returns that element.
*/

/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/

/*
Removes the first element from an array and returns that element.
*/

// Anonymous Functions

// Combining Arrays

// Finding an Element Index, If not found it will return -1

// Array with mixed data types

// Array of Employee Objects

//Fliters

// Map
