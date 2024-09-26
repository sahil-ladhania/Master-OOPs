import java.util.ArrayList;

public class Library {
    static int totalBooks = 0;
    ArrayList<Book> booksCollection = new ArrayList<>();
    void addBook(Book book){
        booksCollection.add(book);
        totalBooks++;
    };
    void removeBook(int ISBN){
        for(Book book : booksCollection){
            if(book.getISBN() == ISBN){
                booksCollection.remove(book);
                totalBooks--;
                break;
            }
        }
    };
    void searchBook(int ISBN){
        for (Book book : booksCollection){
            if(book.getISBN() == ISBN){
                System.out.println("Book Found : " + book.getTitle());
                return;
            }
        }
        System.out.println("Book Not Found !!!");
    };
    static int getTotalBooks(){
        return totalBooks;
    }
}
