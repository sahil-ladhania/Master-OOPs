/*

1. Defining a Class.
Answer :-
// Class declaration
public class Car {
    // Instance variables (fields/attributes)
    private String color;
    private int speed;

    // Constructor
    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }
}
* Car class ko public class Car ke through define kiya gaya hai. Ismein color aur speed instance variables (attributes) hain jo
  private access modifier se encapsulated hain.
* Car class ka constructor (public Car(String color, int speed)) hai jo color aur speed ko initialize karta hai.
* displayDetails() method Car class ke details ko print karta hai.

2. Class vs Instance Variables.
Answer :-
public class Car {
    // Instance variables
    private String color;
    private int speed;

    // Static variable
    private static int numberOfCars = 0;

    // Constructor
    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
        numberOfCars++;  // Incrementing the static variable
    }

    // Getter method for static variable
    public static int getNumberOfCars() {
        return numberOfCars;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }
}
* color aur speed instance variables Car class ke instance ke liye hain.
* numberOfCars static variable Car class ke saare objects ke count maintain karne ke liye hai. Ye static keyword se declare kiya
  gaya hai.
* getNumberOfCars() method numberOfCars ki current value ko return karta hai.
* Har Car object create hone par numberOfCars ko increment kiya jata hai constructor mein.

3. Encapsulation.
Answer :-
public class Car {
    // Private instance variables
    private String color;
    private int speed;

    // Constructor
    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
    }

    // Getter method for color
    public String getColor() {
        return color;
    }

    // Setter method for color
    public void setColor(String color) {
        this.color = color;
    }

    // Getter method for speed
    public int getSpeed() {
        return speed;
    }

    // Setter method for speed
    public void setSpeed(int speed) {
        this.speed = speed;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }
}
* color aur speed instance variables private access modifier se define kiye gaye hain, jisse direct access nahi ho sake.
* getColor() aur setColor() methods color variable ko read aur modify karne ke liye use kiye ja sakte hain.
* getSpeed() aur setSpeed() methods speed variable ko read aur modify karne ke liye use kiye ja sakte hain.
* Encapsulation ke through, Car class ke data ko secure kiya gaya hai aur direct access se protect kiya gaya hai.

*/