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

class studentDetails extends person{
    constructor(FirstName, LastName, DOB, PhoneNo,School,Std){
        super(FirstName,LastName,DOB,PhoneNo);
        this.School= School;
        this.Std = Std;
    }

    getDetails (){
        const age = new Date().getFullYear() - this.DOB;
        console.log(`${this.FirstName} your age is ${age} year's old`);
    };

    empDetails(){
        console.log(`${this.FirstName} ${this.LastName} your School name is ${this.School} and studying ${this.Std}`);
    };

}

let emp = new studentDetails('Siva','sankar',2014,6380775018,'Kings School','10th Std');
emp.getDetails();
emp.empDetails();