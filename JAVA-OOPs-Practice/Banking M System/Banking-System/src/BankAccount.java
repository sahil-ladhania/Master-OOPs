

public class BankAccount {
    static int totalAccount = 0;
    private int accountNumber;
    private String accountHolderName;
    private int balance;
    public BankAccount(int accountNumber , String  accountHolderName , int balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
        totalAccount++;
    }
    public void deposit(int amount){
        if(amount > 0){
            this.balance = this.balance + amount;
        }
        else{
            System.out.println("Deposit amount must be Positive.");
        }
    }
    public void withdraw(int amount){
        if((this.balance >= amount) && (amount > 0)){
            this.balance = this.balance - amount;
        }
        else{
            System.out.println("You dont have enough Balance.");
        }
    }

    public int getBalance(){
        return this.balance;
    }
    static int getTotalAccountCreated(){
        return totalAccount;
    }
}
