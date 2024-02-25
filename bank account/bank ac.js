// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    // Initialize properties
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
}

// Example usage
const myAccount = new BankAccount('123456789', 'John Doe', 'Savings', 5000);

// Accessing properties
console.log(myAccount.accountNumber);  // Output: 123456789
console.log(myAccount.name);           // Output: John Doe
console.log(myAccount.type);           // Output: Savings
console.log(myAccount.balance);        // Output: 5000
// Adding the withdraw method to the BankAccount constructor
BankAccount.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
    } else {
        console.log("Insufficient funds. Withdrawal failed.");
    }
};

// Adding the checkBalance method to the BankAccount constructor
BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: $${this.balance}`);
};
// Adding the isActive method to the BankAccount constructor
BankAccount.prototype.isActive = function() {
    return this.balance > 0;
};

