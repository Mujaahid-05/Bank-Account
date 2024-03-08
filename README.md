# Bank-Account

This programme represents a simple bank account with functionalities to deposit and withdraw funds. 

### Constructor 
`constructor(accountHolder, accountNumber, balance = 0)` - Initializes a new bank account with the provided `accountHolder`, `accountNumber`, and an optional initial `balance` (defaults to 0 if not provided).

### Methods
1. `deposit(amount)`
   - Increases the account balance by the specified `amount`.
   - Displays a message with the deposited amount and the new balance.
   - Ensures that only positive amounts can be deposited.
     
2. `withdraw(amount)`
   - Decreases the account balance by the specified `amount`.
   - Displays a message with the withdrawn amount and the new balance.
   - Checks if the amount is non-negative and does not exceed the current balance.
