import java.util.Scanner;

public class classQuestions {
    public static void main(String[] args) {
        /*
        1. Define a class named Car. Include instance variables for make, model, and year. Write a constructor to initialize these
           variables and a method to display the details of the car. Create an object of this class and display its details.

        2. Create a class Rectangle with instance variables length and width. Include methods to calculate the area and perimeter
           of the rectangle. Create multiple objects of this class and compute their areas and perimeters.

        3. Implement a class Student with instance variables name, age, and grade. Write methods to set and get these variables.
           Create several Student objects, set their details, and retrieve them for display.

        4. Design a class BankAccount with accountNumber, accountHolderName, and balance as instance variables. Include methods to
           deposit and withdraw money. Create an account, perform multiple transactions (deposits and withdrawals), and display the
           updated balance after each transaction.

        5. Develop a class Circle with an instance variable radius. Write methods to calculate the area and circumference of the
           circle. Create instances of this class with different radii and compute their area and circumference.

        6. Construct a class Employee with name, designation, and salary as instance variables. Include a method to calculate
           yearly salary. Create objects for multiple employees, set their details, compute and display their yearly salaries.

        7. Define a class Book with title, author, and price as instance variables. Implement a method to display book details.
           Create objects for different books and display their details.

        8. Create a class Dog with instance variables name, age, and breed. Include methods to set these variables and another
           method to display the details of the dog. Create instances of Dog class with various details and display their information.

        9. Design a class Rectangle with instance variables length and width. Include a method to check if the rectangle is a square
           (length equals width). Create multiple instances of Rectangle, determine if each is a square, and display the result.

        10. Implement a class Product with instance variables productId, productName, and price. Include a method to calculate the
            total cost based on quantity purchased. Create instances of Product, set their details, calculate the total cost for
            varying quantities, and display the results.
        */

        // Question - 1
        Car myCar = new Car("Mercedes Benz S3" , 2028);
        myCar.displayCarInfo();

        // Question - 2
        Rectangle myRectangle = new Rectangle();
        int l = myRectangle.length = 10;
        int b = myRectangle.breath = 20;
        int area = myRectangle.area(l , b);
        System.out.println("Area : " + area);
        int perimeter = myRectangle.perimeter(l , b);
        System.out.println("Perimeter : " + perimeter);

        // Question - 3
        Student myStudent = new Student("Sahil Ladhania" , 23 , 'B');
        System.out.println("Name : " + myStudent.getStudentName());
        System.out.println("Age : " + myStudent.getStudentAge());
        System.out.println("Grade : " + myStudent.getStudentGrade());
        myStudent.setStudentName("Janvi Ladhania");
        myStudent.setStudentAge(21);
        myStudent.setStudentGrade('A');
        System.out.println("Name : " + myStudent.getStudentName());
        System.out.println("Age : " + myStudent.getStudentAge());
        System.out.println("Grade : " + myStudent.getStudentGrade());

        // Question - 4
        Scanner input = new Scanner(System.in);
        System.out.println("Enter Amount to Deposit / Withdraw : ");
        int amt = input.nextInt();
        BankAccount myBankAcc = new BankAccount();
        int accNum = 123456;
        String accHolderName = "Sahil Ladhania";
        int accBal = 100000;
        System.out.println(myBankAcc.depositMoney(accBal , amt));
        System.out.println(myBankAcc.withdrawMoney(accBal , amt));

        // Question - 5
        Circle myCircle = new Circle();
        System.out.println("Enter Radius to Calculate Area / Circumference : ");
        int r = input.nextInt();
        System.out.println(myCircle.area(r));
        System.out.println(myCircle.circumference(r));

        // Question - 6
        Employee myEmployee = new Employee();
        myEmployee.empName = "Sahil Ladhania";
        myEmployee.empDesignation = "SDE 1";
        System.out.println("Enter your monthly salary to calculate yearly salary : ");
        int empSalary = input.nextInt();
        System.out.println(myEmployee.yearlySalary(empSalary));

        // Question - 7
        Book myBook = new Book();
        String title  = myBook.bookTitle = "Once Upon a Time in Mumbai";
        String name = myBook.authorName = "Sahil Ladhania";
        int price = myBook.bookPrice = 2000;
        myBook.bookDetails(title , name , price);

        // Question - 8
        Dog myDog = new Dog();
        String dogName = myDog.name = "Remo";
        int dogAge = myDog.age = 10;
        String dogBreed = myDog.breed = "Labrador";
        myDog.dogDetails(dogName , dogAge , dogBreed);
        myDog.setName("Tin Min");
        myDog.setAge(15);
        myDog.setBreed("Pug");
        myDog.dogDetails(dogName , dogAge , dogBreed);

        // Question - 9
        SquareCheck mySquare = new SquareCheck();
        int length = mySquare.length = 10;
        int breath = mySquare.breath = 10;
        boolean checkIfSquare  = mySquare.checkSquare(length , breath);
        System.out.println(checkIfSquare);

        // Question - 10
        Product myProduct = new Product();
        System.out.println("Enter the Quantity to Calculate the Total Bill : ");
        int quantity = input.nextInt();
        int prodPrice = myProduct.prodPrice = 100;
        System.out.println(myProduct.totalCost(prodPrice , quantity));
    }
}

// Question - 1
class Car {
    String model;
    int year;
    public Car (String model , int year){
        this.model = model;
        this.year = year;
    }
    void displayCarInfo(){
        System.out.println("Model : " + model);
        System.out.println("Year : " + year);
    }
}

// Question - 2
class Rectangle {
    int length;
    int breath;
    int area(int lenght, int breath) {
        int areaOfRec = (lenght * breath);
        return areaOfRec;
    }
    int perimeter(int length , int breath) {
        int perimeterOfRec = 2 * (length + breath);
        return perimeterOfRec;
    }
}

// Question - 3
class Student {
    String name;
    int age;
    char grade;
    public Student(String name , int age , char grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    String getStudentName(){
        return name;
    }
    int getStudentAge(){
        return age;
    }
    char getStudentGrade(){
        return grade;
    }
    void setStudentName(String name){
        this.name = name;
    }
    void setStudentAge(int age){
        this.age = age;
    }
    void setStudentGrade(char grade){
        this.grade = grade;
    }
}

// Question - 4
class BankAccount {
    int accNum;
    String accHolderName;
    int accBal;
    int depositMoney(int accBal , int amt){
        int updatedBal = accBal + amt;
        return updatedBal;
    }
    int withdrawMoney(int accBal , int amt){
        int updatedBal = accBal - amt;
        return updatedBal;
    }
}

// Question - 5
class Circle {
    int radius;
    int area(int radius){
        int areaOfCircle = (3 * radius * radius);
        return areaOfCircle;
    }
    int circumference(int radius){
        int cirOfCircle = (2 * 3 * radius);
        return cirOfCircle;
    }
}

// Question - 6
class Employee {
    String empName;
    String empDesignation;
    int empSalary;
    int yearlySalary(int empSalary){
        int totalSalary = (empSalary * 12);
        return totalSalary;
    }
}

// Question - 7
class Book {
    String bookTitle;
    String authorName;
    int bookPrice;
    void bookDetails(String bookTitle , String authorName , int bookPrice){
        System.out.println("Title of the Book : " + bookTitle);
        System.out.println("Name of the Author : " + authorName);
        System.out.println("Price of the Book : " + bookPrice);
    }
}

// Question - 8
class Dog {
    String name;
    int age;
    String breed;
    void setName(String name){
        this.name = name;
    }
    void setAge(int age){
        this.age = age;
    }
    void setBreed(String breed){
        this.breed = breed;
    }
    void dogDetails(String name , int age , String breed){
        System.out.println("Name of the Dog : " + name);
        System.out.println("Age of the Dog : " + age);
        System.out.println("Breed of the Dog : " + breed);
    }
}

// Question - 9
class SquareCheck {
    int length;
    int breath;
    boolean checkSquare(int length , int breath){
        if(length == breath){
            return true;
        }
        else{
            return false;
        }
    }
}

// Question - 10
class Product{
    int prodId;
    String prodName;
    int prodPrice;
    int totalCost(int prodPrice , int quantity){
        int totalBill = prodPrice * quantity;
        return totalBill;
    }
}