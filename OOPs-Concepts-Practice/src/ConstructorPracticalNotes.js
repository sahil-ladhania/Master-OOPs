/*

1. Default Constructors.
Answer :-
public class Car {
    private String color;
    private int speed;

    // Default constructor
    public Car() {
        this.color = "White";  // Default color
        this.speed = 0;        // Default speed
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }

    public static void main(String[] args) {
        // Creating an object using default constructor
        Car myCar = new Car();
        myCar.displayDetails();  // Displaying car details
    }
}
* Car class mein default constructor define kiya gaya hai jo default values set karta hai (color as "White" aur speed as 0).
* displayDetails() method Car object ki details print karta hai.
* main method mein Car class ka ek object myCar create kiya gaya hai using default constructor.

2. Parameterized Constructor.
Answer :-
public class Car {
    private String color;
    private int speed;

    // Parameterized constructor
    public Car(String color, int speed) {
        this.color = color;  // Initializing color
        this.speed = speed;  // Initializing speed
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }

    public static void main(String[] args) {
        // Creating an object using parameterized constructor
        Car myCar = new Car("Blue", 100);
        myCar.displayDetails();  // Displaying car details
    }
}
* Car class mein parameterized constructor define kiya gaya hai jo color aur speed ko parameters ke through initialize karta hai.
* main method mein Car class ka ek object myCar create kiya gaya hai using parameterized constructor with values "Blue" aur 100.

3. Constructor Overloading.
Answer :-
public class Car {
    private String color;
    private int speed;

    // Default constructor
    public Car() {
        this.color = "White";
        this.speed = 0;
    }

    // Parameterized constructor
    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
    }

    // Constructor overloading with different parameters
    public Car(String color) {
        this.color = color;
        this.speed = 0;  // Default speed
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }

    public static void main(String[] args) {
        // Creating objects using different constructors
        Car car1 = new Car();          // Using default constructor
        Car car2 = new Car("Red", 80); // Using parameterized constructor
        Car car3 = new Car("Green");   // Using overloaded constructor
        car1.displayDetails();
        car2.displayDetails();
        car3.displayDetails();
    }
}
* Car class mein multiple constructors define kiye gaye hain: default constructor, parameterized constructor, aur overloaded
  constructor.
* main method mein Car class ke alag-alag constructors ka use dikhaya gaya hai, jisse multiple objects create kiye gaye hain.

4. Using 'this' Keyword.
Answer :-
public class Car {
    private String color;
    private int speed;

    // Parameterized constructor
    public Car(String color, int speed) {
        this.color = color;  // Initializing color using 'this'
        this.speed = speed;  // Initializing speed using 'this'
    }

    // Overloaded constructor calling another constructor using 'this'
    public Car(String color) {
        this(color, 0);  // Calling parameterized constructor using 'this'
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }

    public static void main(String[] args) {
        // Creating objects using different constructors
        Car car1 = new Car("Blue", 100);  // Using parameterized constructor
        Car car2 = new Car("Green");      // Using overloaded constructor
        car1.displayDetails();
        car2.displayDetails();
    }
}
* this keyword Car class ke instance variables ko refer karne ke liye use hota hai.
* Car(String color, int speed) constructor mein this(color, 0); se overloaded constructor ko call kiya gaya hai.
* Is example mein main method mein Car class ke objects create kiye gaye hain using different constructors jo this keyword ka use
  demonstrate karte hain.

*/