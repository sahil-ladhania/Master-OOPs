/*

1. Creating an Object and Initializing.
Answer :-
// Car class definition
public class Car {
    // Instance variables
    private String color;
    private int speed;

    // Constructor to initialize Car object
    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car color: " + color);
        System.out.println("Car speed: " + speed + " km/h");
    }

    public static void main(String[] args) {
        // Creating an object of Car class
        Car myCar = new Car("Red", 100);

        // Accessing object properties and calling methods
        myCar.displayDetails();

        // Modifying object properties
        myCar.setColor("Blue");
        myCar.setSpeed(120);

        // Displaying modified details
        myCar.displayDetails();
    }

    // Getter and setter methods for color and speed
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }
}
* Car class mein color aur speed instance variables private access modifier se define kiye gaye hain.
* Car class ka constructor (public Car(String color, int speed)) hai jo color aur speed ko initialize karta hai.
* main method mein Car class ka ek object myCar create kiya gaya hai using parameterized constructor.
* displayDetails() method object ki details print karta hai.
* setColor() aur setSpeed() methods object ke properties ko modify karte hain.
* Har step ke baad comments diye gaye hain jo samajhne mein madad karte hain.

2. Manipulating an Object.
Answer :-
public static void main(String[] args) {
    // Creating an object of Car class
    Car myCar = new Car("Red", 100);

    // Accessing object properties
    String carColor = myCar.getColor();
    int carSpeed = myCar.getSpeed();
    System.out.println("Initial Car color: " + carColor);
    System.out.println("Initial Car speed: " + carSpeed + " km/h");

    // Modifying object properties
    myCar.setColor("Blue");
    myCar.setSpeed(120);

    // Displaying modified details
    myCar.displayDetails();

    // Calling methods on an object
    myCar.accelerate(20);  // Calling method to accelerate car speed
    myCar.displayDetails();  // Displaying updated details
}

// Accelerate method in Car class
public void accelerate(int increment) {
    this.speed += increment;
}
* main method mein myCar object ke properties (color aur speed) ko getColor() aur getSpeed() methods ke through access kiya gaya hai.
* setColor() aur setSpeed() methods se object ke properties ko modify kiya gaya hai.
* accelerate() method se object ke speed ko increment kiya gaya hai.
* Har step ke baad comments diye gaye hain jo samajhne mein madad karte hain.

*/