// Decision Making: if, if...else, else if
console.log('Decision Making');

// Example 1: if statement
let age =83;
if(age >= 18 && age <=99){
    console.log('Eligible to enter');
}else{
    console.log('Not eligible to enter')
}


// Example 2: if...else statement
let aaddhar = true;
let pan = true;
let passport = true;
if (aaddhar == true) {
    
    if (pan == true) {
        
        if (passport == true) {
            console.log('Welcome abroad');
        }
        else{
            console.log('Sorry, try again,Passport is invalid');
        }
    }else{
        console.log('Sorry, try again,Pan Card is invalid');
    }
}else{
    console.log('Sorry, try again,Aadhar Card is invalid');
}


// Example 3: else if statement
let nName = 'Sivasankar'
let aaddhar1 = true;
let pan1 = true;
let passport1 = true;
if (nName == 'Sivasanka') {

    console.log('Checning atleast one document should available');

}
    else if(pan1 == true){
        console.log('Pan is vaild');

    }
    else if(aaddhar1 == true){
        console.log('Aaddhar is vaild');
    }

    else if(passport1 == true){
        console.log('Passport is vaild');
    }
    else{
        console.log('Bring Vaild proof');
    }



// Example 4: Nested if statements
// Variables

// Decision logic

// Switch Statement
let week =8 ;
switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Enter 1 to 7 value only ')
        break;
}

//Ternary Operator

let student = false;
let ID = student ? 'student':'Not a student';
console.log(ID)
