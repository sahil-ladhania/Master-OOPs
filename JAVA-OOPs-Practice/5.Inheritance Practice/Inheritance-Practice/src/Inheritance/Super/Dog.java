package Inheritance.Super;

public class Dog extends Animal {
    void display(){
        System.out.println("This is a Dog.");
    }
    void show(){
        display();
        super.display();
    }
}
