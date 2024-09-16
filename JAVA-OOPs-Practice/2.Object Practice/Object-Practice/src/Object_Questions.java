public class Object_Questions {
    public static void main(String[] args) {
        Person person_1 = new Person();
        person_1.name = "Sahil Ladhania";
        person_1.age = 23;
        person_1.displayPersonDetails();

        Dog dog_1 = new Dog();
        dog_1.breed = "Lab";
        dog_1.size = 10;
        dog_1.bark();
        Dog dog_2 = new Dog();
        dog_2.breed = "Bulldog";
        dog_2.size = 4;
        dog_2.bark();

        Laptop laptop_1 = new Laptop();
        laptop_1.brand = "Mac Air";
        laptop_1.ram = 8;
        laptop_1.price = 100000;
        laptop_1.displayLaptopDetails();
        Laptop laptop_2 = new Laptop();
        laptop_2.brand = "Mac Pro";
        laptop_2.ram = 16;
        laptop_2.price = 200000;
        laptop_2.displayLaptopDetails();

        Circle circle_1 = new Circle();
        circle_1.radius = 4;
        circle_1.color = "Red";
        circle_1.displayColorDetails();
        Circle circle_2 = new Circle();
        circle_2.radius = 6;
        circle_2.color = "Blue";
        circle_2.displayColorDetails();

        Mobile mobile_1 = new Mobile();
        mobile_1.brand = "Apple";
        mobile_1.price = 100000;
        mobile_1.displayMobileSpecification();
        Mobile mobile_2 = new Mobile();
        mobile_2.brand = "Samsung";
        mobile_2.price = 50000;
        mobile_2.displayMobileSpecification();


        /*
        1. Instantiate the "Person" class
        Create an object of class Person with attributes name and age, and call a method to display the details.

        2. Object of "Dog" class
        Create a class Dog with attributes breed, size, and methods to bark. Instantiate two objects and call the method.

        3. Object Creation in "Laptop" class
        Define a Laptop class with brand, RAM, and price. Create two objects with different values and display the details.

        4. Create multiple objects for "Circle" class
        Create a Circle class with attributes radius and color. Instantiate three objects and display their properties.

        5. Object Creation for "Mobile" class
        Create a class Mobile with brand and price attributes. Create objects and invoke the method to display details.
        */
    }
}

class Person{
    String name;
    int age;
    void displayPersonDetails(){
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Dog{
    String breed;
    int size;
    void bark(){
        System.out.println("Breed: " + breed + ", Size: " + size + ", Bark : " + "bhau bhau");
    }
}

class Laptop{
    String brand;
    int ram;
    int price;
    void displayLaptopDetails(){
        System.out.println("Brand: " + brand + ", RAM: " + ram + ", Price: " + price);
    }
}

class Circle{
    int radius;
    String color;
    void displayColorDetails(){
        System.out.println("Radius: " + radius + ", Color: " + color);
    }
}

class Mobile{
    String brand;
    int price;
    void displayMobileSpecification(){
        System.out.println("Brand: " + brand + ", Price: " + price);
    }
}