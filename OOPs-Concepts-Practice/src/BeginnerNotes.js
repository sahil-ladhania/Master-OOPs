/*

1. What is Object in OOPs ?
Answer :-
* OOPs (Object-Oriented Programming) mai, Object ek real-world entity ka representation hota hai.
* Ye ek instance hota hai class ka.
* Ek object ke paas data (properties/attributes) aur behaviors (methods/functions) hote hain.
* For example, agar aapke paas ek "Car" class hai, toh "Car" ke multiple objects ho sakte hain jaise "Honda City", "Toyota Corolla" etc.
* Example of Object :
// Define a class
class Car {
    // Attributes (Properties)
    String color;
    String model;
    int year;

    // Method (Behavior)
    void displayDetails() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }
}
// Main class
public class Main {
    public static void main(String[] args) {
        // Create an object of Car class
        Car myCar = new Car();

        // Set attributes
        myCar.color = "Red";
        myCar.model = "Honda City";
        myCar.year = 2020;

        // Call method
        myCar.displayDetails();
    }
}

2. What is Class in OOPs ?
Answer :-
* OOPs (Object-Oriented Programming) mai, Class ek blueprint ya template hota hai jo objects ko define karta hai.
* Ye attributes (data members/properties) aur methods (functions/behaviors) ko specify karta hai.
* Class ek generic definition hoti hai aur object us class ka ek specific instance hota hai.
* Example of Class :
// Define a class
class Car {
    // Attributes (Properties)
    String color;
    String model;
    int year;

    // Method (Behavior)
    void displayDetails() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }
}
// Main class
public class Main {
    public static void main(String[] args) {
        // Create an object of Car class
        Car myCar = new Car();

        // Set attributes
        myCar.color = "Red";
        myCar.model = "Honda City";
        myCar.year = 2020;

        // Call method
        myCar.displayDetails();
    }
}
* Class ek blueprint hai, yahan "Car" class banayi hai. Is class ke andar humne kuch attributes (jaise color, model, year) aur ek
method (displayDetails()) define kiya.
* Attributes class ke variables hote hain jo state ya properties define karte hain.
* Method class ke functions hote hain jo behaviors ya actions define karte hain.

3. What is the connection between Object and Class ?
Answer :-
Class -
    * Class Ek blueprint ya template hai jo define karti hai ki objects kaise banenge.
    * Class sirf definition hoti hai, actual memory allocation nahi hota.
    * Car" ek class hai jo define karti hai ki cars ke kya properties aur behaviors honge.
Object -
    * Object , Class ka ek instance hota hai.
    * Object ko memory allocate hoti hai aur uske specific values hoti hain.
    * "myCar" ek object hai jo "Car" class ka specific instance hai. "myCar" ke attributes (jaise color = "Red", model = "Honda City", year = 2020)
       aur methods (jaise displayDetails()) hain.

4. How many types of Variables are there in Java ?
Answer :-
* There are basically 3 types of variables :
    * Local Variable
    * Instance Variable
    * Static/Class Variable

5. What is Local Variable in Java ?
Answer :-
* Local variables wo variables hote hain jo kisi method, constructor, ya block ke andar declare kiye jate hain.
* Inka scope sirf us method, constructor, ya block tak hi limited hota hai jahan ye declare kiye gaye hain.
* Example of Local Variable :
public class Example {
    void display() {
        int localVar = 10; // Local variable
        System.out.println("Local Variable: " + localVar);
    }
}
* But use kb krna hai :
    * Jab aapko temporary data ko store karna ho jo sirf ek specific method ke execution ke dauran required ho.
    * Yeh variables method ke bahar access nahi kiye ja sakte.

6. What is Instance Variable in Java ?
Answer :-
* Instance variables wo variables hote hain jo class ke andar declare kiye jate hain, lekin kisi method ke bahar.
* Yeh variables har object ke liye unique hote hain aur jab object banaya jata hai tab yeh variables memory allocate karte hain.
* Example of Instance Variable :
public class Car {
    String color; // Instance variable
    String model; // Instance variable

    void displayDetails() {
        System.out.println("Color: " + color);
        System.out.println("Model: " + model);
    }
}
* But use kb krna hai :
    * Jab aapko data ko store karna ho jo har object ke liye unique ho.
    * Yeh variables class ke andar kahin bhi access kiye ja sakte hain.

7. What is Static(Class) Variable in Java ?
Answer :-
* Static variables wo variables hote hain jo class ke saath associate hote hain na ki kisi specific object ke saath.
* Yeh variables static keyword ke sath declare kiye jate hain.
* Static variables ko class ke saath share kiya jata hai aur yeh class ke load hote hi memory allocate kar lete hain.
* Example of Static(Class) Variable :
public class Car {
    static int numberOfCars = 0; // Static variable
    String color; // Instance variable
    String model; // Instance variable
    Car(String color, String model) {
        this.color = color;
        this.model = model;
        numberOfCars++;
    }
    void displayDetails() {
        System.out.println("Color: " + color);
        System.out.println("Model: " + model);
    }
    static void displayNumberOfCars() {
        System.out.println("Number of Cars: " + numberOfCars);
    }
}
* But use kb krna hai :
    * Jab aapko data ko store karna ho jo class ke sabhi objects ke liye common ho.
    * Yeh variables ko class ke naam se directly access kiya ja sakta hai bina object banaye.


8. What is the difference between all three ?
Answer :-
Local Variables :
    * Method ke andar declare hote hain.
    * Scope sirf us method tak hota hai.
    * Temporary data ke liye use hote hain.
Instance Variables :
    * Class ke andar declare hote hain, lekin method ke bahar.
    * Har object ke liye unique hote hain.
    * Object banne par memory allocate hoti hai.
Static Variables :
    * Class ke sath associate hote hain.
    * static keyword ke sath declare hote hain.
    * Sabhi objects ke liye common hote hain aur class load hote hi memory allocate karte hain.

9. What are Methods in Java ?
Answer :-
* Methods Java mein functions ki tarah hi hote hain, lekin kuch specific features aur terminologies ke sath.
* Methods ek set of statements hote hain jo specific task perform karte hain.
* Methods ko code ko reusable aur modular banane ke liye use kiya jata hai.
* Syntax of Method :
returnType methodName(parameters) {
    // method body
}
* Components of Method :
Return Type - Method kya return karega (e.g., int, void, String).
Method Name - Method ka naam (e.g., displayDetails).
Parameters - Input values jo method ko pass ki jati hain (optional).
Method Body - Code jo method ke andar execute hota hai.
* Example of Method :
public class Car {
    String color;
    String model;
    // Method to display details of the car
    void displayDetails() {
        System.out.println("Color: " + color);
        System.out.println("Model: " + model);
    }
    // Method with parameters and return type
    String getCarDetails() {
        return "Model: " + model + ", Color: " + color;
    }
}
public class Main {
    public static void main(String[] args) {
        // Create an object of Car class
        Car myCar = new Car();
        // Set attributes
        myCar.color = "Red";
        myCar.model = "Honda City";
        // Call method
        myCar.displayDetails();
        // Call method with return type
        String details = myCar.getCarDetails();
        System.out.println(details);
    }
}
* Types of Methods :
    * Instance - Jo class ke objects ke sath belong karte hain.
    * Static - Jo class level par hote hain aur inko call karne ke liye object ki zarurat nahi hoti.
* Example of Instance Method :
class Example {
    void instanceMethod() {
        System.out.println("This is an instance method.");
    }
}
public class Main {
    public static void main(String[] args) {
        // Instance method call
        Example obj = new Example();
        obj.instanceMethod();
    }
}
* Example of Static Method :
class Example {
    static void staticMethod() {
        System.out.println("This is a static method.");
    }
}
public class Main {
    public static void main(String[] args) {
        // Static method call
        Example.staticMethod();
    }
}
* Differences between Methods and Functions in Java :
Methods -
    * OOP (Object-Oriented Programming) context mein use hote hain.
    * Methods hamesha classes ke andar hote hain.
Functions -
    * Procedural programming context mein use hote hain aur class ke bahar bhi ho sakte hain (jaise C mein).















*/
