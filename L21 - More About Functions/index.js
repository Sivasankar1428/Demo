
//Normal Function

function fname(){
    return 'Started';
}

//higher order function

function calling (StartName, NameBy){
    const message = NameBy();                   //calling Function
    console.log(`${message} by ${StartName}`);
}
calling('siva',fname);


//Pure Function
function add(a,b){
    return a+b;
}

console.log(add(2,4));
console.log(add(2,4));

//Impure Function
let a = 0;
function inc (value){
    a += value;
    return a;
}

console.log(inc(2));
console.log(inc(2));
console.log(inc(2));