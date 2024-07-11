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
    * "myCar" ek object hai jo "Car" class ka specific instance hai. "myCar" ke attributes (jaise color = "Red", model = "Honda City", year = 2020) aur methods (jaise displayDetails()) hain.

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

10. What are Constructors in Java ?
Answer :-
* Constructor ek special type ka method hota hai jo kisi class ka object banate waqt call hota hai.
* Iska main purpose object ki initial state ko set karna hota hai, yaani instance variables ko initialize karna.
* Constructor ka naam hamesha class ke naam ke saath same hota hai aur iska return type nahi hota (not even void).
Key Points -
    * Constructor ka naam hamesha class ke naam ke same hota hai.
    * Constructor ka koi return type nahi hota.
    * Jab object create hota hai, constructor automatically call hota hai.
Types of Constructors -
    * Default Constructor :
        * Java automatically ek no-argument constructor provide karta hai agar aap apna custom constructor nahi likhte.
        * Default constructor instance variables ko default values pe set karta hai (0, null, false, etc.).
        * Example of Default Constructor :
        public class Car {
            String color;
            String model;
            // Default Constructor
            public Car() {
                color = "Black";
                model = "Generic";
            }

            void displayDetails() {
                System.out.println("Color: " + color);
                System.out.println("Model: " + model);
            }
        }
        public class Main {
            public static void main(String[] args) {
                // Create an object using default constructor
                Car myCar = new Car();
                myCar.displayDetails(); // Output: Color: Black, Model: Generic
            }
        }
    * Parameterized Constructor -
        * Parameterized constructors arguments lete hain aur un arguments se instance variables ko initialize karte hain.
        * Example of Parameterized Constructor :
        public class Car {
            String color;
            String model;
            // Parameterized Constructor
            public Car(String color, String model) {
                this.color = color;
                this.model = model;
            }
            void displayDetails() {
                System.out.println("Color: " + color);
                System.out.println("Model: " + model);
            }
        }
        public class Main {
            public static void main(String[] args) {
                // Create an object using parameterized constructor
                Car myCar = new Car("Red", "Honda City");
                myCar.displayDetails(); // Output: Color: Red, Model: Honda City
            }
        }

11. What is Method Overloading ?
Answer :-
* Method overloading ek concept hai jisme ek class mein ek ya zyada methods same naam ke hote hain lekin unke parameters
different hote hain (number ya type mein).
* Compiler runtime par decide karta hai ki kaunsa method call hoga based on arguments ke types aur number ke basis pe.
* Overloaded methods ka naam same hota hai.
* Parameters ke type, number ya order different ho sakta hai.
* Return type se overloaded methods ka koi relation nahi hota.
* Example of Method Overloading :
public class Calculator {
    // Method 1: Add two integers
    public int add(int a, int b) {
        return a + b;
    }
    // Method 2: Add three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    // Method 3: Add two doubles
    public double add(double a, double b) {
        return a + b;
    }
}

12. What is Constructor Overloading ?
Answer :-
* Constructor overloading similarly ek concept hai jisme ek class mein ek ya zyada constructors hote hain jo same naam ke
hote hain lekin unke parameters different hote hain (number ya type mein).
* Example of Constructor Overloading :
public class Car {
    String color;
    String model;
    // Default Constructor
    public Car() {
        color = "Black";
        model = "Generic";
    }
    // Parameterized Constructor 1
    public Car(String color) {
        this.color = color;
        this.model = "Generic";
    }
    // Parameterized Constructor 2
    public Car(String color, String model) {
        this.color = color;
        this.model = model;
    }
}

13. What is the Difference between Constructor and Method in Java ?
Answer :-
Constructor :
    * Special method used for initializing objects.
    * Same name as the class name.
    * No return type (not even void).
    * Automatically called when an object is instantiated.
    * Initializes the object's state.
Method :
    * General method used for defining behavior or actions.
    * Follows the class name in the syntax.
    * Must have a return type (void, int, String, etc.).
    * Explicitly called to execute its defined functionality.
    * Performs specific tasks or operations.

14. What are some most important Keywords in Java ?
Answer :-
Static Keyword :
    * Static keyword ka use class level variables aur methods ko define karne mein hota hai jo class ke instances se independent
     hota hai.
    * Static keyword ka use un situations mein hota hai jab hum ek variable ko class level par share karna chahte hain aur uska
     instance-specific behaviour nahi chahiye.
    * Isse memory optimization hoti hai aur program ki performance improve hoti hai.
    * Example of Static Keyword :
    public class Counter {
        public static int count = 0;  // Static variable
        public static void increment() {
            count++;
        }
    }
Abstract Keyword :
    * Abstract keyword se ek class ko abstract banaya ja sakta hai, jiska object nahi bana ja sakta hai.
    * Abstract methods sirf signature define karte hain, implementation nahi hoti.
    * Abstract classes aur methods inheritance mein use hote hain, jaha subclasses ko forced kiya ja sakta hai unhe override
     karne ke liye.
    * Isse code structure ko design aur maintain karne mein madad milti hai.
    * Example of Abstract Keyword :
    abstract class Shape {
        abstract void draw();  // Abstract method (no body)
    }
    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing a Circle");
        }
    }
Final Keyword :
    * final keyword se ek variable, method ya class ko constant ya unmodifiable banaya ja sakta hai.
    * Ek baar initialize hone ke baad, final variable ki value change nahi ho sakti.
    * Constants define karne, method overriding rokne, aur class inheritance ko prevent karne ke liye use hota hai.
    * Isse code security aur consistency maintain hoti hai.
    * Example of Final Keyword :
    public class Circle {
        private final double PI = 3.14;  // Final variable
        public final void displayArea() {  // Final method
            // Method implementation
        }
    }
This Keyword :
    * This keyword current object ko refer karta hai.
    * Iska use instance variables aur constructors mein conflict resolve karne ke liye hota hai.
    * Instance variables ko differentiate karne aur constructor chaining mein use hota hai.
    * Isse ambiguity aur readability ko improve kiya ja sakta hai.
    * Example of This Keyword :
    public class Employee {
        private String name;
        public Employee(String name) {
            this.name = name;  // 'this' keyword
        }
    }
New Keyword :
    * New keyword se ek object allocate aur initialize kiya ja sakta hai.
    * Object creation ke liye use hota hai.
    * Object instantiation aur memory allocation ke liye use hota hai.
    * Example of New Keyword :
    Circle circle = new Circle();  // Creating a new object of Circle class
Super Keyword :
    * Super keyword subclass mein parent class ke members (variables aur methods) ko access karne ke liye use hota hai.
    * Method overriding aur constructor chaining mein use hota hai.
    * Parent class ke members ko subclass mein reuse karne ke liye aur method overriding mein parent class ke method ko call
     karne ke liye.
    * Example of Super Keyword :
    class Parent {
        int num = 10;
    }
    class Child extends Parent {
        void display() {
            System.out.println(super.num);  // Accessing parent class variable using super keyword
        }
    }

15. What are Access Modifiers ?
Answer :-
* Access modifiers Java mein class members (variables, methods, constructors) aur classes ke access ko control karne ke liye use
hotey hain.
* Yeh modifiers determine karte hain ki ek member ko kitni accessibility milti hai other classes aur packages mein.

16. What are some Access Modifiers in Java ?
Answer :-
private :
    * Private member sirf usi class mein accessible hota hai jismein woh declare hua hai.
    * Private access modifier ka use member variables aur methods ko hide karne ke liye hota hai, jisse direct access se unhe
     protect kiya ja sake.
    * Sirf usi class ke andar accessible hota hai, dusre classes ya packages mein nahi.
    * Example of Private :
    public class Employee {
        private int empId;
        private String empName;
        private void displayDetails() {
            System.out.println("Employee ID: " + empId);
            System.out.println("Employee Name: " + empName);
        }
    }
default :
    * Agar koi member ka access modifier na specify kiya gaya ho, toh woh default access modifier ka hota hai.
    * Yeh member ko usi package ke saare classes ke liye accessible banata hai.
    * Default access modifier ka use package level encapsulation mein hota hai, jaha ek package ke andar ke saare classes
    ko access diya ja sakta hai.
    * Usi package ke andar ke saare classes ke liye accessible hota hai.
    * Example of Default :
    class Employee {
        int salary;  // Default access modifier
        void calculateBonus() {
            // Method implementation
        }
    }
protected :
    * Protected member subclass aur uske package ke classes ke liye accessible hota hai.
    * Protected access modifier ka use inheritance mein hota hai, jaha subclass ko parent class ke protected members ko access
     karne ka permission milta hai.
    * Usi class ke subclasses aur usi package ke dusre classes ke liye accessible hota hai.
    Example of Protected :
    package com.example;
    public class Person {
        protected String name;
        protected void displayInfo() {
            System.out.println("Name: " + name);
        }
    }
    class Employee extends Person {
        void accessParentInfo() {
            System.out.println("Employee Name: " + name);  // Can access protected member of parent class
        }
    }
public :
    * Public member ko kisi bhi class ya package se access kiya ja sakta hai.
    * Public access modifier ka use commonly used methods aur variables mein hota hai jo universal access require karte hain.
    * Har jagah, kisi bhi class ya package se accessible hota hai.
    * Example of Public :
    public class Circle {
        public double radius;
        public double calculateArea() {
            return Math.PI * radius * radius;
        }
    }

16. What are Packages in Java ?
Answer :-
* Packages Java programming language ka ek organizational unit hai jo related classes, interfaces, aur sub-packages ko ek saath
organize karta hai.
* Ye help karta hai code ko modular banane mein aur large projects ko manage karne mein.
* Package ek directory structure ki tarah hota hai jo related classes ko group karne mein madad karta hai.
* Har package ka unique name hota hai jo reverse domain naming convention (like com.example.project) follow karta hai.
* Packages help karte hain code ko organized rakhne mein, jisse classes aur related resources easily accessible ho.
* Creating a Package :
    package com.example.myproject;
    public class MyClass {
        // Class implementation
    }
* Accessing Classes from Another Package :
    package com.example.otherpackage;
    import com.example.myproject.MyClass;
    public class AnotherClass {
        public static void main(String[] args) {
            // Accessing MyClass from com.example.myproject package
            MyClass obj = new MyClass();
            // Use obj here
        }
    }

17. What is import in Java ?
Answer :-
* import statement Java programming language mein ek directive hai jo hume allow karta hai external classes, interfaces, aur
packages ko refer karne ke liye.
* Jab bhi hum kisi class ya resource ko import karte hain, hum directly uska naam use kar sakte hain apne code mein.
* Import statement se hum dusre packages ya external classes ko apne current class mein access kar sakte hain.
* Import statement ka primary use hai external classes ya interfaces ko access karne mein, jo alag package mein define hote hain.
* Ye code ko readable banata hai kyunki hume package names ko har baar likhne ki zarurat nahi hoti.
* Types of imports :
    Single Type Import - Ek specific class ya interface ko import karne ke liye.
    Wildcard Import - Ek package ke saare classes ya sub-packages ko import karne ke liye (import package.*).
* Example of Single Type Import :
    import java.util.ArrayList;
    public class MyClass {
        public static void main(String[] args) {
            // Using ArrayList from java.util package
            ArrayList<String> list = new ArrayList<>();
            // Use list here
        }
    }
* Example of Wildcard Import :
    import java.util.*;
    public class AnotherClass {
        public static void main(String[] args) {
            // Using HashMap from java.util package
            HashMap<String, Integer> map = new HashMap<>();
            // Use map here
        }
    }

18. What are different Static members ?
Answer :-
* Static keyword Java mein ek modifier hai jo class ke saath associate hota hai, na ki kisi specific object ke saath.
* Iska matlab hai ki static members (variables aur methods) direct class ke through access kiye ja sakte hain, bina class
ke kisi object ke banaye.
* There are three Static Members :
    * Static Variable
    * Static Method
    * Static Block
* Static Variable :
    * Static variables class level par declare kiye jate hain static keyword ke saath.
    * Ye variables class ke saare objects ke liye common hote hain, matlab har object ke liye alag memory allocate nahi hoti,
      balki ek hi copy shared hota hai.
    * Static variables useful hote hain jab hume kisi data ko sabhi objects ke beech share karna hota hai, jaise ki kisi class
      ke instances ke beech shared counter, ya constant values.
    * Example of Static Variable :
    public class Example {
        static int count = 0; // Static variable
        void increment() {
            count++;
        }
    }
* Static Method :
    * Static methods class ke saath associate hote hain, na ki kisi particular object ke saath.
    * Inko static keyword ke saath declare kiya jata hai.
    * Static methods ko class ke object ke bina directly call kiya ja sakta hai.
    * Static methods ka use tab kiya jata hai jab kisi functionality ko specific object ke context se independent rakhna ho,
      jaise ki utility functions.
    * Example of Static Method :
    public class Example {
        static void display() {
            System.out.println("This is a static method.");
        }
    }
* Static Block :
    * Static block ek special block hota hai jo class load hone par execute hota hai, aur sirf ek baar chalta hai.
    * Isme hum initialization ya complex setup kar sakte hain jo class level par apply ho.
    * Static blocks ka use tab kiya jata hai jab class load hone par kuch initialization steps ya setup execute karna ho,
      jaise ki database connection setup.
    * Example of Static Block :
    public class Example {
        static {
            System.out.println("Static block initialized.");
        }
    }
* Summary :
    * Static Keyword - Class level modifier jo class ke saath associate hota hai.
    * Static Variable - Ek hi copy shared hota hai saare objects ke beech.
    * Static Method - Directly class ke through call kiya ja sakta hai, object ke bina.
    * Static Block - Class load hone par ek baar execute hota hai, initialization ke liye use hota hai.

19. What happens when we use Non-Static member inside Static context in Java ?
Answer :-
* Jab ek non-static member (jaise instance variable ya method) ko hum static context (jaise ki static method ya static block)
ke andar access karte hain Java mein, toh hume ek object ki zarurat hoti hai.
* Static context class ke level par kaam karta hai aur wo specific object instances se nahi juda hota hai.
* Isliye, non-static members ko access karne ke liye hume pehle ek object create karna padta hai aur fir us object ke through
hi inhe access kar sakte hain.
* Example :
public class MyClass {
    private int instanceVar;  // Non-static variable
    public static void staticMethod() {
        // Trying to access 'instanceVar' directly in a static method
        // This will cause a compilation error
        // instanceVar = 10;  // Compilation error: Cannot make a static reference to the non-static field instanceVar
    }
    public static void main(String[] args) {
        // Inside static method (main method)
        // You cannot directly access 'instanceVar' here
        // You need to create an instance of MyClass to access 'instanceVar'
        MyClass obj = new MyClass();
        obj.instanceVar = 15;  // Accessing 'instanceVar' through object reference
    }
}

20. What happens when we use Static member inside Non-static Context in Java ?
Answer :-
* Jab ek static member (jaise static variable ya static method) ko hum non-static context (jaise ki instance method) ke andar
access karte hain Java mein, toh hum isko directly class ke naam se ya agar wahi class hai to directly access kar sakte hain.
* Static members class ke level par exist karte hain aur wo object instances se independent hote hain.
* Isliye, non-static context ke andar hum inhe bina kisi object ke create kiye access kar sakte hain.
* Example :
public class MyClass {
    private int instanceVar;  // Non-static variable
    private static int staticVar = 0;  // Static variable
    public void instanceMethod() {
        // Inside instance method
        instanceVar = 10;  // Accessing non-static variable directly

        staticVar = 20;  // Accessing static variable directly

        staticMethod();  // Calling static method directly
    }
    public static void staticMethod() {
        // Static method
        System.out.println("Static method called");
    }
    public static void main(String[] args) {
        // Inside static method (main method)
        // You can access 'staticVar' and call 'staticMethod' directly
        // To access 'instanceVar', you need an instance of MyClass

        staticVar = 30;  // Accessing static variable directly

        staticMethod();  // Calling static method directly

        // To access 'instanceVar', you need to create an instance of MyClass
        MyClass obj = new MyClass();
        obj.instanceVar = 15;  // Accessing non-static variable through object reference
    }
}
* Summary :
    Non-static member inside Static - Non-static members require an instance of the class to be accessed within a static context
                                      because static contexts operate at the class level and do not have direct access to
                                      instance-specific data.
    Static member inside Non-static - Static members can be accessed directly within a non-static context using the class name or
                                      directly if they are in the same class. They exist at the class level and are independent
                                      of object instances.

21. What happens when you use this Keyword inside Static Context in Java ?
Answer :-
* Java mein this keyword ko static context mein use karna galat hai kyunki static methods ya static blocks kisi specific object
instance ke saath kaam nahi karte.
* Java mein, this current object instance ko refer karta hai, lekin static methods ya static blocks kisi particular object
instance ke saath nahi operate karte hain.
* Isliye, this keyword ko direct taur par ek static method ke andar use karna allowed nahi hai.
* Static methods class ke level par hote hain aur kisi specific instance se juda nahi hote. Isliye, unhe instance-specific
members tak access karne ke liye this keyword ka use nahi kiya ja sakta hai.
* Agar aap koshish karte hain this keyword ko ek static method ya static block ke andar use karne ki, to yeh ek compilation
error produce karega kyunki static context mein this resolve nahi hota hai.
* Example :
    public class MyClass {
        private int instanceVar;
        public static void staticMethod() {
            // `this` keyword ko static method ke andar use karne ki koshish
            // Isse compilation error aayega
            // this.instanceVar = 10;  // Compilation error: Cannot use 'this' in a static context
        }
        public static void main(String[] args) {
            // Static method ke andar (main method)
            // Aap `this` ko direct taur par use nahi kar sakte

            // instanceVar ko access karne ke liye, aapko MyClass ka ek instance create karna hoga
            MyClass obj = new MyClass();
            obj.instanceVar = 15;  // Object reference ke through instanceVar access kiya ja sakta hai
        }
    }
* Static context mein instance variables ya methods ko access karne ke liye, aam taur par aap ek object reference ko parameter
ke roop mein pass karte hain ya fir static method ke andar class ka ek instance create karte hain:
* Agar aapko instance-specific data par kaam karna hai, to static method mein ek object reference ko parameter ke roop mein
pass karein.
* Static method ke andar class ka ek instance create karein jisse instance variables aur methods ko indirectly access kiya ja sake.
* Is tarah se, Java mein this keyword ka use sirf non-static context (instance methods ya constructors) mein hota hai jahan ye
current object instance ko refer karta hai.
* Static context mein, instance-specific data ke liye direct this ka use nahi hota.

22. What are the 4 Properties of OOPs ?
Answer :-
* Inheritance
* Polymorphism
* Encapsulation
* Abstraction

23. What is Inheritance in Java ?
Answer :-
* Inheritance ek concept hai jisme ek class dusri class ke features (fields aur methods) ko inherit ya extend karti hai.
* Isse ek parent-child relationship create hota hai classes ke beech mein.
* Inheritance ka use tab hota hai jab ek class dusri class ke code ko reuse karna chahti hai.
* Isse code ki reusability badhti hai aur code maintainability improve hoti hai.
* Inheritance ka use karke hum ek class ke saare properties aur behaviors ko dusri class mein extend kar sakte hain without
  duplicating code.
* Java mein inheritance extends keyword se implement hota hai.
* Example of Inheritance :
    // Parent class
    class Vehicle {
        protected String brand;

        public void honk() {
            System.out.println("Tuut, tuut!");
        }
    }
    // Child class inheriting from Vehicle
    class Car extends Vehicle {
        private String modelName;

        public Car(String brand, String modelName) {
            this.brand = brand;
            this.modelName = modelName;
        }

        public void display() {
            System.out.println("Brand: " + brand + ", Model: " + modelName);
        }
    }
* Yahan Vehicle class brand ko define karti hai aur Car class Vehicle class ko extend karke brand property aur honk() method ko
inherit karti hai.
* Isse Car class Vehicle ke features ko use kar sakti hai aur apne specific features jaise modelName ko bhi define kar sakti
hai.

24. What is Polymorphism ?
Answer :-
* Poly - Many.
* Morphism - Ways to Represent.
* Polymorphism ek concept hai jisme ek object alag-alag tareeke se behave kar sakta hai alag-alag situations mein.
* Ismein method overriding aur method overloading shaamil hote hain.
* Polymorphism ka use case ye hai ki ek method alag-alag tareeke se kaam kar sakta hai based on the object type jis par wo
invoke hota hai.
* Polymorphism ka use karke hum flexibility achieve karte hain aur code ko extendable banate hain.
* Method overriding (runtime polymorphism) aur method overloading (compile-time polymorphism) ke through implement hota hai.
* Example of Polymorphism :
    // Parent class
    class Animal {
        public void sound() {
            System.out.println("Animal makes a sound");
        }
    }
    // Child classes overriding sound method
    class Dog extends Animal {
        public void sound() {
            System.out.println("Dog barks");
        }
    }
    class Cat extends Animal {
        public void sound() {
            System.out.println("Cat meows");
        }
    }
* Yahan Animal class ke sound() method ko Dog aur Cat classes ne override kiya hai apne specific sounds ke liye.
* Jab Dog aur Cat ke objects ko sound() method call kiya jata hai, toh wo apne specific sounds ko print karte hain.

25. What is Encapsulation ?
Answer :-
* Encapsulation ek concept hai jisme data aur uske related methods ek unit (class) ke andar encapsulate kiye jaate hain,
aur unka direct access bahar se nahi hota.
* Encapsulation ka use case ye hai ki data ko private rakhte hue usko access aur modify karne ke liye public methods (
getter aur setter) provide kiye jaate hain.
* Isse data security aur maintainability improve hoti hai.
* Encapsulation ka use karke hum data ko safe rakhte hain aur direct access se protect karte hain.
* Java mein encapsulation private access modifiers aur public getter/setter methods se implement hota hai.
* Example of Encapsulation :
    // Encapsulated class
    public class Person {
        private String name;
        private int age;
        // Getter method for name
        public String getName() {
            return name;
        }
        // Setter method for name
        public void setName(String name) {
            this.name = name;
        }
        // Getter method for age
        public int getAge() {
            return age;
        }
        // Setter method for age
        public void setAge(int age) {
            this.age = age;
        }
    }
* Yahan Person class ke name aur age variables private hain aur inko access karne ke liye public getter/setter methods provide
kiye gaye hain.
* Isse name aur age ko direct access se protect kiya gaya hai aur valid data access through methods ensure kiya gaya hai.

26. What is Abstraction ?
Answer :-
* Abstraction ek concept hai jismein sirf essential details aur functionality hi expose ki jaati hai aur implementation details
hide kiye jaate hain.
* Abstraction ka use case ye hai ki complex systems ko simple interfaces ke through represent kiya ja sakta hai, jisse users
ko internal implementation details se bachaya ja sakta hai.
* Abstraction ka use karke hum complexity ko handle karte hain aur users ko simplified interface provide karte hain.
* Java mein abstraction abstract classes aur interfaces ke through achieve hoti hai.
* Example of Abstraction :
    // Abstract class
    abstract class Shape {
        abstract void draw();  // Abstract method (no body)
    }
    // Derived class (inheritance from Shape)
    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing a Circle");
        }
    }
    class Rectangle extends Shape {
        void draw() {
            System.out.println("Drawing a Rectangle");
        }
    }
* Yahan Shape abstract class ek abstract method draw() define karta hai jo Circle aur Rectangle classes mein implement kiya
gaya hai apne specific drawing logic ke liye.
* Isse Shape class ke objects ko draw karne ke liye simplified interface provide hoti hai.

27. What are the types of Inheritance in Java ?
Answer :-
* Single
    * Ek class dusri class se extend hoti hai.
    * Java mein multiple inheritance nahi hoti hai, lekin ek class multiple interfaces implement kar sakti hai.
    * Example of Single Inheritance :
    class Parent {
        // Parent class code
    }
    class Child extends Parent {
        // Child class inheriting from Parent
    }
* Hierarchical
    * Ek class multiple subclasses ko extend karti hai.
    * Example of Hierarchical Inheritance :
    class Animal {
        // Animal class code
    }
    class Dog extends Animal {
        // Dog class inheriting from Animal
    }
    class Cat extends Animal {
        // Cat class inheriting from Animal
    }
* Multilevel
    * Ek class dusri class ko extend karti hai, jo khud ek aur class ko extend karta hai.
    * Example of Multilevel Inheritance :
    class Grandparent {
        // Grandparent class code
    }
    class Parent extends Grandparent {
        // Parent class inheriting from Grandparent
    }
    class Child extends Parent {
        // Child class inheriting from Parent
    }

28. What are the types of Polymorphism in Java ?
Answer :-
* Compile-time Polymorphism (Method Overloading)
    * Ek class mein multiple methods hote hain jo same naam par alag-alag parameters lete hain.
    * Example of Compile-time Polymorphism (Method Overloading) :
    class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
        public double add(double a, double b) {
            return a + b;
        }
    }
* Runtime Polymorphism (Method Overriding)
    * Ek subclass apne parent class ke method ko override karta hai.
    * Example of Runtime Polymorphism (Method Overriding) :
    class Animal {
        public void sound() {
            System.out.println("Animal makes a sound");
        }
    }
    class Dog extends Animal {
        public void sound() {
            System.out.println("Dog barks");
        }
    }

29. What are the types of Encapsulation in Java ?
Answer :-
* Data Hiding
    * Class ke variables ko private banakar unhe direct access se protect karna.
    * Example of Data Hiding :
    class Person {
        private String name;
        private int age;
        // Getter and setter methods
    }
* Access Modifiers
    * Java mein access modifiers (private, protected, public) ka use karke encapsulation implement kiya ja sakta hai.
    * Example of Access Modifiers :
    public class Employee {
        private String name;
        protected double salary;
        int age;
        public String designation;
        // Getter and setter methods
    }

30. What are the types of Abstraction in Java ?
Answer :-
* Abstract Class
    * Ek class jo partially implemented hoti hai aur jise inherit karke complete kiya ja sakta hai.
    * Example of Abstract Class :
    abstract class Shape {
        abstract void draw();  // Abstract method
    }
    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing a Circle");
        }
    }
* Interface
    * Ek blueprint hota hai jo multiple classes implement kar sakte hain.
    * Example of Interface :
    interface Animal {
        void sound();  // Abstract method
    }
    class Dog implements Animal {
        public void sound() {
            System.out.println("Dog barks");
        }
    }
    class Cat implements Animal {
        public void sound() {
            System.out.println("Cat meows");
        }
    }

*/