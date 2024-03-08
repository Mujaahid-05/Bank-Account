class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) { // balance defaults to 0 if not provided
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount; // Increases balance by amount 
      console.log(`You've deposited £${amount}. New balance: £${this.balance}.`);
    } else {
      console.log("You must deposit a positive amount!");
    }
  }
  withdraw(amount) {
    if (amount >= 0 && amount <= this.balance) { // Checks if amount is positive and less than balance
      this.balance -= amount; // Decreases balance by amount
      console.log(`You've withdrawn £${amount}. New balance: £${this.balance}.`);
    } else {
      console.log("You can't withdraw that much!");
    }
  }
