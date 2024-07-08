/*

1. What is a Class?
Answer :
Definition - A blueprint for creating objects (instances). It encapsulates data for the object and methods to manipulate that data.


2. What are the Differences Between Structure and Class ?
Answer :
Structure
    Language: Commonly used in C and C++.
    Default Access Modifier: Public.
    Inheritance: Not supported.
    Use Case: Simple data grouping without behavior.
Class
    Language: Java, C++, C#.
    Default Access Modifier: Private (in C++), No default in Java.
    Inheritance: Supported.
    Use Case: Encapsulation of data and behavior.


3. What are the Similarities Between Structure and Class ?
Answer :
* Both can contain variables and methods.
* Both can be instantiated to create objects.
* Both can have constructors (in C++).


4. When to Use Structure Over Class?
Answer :
* Use structures for lightweight objects that primarily store data and have little to no behavior.
* In C++, if you need simple, plain old data types (PODs) without the overhead of class features like inheritance.


5. What is Access Modifiers in Java ?
Answer :
Access modifiers in Java define the scope and visibility of classes, methods, and variables. Understanding these helps in encapsulating and protecting your code.
Public
    Definition - Public members (fields, methods, or classes) are accessible from any other class.
    Real-World Example - Imagine a public park. Anyone can enter and use it.
    Code Example - 
        public class Example {
            public int publicVariable;
            public void publicMethod() {
                // method body
            }
        }
    Here, publicVariable and publicMethod can be accessed from any other class.
Private
    Definition - Private members are accessible only within the class they are declared.
    Real-World Example - Think of a private diary. Only the owner can read it.
    Code Example -
        public class Example {
            private int privateVariable;
            private void privateMethod() {
                // method body
            }
        }
        Here, privateVariable and privateMethod cannot be accessed from outside the Example class.
Protected
    Definition - Protected members are accessible within the same package and by subclasses.
    Real-World Example - Imagine a family heirloom. Only family members can access it, but it is not public.
    Code Example -
        public class Example {
            protected int protectedVariable;    
            protected void protectedMethod() {
                // method body
            }
        }
        Here, protectedVariable and protectedMethod can be accessed within the same package and by subclasses.
Friend (C++ only)
    Definition - Allows another class or function to access private and protected members of the class.
    Example -
        friend class FriendClass;
Protected Friend (C++ only)
    Definition - Accessible by derived classes and classes in the same assembly.


6. What is Member Function in Java ?
Answer :
A member function (also known as a method) is a function that is defined within a class and operates on the objects of that class. It can access the data members (fields) of the class and can perform operations on these data members.
Inside Class Function 
    Definition - Defined inside the class definition.
    Inline Keyword - Suggests to the compiler to insert the code directly at the call point to reduce overhead.
    Example -
        class Example {
            public void insideClassFunction() {
            // function body
            }
        }
Outside Class Function
    Definition - Defined outside the class using the scope resolution operator (::).
    Scope Resolution Operator - Used to define a function outside its class.
    Example -
        class Example {
            public void outsideClassFunction();
        }
        void Example::outsideClassFunction() {
            // function body
        }


7. What are Constructors in Java ?
Answer :
Constructors are special member functions used to initialize objects of a class. They have the same name as the class and do not have a return type.
Default Constructor
    Definition - A constructor with no parameters.
    Example -
        public Example() {
            // constructor body
        }
Parameterized Constructor
    Definition - A constructor with parameters to initialize object attributes.
    Example -
        public Example(int a) {
            // constructor body
        }
Copy Constructor
    Definition - A constructor that creates a new object as a copy of an existing object.
    Example -
        Example(const Example &obj) {
            // copy constructor body
        }
Virtual Constructor
    Definition - Not a real concept in most languages; a term used for factory methods.
Virtual Copy Constructor
    Definition - Not a standard concept; implies a method to clone objects polymorphically.


8. What is Deep Copy & Shallow Copy ?
Answer :
Deep Copy - Creates a copy of the object and all objects it references.
Shallow Copy - Creates a copy of the object but not the objects it references.


9. What is the difference Between Copy Constructor and Assignment Operator ?
Answer :
Copy Constructor - Used to initialize a new object from an existing object.
Assignment Operator - Used to copy the values from one object to another existing object.


10. How Constructors are different from a normal member function ?
Answer :
* Constructors have no return type.
* Automatically called when an object is created.


11. Can We Have More Than One Constructor in a Class?
Answer :
Yes, a class in Java can have more than one constructor. This is known as constructor overloading. Overloading allows a class to have multiple constructors with different parameters, enabling objects to be initialized in different ways.
Constructor Overloading
    Definition - The practice of defining multiple constructors in a class, each with a different parameter list.
    Purpose - Provides flexibility in initializing objects with different sets of data.
    Example -
        public class Car {
            // Default constructor
            public Car() {
                System.out.println("Default Car created");
            }
            // Parameterized constructor
            public Car(String model) {
                System.out.println("Car model: " + model);
            }
            // Another parameterized constructor
            public Car(String model, int year) {
                System.out.println("Car model: " + model + ", Year: " + year);
            }
        }
        public class Main {
            public static void main(String[] args) {
                Car car1 = new Car(); // Calls default constructor
                Car car2 = new Car("Sedan"); // Calls parameterized constructor with one argument
                Car car3 = new Car("SUV", 2022); // Calls parameterized constructor with two arguments
            }
}


12. What are Destructors in Java ?
Answer :
In Java, destructors as known in C++ do not exist. Instead, Java has a garbage collector that automatically handles memory management. However, Java provides a mechanism to clean up resources, which is done through the finalize method, though it is deprecated in recent versions.
Private Destructor
    Definition - A destructor that cannot be called outside the class, useful in singleton patterns.
Virtual Destructor
    Definition - Ensures derived class destructors are called.
    Example -
        virtual ~BaseClass() {}
Pure Virtual Destructor
    Definition - Used to make a class abstract.
    Example -   
        virtual ~BaseClass() = 0;


13. How Destructors are different from a Normal Member Function ?
Answer :
* Destructors have no return type.
* Automatically called when an object goes out of scope.


14. Can there be more than one destructor in a Class ?
Answer :
* Not possible; a class can have only one destructor.


15. When do we need to write a user-defined destructor ?
Answer :
* Needed to release resources manually like file handles or network connections.


16. Can a destructor be Virtual ?
Answer :
No, in Java, destructors cannot be declared as virtual like in C++. The concept of virtual destructors is not applicable in Java due to its automatic memory management through garbage collection.
When to Use It -
    * Since virtual destructors are not applicable in Java, there's no specific scenario where you would use them. Instead, in Java, you rely on the garbage collector to automatically free memory when objects are no longer referenced.


17. What is an Object?
Answer :
Definition - An object is a tangible instance of a class in object-oriented programming (OOP). It represents a real-world entity with its properties (attributes) and behaviors (methods).


18. What is the Difference Between a Class and Object ?
Answer :
Class
    Definition - A class is a blueprint or template for creating objects. It defines the structure and behavior that all objects of that type will have.
    Example - Consider a Car class. It defines what a car is and what it can do, such as its properties (color, model) and behaviors (drive, stop).
Object
    Definition - An object is an instance of a class. It is created based on the blueprint provided by the class and represents a specific instance of that class.
    Example - If Car is a class, then a specific car, like a Toyota Corolla or a Ford Mustang, would be objects of the Car class. Each object has its own unique characteristics and behaviors.


19. What is the Real-World Analogy of Class and Object ?
Answer :
Analogy
    Think of a class as a blueprint for building houses, and objects as actual houses built based on that blueprint.
Explanation
    Class as a Blueprint - Just like a blueprint specifies the layout, design, and features of a house, a class specifies the structure, attributes, and behaviors of objects.
    Object as an Actual House - An object, like a house built based on a blueprint, is a tangible instance of a class. Each object (house) created based on the class (blueprint) has its own unique characteristics and functionalities.
    Example - Consider a House class with attributes such as color, size, and methods like openDoor() and turnOnLights(). An object myHouse created from this class would represent a specific instance of a house, with its own color, size, and the ability to perform actions like opening the door or turning on lights.


20. What are some Important Keywords in Java ?
Answer :
Understanding the purpose of each keyword is crucial for mastering object-oriented programming (OOP) in Java.
Static Keyword
    Usage - Used to declare a member that belongs to the class rather than any specific instance of the class.
    Example - static variables are shared among all instances of the class, like a counter for the number of instances created.
    Real-world Analogy - Consider a company where all employees share the same company name. Here, the company name is a static variable shared among all employee instances.
Virtual Keyword
    Usage - In Java, there is no virtual keyword like in C++. Method overriding and dynamic method dispatch achieve the concept of virtual functions.
    Example - When a subclass overrides a method of its superclass, it exhibits polymorphic behavior, dynamically selecting the appropriate method at runtime.
    Real-world Analogy - Think of a smart thermostat adapting its behavior based on environmental changes, such as adjusting the temperature based on the weather forecast.
Abstract Keyword
    Usage - Used to declare abstract classes and methods. Abstract classes cannot be instantiated, and abstract methods must be implemented by concrete subclasses.
    Example - An abstract class Shape defines the concept of a geometric shape, with abstract methods like area() that must be implemented by subclasses like Circle or Rectangle.
    Real-world Analogy - Imagine a generic blueprint for constructing different types of vehicles. While the blueprint itself cannot be used to build a vehicle, it provides essential guidelines for constructing specific types of vehicles, such as cars or trucks.
Final Keyword
    Usage - Used to restrict the modification of classes, methods, and variables. Once declared as final, they cannot be subclassed, overridden, or modified.
    Example - Declaring a class or method as final ensures that its behavior remains consistent and cannot be altered by subclasses.
    Real-world Analogy - Think of a company policy that specifies certain rules or guidelines that cannot be changed by individual employees. These rules are final and apply universally to all employees.
Explicit Keyword
    Usage - There is no explicit keyword in Java like in C++.
This Keyword
    Usage - Used to refer to the current instance of a class. It is used to differentiate between instance variables and parameters with the same name.
    Example - In a constructor, this is used to refer to the instance variable, distinguishing it from a parameter with the same name.
    Real-world Analogy - When writing a letter, using "this" helps specify the subject of the letter, ensuring clarity in communication, especially when referring to multiple subjects.
New Keyword
    Usage - Used to dynamically allocate memory for objects at runtime.
    Example - When creating a new instance of a class using new, memory is allocated on the heap to store the object's data.
    Real-world Analogy - 
    Think of ordering a new book online. When you place an order, a new copy of the book is created and allocated to you, separate from other copies in the bookstore.
Const Keyword
    Usage - There is no const keyword in Java like in C++.
Super Keyword
    Usage - Used to refer to the superclass of the current object instance.
    Example - In a subclass constructor, super() is used to call the constructor of the superclass.
    Real-world Analogy - Consider a family tree where each generation inherits traits from the previous one. The super keyword refers to the ancestors, accessing traits inherited from previous generations.

*/