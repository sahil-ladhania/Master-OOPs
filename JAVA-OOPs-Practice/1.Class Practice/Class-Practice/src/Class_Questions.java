public class Class_Questions {
    public static void main(String[] args) {
        Kar myKar = new Kar();
        myKar.brand = "Toyota";
        myKar.model = "Fortuner";
        myKar.year = 2011;
        myKar.displayKarDetails();

        Book myBook = new Book();
        myBook.title = "Game of Thrones";
        myBook.author = "Sahil Ladhania";
        myBook.price = 499;
        myBook.displayBookDetails();

        Student student_1 = new Student();
        student_1.name = "Sahil Ladhania";
        student_1.marks = 69;
        student_1.displayStudentDetails();

        Employee employee_1 = new Employee();
        employee_1.name = "Sahil Ladhania";
        employee_1.department = "IT";
        employee_1.salary = 100000;
        employee_1.displayEmployeeDetails();

        Rectangle rectangle_1 = new Rectangle();
        rectangle_1.length = 10;
        rectangle_1.breath = 5;
        rectangle_1.calculateArea();

        /*
        	1.	Create a class “Kar”
            Define a class Kar with attributes like make, model, and year. Create a method to display car details.

	        2.	Define a class “Book”
            Create a class Book with attributes title, author, and price. Write a method to print book details.

	        3.	Create a “Student” class
            Create a Student class with attributes name, marks. Add a method to print the student’s name and marks.

	        4.	Create an “Employee” class
            Define an Employee class with attributes name, department, and salary. Implement a method to display the employee’s details.

	        5.	Create a “Rectangle” class
            Write a class Rectangle with attributes length and breadth. Add a method to calculate and print the area.
        */
    }
}

class Kar{
    String brand;
    String model;
    int year;
    void displayKarDetails(){
        System.out.println("Brand: " + brand + ", Model: " + model + ", Year: " + year);
    }
}

class Book{
    String title;
    String author;
    int price;
    void displayBookDetails(){
        System.out.println("Title: " + title + ", Author: " + author + ", Price: " + price);
    }

}

class Student{
    String name;
    int marks;
    void displayStudentDetails(){
        System.out.println("Name: " + name + ", Marks: " + marks);
    }
}

class Employee{
    String name;
    String department;
    int salary;
    void displayEmployeeDetails(){
        System.out.println("Name: " + name + ", Department: " + department + ", Salary: " + salary);
    }
}

class Rectangle{
    int length;
    int breath;
    void calculateArea(){
        int area = length * breath;
        System.out.println("Area : " + area);
    }
}