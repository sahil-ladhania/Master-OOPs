package Inheritance.Single_Inheritance;

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.bark();
        dog.eat(); // We are getting Animal Eats because Animal is Parent and Dog is Child of Animal and Dog is Inheriting Properties and Behaviour from Animal.
    }
}
