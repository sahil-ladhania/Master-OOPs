

public class Transaction {
    private int transactionID;
    private int amount;
    private String transactionType;
    public Transaction(int transactionID , int amount , String transactionType){
        this.transactionID = transactionID;
        this.amount = amount;
        this.transactionType = transactionType;
    }
}
