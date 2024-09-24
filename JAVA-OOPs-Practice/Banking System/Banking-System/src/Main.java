public class Main {
    public static void main(String[] args) {
        System.out.println("Banking System!");

        /*
            Objective - Create a simple banking system to manage accounts and transactions.
            Details :
                1.	Classes -
                        BankAccount - Contains attributes like accountNumber, accountHolderName, balance.
                        Transaction - Represents a transaction with attributes like transactionID, amount, and transactionType.
                2.	Objects -
                        Create objects of BankAccount class to represent different bank accounts.
                3.	Constructors -
                        Use constructors to initialize BankAccount objects with account details.
                4.	Static Keyword -
                        Implement a static method to maintain a count of total accounts created.
                5.	Access Modifiers -
                        Keep account details private and provide public methods to deposit and withdraw money.
                6.	Implementation -
                        Create methods like deposit(), withdraw(), and getBalance() in the BankAccount class.
        */

        BankAccount account = new BankAccount(111 , "Sahil Ladhania" , 5000);
        Transaction transaction = new Transaction(1 , 500 , "Withdrawal");

        account.deposit(500);
        System.out.println(account.getBalance());
        account.withdraw(500);
        System.out.println(account.getBalance());

        System.out.println("Total Account Created : " + BankAccount.getTotalAccountCreated());

    }
}