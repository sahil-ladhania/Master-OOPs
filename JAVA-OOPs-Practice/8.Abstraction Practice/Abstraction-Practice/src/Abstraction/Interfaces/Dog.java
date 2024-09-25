package Abstraction.Interfaces;

class Dog implements Sound {

    @Override
    public void makeSound() {
        System.out.println("Dog Barks...");
    }
}
