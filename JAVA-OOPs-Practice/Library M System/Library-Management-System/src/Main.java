public class Main {
    public static void main(String[] args) {
        System.out.println("Library Management System!");
        /*
            Objective - Build a simple library management system to manage books and their details.
            Details :
                1.	Classes -
                        Book - Contains attributes like title, author, ISBN, and isAvailable.
                        Library - Contains a collection of books and methods to add, remove, and search for books.
                2.	Objects -
                        Create objects of Book class to represent each book in the library.
                3.	Constructors -
                        Use constructors to initialize the Book objects with required details.
                4.	Static Keyword -
                        Implement a static method in the Library class to keep track of the total number of books.
                5.	Access Modifiers -
                        Use private for book details and provide public getter and setter methods for accessing and
                        modifying those details.
                6.	Implementation -
                        Create methods like addBook(), removeBook(), and searchBook() in the Library class.
        */

        /*
            1. Book Attributes ko Private kyun banaya ?
                    Encapsulation :
                        - Private access modifiers se hum encapsulation achieve karte hain.
                        - Iska matlab hai ki class ke attributes ko sirf usi class ke andar access kiya ja sakta hai.
                        - Yeh data ko secure rakhta hai, aur agar kisi reason se hum class ki implementation badalte hain, toh humein baaki code ko change
                          nahi karna padega.
                    Control :
                        - Agar attributes public hote, toh koi bhi code bina check kiye unhe modify kar sakta tha.
                        - Private attributes ke saath, hum getter aur setter methods ka use karke values ko validate kar sakte hain.

            2. Kya 4 Parameters wala Constructor banana zaroori hai ?
                    Initialization :
                        - Constructor ka main purpose hai objects ko initialize karna jab woh create hote hain.
                        - Tumne jo 4 parameters diye hain (title, author, ISBN, isAvailable) woh book ke important details hain.
                    Flexibility :
                        - Agar tum sirf default constructor banate (parameterless), toh tumhe book attributes set karne ke liye additional methods ya manual
                          setters ki zaroorat hoti.
                        - Isliye parameterized constructor se ek saath sab attributes set ho jate hain.

            3. Getters aur Setters kyun banaye ?
                    Access Control :
                        - Getters aur setters ka use karke hum control rakhte hain ki kaun se attributes ko read ya modify kiya ja sakta hai.
                        - Agar tumhe kabhi kuch validation karni ho, toh tum setter method mein kar sakte ho.
                    Flexibility :
                        - Agar future mein tumhe attribute ka naam ya type change karna ho, toh tumhe sirf getter aur setter methods ko update karna hoga,
                          na ki class ke baaki code ko.

            4. ArrayList kyun use kiya ?
                    Dynamic Size :
                        - ArrayList ka size dynamically badal sakta hai, jabki simple array ka size fixed hota hai.
                        - Tumhe agar zyada books add karne ho toh ArrayList kaafi helpful hota hai.
                    Convenience :
                        ArrayList mein built-in methods hote hain (jaise add, remove, contains) jo array ke comparison mein use karne mein asaan hain.

            5. TotalBooks Variable ko Static kyun banaya ?
	                Shared Data :
	                    - Static variable ka matlab hai ki yeh variable class ke sab instances ke liye common hai.
	                    - Toh yeh total books ka count track karne ke liye useful hai bina kisi specific library instance ke.
	                    - Agar tumhare multiple libraries hain, tab bhi total count shared rahega.
	                Class-Level Data :
	                    - Static se tum bina kisi object ke access kar sakte ho, jise total books count ko dekhne mein aasani hoti hai.

            6. AddBook Method mein (Book book) kya pass kiya ja raha hai ?
                    Object Passing :
                        - Book book ka matlab hai ki tum addBook method ko ek Book type ka object pass kar rahe ho.
                        - Yeh method us book ko library ke collection mein add karega.
                    Reference :
                        - Jab tum object pass karte ho, toh tum actually us object ka reference pass karte ho, jisse tum uski attributes ya methods access
                          kar sakte ho.

            7. GetTotalBooks ko Static kyun banaya ?
	                Class-Level Access :
	                    - Static method ka matlab hai ki tum is method ko bina kisi object ke call kar sakte ho.
	                    - Yeh kaafi convenient hai jab tumhe sirf total books count dekhna ho, bina kisi library instance ke.
	                Consistent Behavior :
	                    Static method hone ki wajah se, yeh hamesha totalBooks variable ke current value ko return karega, chahe tumne kitne bhi objects create kiye ho.
        */

        Library library = new Library();
        library.addBook(new Book("50 Shades of Grey", "Chetan Bhagat", 12345, true));
        library.addBook(new Book("The Alchemist", "Paulo Coelho", 67890, true));
        library.addBook(new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 11121, false));
        library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 22232, true));
        library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 33343, true));
        library.addBook(new Book("Pride and Prejudice", "Jane Austen", 44454, false));

        library.removeBook(44454);

        library.searchBook(67890);

        System.out.println("Total Books : " + Library.getTotalBooks());

    }
}