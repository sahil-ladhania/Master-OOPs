/*

-----Class-----

1. What is a Class?
Answer :
* A blueprint for creating objects (instances).
* It encapsulates data for the object and methods to manipulate that data.
* Class ek blueprint ya template hota hai jisse objects create kiye jaate hain.
* Yeh ek tarah ka logical structure hota hai jisme tum apne data aur behavior ko define karte ho.
* Class ke andar tum variables (attributes) aur methods (functions) define karte ho jo us object ki properties aur actions ko represent karte hain.
* Jab tum ek class create karte ho, tum basically ek mold bana rahe ho jisse multiple objects (instances) bana sakte ho.
* Har object us class ka ek unique instance hota hai, lekin sab ke paas wahi properties aur methods hoti hain jo class me define ki gayi hain.
* Key Points :-
    Blueprint for creating objects.
    Defines attributes (variables) and methods (functions).
    Helps in organizing data and functions in a modular way.
    Used to model real-world entities.
* Structure of a Class :-
    Class ke andar 2 main cheezen hoti hain :
        Attributes (Variables) - Yeh object ke characteristics ya properties hoti hain.
        Methods (Functions) - Yeh object ke actions ya behavior define karte hain.
* Ex -
    Let’s take an example of a class called Car.
    // Class Definition
    class Car {
        // Attributes (variables)
        String brand;
        int speed;
        // Method (function)
        void drive() {
            System.out.println(brand + " is driving at " + speed + " km/h.");
        }
    }
    •	Attributes - brand aur speed define karte hain ki car ka brand kya hai aur speed kitni hai.
	•	Method - drive() method specify karta hai ki car kaise drive karegi aur kya action perform karegi.
* Ab is class se objects ban sakte hain, jo real-world cars ko represent karenge.
* Class se objects banane ke liye tumhe class ka naam use karke ek object instantiate karna hota hai.
* Ex -
    public class Main {
        public static void main(String[] args) {
            // Object Creation
            Car myCar = new Car();  // myCar is an instance of the Car class
            // Setting attributes
            myCar.brand = "Honda";
            myCar.speed = 120;
            // Calling method
            myCar.drive();  // Output: Honda is driving at 120 km/h.
        }
    }
    Yahaan myCar ek object hai Car class ka, jisme humne attributes brand aur speed set kiye hain, aur drive() method call kiya hai jo action perform karta hai.
* Key Characteristics of a Class :-
    Encapsulation -
        Class ek encapsulation provide karti hai jisme attributes aur methods ko ek saath bundle kiya jaata hai, jisse object ka internal state secure rehta hai.
    Reusability -
        Ek baar class banane ke baad tum usse multiple objects bana sakte ho, jo code reusability ko promote karta hai.
    Abstraction -
        Class ke through tum complex systems ko easily represent kar sakte ho by hiding unnecessary details.
    Modularity -
        Classes ka use karke tum apne code ko logically organize aur manage kar sakte ho.
        Har class ek specific responsibility handle karti hai, jisse code maintainable rehta hai.
* Real-World Example :-
    Imagine karo tumhari car ek object hai aur uska blueprint Car class hai.
    Tum ek single class Car define karte ho, jo har car ka common structure provide karti hai (jaise brand, speed).
    Phir tum alag-alag objects (cars) create kar sakte ho jaise myCar, yourCar, etc.
        	•	Class - Car (blueprint)
	        •	Object 1 - myCar (Honda, 120 km/h)
	        •	Object 2 - yourCar (Toyota, 100 km/h)
            Har car object ke apne specific values hoti hain (brand aur speed), lekin sab same class se create hue hain.

-----Object-----

1. What is an Object ?
Answer :
* Object ek real-world entity ka representation hota hai jo kisi Class ka instance hota hai.
* Jab tum class define karte ho, to tum ek template ya blueprint bana rahe hote ho, aur jab us class ka object create hota hai, to wo us blueprint ke ek specific version ko represent karta hai.
* Har object apni state aur behavior rakhta hai :-
    State -
        Yeh object ke attributes (variables) hote hain, jo object ki current condition ko define karte hain.
	Behavior -
        Yeh object ke methods (functions) hote hain, jo actions ya operations ko define karte hain.
* Key Points :-
    Instance of a Class - Class se banaya gaya object ek instance hota hai.
    Has Attributes and Methods - Object apni specific values (attributes) aur actions (methods) ke saath hota hai.
    Real-World Representation - Object kisi real-world entity ko model karta hai.
* Ex -
    Agar hum ek Car class ki baat karein, to class se objects ban sakte hain, jinka har ek object alag state (brand, speed) rakhta hai, lekin unka behavior (methods) same rahega.
    class Car {
        String brand;
        int speed;
        void drive() {
            System.out.println(brand + " is driving at " + speed + " km/h.");
        }
    }
    public class Main {
        public static void main(String[] args) {
            // Creating an object of class Car
            Car myCar = new Car();  // myCar is an object of the Car class
            myCar.brand = "Honda";  // Setting the brand attribute
            myCar.speed = 120;  // Setting the speed attribute
            myCar.drive();  // Calling the method (Behavior)
        }
    }
* Understanding Object Creation :-
    In this example -
        	•	myCar is an object of class Car.
	        •	Is object ka state hai brand = Honda aur speed = 120.
	        •	Iska behavior hai drive() method jo action perform karta hai.
* Characteristics of an Object :-
    State (Attributes/Properties) -
        Object ki specific values ko state kehte hain.
        Example mein myCar ka brand Honda hai aur speed 120 hai.
        Har object ka apna unique state hota hai.
        Ex -
            Car myCar = new Car();
            myCar.brand = "Honda";
            myCar.speed = 120;
            Car yourCar = new Car();
            yourCar.brand = "Toyota";
            yourCar.speed = 100;
            Yahaan myCar aur yourCar dono alag-alag state mein hain.
    Behavior (Methods/Functions) -
        Object jo actions perform karta hai unhe behavior kehte hain.
        Example mein myCar.drive() method ek action hai jo car ko drive karata hai.
        Multiple objects same method ko use kar sakte hain lekin unke alag results ho sakte hain based on their state.
    Identity -
        Har object ka apna ek unique identity hota hai, jo us object ko distinguish karta hai.
        Yeh identity memory address ke through represent ki jaati hai.
        Ex -
            myCar aur yourCar do alag-alag objects hain, chahe dono Car class ke instances hain.
* Real-World Example :-
    Imagine karo tumhari ek Class hai Phone.
    Us class se tum alag-alag objects bana sakte ho jaise myPhone, yourPhone, etc.
    Ex -
        class Phone {
            String model;
            int batteryLife;
            void makeCall() {
                System.out.println("Making a call using " + model);
            }
        }
        public class Main {
            public static void main(String[] args) {
                // Creating objects
                Phone myPhone = new Phone();
                myPhone.model = "iPhone";
                myPhone.batteryLife = 80;
                Phone yourPhone = new Phone();
                yourPhone.model = "Samsung";
                yourPhone.batteryLife = 100;
                myPhone.makeCall();  // Output: Making a call using iPhone
                yourPhone.makeCall();  // Output: Making a call using Samsung
            }
        }
        Yahaan myPhone aur yourPhone objects hain Phone class ke. Inke attributes (model, batteryLife) alag hain, lekin behavior (makeCall) same hai.
* Benefits of Object :-
    Modularity -
        Tum objects ko modular parts mein todh sakte ho, jisse code maintainable aur reusable ho jaata hai.
    State Management -
        Objects apna khud ka state rakhte hain, isliye tum real-world cheezon ko easily model kar sakte ho.
    Code Reusability -
        Tum ek class se multiple objects create karke same functionality ko alag-alag data ke saath reuse kar sakte ho.
    Security -
        Objects apni state ko hide karke data security ko promote karte hain (Encapsulation).

-----Class vs Object-----

1. What is the real world analogy or Class and Object ?
Answer :
* Class aur Object ko samajhne ke liye real-world example use karte hain.
* Imagine karo tum ek blueprint (Class) bana rahe ho ek specific cheez ka, aur us blueprint se tum alag-alag real cheezen (Objects) bana sakte ho.
* Analogy: Blueprint and House
    Class = Blueprint (नक्शा) -
        Ek blueprint ya nakshe ko tum ek Class ke tarah samajh sakte ho.
        Blueprint bas ek plan hota hai jo define karta hai ki house kaisa hoga—uska structure, rooms, doors, windows, etc.
        Blueprint khud koi real house nahi hota, but wo ek template hai jisse tum kitne bhi houses bana sakte ho.
        Har house ka structure aur design same hoga kyunki sab blueprint se bane hain, lekin har house ki apni unique features bhi ho sakti hain (jaise color, furniture, etc.).
    Object = Real House (मकान) -
        Jab tum blueprint ko follow karke ek real house banate ho, wo ek Object hota hai.
        Har house ka structure (jaise number of rooms, design) same hoga kyunki wo ek hi blueprint se bane hain, lekin har house ki unique properties ho sakti hain (color, interior design, etc.).
        Tum multiple houses bana sakte ho ek blueprint se, lekin har house ki state alag hogi.
        For example -
            	    •	Ek house ka color white ho sakta hai aur doosre ka blue.
	                •	Ek house mein 3 rooms ho sakte hain aur doosre mein 2 rooms.
* Example in Terms of Programming :-
    Example of Class (Car) -
            class Car {
                String brand;
                String color;
                int speed;
                void drive() {
                    System.out.println(brand + " is driving at " + speed + " km/h.");
                }
            }
    Example of Object (car1 , car2) -
        Car car1 = new Car();  // car1 is an object of class Car
        car1.brand = "Honda";
        car1.color = "Red";
        car1.speed = 120;
        Car car2 = new Car();  // car2 is another object of class Car
        car2.brand = "Toyota";
        car2.color = "Blue";
        car2.speed = 100;
    Dono cars ka structure same hai (brand, color, speed properties), kyunki dono Car class se bani hain. Lekin unki state alag hai (Honda vs Toyota, Red vs Blue).

-----Miscellaneous Class Questions-----

1. What are the Differences Between Structure and Class ?
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

2. What are the Similarities Between Structure and Class ?
Answer :
* Both can contain variables and methods.
* Both can be instantiated to create objects.
* Both can have constructors (in C++).

3. When to Use Structure Over Class?
Answer :
* Use structures for lightweight objects that primarily store data and have little to no behavior.
* In C++, if you need simple, plain old data types (PODs) without the overhead of class features like inheritance.

-----Access Modifiers-----

1. What is Access Modifiers in Java ?
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

-----Member Functions-----

1. What is Member Function in Java ?
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

-----Constructors-----

1. What are Constructors in Java ?
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

2. What is Deep Copy & Shallow Copy ?
Answer :
Deep Copy - Creates a copy of the object and all objects it references.
Shallow Copy - Creates a copy of the object but not the objects it references.

3. What is the difference Between Copy Constructor and Assignment Operator ?
Answer :
Copy Constructor - Used to initialize a new object from an existing object.
Assignment Operator - Used to copy the values from one object to another existing object.

4. How Constructors are different from a normal member function ?
Answer :
* Constructors have no return type.
* Automatically called when an object is created.

5. Can We Have More Than One Constructor in a Class?
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

-----Destructors-----

1. What are Destructors in Java ?
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

2. How Destructors are different from a Normal Member Function ?
Answer :
* Destructors have no return type.
* Automatically called when an object goes out of scope.

3. Can there be more than one destructor in a Class ?
Answer :
* Not possible; a class can have only one destructor.

4. When do we need to write a user-defined destructor ?
Answer :
* Needed to release resources manually like file handles or network connections.

5. Can a destructor be Virtual ?
Answer :
No, in Java, destructors cannot be declared as virtual like in C++. The concept of virtual destructors is not applicable in Java due to its automatic memory management through garbage collection.
When to Use It -
    * Since virtual destructors are not applicable in Java, there's no specific scenario where you would use them. Instead, in Java, you rely on the garbage collector to automatically free memory when objects are no longer referenced.


-----Important Keywords-----

1. What are some Important Keywords in Java ?
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

-----Polymorphism-----

1. What is Polymorphism ?
2. What is the need of Polymorphism ?
3. Explain the Categorisation :
    What is Function / Operator Overloading ?
        What is Complie Time Polymorphism ?
        What Function cannot be overloaded in Java / C++ ?
        What are all the operators that cannot be overloaded ?
    What is Function Overriding ?
        What is Run Time Polymorphism ?
4. What is Virtual Function ?
5. What is Virtual Class ?
6. What is Derived Class ?
7. Can Virtual Function be set "Private" ?
8. What is Inline Virtual Function ?
9. What is Abstract Class ?
10. What is Pure Virtual Function ?
11. What is Pure Virtual Destructor ?

-----Inheritance-----

1. What is Inheritance ?
2. What is the need of Inheritance ?
3. What is Sub-Class ?
4. What is Super-Class ?
5. What is Reusability ?
6. Can OOP exist without Inheritance ?
7. What are these types of Inheritance :
    Single
    Multiple
    Hierarchical
    Multilevel
    Hybrid / Virtual
8. What is the real-life example of Single Inheritance ?
9. What is the real-life example of Multiple Inheritance ?
10. What is the real-life example of Hierarchical Inheritance ?
11. What is the real-life example of Multilevel Inheritance ?
12. What is the real-life example of Hybrid / Virtual Inheritance ?
13. What are the limitations of Inheritance ?
14. What is Sealed Modifier ?
15. How can we call the base method without creating an instance ?
16. What is the difference between new and override ?
17. Why Java does not support Multiple Inheritance ?
18. What is Diamond Problem in case of Multiple Inheritance ?
19. If Class A inherits from Class B, then what all is inherited from Parent Class ?
    Explore every combination.
20. What is Object Slicing ?
21. How to ride base class methods / functions ?
22. What is Friend Function / Friend Class / Inline Function ?
23. What is Local Class / Nested Class / Simulating Final Class ?
24. Does overloading works in Inheritance ?
25. What is the difference between Polymorphism and Inheritance ?
26. What is Generalisation / Aggregation / Composition ?

-----Encapsulation-----

1. What is Encapsulation ?
2. What is the need of Encapsulation ?
3. What are the advantages of Encapsulation ?
4. How to achieve Encapsulation ?
5. What are some real world examples of Encapsulation ?
6. How to Implement Encapsulation in Code (JAVA) ?

-----Abstraction-----

1. What is Abstraction ?
2. What is the need of Abstraction ?
3. When to use Abstraction ?
4. How to achieve Abstraction in JAVA :
    Interfaces
    Abstract Class
5. What is the difference between Encapsulation and Abstraction ?
6. What are the differences between interfaces and abstract class ?

-----Dynamic Binding-----

1. What is Dynamic Binding ?
2. What is the use of Dynamic Binding ?

-----Message Binding-----

1. What is Message Binding ?
2. What is the use of Message Binding ?

*/
