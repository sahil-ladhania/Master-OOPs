package Class_Object_Constructor_thisKeyword;

// Class
public class Car {
    String model;
    String company;
    String color;
    int price;
    float speed;
    double horsepower;

    // Default Constructor
    public Car() {

    }

    // Parameterised Constructor ------> Constructor Overloading Happening Below : Java will automatically call the Constructor based on the Parameter List.
    public Car(String model) {
        // Constructor Chaining Happening Below : The below line calls the Constructor with 2 Parameters.
        this("Fortuner" , "Toyato");
        this.model = model;
    }

    public Car(String model, String company) {
        this.model = model;
        this.company = company;
    }

    public Car(String model, String company, String color) {
        this.model = model;
        this.company = company;
        this.color = color;
    }

    public Car(String model, String company, String color, int price) {
        this.model = model;
        this.company = company;
        this.color = color;
        this.price = price;
    }

    public Car(String model, String company, String color, int price, float speed) {
        this.model = model;
        this.company = company;
        this.color = color;
        this.price = price;
        this.speed = speed;
    }

    public Car(String model, String company, String color, int price, float speed, double horsepower) {
        this.model = model;
        this.company = company;
        this.color = color;
        this.price = price;
        this.speed = speed;
        this.horsepower = horsepower;
    }

    // Copy Constructor
    public Car(Car car){
        model = car.model;
        company = car.company;
        color = car.color;
        price = car.price;
        speed = car.speed;
        horsepower = car.horsepower;
    }

}
