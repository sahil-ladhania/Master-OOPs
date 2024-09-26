package Class_Object_Constructor_thisKeyword;

import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        // Object
        Car car1 = new Car(); // Debug this Line
        System.out.println(car1.model);
        System.out.println(car1.company);
        System.out.println(car1.color);
        System.out.println(car1.price);
        System.out.println(car1.speed);
        System.out.println(car1.horsepower);

        System.out.println("-----Object with 1 Parameter-----");
        Car car2 = new Car("Fortuner"); // Debug this Line
        System.out.println(car2.model);
        System.out.println(car2.company);
        System.out.println(car2.color);
        System.out.println(car2.price);
        System.out.println(car2.speed);
        System.out.println(car2.horsepower);

        System.out.println("-----Object with 2 Parameter-----");
        Car car3 = new Car("Fortuner" , "Toyato"); // Debug this Line
        System.out.println(car3.model);
        System.out.println(car3.company);
        System.out.println(car3.color);
        System.out.println(car3.price);
        System.out.println(car3.speed);
        System.out.println(car3.horsepower);

        System.out.println("-----Object with 3 Parameter-----");
        Car car4 = new Car("Fortuner" , "Toyato" , "Black"); // Debug this Line
        System.out.println(car4.model);
        System.out.println(car4.company);
        System.out.println(car4.color);
        System.out.println(car4.price);
        System.out.println(car4.speed);
        System.out.println(car4.horsepower);

        System.out.println("-----Object with 4 Parameter-----");
        Car car5 = new Car("Fortuner" , "Toyato" , "Black" , 50000000); // Debug this Line
        System.out.println(car5.model);
        System.out.println(car5.company);
        System.out.println(car5.color);
        System.out.println(car5.price);
        System.out.println(car5.speed);
        System.out.println(car5.horsepower);

        System.out.println("-----Object with 5 Parameter-----");
        Car car6 = new Car("Fortuner" , "Toyato" , "Black" , 50000000 , 110); // Debug this Line
        System.out.println(car6.model);
        System.out.println(car6.company);
        System.out.println(car6.color);
        System.out.println(car6.price);
        System.out.println(car6.speed);
        System.out.println(car6.horsepower);

        System.out.println("-----Object with 6 Parameter-----");
        Car car7 = new Car("Fortuner" , "Toyato" , "Black" , 50000000 , 110 , 2000); // Debug this Line
        System.out.println(car7.model);
        System.out.println(car7.company);
        System.out.println(car7.color);
        System.out.println(car7.price);
        System.out.println(car7.speed);
        System.out.println(car7.horsepower);

        System.out.println("-----Copying Car7 Object to Car8 Object-----");
        Car car8 = new Car(car7); // Debug this Line
        System.out.println(car8.model);
        System.out.println(car8.company);
        System.out.println(car8.color);
        System.out.println(car8.price);
        System.out.println(car8.speed);
        System.out.println(car8.horsepower);

    }
}
