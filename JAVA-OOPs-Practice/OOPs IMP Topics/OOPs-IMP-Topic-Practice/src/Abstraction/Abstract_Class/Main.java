package Abstraction.Abstract_Class;

public class Main {
    public static void main(String[] args) {
//        Vehicle vehicle = new Vehicle(); ------> Error: Cannot instantiate abstract class
        Vehicle car = new Car();
        car.startEngine();
        car.stopEngine();
    }
}
