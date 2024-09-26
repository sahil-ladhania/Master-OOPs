package Abstraction.Interfaces;

public class Dog implements Animal {

    @Override
    public void sound() {
        System.out.println("Dog Barks.");
    }

    @Override
    public void move() {
        System.out.println("Dog Runs.");
    }
}
