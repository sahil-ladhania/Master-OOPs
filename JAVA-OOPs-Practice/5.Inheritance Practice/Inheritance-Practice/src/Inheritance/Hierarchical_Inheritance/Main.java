package Inheritance.Hierarchical_Inheritance;

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.barks();
        dog.eat(); // We are getting Animal Eats because Animal is Parent and Dog is Child of Animal and Dog is Inheriting Properties and Behaviour from Animal.
        Cat cat = new Cat();
        cat.meow();
        cat.eat(); // We are getting Animal Eats because Animal is Parent and Cat is also Child of Animal and Cat is also Inheriting Properties and Behaviour from Animal just like Dog.
    }
}
