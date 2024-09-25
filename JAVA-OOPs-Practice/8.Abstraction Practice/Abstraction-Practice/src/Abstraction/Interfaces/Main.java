package Abstraction.Interfaces;

public class Main {
    public static void main(String[] args) {
//        Dog dog = new Dog();
//        Cat cat = new Cat();
        Sound dog = new Dog();
        Sound cat = new Cat();
        dog.makeSound();
        cat.makeSound();
    }
}
