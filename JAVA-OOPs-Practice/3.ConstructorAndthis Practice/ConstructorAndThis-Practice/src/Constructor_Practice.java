public class Constructor_Practice {
    public static void main(String[] args) {
        // 1. Default Constructor
        System.out.println("Default Constructor :");
        Phone myPhone = new Phone();
        // We created an object myPhone of the Phone class, and the default constructor initializes the brand to null and price to 0.
        System.out.println(myPhone.brand); // Output : null
        System.out.println(myPhone.price); // Output : 0
        // But If we manually assign values to brand and price.
        myPhone.brand = "POCO";
        myPhone.price = 6000;
        System.out.println(myPhone.brand); // Output : POCO
        System.out.println(myPhone.price); // Output : 6000
        // Note - Default Constructor doesn’t assign any specific values to the fields. We did that manually after Object Creation.

        // 2. Parameterized Constructor
        System.out.println("Parameterized Constructor :");
        Car myCar = new Car("BMW" , 300);
        System.out.println(myCar.model); // Output : null when using myCar.model to assign values | BMW when using "this" this.model to assign values
        System.out.println(myCar.maxSpeed); // Output : 0 when using myCar.model to assign values | 300 when using "this" this.model to assign values

        // 3. Copy Constructor
        System.out.println("Copy Constructor :");
        Bike myBike = new Bike("Yamaha" , 6);
        System.out.println(myBike.brand);
        System.out.println(myBike.totalGear);
        Bike newBike = new Bike(myBike);
        System.out.println(newBike.brand);
        System.out.println(newBike.totalGear);

        // 4. Constructor Chaining : Calling One Constructor From Another
        System.out.println("Constructor Chaining :");
        Student student_1 = new Student();
        System.out.println(student_1.name);
        System.out.println(student_1.age);
        System.out.println(student_1.grade);
        student_1.displayDetails();
        Student student_2 = new Student("Sahil" , 23);
        System.out.println(student_2.name);
        System.out.println(student_2.age);
        System.out.println(student_2.grade);
        student_2.displayDetails();
        Student student_3 = new Student("Janvi" , 21 , "A");
        System.out.println(student_3.name);
        System.out.println(student_3.age);
        System.out.println(student_3.grade);

        // 4. Constructor Overloading
        System.out.println("Constructor Overloading :");
        Employee employee_1 = new Employee();
        System.out.println(employee_1.name);
        System.out.println(employee_1.age);
        System.out.println(employee_1.position);
        System.out.println(employee_1.salary);
        employee_1.displayEmpDetails();
        Employee employee_2 = new Employee("Harshit");
        System.out.println(employee_2.name);
        System.out.println(employee_2.age);
        System.out.println(employee_2.position);
        System.out.println(employee_2.salary);
        employee_2.displayEmpDetails();
        Employee employee_3 = new Employee("Janvi" , 21);
        System.out.println(employee_3.name);
        System.out.println(employee_3.age);
        System.out.println(employee_3.position);
        System.out.println(employee_3.salary);
        employee_3.displayEmpDetails();
        Employee employee_4 = new Employee("Sahil" , 23 , "Engineer");
        System.out.println(employee_4.name);
        System.out.println(employee_4.age);
        System.out.println(employee_4.position);
        System.out.println(employee_4.salary);
        employee_4.displayEmpDetails();
        Employee employee_5 = new Employee("Ankit" , 30 , "Engineer" , 5000000);
        System.out.println(employee_5.name);
        System.out.println(employee_5.age);
        System.out.println(employee_5.position);
        System.out.println(employee_5.salary);
        employee_5.displayEmpDetails();

    }
}

class Phone{
    String brand;
    int price;
}

class Car{
    String model;
    int maxSpeed;
    // Defining a Parameterized Constructor
    Car(String model , int maxSpeed){
        /*
            We will get error under myCar , that it is not defined.
            So we need a way to add the above values(model , maxSpeed) and somehow access myCar or may be some other way for it to work.
            Basically we need one word to access every object.
        */
//        myCar.model = model; -----> Error : Cant Find Symbol myCar
//        myCar.maxSpeed = maxSpeed; -----> Error : Cant Find Symbol myCar

        /*
            Why am I getting Error ?
            Inside the constructor, we’re trying to use myCar, which is an instance of the class Car that you created
            in the main method. However, myCar only exists in the main method, not inside the Car class or constructor.
        */

        /*
            How to Solve it ?
            - In the constructor, we don’t need to refer to the object by name (like myCar).
            - Instead, we refer to the instance variables of the class using this.
            - In the constructor, use the keyword "this" to refer to the instance of the class (the object) that is being created.
            - this.model refers to the model variable of the object you are creating.
        */
        this.model = model;
        this.maxSpeed = maxSpeed;
    }
}

class Bike{
    String brand;
    int totalGear;
    // Defining a Parameterized Constructor
    Bike(String brand , int totalGear){
        this.brand = brand;
        this.totalGear = totalGear;
    }
    // Defining a Copy Constructor
    Bike(Bike anotherBike){
        this.brand = anotherBike.brand;
        this.totalGear = anotherBike.totalGear;
    }
}

class Student{
    String name;
    int age;
    String grade;
    Student(){
        this("Unknown" , 21 , "Not Assigned");
    }
    Student(String name , int age){
        this(name , age , "Not Assigned");
    }
    Student(String name , int age , String grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    void displayDetails(){
        System.out.println("Name: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade);
    }
}

class Employee{
    String name;
    int age;
    String position;
    double salary;
    /*
        - Either you change the name of the parameters you added than the local variable of class.
        Employee(String naam , int agee , String positionn , double income){
            name = naam;
            age = agee;
            position = positionn;
            salary = income;
        }

        - Or you use "this" with the local variable to assign the value.
        Employee(String name , int age , String position , double salary){
            this.name = name;
            this.age = age;
            this.position = position;
            this.salary = salary;
        }
    */
    Employee(){
        this.name = "Unknown";
        this.age = 0;
        this.position = "Not Assigned";
        this.salary = 0.0;
    }
    Employee(String name){
        this.name = name;
        this.age = 0;
        this.position = "Not Assigned";
        this.salary = 0.0;
    }
    Employee(String name , int age){
        this.name = name;
        this.age = age;
        this.position = "Not Assigned";
        this.salary = 0.0;
    }
    Employee(String name , int age , String position){
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = 0.0;
    }
    Employee(String name , int age , String position , double salary){
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    void displayEmpDetails(){
        System.out.println("Name: " + this.name + ", Age: " + this.age + ", Position: " + this.position + ", Salary: $" + this.salary);
    }
}