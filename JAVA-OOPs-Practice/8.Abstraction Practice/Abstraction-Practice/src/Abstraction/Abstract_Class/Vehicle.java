package Abstraction.Abstract_Class;

public abstract class Vehicle {
    // Abstract Method
    abstract void start();
    // Concrete Method
    void stop(){
        System.out.println("Vehicle Stopped.");
    }
}
