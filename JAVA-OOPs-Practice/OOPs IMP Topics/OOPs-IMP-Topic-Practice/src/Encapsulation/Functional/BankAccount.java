package Encapsulation.Functional;

public class BankAccount {
    private double balance;

    private void calculateInterest() {
        double interest = balance * 0.05;
        balance += interest;
        System.out.println("Interest added! New balance: " + balance);
    }

    public BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposit successful! New balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawal successful! New balance: " + balance);
        } else {
            System.out.println("Invalid or insufficient amount");
        }
    }

    public void addInterest() {
        calculateInterest();
    }

}
