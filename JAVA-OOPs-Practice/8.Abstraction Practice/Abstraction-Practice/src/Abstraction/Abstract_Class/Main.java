package Abstraction.Abstract_Class;

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        Truck truck = new Truck();
        car.start(); // We are getting Specific output because start() is an Abstract Method.
        car.stop(); // We are getting Specific output because stop() is a Concrete Method.
        truck.start(); // We are getting Specific output because start() is an Abstract Method.
        truck.stop(); // We are getting Specific output because stop() is a Concrete Method.
    }
}
