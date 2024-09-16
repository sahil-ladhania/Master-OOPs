public class Class_Practice {
    public static void main(String[] args) {
        // Creating an object of the Car class
        Car myCar = new Car();
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

        3. Do you need to create an Object to access fields and method of a Class in Java ?
        * In Java, whether you need to create an object to access fields and methods of a class depends on whether the
          fields and methods are instance members or static members.
        * Instance Members :
                            Require an object to access fields and methods.
                            Instance fields and methods are associated with specific instances (objects) of a class.
                            You need to create an object of the class to access instance fields and methods.
        * Static Members :
                         Do not require an object; can be accessed directly using the class name.
                         Static fields and methods are associated with the class itself rather than any specific instance.
                         They can be accessed without creating an object.
                         You can access static fields and methods directly using the class name.
        */

        // Setting the field value
        myCar.color = "Red";
        // Calling the method
        myCar.displayColor();
    }
}

class Car{
    // Fields (Variables)
    String color;
    // Methods (Functions)
    void displayColor(){
        System.out.println("The color of the car is : " + color);
    }
}