package Static_vs_NonStatic;

public class Car {
    // Non-Static Members
    String model;
    String brand;
    // Static Members
    static int price;
    static int horsepower;

    public Car(String model, String brand , int price , int horsepower) {
        this.model = model;
        this.brand = brand;
    }

    // Non-Static Members Inside Static Environment
    static void displayData1(){
        // Creating an Object
        Car car1 = new Car("Fortuner" , "Toyato" , 5000000 , 2000);
        System.out.println(car1.model);
        System.out.println(car1.brand);
    }

    // Static Members Inside Non-Static Environment
    void displayData2(){
        System.out.println(Car.price);
        System.out.println(Car.horsepower);
    }

}
