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

class JobDetails extends person {

    constructor(FirstName, LastName, DOB, PhoneNo, IsEmp,role, comapany){
        super(FirstName,LastName,DOB,PhoneNo,IsEmp);
        this.role = role;
        this.comapany = comapany;
    }

    getJobDetails(){
        console.log(`${this.FirstName} ${this.LastName} as a ${this.role} at ${this.comapany}`);
    }
    
}
let perSon = new JobDetails('Siva','Sankar',1999,9087654321,true,'Software Engineer','SwaaS Pvt Ltd');
perSon.getDetails();
perSon.getJobDetails();
perSon.empDetails();
