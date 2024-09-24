package Inheritance.Multilevel_Inheritance;

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.bark();
        dog.eat(); // We are getting Animal Eats because Animal is Parent and Dog is Child of Animal and Dog is Inheriting Properties and Behaviour from Animal.
//        dog.weep(); We cant access this because Dog is the Parent of Puppy so we cant access the properties from Child to Parent.
        Puppy puppy = new Puppy();
        puppy.weep();
        puppy.eat(); // We are getting Animal Eats because Animal is Grand Parent and Puppy is Child of Dog and Grand Child of Animal and Puppy is Inheriting Properties and Behaviour from both Dog and Animal.
        puppy.bark(); // We are getting Dog Barks because Dog is Parent and Puppy is Child of Dog and Puppy is Inheriting Properties and Behaviour from Dog.
    }
}
