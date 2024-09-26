

public class Book {
    private String title;
    private String author;
    private int ISBN;
    private boolean isAvailable;
    Book(String title , String author , int ISBN , boolean isAvailable){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isAvailable = isAvailable;
    }
    public String getTitle(){
        return this.title;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public String getAuthor(){
        return this.author;
    }
    public void setAuthor(String author){
        this.author = author;
    }
    public int getISBN(){
        return this.ISBN;
    }
    public void setISBN(int ISBN){
        this.ISBN = ISBN;
    }
    public boolean isAvailable(){
        return this.isAvailable;
    }
    public void setAvailable(boolean isAvailable){
        this.isAvailable = isAvailable;
    }
}
