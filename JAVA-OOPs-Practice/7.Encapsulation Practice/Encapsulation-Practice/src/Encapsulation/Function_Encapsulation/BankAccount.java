package Encapsulation.Function_Encapsulation;

public class BankAccount {
    private double balance;
    public BankAccount(double balance){
        this.balance = balance;
    }
    public void deposit(double amount){
        if (amount > 0) {
            this.balance = this.balance + amount;
            logTransaction("Deposit", amount);
        }
        else {
            System.out.println("Deposit amount must be positive.");
        }
    }
    public void withdraw(double amount){
        if (amount > 0 && amount <= balance) {
            this.balance = this.balance - amount;
            logTransaction("Withdraw", amount);
        }
        else {
            System.out.println("Invalid withdrawal amount.");
        }
    }
    private void logTransaction(String type , double amount){
        System.out.println(type + " of $" + amount + " processed.");
    }
    double getBalance(){
        return balance;
    }
}
