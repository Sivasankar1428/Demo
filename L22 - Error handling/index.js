class bank {
    emp = [
        {EmpName : 'Sivasankar', AccountNo : 5160 , PassWord : '123', Salary : 35000},
        {EmpName : 'Karthik', AccountNo : 5161 , PassWord : '123', Salary : 45000},
        {EmpName : 'Mallika', AccountNo : 5162 , PassWord : '123', Salary : 55000}
    ]

//console.log(bank);

printEmp (AccountNo){
    const result = this.emp.find((a)=>a.AccountNo === AccountNo);
    console.log(`Account Holder : ${result.EmpName} * Your Salary : ${result.Salary} Rs`);
}

getEmpDetails (AccountNo,PassWord){

    try {
        const result = this.emp.find((a)=>a.AccountNo === AccountNo);
        if (!result) {
            throw `Invalid Account No : ${AccountNo}`;
        }
        const PassWordCheck = result.PassWord === PassWord;
        if(!PassWordCheck){
            throw ` ${result.EmpName} you have entered Wrong password `;
        }
        return `Account Holder : ${result.EmpName} * Salary : ${result.Salary}`;
    } catch (error) {
       return error; 
    }
    finally{
        console.warn('Process Done');
    }
 }
}
    // try {
    //     const result = this.emp.find((a)=>a.AccountNo === AccountNo);
    //     if (result) {
    //         const PassWordCheck = result.PassWord === PassWord;
    //         if (PassWordCheck) {
    //             console.log(`Account Holder : ${result.EmpName} * Your Salary : ${result.Salary}`);
                
    //             return `Account Holder : ${result.EmpName} * Your Salary : ${result.Salary}`;
    //         }else{
    //            throw ` ${result.EmpName} * Your Password is Invalid !!!!`;
    //         }
    //     }else{
    //             throw `Invalid Account Number : ${AccountNo}`;
    //     }
    // } catch (error) {
    //    console.log(error); 
    // }
    // finally{
    //     console.warn('Process Done');
    // }



let paySlip = new bank();
// paySlip.printEmp(5160);
// paySlip.printEmp(5161);
// paySlip.printEmp(5162);

// console.warn('*********');
// paySlip.getEmpDetails(5166);
// paySlip.getEmpDetails(5162,'12');
// paySlip.getEmpDetails(5162,'123');
// console.warn('*********');
console.log(paySlip.emp);
paySlip.getEmpDetails(5160,'123');

const formID = document.getElementById('formData');
const submitID = document.getElementById('displayMessage')

formID.addEventListener('submit', function(event){
        event.preventDefault();

    const formData = new FormData(this);
    const request = {AccountNo : null , PassWord : ''};
    formData.forEach((value,key)=>{
        request[key]=value;
    });

    let IndBank = new bank();
    const responseDisplay = IndBank.getEmpDetails(Number(request.AccountNo),request.PassWord);
    submitID.innerHTML = responseDisplay;
    formID.reset();
});
