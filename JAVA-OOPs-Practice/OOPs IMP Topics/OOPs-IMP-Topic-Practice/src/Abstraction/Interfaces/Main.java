package Abstraction.Interfaces;

public class Main {
    public static void main(String[] args) {
//        Animal animal = new Animal(); -----> Error: Animal is abstract and cannot be instantiated
        Animal dog = new Dog();
        dog.sound();
        dog.move();
    }
}
