class person {

    //Constructor Block 
    constructor(FirstName, LastName, DOB, PhoneNo, IsEmp ){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DOB = DOB;
        this.PhoneNo = PhoneNo;
        this.IsEmp = IsEmp;
    }

    //Function Block
    getDetails (){
        const age = new Date().getFullYear() - this.DOB;
        console.log(`${this.FirstName} ${this.LastName} your age is ${age} year's old`);
    }

    empDetails (){
        console.log(`${this.FirstName} ${this.LastName} your employeed :${this.IsEmp ? 'Employee' : 'Not Employee'}`)
    }
}

//Calling functions with Obj creation
console.warn('*************');
    
let emp = new person('Siva', 'sankar', 1999, 9012357891,false);
emp.getDetails();
emp.empDetails();

console.error('*************');

let emp1 = new person('Karthik','S',1994,7811911567,true);
emp1.getDetails();
emp1.empDetails();

console.warn('*************');
