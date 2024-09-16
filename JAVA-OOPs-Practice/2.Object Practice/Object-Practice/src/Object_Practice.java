public class Object_Practice {
    public static void main(String[] args) {
        // Creating an object of Car class
        // Car myCar; ----> Here we are just Declaring.
        // myCar = new Car(); ----> Here we are Instantiating.
        Car myCar = new Car(); // Declaring and Instantiating in one Line.
        System.out.println(myCar); // Gives Hash Value

        /*
            1. Why I'm getting some random hash value when I print myCar ?
            * When you use System.out.println(myCar); Java invokes the toString() method on the myCar object.
            * The default implementation of toString() in the Object class (the superclass of all classes) prints
              a string consisting of the class name followed by the “@” character and the object’s hash code in hexadecimal.

            2. What Exactly Is myCar ?
            * myCar is a reference variable that holds the address (reference) of an object of the Car class.
            * It points to the memory location where the actual Car object is stored.
            * When you use myCar, you are accessing the fields and methods of the Car object that it refers to.
        */

        // Setting the field values
        myCar.color = "Red";
        myCar.model = "Toyota";
        // Calling the method
        myCar.displayInfo();
    }
}

class Car{
    String color;
    String model;
    void displayInfo(){
        System.out.println("Color: " + color + ", Model: " + model);
    }
}