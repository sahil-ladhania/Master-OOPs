package Abstraction.Interfaces;

class Cat implements Sound {

    @Override
    public void makeSound() {
        System.out.println("Cat Meows.");
    }
}
