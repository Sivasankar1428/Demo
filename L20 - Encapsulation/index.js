class MoblieBank {
    #balance;

    constructor(StartingBalance){
            this.#balance = StartingBalance;
    }

    addMoney(money){
        if (money > 0) {
            this.#balance += money;
            console.log(`Added money is ${money} Rs, Total Balance is ${this.#balance} Rs`);
        }else{
            console.log('Invalid Transaction. Try again....!');
        }
    }

    debitMoney(money){
        if (money > 0 && money <= this.#balance) {
            this.#balance -= money;
            console.log(`Debited Money is ${money} Rs, Total Balance is ${this.#balance} Rs`);
        }else{
            console.log('Invalid Transaction. Try again....!');
        }
    }

    BalanceHistory (){
        return this.#balance;
    }

}

let add = new MoblieBank(1000);
console.log(`You Balance is ${add.BalanceHistory()} Rs`);
add.addMoney(5000);
add.debitMoney(650);
console.log(`You Balance is ${add.BalanceHistory()} Rs`);
