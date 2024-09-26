package Abstraction.Abstract_Class;

abstract class Vehicle {
    abstract void startEngine();

    void stopEngine(){
        System.out.println("Engine Stopped.");
    }
}
