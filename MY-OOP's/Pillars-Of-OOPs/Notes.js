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
* Access Modifiers defines kaha tak ek class, method, ya variable accessible hoga.
* Ye modifiers control karte hain ki kaunsa part of code kisi doosre part tak reach kar sakta hai, and kis part ko hide kiya ja sakta hai.
* Access modifiers in Java define the scope and visibility of classes, methods, and variables.
* Understanding these helps in encapsulating and protecting your code.
* Java has 4 Main types of Access Modifiers :-
    Public
	Private
	Protected
	Default (no modifier)
* Public :
    Access - Sabse jyada accessible modifier hai.
    Jahan se access ho sakta hai - Agar koi class, method ya variable public hai, toh wo kisi bhi class se accessible hoga, chahe wo same package me ho ya different package me.
    Real-World Example - Imagine a public park, anyone can enter and use it.
    Syntax -
        public class MyClass {
            public int data;
            public void display() {
                System.out.println("Public method");
            }
        }
    Ex -
        class MyClass {
            public String name = "Sahil";  -----> Public variable
            public void display() {        -----> Public method
                System.out.println("This is a public method.");
            }
        }
        public class Main {
            public static void main(String[] args) {
                MyClass obj = new MyClass();
                System.out.println(obj.name);  -----> Accessible from anywhere
                obj.display();                 -----> Accessible from anywhere
            }
        }
        Yaha name aur display() method public hain, isliye Main class se directly access kiya ja sakta hai.
Private :
    Access - Sabse restricted modifier.
    Jahan se access ho sakta hai - Agar koi cheez private hai, toh sirf usi class ke andar access ho sakti hai jahan wo declare ki gayi hai. Private cheezein kisi doosri class ya package se directly access nahi ho sakti.
    Real-World Example - Think of a private diary, only the owner can read it.
    Syntax -
        private class MyClass {
            private int data;
            private void display() {
                System.out.println("Private method");
            }
        }
    Ex -
        class MyClass {
            private String secret = "This is private";  -----> Private variable
            private void showSecret() {                 -----> Private method
                System.out.println(secret);
            }
            public void publicMethod() {  -----> Public method to access private members
                showSecret();  -----> This is allowed inside the class
            }
        }
        public class Main {
            public static void main(String[] args) {
                MyClass obj = new MyClass();
                // System.out.println(obj.secret);  -----> ERROR: Can't access private member outside the class
                obj.publicMethod();  -----> Allowed because publicMethod is public and calls private method internally
            }
        }
        Yaha secret aur showSecret() private hain, isliye class ke bahar access nahi kiya ja sakta. Lekin publicMethod() ek public method hai jo indirectly private method ko call karta hai.
Protected :
    Access - Thoda specific hai, private se kam restrictive aur public se zyada.
    Jahan se access ho sakta hai -
                                    •	Same package ke andar access ho sakta hai, jaise default modifier.
                                    •	Different package me access tabhi hoga jab inheritance (subclass) ho. Matlab agar koi class doosre package me ho lekin wo us class ko inherit kar rahi hai, tab access allowed hoga.
    Real-World Example - Imagine a family heirloom, only family members can access it, but it is not public.
    Syntax -
        protected class MyClass {
            protected int data;
            protected void display() {
                System.out.println("Protected method");
            }
        }
    Ex -
        class MyClass {
            protected String message = "This is protected";  -----> Protected variable
            protected void showMessage() {                   -----> Protected method
                System.out.println(message);
            }
        }
        public class Main {
            public static void main(String[] args) {
                MyClass obj = new MyClass();
                obj.showMessage();  -----> Accessible within the same package
            }
        }
        -----In a different package-----
        class SubClass extends MyClass {
            public void accessProtected() {
                System.out.println(message);  -----> Allowed because it's inherited
            }
        }
        Yaha message aur showMessage() protected hain, toh same package me access ho jayenge. Agar koi class doosre package se inherit kar rahi hai, tab bhi protected members access ho sakte hain.
Friend (C++ only) :
    Allows another class or function to access private and protected members of the class.
    Example -
        friend class FriendClass;
Protected Friend (C++ only) :
    Accessible by derived classes and classes in the same assembly.

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
* Constructors ek special type ke method hote hain jo kisi class ke object ko initialize karte hain.
* Jab hum class ka object banate hain, toh constructor automatically call hota hai.
* Constructor ka naam hamesha class ke naam jaisa hota hai, aur uska return type nahi hota (na hi void, na kuch aur).
* Constructors are special member functions used to initialize objects of a class.
* Key Points about Constructors -
    Constructor ka naam class ke naam se match karna chahiye.
    Constructor ka koi return type nahi hota.
    Constructor ko manually call nahi karte, wo object create karte waqt automatically call ho jata hai.
    Constructor ka use object ko initial state dene ke liye hota hai (jaise variables ki initial values set karna).
* Java has 3 Main types of Constructors :-
    Default Constructor
	Parameterized Constructor
	Copy Constructor
* Default Constructor -
    No parameters, automatically created if no constructor is defined.
    Jab hum koi constructor explicitly nahi likhte, tab compiler automatically ek default constructor bana deta hai.
    Iska kaam sirf object create karna hota hai, aur isme koi parameters nahi hote.
    Default Constructor ka kaam -
        Agar tumhe object ko bina koi initial value diye banana hai, toh default constructor use hota hai.
    Ex -
        class Car {
            String brand;
            int speed;
            -----Default Constructor-----
            public Car() {
                System.out.println("Default constructor called");
                brand = "Unknown";
                speed = 0;
            }
        }
        public class Main {
            public static void main(String[] args) {
                Car car1 = new Car();  -----> Default Constructor is called automatically
                System.out.println(car1.brand);  -----> Output: Unknown
                System.out.println(car1.speed);  -----> Output: 0
            }
        }
        Yaha par Car ka default constructor automatically call hota hai jab car1 object banata hain.
* Parameterized Constructor -
    Accepts parameters to initialize object state.
    Ye constructor parameters accept karta hai aur unhe use karke object ki initial state ko set karta hai.
    Kab use hota hai -
        Jab tumhe object banate time specific values deni hoti hain, tab parameterized constructor ka use hota hai.
    Ex -
        class Car {
            String brand;
            int speed;
            -----Parameterized Constructor-----
            public Car(String b, int s) {
                brand = b;
                speed = s;
            }
        }
        public class Main {
            public static void main(String[] args) {
                Car car1 = new Car("Honda", 120);  -----> Parameterized Constructor is called
                System.out.println(car1.brand);  -----> Output: Honda
                System.out.println(car1.speed);  -----> Output: 120
            }
        }
        Yaha par Car class ka parameterized constructor values accept karta hai jab object create hota hai.
* Copy Constructor -
    Creates a new object by copying the values from another object.
    Copy constructor ka use ek object ko doosre object ke values se initialize karne ke liye hota hai.
    Ye ek object ka data copy karke ek naye object me daal deta hai.
    Kab use hota hai -
        Jab tumhe ek existing object ki values ko kisi naye object me copy karna ho.
    Ex -
        class Car {
            String brand;
            int speed;
            -----Parameterized Constructor-----
            public Car(String b, int s) {
                brand = b;
                speed = s;
            }
            -----Copy Constructor-----
            public Car(Car car) {
                brand = car.brand;
                speed = car.speed;
            }
        }
        public class Main {
            public static void main(String[] args) {
                Car car1 = new Car("Toyota", 100);  -----> Parameterized Constructor
                Car car2 = new Car(car1);  -----> Copy Constructor is called
                System.out.println(car2.brand);  -----> Output: Toyota
                System.out.println(car2.speed);  -----> Output: 100
            }
        }
        Yaha car2 object, car1 object ki values ko copy karta hai, copy constructor ka use karke.
* Virtual Constructor (C++ only) -
    Not a real concept in most languages; a term used for factory methods.
* Virtual Copy Constructor (C++ only) -
    Not a standard concept; implies a method to clone objects polymorphically.

2. What is "this" Keyword ?
Answer :
* this keyword current object ka reference hota hai.
* this keyword ek special keyword hai jo current object ko refer karta hai jisme code execute ho raha hai.
* Matlab, jab tum this ka use karte ho, toh wo current instance (object) ka reference hota hai.
* Yeh useful hota hai jab tumhe differentiate karna hota hai class ke attributes (instance variables) aur method ke local variables ke beech.
* Use Cases of this Keyword :-
    Accessing Instance Variables -
        Jab method ke parameters aur instance variables ka naam same ho, toh this keyword ka use kiya jata hai instance variables ko refer karne ke liye.
        Ex -
            class Car {
                String brand;
                -----Constructor with parameter name same as instance variable name-----
                public Car(String brand) {
                    this.brand = brand; -----> 'this.brand' refers to the instance variable
                }
                public void printBrand() {
                    System.out.println("Brand: " + this.brand);  -----> 'this' can be used here, but optional
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Car car1 = new Car("Toyota");
                    car1.printBrand();  -----> Output: Brand: Toyota
                }
            }
            Yaha par constructor me this.brand se instance variable brand ko refer kiya gaya hai. Agar this nahi use karte, toh Java ko confusion hoti ki parameter brand use karna hai ya instance variable.
    Calling Another Constructor -
        this() ko use karke ek constructor se doosre constructor ko call kiya ja sakta hai.
        Isse constructor chaining hoti hai.
        Ex -
            class Car {
                String brand;
                int year;
                -----Constructor 1-----
                public Car(String brand) {
                    this(brand, 2024);  // Calling Constructor 2
                }
                -----Constructor 2-----
                public Car(String brand, int year) {
                    this.brand = brand;
                    this.year = year;
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Car car1 = new Car("Toyota");
                    System.out.println(car1.brand + " - " + car1.year);  -----> Output: Toyota - 2024
                }
            }
            Yaha pe this(brand, 2024) ka use kiya gaya hai to call the second constructor from the first one. This is called constructor chaining.
    Returning Current Object -
        this keyword ka use karke tum current object ko return kar sakte ho from a method.
        Ex -
            class Car {
                String brand;
                public Car setBrand(String brand) {
                    this.brand = brand;
                    return this;  -----> Returning the current object
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Car car1 = new Car();
                    car1.setBrand("Toyota");  -----> Method chaining is possible here
                    System.out.println(car1.brand);  -----> Output: Toyota
                }
            }
            Is example me, this keyword se current object ko return kiya ja raha hai, jisse method chaining karna possible hota hai.
    Passing Current Object as Argument -
        this ko method me argument ke roop me pass kiya ja sakta hai agar kisi method ko current object ki zarurat ho.
        Ex -
            class Car {
                String brand;
                public Car(String brand) {
                    this.brand = brand;
                }
                public void display(Car car) {
                    System.out.println("Car Brand: " + car.brand);
                }
                public void show() {
                    display(this);  -----> Passing the current object
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Car car1 = new Car("Toyota");
                    car1.show();  -----> Output: Car Brand: Toyota
                }
            }
            Yaha this ko pass kiya gaya hai display method me jo current object (car1) ko refer kar raha hai.

3. Can We Have More Than One Constructor in a Class (Constructor Overloading)?
Answer :
* Yes, a class in Java can have more than one constructor.
* Is concept ko Constructor Overloading kehte hain.
* Constructor overloading -
    Jb tum ek hi class ke andar different constructors define kar sakte ho, lekin unka parameter list alag-alag hoga.
    Java automatically samajh leta hai ki kaunsa constructor call karna hai based on the number and type of arguments passed.
* Why Use Constructor Overloading -
    Flexibility - Tum apni class ko multiple ways me initialize kar sakte ho, depending on the data available.
    Convenience - Different constructors allow tumhe different combinations of arguments ke saath object create karne ki flexibility dete hain.
* Ex -
    class Car {
        String brand;
        int year;
        -----Constructor 1: Default Constructor-----
        public Car() {
            this.brand = "Unknown";
            this.year = 2020;
        }
        -----Constructor 2: One parameter (brand)-----
        public Car(String brand) {
            this.brand = brand;
            this.year = 2020;  // Default year
        }
        -----Constructor 3: Two parameters (brand, year)-----
        public Car(String brand, int year) {
            this.brand = brand;
            this.year = year;
        }
        public void display() {
            System.out.println("Brand: " + this.brand + ", Year: " + this.year);
        }
    }
    public class Main {
        public static void main(String[] args) {
            Car car1 = new Car();                 -----> Calls Constructor 1
            Car car2 = new Car("Toyota");         -----> Calls Constructor 2
            Car car3 = new Car("Honda", 2022);    -----> Calls Constructor 3
            car1.display();  -----> Output: Brand: Unknown, Year: 2020
            car2.display();  -----> Output: Brand: Toyota, Year: 2020
            car3.display();  -----> Output: Brand: Honda, Year: 2022
        }
    }
* How It Works -
    Jab no arguments diye jaate hain, toh default constructor call hota hai (Car()).
    Jab one argument (brand) diya jaata hai, toh second constructor call hota hai (Car(String brand)).
    Jab two arguments (brand, year) diye jaate hain, toh third constructor call hota hai (Car(String brand, int year)).
* Java automatically decide karta hai kaunsa constructor call karna hai based on the arguments.
* Key Points About Constructor Overloading :-
    Different Parameter Lists -
        Tum overloading tabhi kar sakte ho jab constructors ka parameter list different ho.
        Matlab ya toh parameter ka number alag hona chahiye, ya type alag honi chahiye.
    Same Constructor Name -
        Sab constructors ka naam class ke naam jaisa hi hota hai, lekin parameter list me changes karte hain.
    Multiple Ways to Initialize Objects -
        Tumhe flexibility milti hai object ko initialize karne ke multiple tareekon se, based on available data.
* Why Is It Useful -
    Tum ek hi class ke liye different initialization needs ko handle kar sakte ho without defining multiple classes.
    Code readability aur maintenance ko improve karta hai kyunki tum alag-alag initialization logic ko ek hi class ke andar rak sakte ho.

4. How to call a Constructor From Another Constructor ?
Answer :
* Java mein ek constructor ko doosre constructor se call karne ke liye this() keyword ka use hota hai.
* Isse hum Constructor Chaining kehte hain.
* Jab ek constructor doosre constructor ko call karta hai, toh constructor chaining establish hoti hai.
* Rules for Calling a Constructor from Another Constructor -
    this() keyword ka use constructor chaining ke liye hota hai.
    this() call hamesha constructor ki first statement honi chahiye.
    Agar ye first line mein nahi hai, toh compile-time error aayega.
    Tum this() ko use karke constructor overloading implement kar sakte ho, jisme ek constructor doosre constructor ko initialize karta hai.
    Ex of Constructor Chaining using this() -
        class Car {
            String brand;
            int year;
            -----Constructor 1: Default Constructor-----
            public Car() {
                this("Unknown", 2020);  -----> Calling Constructor 3 from Constructor 1
            }
            -----Constructor 2: Constructor with one parameter (brand)-----
            public Car(String brand) {
                this(brand, 2020);  -----> Calling Constructor 3 from Constructor 2
            }
            -----Constructor 3: Constructor with two parameters (brand, year)-----
            public Car(String brand, int year) {
                this.brand = brand;
                this.year = year;
            }
            public void display() {
                System.out.println("Brand: " + this.brand + ", Year: " + this.year);
            }
        }
        public class Main {
            public static void main(String[] args) {
                Car car1 = new Car();                 -----> Calls Constructor 1
                Car car2 = new Car("Toyota");         -----> Calls Constructor 2
                Car car3 = new Car("Honda", 2022);    -----> Calls Constructor 3
                car1.display();  -----> Output: Brand: Unknown, Year: 2020
                car2.display();  -----> Output: Brand: Toyota, Year: 2020
                car3.display();  -----> Output: Brand: Honda, Year: 2022
            }
        }
        Jab tum Car car1 = new Car(); likhte ho, toh Constructor 1 call hota hai, jisme this("Unknown", 2020) hai. Ye call Constructor 3 ko kar raha hai.
        Jab tum Car car2 = new Car("Toyota"); likhte ho, toh Constructor 2 call hota hai. Phir isme this(brand, 2020) likha hai, jo Constructor 3 ko call karta hai.
        Constructor 3 directly object ko initialize karta hai jab dono parameters pass kiye gaye ho.
* Key Points About Constructor Chaining -
    this() keyword ka use tabhi hota hai jab ek constructor doosre constructor ko call kare.
    Tum constructor chaining ke through multiple constructors ko chain kar sakte ho.
    this() ko hamesha constructor ki pehli line mein likhna mandatory hai.
* Why Use Constructor Chaining :-
    Code Reusability - Tum ek hi initialization logic ko reuse kar sakte ho multiple constructors mein.
    Less Code Duplication - Agar tumhare constructors mein similar logic hai, toh tum chaining se duplication avoid kar sakte ho.

5. Why dont we use "new" Keyword for creating Primitive Datatype ?
Answer :
* Primitive datatypes (like int, float, char, etc.)
* Java mein lightweight aur simple types hote hain, jinke liye memory management aur usage zyada straightforward hota hai.
* Primitive types ke liye new keyword ka use nahi hota because of these reasons :-
    Memory Efficiency -
        Primitive types directly memory mein store kiye jaate hain, aur inhe stack memory mein allocate kiya jaata hai.
        Agar hum new keyword ka use karte, toh memory allocation heap memory mein hota, jo zyada resource-intensive aur slower hota.
        Ex -
            int x = 10;  -----> Directly stores value in stack memory.
            -----Agar new ka use kiya jaata-----
            Integer x = new Integer(10);  -----> This would store the object in heap memory, which is less efficient.
    Direct Access -
        Primitive variables directly unke value ko hold karte hain, jiska matlab hai ki unhe access karna fast hota hai.
        new keyword se object creation hamesha heap memory mein hota hai, aur heap memory ko manage karna relatively slow hota hai compared to stack memory.
        Ex -
            int a = 5;  -----> Directly stores value 5.
            -----Using new (with wrapper classes)-----
            Integer b = new Integer(5);  -----> This creates an Integer object, which is slower to access.
    Simplicity and Less Overhead -
        Primitive types directly store values, isliye koi additional overhead nahi hota hai, jaise ki memory reference handling ya garbage collection.
        new keyword se object create karna extra steps involve karta hai, jaise memory management aur garbage collection, jo unnecessarily complex banata hai simple primitive operations ko.
        Ex -
            float price = 99.99f;  -----> Simple and efficient.
            -----Using new-----
            Float price = new Float(99.99f);  -----> More complex and less efficient.
    Wrapping Primitives (Wrapper Classes) -
        Agar tumhe objects mein primitive ko wrap karna ho, tab new keyword ka use ho sakta hai through wrapper classes (like Integer, Float, Character, etc.).
        Iska use tab hota hai jab tumhe object-oriented operations perform karne hote hain, jaise ki storing in collections (like ArrayList), but primitives don't need object handling in basic cases.
        Ex -
            Integer num = new Integer(100);  -----> Wrapper class, not necessary for basic operations.
            -----In modern Java versions, auto-boxing aata hai, jisme Java primitive values ko automatically wrap karta hai objects mein. new ka use manually karne ki zaroorat nahi hoti-----
            Integer num = 100;  -----> Auto-boxing handles the conversion.

6. How does Memory Allocation happen of "new" Keyword ?
Answer :
* Java mein, jab tum new keyword ka use karke object create karte ho, toh memory allocation heap memory mein hoti hai.
* Object ke saath saath kuch extra memory management operations bhi perform hote hain.
* Steps for Memory Allocation Using new :-
    Memory Allocation in Heap -
        Jab tum new keyword ka use karke object create karte ho, us object ke liye memory heap memory mein allocate hoti hai.
        Heap memory dynamic memory hoti hai, jisme bade objects ko store kiya jaata hai.
        Ex -
            Car car = new Car();
            Yahan par new Car() call hone par heap memory mein Car object banega.
    Reference Variable in Stack Memory -
        Jab new keyword se object create hota hai, us object ka reference (pointer to memory location) stack memory mein store hota hai.
        Stack memory faster hoti hai, jisme variables ka reference aur method calls store kiye jaate hain.
        Ex -
            Car car = new Car();
            Yahan par car variable stack memory mein hoga, aur car ka value ek reference hoga jo heap memory mein actual object ko point karega.
    Constructor Call -
        new keyword ke baad, Java us class ka constructor call karta hai, jo object ko initialize karta hai.
        Constructor tumhare object ko specific initial state dene ke liye use hota hai.
        Ex -
            Car car = new Car();  -----> Constructor initializes the object.
    Memory Layout -
        Heap memory mein instance variables store hote hain jo object ke data ko represent karte hain.
        Jo methods class mein defined hote hain, unhe alag se method area mein store kiya jaata hai, aur heap memory sirf object ke data ke liye use hoti hai.
* Memory Regions Involved in Object Creation :-
    Heap Memory -
        Ye region dynamically grow karta hai aur yahaan par objects ko store kiya jaata hai.
        Java mein heap memory ka automatic management garbage collection ke through hota hai.
        Agar koi object heap mein ho aur uska reference nahi ho, toh garbage collector usse clean up karta hai.
    Stack Memory -
        Stack memory mein method ke execution ke time par local variables aur references store hote hain.
        new keyword ka use karke jo object banta hai, uska reference stack memory mein store hota hai.
    Method Area (Code Area) -
        Yahan par class definitions aur methods store kiye jaate hain.
        Jab class ka method call hota hai, toh uske instructions method area se execute hote hain.
    Garbage Collection -
        Heap mein allocated memory ko manage karne ke liye garbage collector responsible hota hai.
        Agar koi object ka reference nahi bacha (jaise car = null; likh diya), toh garbage collector us unused memory ko free kar deta hai.
* Ex of Memory Allocation in Action -
    class Car {
        String brand;
        int year;
        -----Constructor-----
        public Car(String brand, int year) {
            this.brand = brand;
            this.year = year;
        }
    }
    public class Main {
        public static void main(String[] args) {
            Car car1 = new Car("Toyota", 2022);  -----> Memory allocation with 'new'
            Car car2 = new Car("Honda", 2021);   -----> Another object created in heap
        }
    }
    new Car("Toyota", 2022); se car1 ka object heap memory mein create hoga.
    car1 variable ka reference stack memory mein store hoga, jo heap memory mein object ko point karega.
    Constructor call hone ke baad brand aur year instance variables heap mein store ho jaayenge.
    Similarly, car2 ka object bhi heap memory mein allocate hoga, aur car2 ka reference stack mein rahega.
* Key Points :-
    new keyword hamesha object ko heap memory mein allocate karta hai.
    Reference variable stack memory mein hota hai, jo heap memory ke object ko point karta hai.
    Garbage collection automatic memory cleanup karta hai for objects that no longer have references.
    Heap memory slow but flexible hoti hai, jabki stack memory fast aur limited hoti hai.

7. What are Wrapper Classes ?
Answer :
* Wrapper classes Java mein primitive data types ko objects mein convert karne ke liye use hote hain.
* Primitive types jaise int, char, float, etc. ko objects ke form mein wrap karne ke liye wrapper classes ka use kiya jaata hai.
* Inse primitive types ko object-oriented programming ka hissa banaya jaa sakta hai.
* Primitive Types vs. Wrapper Classes :-
Primitive Type      Wrapper Class
int	                Integer
char	            Character
float	            Float
double	            Double
boolean	            Boolean
byte	            Byte
short	            Short
long	            Long
* Why Do We Need Wrapper Classes :-
    Objects for Collections -
        Java collections jaise ArrayList, HashMap sirf objects ko store kar sakti hain, primitive types ko nahi.
        Wrapper classes primitive types ko object mein wrap karke collections mein store karne ki permission deti hain.
        Ex -
            ArrayList<Integer> numbers = new ArrayList<>();
            numbers.add(10);  -----> Using Integer wrapper class for int type
    Utility Methods -
        Wrapper classes mein kaafi saare utility methods hote hain jo primitive types ke sath nahi aate.
        Jaise Integer.parseInt() string ko int mein convert karne ke liye.
        Ex -
            String str = "100";
            int num = Integer.parseInt(str);  -----> Convert String to int
    Type Conversion -
        Wrapper classes type conversion provide karte hain, jaise int ko String mein aur vice versa.
        Primitive types ko objects mein wrap karne se unhe dynamically handle kiya jaa sakta hai.
    Default Values in Collections -
        Wrapper classes default values handle karne mein helpful hain, jab tumhe null references ko check karna hota hai.
        Ex -
            null ko primitive type ke saath directly handle nahi kiya ja sakta, but wrapper objects ko null set kiya jaa sakta hai.
* Autoboxing and Unboxing :-
    Java 5 ke baad, autoboxing aur unboxing feature aaya, jisse primitive types ko automatically wrapper class objects mein convert kiya jaa sakta hai, aur vice versa.
    Autoboxing - Primitive type ko automatically object (wrapper class) mein convert karta hai.
    Unboxing - Wrapper class object ko automatically primitive type mein convert karta hai.
    Ex -
        int num = 10;
        Integer wrappedNum = num;  -----> Autoboxing: int to Integer
        int unwrappedNum = wrappedNum;  -----> Unboxing: Integer to int
* Types of Wrapper Classes :-
    Boxing -
        Primitive types ko manually wrapper objects mein convert karna.
        Ex -
            Integer num = new Integer(5);  // Boxing (Old style)
    Unboxing -
        Wrapper object ko manually primitive type mein convert karna.
        Ex -
            int value = num.intValue();  // Unboxing
* Ex of using Wrapper Classes -
    import java.util.ArrayList;
    public class Main {
        public static void main(String[] args) {
            -----Autoboxing: Primitive int to Integer object-----
            ArrayList<Integer> numbers = new ArrayList<>();
            numbers.add(10);  -----> Automatically converts int to Integer
            -----Unboxing: Integer object to primitive int-----
            int num = numbers.get(0);  -----> Automatically converts Integer to int
            System.out.println(num);  -----> Output: 10
        }
    }
    Yahan pe ArrayList ko object store karna hota hai, toh primitive type int ko automatically Integer object mein convert kar diya gaya using autoboxing.

8. What is "final" keyword ?
Answer :
* Java mein final keyword ko use karte hain cheezon ko "constant" ya "unchangeable" banane ke liye.
* Ye keyword teen jagah use ho sakta hai :-
    Final Variables
    Final Methods
    Final Classes
* Iska basic matlab ye hai ki jahan bhi tum final lagate ho, waha par us cheez ko change nahi kiya jaa sakta.
* Final Variables :-
    Jab kisi variable ko final declare kiya jaata hai, toh uski value ko assign hone ke baad change nahi kiya jaa sakta.
    Ek baar value set kar di, toh us variable ko reassign nahi kar sakte.
    Final variables ko commonly constants ke liye use kiya jaata hai.
    Tumhe ek baar value assign karne ke baad change nahi karne denge.
    Points to Remember -
        Final variables ko ya toh declare karte waqt value assign karni hoti hai, ya constructor ke through assign kiya jaa sakta hai.
        Agar tumhe koi variable ek specific constant value ke saath define karna hai, toh final use karo.
    Ex -
        public class Main {
            public static void main(String[] args) {
                final int MAX_AGE = 30;
                MAX_AGE = 40;  -----> This will throw an error because MAX_AGE is final
            }
        }
* Final Methods :-
    Jab kisi method ko final banate ho, toh us method ko subclass mein override nahi kiya jaa sakta.
    Iska matlab hai ki us method ka behavior subclass ke through change nahi kiya jaa sakta.
    Points to Remember -
        Final methods ensure karte hain ki jo functionality tumne parent class mein likhi hai, woh subclasses ke through change na ho sake.
        Iska use tab hota hai jab tum kisi specific functionality ko subclasses mein alter nahi hone dena chahte.
    Ex -
        class Parent {
            public final void showMessage() {
                System.out.println("This is a final method.");
            }
        }
        class Child extends Parent {
            -----This will throw an error because final methods cannot be overridden-----
            public void showMessage() {
                System.out.println("Trying to override.");
            }
        }
        Yahan showMessage() method ko final banaya gaya hai, isliye subclass Child us method ko override nahi kar sakta.
* Final Classes :-
    Jab ek class ko final declare karte ho, toh us class ko extend karke subclass nahi bana sakte.
    Final classes ko inheritance ke liye block kar diya jaata hai.
    Points to Remember -
        Agar tum chahte ho ki koi class inheritance ke liye available na ho, toh usse final bana sakte ho.
        Final classes un cases mein use hote hain jab tum chahte ho ki class ka koi structure ya behavior further modify na ho sake.
    Ex -
        final class Vehicle {
            -----Class content-----
        }
        class Car extends Vehicle {
            -----This will throw an error because Vehicle is final and cannot be subclassed-----
        }
        Final class ka matlab hai ki tum us class ka koi subclass nahi bana sakte.
* Use Cases of final Keyword :-
    Final Variables (Constants) -
        Jab tumhe ek constant value define karni hai jo kabhi change nahi honi chahiye.
        Ex -
            final double PI = 3.14159;
    Final Methods -
        Jab tumhe kisi method ka behavior fix rakhna ho aur subclasses ke through override hone se bachana ho.
        Ex -
            public final void displayInfo() {
                System.out.println("This method cannot be overridden.");
            }
    Final Classes -
        Jab tum chahte ho ki koi class extend na ho sake aur uska structure future mein change na kiya jaa sake.
        Ex -
            public final class MathOperations {
                // Class code
            }
* Ex of Final Keyword in Action -
    class Main {
        public final int maxSpeed = 100;  -----> Final variable
        public final void displaySpeed() {  -----> Final method
            System.out.println("Speed is fixed.");
        }
        public static void main(String[] args) {
            Main obj = new Main();
            obj.displaySpeed();
            -----This will throw an error if uncommented-----
            // obj.maxSpeed = 120;  -----> Final variable cannot be reassigned
        }
    }

9. What is Garbage Collection ?
Answer :
* Garbage Collection (GC) Java mein ek automatic process hai jo un objects ko memory se remove karta hai jo ab program ke liye accessible nahi hain.
* Iska main goal memory management ko simplify karna aur memory leaks aur dangling references ko avoid karna hai.
* Key Concepts of Garbage Collection :-
    Automatic Memory Management -
        Java mein memory management automatic hota hai.
        Jab tum ek object create karte ho, JVM (Java Virtual Machine) uske liye memory allocate karti hai.
        Jab object ki need khatam ho jaati hai (object ke references accessible nahi hote), GC us object ki memory ko reclaim kar leti hai.
    Unreachable Objects -
        Agar koi object ab program ke kisi part se reachable nahi hai (i.e., uska reference nahi hai), toh GC use identify karke memory se remove kar deti hai.
        Aise objects ko unreachable objects kehte hain.
    Memory Leaks -
        Garbage Collection memory leaks ko prevent karne mein help karta hai.
        Memory leaks tab hote hain jab objects ko unnecessarily refer kiya jaata hai, jisse ki unki memory release nahi hoti.
* How Does Garbage Collection Work :-
    Mark and Sweep Algorithm :
        Mark Phase - GC sabse pehle memory mein sabhi objects ko mark karti hai jo still reachable hain.
        Sweep Phase - Mark kiye gaye objects ko chhod kar, baaki objects ki memory reclaim kar leti hai.
    Generational Garbage Collection :
        Java mein GC ko optimize karne ke liye Generational Garbage Collection use hota hai.
        Memory ko alag-alag generations mein divide kiya jaata hai :
            Young Generation -
                Naye objects yahan allocate hote hain.
                Isme Eden Space aur Survivor Spaces hote hain.
            Old Generation (Tenured Generation) -
                Objects jo young generation se survive karte hain, yahan move hote hain.
        Is approach se, frequent small collections young generation mein kiye jaate hain, aur rarely old generation mein.
    Garbage Collectors :
        Serial Garbage Collector -
            Single-threaded GC, simple applications ke liye.
        Parallel Garbage Collector -
            Multi-threaded GC, multi-core processors ke liye optimized.
        Concurrent Mark-Sweep (CMS) Collector -
            Low-latency applications ke liye, background mein GC perform karta hai.
        G1 (Garbage First) Collector -
            Large heap sizes ke liye, predictability aur performance ko balance karta hai.
* Ex -
    public class GarbageCollectionExample {
        public static void main(String[] args) {
            GarbageCollectionExample obj1 = new GarbageCollectionExample();
            GarbageCollectionExample obj2 = new GarbageCollectionExample();
            obj1 = null;  -----> obj1 is now eligible for garbage collection
            obj2 = null;  -----> obj2 is also eligible for garbage collection
            -----Requesting Garbage Collection-----
            System.gc();  -----> Hint to JVM to perform garbage collection
        }
        @Override
        protected void finalize() throws Throwable {
            System.out.println("Garbage collected!");
        }
    }
    System.gc() ek hint provide karta hai JVM ko ki garbage collection run karni chahiye, lekin JVM isko ignore bhi kar sakti hai.
    finalize() method ko call kiya jaa sakta hai jab object garbage collected ho raha hota hai, lekin use avoid karne ki recommendation hai.
* Best Practices for Garbage Collection :-
    Minimize Object Creation -
        Avoid unnecessary object creation to reduce the workload on GC.
    Use Weak References -
        Use WeakReference objects for caches and other scenarios where you want objects to be collected when memory is needed.
    Profile and Tune GC -
        Use profiling tools to monitor garbage collection performance and tune JVM parameters as needed.
    Avoid Finalize Method -
        finalize() method ko use karne ki jagah, try-with-resources aur Closeable interfaces ka use karo.

10. What is Deep Copy & Shallow Copy ?
Answer :
Deep Copy - Creates a copy of the object and all objects it references.
Shallow Copy - Creates a copy of the object but not the objects it references.

11. What is the difference Between Copy Constructor and Assignment Operator ?
Answer :
Copy Constructor - Used to initialize a new object from an existing object.
Assignment Operator - Used to copy the values from one object to another existing object.

12. How Constructors are different from a normal member function ?
Answer :
* Constructors have no return type.
* Automatically called when an object is created.

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
    Real-world Analogy - Think of ordering a new book online. When you place an order, a new copy of the book is created and allocated to you, separate from other copies in the bookstore.
Const Keyword
    Usage - There is no const keyword in Java like in C++.
Super Keyword
    Usage - Used to refer to the superclass of the current object instance.
    Example - In a subclass constructor, super() is used to call the constructor of the superclass.
    Real-world Analogy - Consider a family tree where each generation inherits traits from the previous one. The super keyword refers to the ancestors, accessing traits inherited from previous generations.

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
