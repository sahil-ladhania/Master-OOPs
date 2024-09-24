package Encapsulation.Function_Encapsulation;

public class Main {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount(500.34);
        System.out.println(account1.getBalance());
        account1.deposit(50.0);
        System.out.println(account1.getBalance());
        account1.withdraw(50.0);
        System.out.println(account1.getBalance());
//        account1.logTransaction("Deposit" , 500); ----> You cant use private Function here
    }
}
