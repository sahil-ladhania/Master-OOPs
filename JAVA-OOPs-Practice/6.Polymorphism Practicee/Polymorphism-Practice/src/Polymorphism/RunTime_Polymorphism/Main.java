package Polymorphism.RunTime_Polymorphism;

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        animal1.sound();
        animal2.sound();
    }
}
