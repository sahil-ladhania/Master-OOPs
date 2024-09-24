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
    ----->Class Definition
    class Car {
        ----->Attributes (variables)
        String brand;
        int speed;
        ----->Method (function)
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
            ----->Object Creation
            Car myCar = new Car();  -----> myCar is an instance of the Car class
            ----->Setting attributes
            myCar.brand = "Honda";
            myCar.speed = 120;
            ----->Calling method
            myCar.drive();  -----> Output: Honda is driving at 120 km/h.
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
            Car myCar = new Car();  -----> myCar is an object of the Car class
            myCar.brand = "Honda";  -----> Setting the brand attribute
            myCar.speed = 120;  -----> Setting the speed attribute
            myCar.drive();  -----> Calling the method (Behavior)
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
                ----->Creating objects
                Phone myPhone = new Phone();
                myPhone.model = "iPhone";
                myPhone.batteryLife = 80;
                Phone yourPhone = new Phone();
                yourPhone.model = "Samsung";
                yourPhone.batteryLife = 100;
                myPhone.makeCall();  -----> Output: Making a call using iPhone
                yourPhone.makeCall();  -----> Output: Making a call using Samsung
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
        Car car1 = new Car();  -----> car1 is an object of class Car
        car1.brand = "Honda";
        car1.color = "Red";
        car1.speed = 120;
        Car car2 = new Car();  -----> car2 is another object of class Car
        car2.brand = "Toyota";
        car2.color = "Blue";
        car2.speed = 100;
    Dono cars ka structure same hai (brand, color, speed properties), kyunki dono Car class se bani hain. Lekin unki state alag hai (Honda vs Toyota, Red vs Blue).

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

-----Constructors-----

1. What are Constructors in Java ?
Answer :
* Constructors ek special type ke method hote hain jo kisi class ke object ko initialize karta hain.
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
            -----Explicitly Defining a Default Constructor-----
            public Car() {
                System.out.println("Default constructor called");
            }
        }
        public class Main {
            public static void main(String[] args) {
                Car car1 = new Car();  -----> Default Constructor is called automatically
                System.out.println(car1.brand);  -----> Output: null
                System.out.println(car1.speed);  -----> Output: 0
            }
        }
        We haven’t explicitly created a constructor Car(), but Java internally provides a default constructor when no constructor is defined. So, when we do this -
            Car car1 = new Car();
            Java calls the default constructor (which is an invisible, no-argument constructor like this behind the scenes) -
                public Car() {
                    ----->Implicit constructor doing nothing
                }
                This default constructor initializes the instance variables brand and speed to their default values -
                    •	brand (which is a String) is initialized to null.
                    •	speed (which is an int) is initialized to 0.
            So, yes—Java automatically provides the default constructor if you don’t define any constructor yourself.
            Now, if we want to explicitly define a default constructor, we can write it like the way we did above.
* Parameterized Constructor -
    Accepts parameters to initialize object state.
    Ye constructor parameters accept karta hai aur unhe use karke object ki initial state ko set karta hai.
    Kab use hota hai -
        Jab tumhe object banate time specific values deni hoti hain, tab parameterized constructor ka use hota hai.
    Ex -
        class Car {
            String model;
            int maxSpeed;
            ----->Parameterized Constructor
            Car(String model, int maxSpeed) {
                -----> 'this' refers to the current object instance
                this.model = model;
                this.maxSpeed = maxSpeed;
            }
        }
        public class Constructor_Practice {
            public static void main(String[] args) {
                System.out.println("Parameterized Constructor:");
                -----> Creating an object of Car class using the parameterized constructor
                Car myCar = new Car("BMW", 300);
                -----> Accessing instance variables
                System.out.println(myCar.model);     -----> Output: BMW
                System.out.println(myCar.maxSpeed);  -----> Output: 300
            }
        }
* Copy Constructor -
    Creates a new object by copying the values from another object.
    Copy constructor ka use ek object ko doosre object ke values se initialize karne ke liye hota hai.
    Ye ek object ka data copy karke ek naye object me daal deta hai.
    A copy constructor takes another object of the same class as a parameter and copies the values of the instance variables from that object to the new object.
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
* Matlab, jab tum "this" ka use karte ho, toh wo current instance (object) ka reference hota hai.
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
        "new" keyword se object creation hamesha heap memory mein hota hai, aur heap memory ko manage karna relatively slow hota hai compared to stack memory.
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

-----Packages , Static , Singleton Class , In-Built Methods-----

1. What are Packages ?
Answer :
* Packages in Java ek tarike ka folder structure hai jisme tum apne related classes ko group kar sakte ho.
* Ek package ek collection hoti hai classes, interfaces, and sub-packages ki, jisse tumhari code organization aur modularization simple ho jaati hai.
* Ex -
    Agar tumhare pass ek project hai jo accounting aur sales modules pe kaam kar raha hai, toh tum accounting aur sales ke liye alag-alag packages bana sakte ho :
        package com.company.accounting;
        public class Invoice {
            // Accounting related code
        }
        package com.company.sales;
        public class SalesReport {
            // Sales related code
        }

2. What is the need of Packages ?
Answer :
* Packages ka main purpose hota hai code ko organize karna aur naming conflicts ko avoid karna.
* Kuch aur reasons :
    Namespace Management -
        Ek hi naam ke multiple classes ho sakte hain agar wo alag-alag packages mein hain.
    Modularization -
        Tumhare code ko logically divide karna easy ho jaata hai.
        Ex - java.util package for utility classes.
    Access Control -
        Access modifiers (like protected and default) ka behavior package level pe bhi apply hota hai.
    Reusability -
        Tum easily reusable libraries create kar sakte ho jo alag-alag projects mein use ho sakti hain.

3. What does import statement means ?
Answer :
* Java mein jab tum ek class ya package ko use karna chahte ho jo tumhare current package mein nahi hai, toh import statement ka use hota hai.
* Syntax -
    import package_name.class_name;
* Ex -
    import java.util.ArrayList;
    public class Test {
        ArrayList<String> list = new ArrayList<>();
    }
* Agar tum saari classes ko ek package se import karna chahte ho, toh * use karte ho.
* Ex -
    import java.util.*;

4. What is static in java ?
Answer :
* static ek keyword hai jo Java mein use hota hai to declare class-level members (variables, methods, or blocks).
* Jab koi member static hota hai, toh wo class ka hissa hota hai, na ki kisi particular object ka.
* In Java, static ek keyword hai jo hum kisi bhi class ke members (variables, methods, blocks) ko class-level pe define karne ke liye use karte hain.
* Jab hum kisi cheez ko static banate hain, iska matlab wo member directly class ke sath associated hota hai, na ki uske object ke sath.
* Tumhe static members ko access karne ke liye object banane ki zarurat nahi hoti, directly class ke naam se access kar sakte ho.
* Iska use kyun karte hain -
    static keyword ka use tab kiya jata hai jab hume kisi specific variable ya method ko share karna ho between all instances of the class.
    Matlab, ek hi copy share hoti hai sab objects ke liye, aur ye memory ko efficiently use karne me help karta hai.
* Types of static in Java -
    Static Variables (Class Variables) -
        Jab hum kisi variable ko static banate hain, wo class ke liye ek global variable ban jata hai.
        Sabhi objects usi ek variable ko share karte hain.
        Why use -
            Agar hume total number of cars count karna ho jo sab objects ke liye common ho, to hum static variables use karte hain.
        Ex -
            class Car {
                static int totalCars = 0; -----> static variable
                Car() {
                    totalCars++;
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Car car1 = new Car();
                    Car car2 = new Car();
                    System.out.println(Car.totalCars); -----> Output: 2
                }
            }
    Static Methods -
        Static methods ko class ke sath call kiya jata hai, bina kisi object ke.
        Ye methods sirf static data members ko access kar sakte hain aur static context me kaam karte hain.
        Why use -
            Jab hume koi aisa method banana ho jo directly class ke through access ho sake, bina object create kiye.
        Ex -
            class MathOperations {
                static int add(int a, int b) {
                    return a + b;
                }
            }
            public class Main {
                public static void main(String[] args) {
                    int sum = MathOperations.add(5, 10); -----> Directly class se method call ho rahi hai
                    System.out.println(sum); -----> Output: 15
                }
            }
    Static Blocks (Static Initializers) -
        Static blocks ko tab use kiya jata hai jab hume class ke static variables ko initialize karna ho ya koi initialization logic run karni ho jab class load ho.
        Ex -
            class Example {
                static int x;
                static { -----> Static block
                    x = 10;
                    System.out.println("Static block executed");
                }
            }
            public class Main {
                public static void main(String[] args) {
                    System.out.println(Example.x); -----> Output: Static block executed, 10
                }
            }
    Static Inner Class -
        Ek inner class ko static banaya ja sakta hai, jo directly outer class ke sath associated hota hai, bina outer class ke object ke.
        Ex -
            class Outer {
                static class Inner {
                    static void display() {
                        System.out.println("Static Inner Class");
                    }
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Outer.Inner.display(); -----> Output: Static Inner Class
                }
            }
* Key Points of static -
    Memory Allocation -
        Static members ke liye memory ek baar hi allocate hoti hai, jab class load hoti hai.
        Ye memory heap me nahi, balki method area (a special memory area) me store hoti hai.
    Class-level association -
        Static members class ke sath associated hote hain, not with objects.
        Iska matlab, static members ko bina object ke class ke sath access kiya ja sakta hai.
    Non-static member ko static method me directly access nahi kar sakte -
        Kyunki non-static members har object ke liye unique hote hain, aur static members class level pe hote hain, isliye static methods ke andar non-static members ko directly access nahi kar sakte.
* Ex of Static vs Non-Static Members -
    class Example {
        int nonStaticVar = 5; -----> Non-static variable
        static int staticVar = 10; -----> Static variable
        -----> Non-static method
        void nonStaticMethod() {
            System.out.println("Non-static method called.");
            System.out.println("Non-static var: " + nonStaticVar);
            System.out.println("Static var: " + staticVar);
        }
        -----> Static method
        static void staticMethod() {
            System.out.println("Static method called.");
            // System.out.println("Non-static var: " + nonStaticVar); // Error
            System.out.println("Static var: " + staticVar);
        }
    }
    public class Main {
        public static void main(String[] args) {
            Example.staticMethod(); -----> Static method can be called without creating an object
            Example obj = new Example();
            obj.nonStaticMethod(); -----> Non-static method needs an object
        }
    }
* Advantages of static in Java -
    Memory Efficiency -
        Ek hi copy banayi jaati hai static members ki, jo sab objects ke liye share hoti hai, memory wastage nahi hoti.
    Utility Methods -
        Jo methods sirf input/output operations perform karte hain aur kisi specific object’s state ko modify nahi karte, unhe static methods ke roop me implement karna zyada logical hota hai (e.g., Math.pow(), Math.sqrt()).
    Code Organization -
        Static methods aur variables se code ko logically separate kar sakte ho, jo aise functions ya data represent karte hain jo globally accessible hain.
* Dis-Advantages of static in Java -
    Limited Access to Non-static Members -
        Static methods non-static members ko directly access nahi kar sakte, jo kabhi-kabhi restrictive ho sakta hai.
    Hard to Test and Extend -
        Static methods ko easily mock ya extend nahi kar sakte, jo unhe testing aur inheritance ke perspective se restrictive bana deta hai.

5. What are non-static in java ?
Answer :
* Non-static members wo hote hain jo class ke particular object ke liye specific hote hain.
* Tumhe non-static members ko access karne ke liye object banana zaruri hota hai.
* In Java, non-static members wo hote hain jo kisi class ke objects ke sath associated hote hain.
* Jab tak hum class ka object nahi banate, tab tak non-static members ko access nahi kar sakte.
* Ye members object-specific hote hain, matlab har object apne separate copy of non-static members rakhta hai.
* Types of Non-static Members in Java -
    Non-static Variables (Instance Variables) -
        Ye variables har object ke sath associated hote hain, aur har object ke paas apni ek alag copy hoti hai.
        Isliye agar ek object me koi value change karte hain, to doosre object ki value pe koi asar nahi hota.
        Why use -
            Jab hume kisi class ke objects ke liye different state ya value store karni ho, tab non-static variables ka use hota hai.
            Har object ka apna state hota hai jo kisi aur object se independent hota hai.
        Ex -
            class Car {
                int speed; -----> Non-static variable
                Car(int spd) {
                    speed = spd;
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Car car1 = new Car(80);
                    Car car2 = new Car(100);
                    System.out.println(car1.speed); -----> Output: 80
                    System.out.println(car2.speed); -----> Output: 100
                }
            }
    Non-static Methods (Instance Methods) -
        Non-static methods wo methods hote hain jo kisi object ke context me kaam karte hain.
        Ye methods directly object ke non-static variables ko access kar sakte hain.
        Why use -
            Jab hume kisi object-specific functionality ko define karna ho, to hum non-static methods ka use karte hain. Ye methods har object ke specific state ke sath kaam karte hain.
        Ex -
            class Car {
                int speed; -----> Non-static variable
                Car(int spd) {
                    speed = spd;
                }
                void showSpeed() { -----> Non-static method
                    System.out.println("Speed: " + speed);
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Car car = new Car(80);
                    car.showSpeed(); -----> Output: Speed: 80
                }
            }
    Non-static Blocks (Instance Initializer Block) -
        Non-static blocks wo blocks hote hain jo tab execute hote hain jab object create hota hai.
        Ye blocks kisi constructor se pehle execute hote hain, aur mostly initialization ke liye use hote hain.
        Why use -
            Jab hume initialization logic ko constructor ke sath share karna ho ya constructor ke baad use karna ho, to non-static blocks helpful hote hain.
        Ex -
            class Example {
                int x;
                { // Non-static block
                    x = 10;
                    System.out.println("Non-static block executed.");
                }
                Example() {
                    System.out.println("Constructor called.");
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Example obj = new Example();
                    // Output:
                    // Non-static block executed.
                    // Constructor called.
                }
            }
* Advantages of Non-static Members -
    Instance-specific Behavior -
        Non-static members allow each object to have its own state and behavior, making them ideal for representing real-world entities jahan har object ka apna state hota hai.
        Ex - Har car ki apni speed hogi.
    Object-Oriented Programming ke liye Important -
        Non-static members OOP ke fundamental concept ko implement karte hain, jisme objects apna state aur behavior define karte hain.
* Ex of Non-Static with Full Flow -
    class Car {
        int speed; -----> Non-static variable
        Car(int speed) { -----> Constructor
            this.speed = speed;
        }
        void showSpeed() { -----> Non-static method
            System.out.println("Speed: " + speed);
        }
    }
    public class Main {
        public static void main(String[] args) {
            Car car1 = new Car(60); -----> First object
            Car car2 = new Car(100); -----> Second object
            car1.showSpeed(); -----> Output: Speed: 60
            car2.showSpeed(); -----> Output: Speed: 100
        }
    }
    speed ek non-static variable hai, jo har object ke liye alag value store karta hai.
    showSpeed() ek non-static method hai, jo object ke specific state ko display karta hai.

6. What does Non-Static member inside a  static means ?
Answer :
* Jab hum static context (like static method ya static block) me kaam karte hain, to hume ek issue face hota hai -
    non-static members (variables ya methods) ko directly access nahi kar sakte.
    Ye isliye hota hai kyunki static context class level pe hota hai, jabki non-static members object-specific hote hain.
* Reason -
    Static members ka class ke sath directly relation hota hai, bina kisi object ke. Lekin non-static members ka relation class ke objects ke sath hota hai.
    To jab hum static context me non-static member ko access karna chahte hain, to Java ko samajh nahi aata ki kis object ke context me wo non-static member ka reference le, kyunki static context ka object ke sath koi connection nahi hota.
* Non-static member ko static context (jaise static method ya static block) ke andar directly access nahi kiya ja sakta, kyunki non-static members object-specific hote hain, aur static context class-specific hota hai.
* Agar tumhe access karna ho, toh tumhe ek object create karna padega.
* Ex -
    class Example {
        int x = 10; -----> Non-static variable
        static void staticMethod() {
            System.out.println(x); -----> Error: Non-static field 'x' cannot be referenced from a static context
        }
        void nonStaticMethod() {
            System.out.println(x); -----> This works fine, as it's in non-static context
        }
    }
    Is example me x ek non-static variable hai. Agar hum ise static method ke andar directly access karne ki koshish karte hain, to error milta hai, kyunki x object-specific hai aur static method kisi object ke sath associated nahi hai.
* How to Access Non-static Members in a Static Context -
    Create an Object -
        Non-static members ko access karne ke liye hume pehle us class ka object create karna padega, phir object ke through non-static members ko access kar sakte hain.
        Ex -
            class Example {
                int x = 10; -----> Non-static variable
                static void staticMethod() {
                    Example obj = new Example(); -----> Object creation
                    System.out.println(obj.x); -----> Access non-static variable using object
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Example.staticMethod(); -----> Output: 10
                }
            }
            Yahan humne static method ke andar Example class ka object create kiya, aur phir object ke through non-static variable x ko access kiya.
        Why use -
            Jab aapko kisi object-specific variable ya method ko static context se access karna ho, to aapko class ka object banana hoga.
* Important Points -
    •	Static context (like static method ya block) class level pe hota hai.
	•	Non-static members object level pe hote hain.
	•	Direct access nahi hota non-static members ka static context me kyunki static members object ke context ko nahi samajhte.
* Key Takeaway -
    Agar static context me non-static members ko access karna ho, to us class ka object banana padega.
    Static context object-independent hota hai, jabki non-static context object-specific hota hai.

7. What does Static member inside a non-static means ?
Answer :
* Jab hum non-static context me kaam karte hain, jaise ki non-static method ya constructor ke andar, to hum static members ko directly access kar sakte hain.
* Iska reason yeh hai ki static members class level pe hote hain, aur unka existence bina kisi object ke bhi hota hai.
* Static members ko kisi object-specific state ki zaroorat nahi hoti, to chahe hum non-static context me bhi ho, static members ko access karna bilkul allowed hai.
* Static members ko non-static context ke andar directly access kiya ja sakta hai, kyunki static members class-level pe hote hain, aur wo sab objects ke liye available hote hain.
* Ex -
    class Example {
        static int count = 0; -----> Static variable
        void nonStaticMethod() {
            System.out.println(count); -----> Directly access static variable in non-static method
        }
    }
    Yahan count ek static variable hai. Jab hum nonStaticMethod() (jo non-static context me hai) ke andar count ko access karte hain, to koi issue nahi hota, kyunki static variables har object ke liye common hote hain aur class level pe exist karte hain.
* Key Differences -
    Static Members -
        •	Class level pe hote hain, unka relation class ke sath hota hai, kisi specific object ke sath nahi.
        •	Har object ke liye ek hi copy hoti hai.
        •	Directly accessible hote hain chahe hum static context me ho ya non-static context me.
    Non-static Context -
        •	Yahan har cheez object-specific hoti hai.
        •	Static members ko yahan bina kisi issue ke access kiya ja sakta hai, kyunki wo class level pe hote hain.
* Accessing Static Members in Non-static Context -
    Direct Access -
        Non-static methods ya constructors ke andar static members ko directly access kiya ja sakta hai, bina kisi object reference ke.
        Ex -
            class Example {
                static int count = 5; -----> Static variable
                void nonStaticMethod() {
                    System.out.println("Static count: " + count); -----> Direct access
                }
            }
            public class Main {
                public static void main(String[] args) {
                    Example obj = new Example();
                    obj.nonStaticMethod(); -----> Output: Static count: 5
                }
            }
            Yahan count ek static member hai, jise humne directly access kiya non-static method ke andar.
    Using Class Name (Optional) -
        Static members ko non-static methods ke andar class name ke through bhi access kiya ja sakta hai, lekin ye zaroori nahi hai.
        Ex -
            class Example {
                static int count = 10; -----> Static variable
                void nonStaticMethod() {
                    System.out.println("Static count: " + Example.count); -----> Access using class name
                }
            }
            Yahan, hum Example.count ke through static variable ko access kar rahe hain, jo bilkul valid hai.
* Important Points -
    •	Static members class ke sath associated hote hain, isliye hum unhe non-static methods ke andar bhi easily access kar sakte hain.
	•	Static members har object ke liye same rehte hain, aur unki ek hi copy hoti hai.
* Use Case -
    Agar aapko kisi shared resource (jaise ki counter, configuration) ko manage karna ho jo class ke har object ke liye common ho, to aap static variables ka use kar sakte ho.
    Phir aap unhe non-static methods ya constructors me directly access kar sakte ho, bina kisi additional logic ke.

8. What does this keyword inside static means ?
Answer :
* Java me jab hum this keyword ki baat karte hain, to uska matlab hota hai current object.
* Matlab jo object us waqt method ya constructor ko invoke kar raha hai, this usi object ka reference hai.
* Lekin static context me koi object nahi hota, kyunki static members aur methods class level pe hote hain, aur unka koi relation specific object ke sath nahi hota.
* Is wajah se, static context ke andar this ka use allowed nahi hota.
* Reason -
    Static context (jaise static methods ya static blocks) ka kaam object-independent hota hai.
    Wo class ke level pe hote hain, aur bina kisi object ke kaam karte hain.
    this keyword sirf tab kaam karta hai jab koi specific object us method ko invoke karta hai, kyunki this ka reference usi object ko point karta hai.
    Static context me koi object hota hi nahi, isliye this ka koi meaning nahi hota.
* Ex -
    class Example {
        static int count = 0;
        static void staticMethod() {
            System.out.println(this.count); -----> Compilation error
        }
        void nonStaticMethod() {
            System.out.println(this.count); -----> This is valid in non-static context
        }
    }
    Yahan agar aap static method ke andar this keyword ko use karne ki koshish karoge, to compilation error aayega. Kyunki static methods ko invoke karne ke liye koi specific object nahi hota, wo class level pe execute hote hain.
    Error Explanation -
        Agar aap static method ya static block ke andar this keyword ka use karte ho, to error kuch is tarah se aayega.
        Non-static variable this cannot be referenced from a static context.
        Iska matlab yeh hai ki static context ke andar koi object-specific reference (this) nahi hota, isliye aap usse access nahi kar sakte.
* Important Points -
    Static Methods -
        •	Static methods class ke sath associated hote hain, na ki kisi specific object ke sath.
        •	this keyword tabhi kaam karta hai jab kisi object se method call ho raha ho, lekin static methods ko bina object ke bhi call kiya ja sakta hai, isliye this ka koi matlab nahi hota.
    Non-static Methods -
        •	Non-static methods ko hamesha kisi object ke sath call kiya jata hai, to yahan this ka meaning hota hai.
        •	this ka use non-static context me current object ke reference ko point karne ke liye hota hai.

9. What are Inner Classes ?
Answer :
* Inner classes wo classes hoti hain jo kisi doosri class ke andar declare ki jaati hain.
* Matlab, ek class ke andar ek aur class banayi jaati hai.
* Iska main use hai encapsulation aur code readability ko improve karna.
* Inner classes ko bahar ki class ke members tak direct access milta hai, even agar wo private ho.
* Java mein 4 types of inner classes hoti hain -
    Nested Inner Class -
        Ye ek simple inner class hoti hai jo directly outer class ke andar defined hoti hai.
        Is class ko outer class ke members tak access milta hai, chahe wo private hi kyun na ho.
        Ex -
            class OuterClass {
                private int data = 30;
                class InnerClass {
                    void display() {
                        System.out.println("Data: " + data); -----> Direct access to outer class's private data
                    }
                }
            }
        Key Points -
            •	Ye class non-static hoti hai.
            •	Outer class ka ek object create karna zaroori hota hai nested inner class ko access karne ke liye.
            •	Object creation -
                OuterClass outer = new OuterClass();
                OuterClass.InnerClass inner = outer.new InnerClass();
                inner.display();
	Method-local Inner Class -
        Ye inner class kisi method ke andar declare ki jaati hai, aur iska scope sirf usi method tak limited hota hai.
        Ye bahar se access nahi ki jaa sakti.
        Ex -
            class OuterClass {
                void myMethod() {
                    class LocalInnerClass {
                        void display() {
                            System.out.println("Method-local inner class example");
                        }
                    }
                    LocalInnerClass local = new LocalInnerClass();
                    local.display();
                }
            }
        * Key Points -
            •	Iska scope sirf method ke andar hota hai jisme define ki gayi ho.
            •	Ye class tabhi access hoti hai jab method execute hota hai.
            •	Method-local inner class outer class ke members ko directly access kar sakti hai, lekin sirf final ya effectively final local variables tak access kar sakti hai.
	Anonymous Inner Class -
        Ye inner class tab banayi jaati hai jab aapko kisi existing class ya interface ka ek single-use implementation banana ho, without creating a separate named class.
        Ye ek nameless class hoti hai jo mostly ek event handling ya quick functionality ke liye use ki jaati hai.
        Ex -
            interface Animal {
                void sound();
            }
            class MainClass {
                public static void main(String[] args) {
                    Animal dog = new Animal() {
                        public void sound() {
                            System.out.println("Bark");
                        }
                    };
                    dog.sound();
                }
            }
        Key Points -
            •	Ye mostly interfaces ya abstract classes ko implement karne ke liye use hoti hai.
            •	Aap directly object ke saath class define karte ho, bina class ka naam diye.
            •	Ek hi method ka implementation hota hai isme, aur iska use temporary hota hai.
	Static Nested Class -
        Static nested class ek static class hoti hai jo outer class ke andar define ki gayi hoti hai.
        Is class ko outer class ke object ki zaroorat nahi hoti access karne ke liye.
        Ex -
            class OuterClass {
                static int data = 40;
                static class StaticNestedClass {
                    void display() {
                        System.out.println("Static data: " + data); -----> Direct access to static members
                    }
                }
            }
            class MainClass {
                public static void main(String[] args) {
                    OuterClass.StaticNestedClass nested = new OuterClass.StaticNestedClass();
                    nested.display();
                }
            }
        Key Points -
            •	Static nested class outer class ke static members ko directly access kar sakti hai.
            •	Static nested class ko access karne ke liye outer class ka object banana zaroori nahi hota.
            •	Ye ek top-level nested class jaisi hoti hai, bas outer class ke andar declare hoti hai.
* Need for Inner Classes -
    Logical Grouping -
        Jab ek class doosri class ke logical context me kaam kare, to usse inner class ke roop me define karna better hota hai.
	Encapsulation -
        Inner classes ke through, outer class ke members tak direct access possible hota hai, even private members tak.
	Code Readability -
        Complex logic ko better manage karne ke liye inner classes ka use kiya ja sakta hai.

10. What is Singleton Class ?
Answer :
* Singleton Class ek aisi class hoti hai jisme sirf ek hi object (instance) create ho sakta hai.
* Iska main use hota hai jab aapko kisi resource ka ek hi global access point chahiye, jaise logging, configuration settings, or database connections.
* Features of Singleton Class -
        Sirf ek hi instance allowed hota hai throughout the program.
        Global access point provide karta hai jisse wo single instance har jagah se accessible ho.
        Class ke constructor ko private bana diya jaata hai taaki koi doosra object bana na sake.
* Steps to Create Singleton Class -
    Private Constructor -
        Isse ensure kiya jaata hai ki class ka object directly create na kiya ja sake.
	Static Method -
        Ek static method provide kiya jaata hai jo class ka object return karta hai.
        Agar object pehle se exist karta ho, to wahi return karega, otherwise ek naya object create karega.
	Static Variable -
        Ek static variable jo class ke single instance ko store karega.
* Ex -
    class Singleton {
        ----->Static variable that holds the only instance of Singleton class
        private static Singleton instance = null;
        ----->Private constructor to prevent external instantiation
        private Singleton() {
            System.out.println("Singleton instance created.");
        }
        ----->Static method to provide access to the single instance
        public static Singleton getInstance() {
            if (instance == null) {
                instance = new Singleton();  -----> Lazy initialization
            }
            return instance;
        }
    }
    class Main {
        public static void main(String[] args) {
            Singleton obj1 = Singleton.getInstance();
            Singleton obj2 = Singleton.getInstance();
            ----->Output: obj1 and obj2 are same instances
            if (obj1 == obj2) {
                System.out.println("Both are the same instance.");
            }
        }
    }
* Key Points -
    Lazy Initialization -
        Object ko tabhi create kiya jaata hai jab pehli baar uska access kiya jaata hai. Isse resources save hote hain.
	Global Access -
        getInstance() method ke through, Singleton instance globally accessible hota hai.
	Private Constructor -
        Iska use karke object creation ko restrict kiya jaata hai taaki class ke bahar koi object create na kar sake.
* Types of Singleton Implementations -
    Eager Initialization -
        Isme instance ko class ke load hone ke waqt hi create kiya jaata hai.
        Ex -
            class EagerSingleton {
                private static final EagerSingleton instance = new EagerSingleton();
                private EagerSingleton() {}
                public static EagerSingleton getInstance() {
                    return instance;
                }
            }
        Downside - Agar class use na bhi ho to bhi memory allocate ho jaati hai.
    Lazy Initialization -
        Instance tabhi create hota hai jab pehli baar getInstance() call hoti hai.
        Ye zyada efficient hota hai.
	Thread Safe Singleton -
        Multiple threads ke case me ensure karta hai ki sirf ek hi instance create ho.
        Ex -
            class ThreadSafeSingleton {
                private static ThreadSafeSingleton instance = null;
                private ThreadSafeSingleton() {}
                public static synchronized ThreadSafeSingleton getInstance() {
                    if (instance == null) {
                        instance = new ThreadSafeSingleton();
                    }
                    return instance;
                }
            }
        Downside - synchronized ki wajah se performance impact ho sakta hai.
* Advantages of Singleton Class -
	Controlled Access - Aapko ek hi instance ka global access point milta hai.
	Memory Efficient - Sirf ek hi object create hota hai, memory waste nahi hoti.
	Use in Multithreading - Singleton classes ko thread-safe banakar multiple threads me ek hi instance ka use kiya jaa sakta hai.
* Disadvantages of Singleton Class -
    Global State - Global object ka use karna kabhi kabhi bugs create kar sakta hai agar us object ko galat tareeke se modify kar diya jaaye.
	Difficult in Testing - Singleton objects testing ke dauran multiple objects banane ko restrict karte hain, jo testing scenarios ko complex bana sakta hai.
* When to Use Singleton -
    Configuration Settings - Agar aapko ek centralized configuration setting chahiye jo har jagah se access ho sake.
	Database Connection - Single database connection ko multiple modules ke liye reuse karna ho.
	Logging - Global logging class, jo poore application ke events log kar sake.

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

-----Inheritance-----

1. What is Inheritance ?
Answer :
* Inheritance ek OOP concept hai jisme ek class doosri class ke properties aur methods ko inherit kar sakti hai.
* Matlab, ek class doosre class ke features ko apna sakta hai bina usko dobara likhe.
* Syntax -
    class ParentClass {
        -----> parent class properties and methods
    }
    class ChildClass extends ParentClass {
        -----> child class inherits all properties and methods of ParentClass
    }

2. What is the need of Inheritance ?
Answer :
* Inheritance ka need tab hota hai jab aapko apni classes mein code reuse karna ho.
* Agar aapke paas common functionalities hain jo multiple classes mein use ho rahi hain, toh unhe ek parent class mein define karke baaki child classes ko usse inherit kar sakte hain.
* This reduces code duplication.

3. What is Sub-Class ?
Answer :
* Sub-Class yaani child class, woh class hoti hai jo kisi parent (super) class ko inherit karti hai.
* Sub-class parent class ke saare methods aur properties access kar sakti hai.
* Ex -
    class Animal {
        void makeSound() {
            System.out.println("Animal is making a sound");
        }
    }
    class Dog extends Animal {
        void bark() {
            System.out.println("Dog is barking");
        }
    }

4. What are these types of Inheritance :
    Single
    Multiple
    Hierarchical
    Multilevel
    Hybrid / Virtual
Answer :
* Single Inheritance -
    Ek child class ek hi parent class se inherit karti hai.
    Syntax -
        class A {
            -----> Parent class
        }
        class B extends A {
            -----> Child class
        }
* Multiple Inheritance -
    Ek class multiple parent classes se inherit karti hai.
    Java mein yeh directly support nahi hota due to diamond problem.
    But interfaces ke through achieve kiya ja sakta hai.
* Hierarchical Inheritance -
    Ek parent class ko multiple child classes inherit karti hain.
    Syntax -
        class A {
            -----> Parent class
        }
        class B extends A {
            -----> Child class 1
        }
        class C extends A {
            -----> Child class 2
        }
* Multilevel Inheritance -
    Ek child class doosri child class se inherit karti hai, forming a chain.
    Syntax -
        class A {
            -----> Parent class
        }
        class B extends A {
            -----> Child class
        }
        class C extends B {
            -----> Grandchild class
        }
* Hybrid Inheritance -
    Yeh combination hota hai multiple aur multilevel inheritance ka.
    Java mein yeh inheritance multiple se related issues ki wajah se fully supported nahi hota, lekin interfaces use karke isse implement kar sakte hain.

5. What is the real-life example of Single Inheritance ?
Answer :
* Ex -
    Parent: Vehicle
    Child: Car
    In this case, Car class inherits properties from Vehicle class like speed, wheels, etc.

6. What is the real-life example of Multiple Inheritance ?
Answer :
* Ex -
    Parent 1: FlyingVehicle
	Parent 2: RoadVehicle
	Child: FlyingCar
    Interfaces ke through aap yeh achieve kar sakte ho jisme ek car jo road pe bhi chal sakti hai aur fly bhi kar sakti hai.

7. What is the real-life example of Hierarchical Inheritance ?
Answer :
* Ex -
    Parent: Vehicle
	Child 1: Car
	Child 2: Bike
    Vehicle class ko Car aur Bike inherit karti hain, but dono apne specific features add karti hain.

8. What is the real-life example of Multilevel Inheritance ?
Answer :
* Ex -
    Grandparent: LivingBeing
	Parent: Animal
	Child: Dog
    Isme LivingBeing se Animal inherit karta hai aur Animal se Dog.

9. What is the real-life example of Hybrid / Virtual Inheritance ?
Answer :
* Ex -
    Parent 1: FlyingVehicle
	Parent 2: AmphibiousVehicle
	Child: AmphibiousFlyingCar
    Hybrid inheritance ko multiple inheritance aur multilevel inheritance ka combination samjha jaata hai.

10. What are the limitations of Inheritance ?
Answer :
* Tight Coupling -
    Inheritance se classes tightly coupled ho jaati hain, matlab ek class ki changes doosri classes ko bhi affect kar sakti hain.
* Increased Complexity -
    Multilevel ya hybrid inheritance se program ka complexity badh jaata hai, jo bugs ke chances badha sakta hai.
* Not Suitable for All Situations -
    Har problem inheritance ke through solve nahi ho sakti.
    Kabhi kabhi composition ya interfaces better option hote hain.

11. What is Super-Class and Super Keyword ?
Answer :
* Super-class, jise Parent Class ya Base Class bhi kaha jata hai, wo class hai jisse doosri class (Child Class ya Subclass) inherit karti hai.
* Super-class mein woh properties aur methods hote hain jo child classes ko inherit hote hain.
* Iska use code reusability aur organization mein hota hai.
* Key Points -
	Inheritance -
        Super-class se child class ko attributes aur behaviors (methods) milte hain.
        Isse aapko naya code likhne ki zaroorat nahi padti.
	Common Functionality -
        Super-class mein woh common functionality rakhi jaati hai jo multiple child classes ke liye useful hoti hai.
        Isse code duplication kam hota hai.
	Ex -
        Agar aapke paas ek Animal class hai, toh yeh super-class ho sakti hai jisse Dog, Cat, ya Bird classes inherit kar sakti hain.
* super keyword Java (aur kuch dusre OOP languages) mein use hota hai, aur iska main purpose parent class ki properties aur methods ko access karna.
* Yeh tab useful hota hai jab aap subclass ke andar parent class ki functionalities ko istemal karna chahte hain.
* Key Points -
	Accessing Parent Class Methods -
        super ka use parent class ke methods ko call karne ke liye kiya jata hai, jab subclass mein usi method ka naam ho (overriding case).
	Calling Parent Class Constructor -
        Aap super() ka use parent class ka constructor call karne ke liye bhi kar sakte hain, taaki parent class ki initialization ho sake.
	Avoiding Ambiguity -
        Agar subclass aur parent class dono mein same naam ka variable ho, toh super.variableName ka use karke aap parent class ka variable access kar sakte hain.

12. What is Reusability ?
Answer :
* Reusability ka matlab hota hai ki aapne jo code ek baar likha hai, usko multiple times reuse karna without duplicating it.
* Inheritance is one of the key ways to achieve reusability.

13. Can OOP exist without Inheritance ?
Answer :
* Yes, OOP ke baaki concepts (jaise encapsulation, polymorphism) inheritance ke bina bhi exist kar sakte hain.
* Lekin inheritance se aapko code reuse kaafi efficiently milta hai, jo OOP ka ek important feature hai.

14. What is Sealed Modifier ?
Answer :
* Sealed classes ko Java mein restrict karne ke liye use kiya jaata hai, jisme kuch specific classes hi inherit kar sakti hain.
* Yeh Java 15 mein introduce hua tha.
* Isse aap inheritance ke use ko limit kar sakte hain.

15. How can we call the base method without creating an instance ?
Answer :
* Static methods ka use karke aap base class ka method bina instance create kiye call kar sakte hain.

16. What is the difference between new and override ?
Answer :
* new - Java mein new keyword object creation ke liye use hota hai.
* override - Method overriding ka matlab hota hai parent class ke method ko child class mein redefine karna.

17. Why Java does not support Multiple Inheritance ?
Answer :
* Java multiple inheritance ko isliye support nahi karta because of Diamond Problem, jisme ambiguity create ho jaati hai jab ek child class multiple parent classes se inherit karti hai jo same method define karti hain.

18. What is Diamond Problem in case of Multiple Inheritance ?
Answer :
* Diamond problem tab hota hai jab ek class multiple parent classes se inherit karti hai aur un parent classes mein same method hoti hai.
* Java isse avoid karta hai by not supporting multiple inheritance directly.

19. If Class A inherits from Class B, then what all is inherited from Parent Class ?
    Explore every combination.
Answer :
* Inherited - Properties, methods.
* Not Inherited - Private members, constructors.
* Special case - Final methods and static members are accessed but not inherited.

20. What is Object Slicing ?
Answer :
* Object Slicing tab hota hai jab aap child class ka object ko parent class ke object mein assign karte hain, aur child class ke extra members lose ho jaate hain.

21. How to ride base class methods / functions ?
Answer :
* Method overriding ka matlab hota hai ki jab child class parent class ke method ko apni tarike se redefine karti hai.
* Isme signature same hota hai but functionality child class ke according change ki jaati hai.
* Ex -
    class Animal {
        void sound() {
            System.out.println("Animal makes a sound");
        }
    }
    class Dog extends Animal {
        @Override
        void sound() {
            System.out.println("Dog barks");
        }
    }
* Note -
    @Override annotation ensure karta hai ki method correctly override ho raha hai.

22. What is Friend Function / Friend Class / Inline Function ?
Answer :
* Friend Function (C++ specific) -
    Friend Function ek aisi function hoti hai jo class ke private members ko directly access kar sakti hai even though woh class ka part nahi hai.
	Java mein ye concept nahi hota.
    Yeh C++ mein relevant hai.
* Friend Class (C++ specific) -
    Ek class ko doosri class ka friend declare kiya ja sakta hai.
    Matlab friend class doosri class ke private members ko access kar sakti hai.
* Inline Function (C++ specific) -
    Inline functions C++ mein hoti hain, jisme small functions ka code inline expand hota hai during compilation to avoid the overhead of function call.

23. What is Local Class / Nested Class / Simulating Final Class ?
Answer :
* Local Class -
    Yeh ek inner class hota hai jo method ke andar define kiya jaata hai.
    Yeh sirf us method ke andar accessible hota hai.
    Ex -
        void display() {
            class Local {
                void show() {
                    System.out.println("Local Class");
                }
            }
            Local local = new Local();
            local.show();
        }
* Nested Class -
    Jab ek class doosri class ke andar define hoti hai, usse nested class kehte hain.
    Nested classes ko ek object ke through access kiya jaata hai.
    Ex -
        class Outer {
            class Inner {
                void display() {
                    System.out.println("Nested Class");
                }
            }
        }
* Simulating Final Class -
    Java mein final keyword use karke class ko extend karne se roka ja sakta hai.
    Simulating final class ka matlab hota hai ki inheritance ko restrict karna.
    Ex -
        final class MyClass {
            -----> No class can extend MyClass
        }

24. Does overloading works in Inheritance ?
Answer :
* Yes, method overloading inheritance mein work karti hai.
* Parent aur child class dono apne apne methods ko overload kar sakti hain.
* Overloading ka matlab hai ek hi class ke andar same method name ke saath different parameters define karna.
* Ex -
    class Animal {
        void sound() {
            System.out.println("Animal sound");
        }
        void sound(String type) {
            System.out.println(type + " sound");
        }
    }
    class Dog extends Animal {
        -----> Inherited overloaded methods can also be used
    }

25. What is the difference between Polymorphism and Inheritance ?
Answer :
* Inheritance
	Ek class doosri class ke features (methods and properties) ko inherit karti hai.
    Yeh parent-child relationship ko represent karta hai.
	Focus - Code reuse.
* Polymorphism
	Ek functionality multiple forms le sakti hai, jaise method overriding aur method overloading.
	Focus - Flexibility in behavior.
* Key Difference -
    Inheritance focuses on reusability, while polymorphism focuses on flexibility in method implementation (like overriding and overloading).

26. What is Generalisation / Aggregation / Composition ?
Answer :
* These are relationship types in object-oriented design.
	Generalization -
	Iska matlab hota hai common features ko ek generic parent class mein define karna, aur baaki specific features ko child classes mein define karna.
    Ex -
        Parent: Vehicle (general class)
        Child: Car, Bike (specific classes)
	Aggregation -
        Aggregation ek “has-a” relationship ko represent karta hai, jisme ek object doosre object ka part hota hai, lekin dono independent hoti hain.
        Ex -
            A Department has many Employees, but both can exist independently.
	Composition -
        Composition ek stronger form of aggregation hai, jisme ek object doosre object ke bina exist nahi kar sakta.
        Ex -
            A House has a Room. A room cannot exist without a house.
* Difference -
    In aggregation, objects are independent, but in composition, one object cannot exist without the other.

-----Polymorphism-----

1. What is Polymorphism ?
Answer :
* Polymorphism ka matlab hota hai “many forms.”
* Ek object ya method apne multiple forms ya behaviors ko represent kar sakta hai.
* Ex -
    Ek method jo different classes me alag tarike se behave karta hai. Jaise, ek Animal class ka method sound() dog aur cat class me alag alag sound produce karega.

2. What is the need of Polymorphism ?
Answer :
* Polymorphism is needed to achieve -
	Code Reusability - Ek hi code multiple objects ke liye kaam karta hai.
	Flexibility - Aap ek interface ya base class ke through objects ko deal kar sakte ho, aur actual behavior runtime pe decide hota hai (run-time polymorphism).
    Maintenance - Code kaafi modular hota hai, jisme alag classes ko maintain aur extend karna aasaan hota hai.

3. Explain the Categorisation :
    What is Function / Operator Overloading ?
        What is Complie Time Polymorphism ?
        What Function cannot be overloaded in Java / C++ ?
        What are all the operators that cannot be overloaded ?
    What is Function Overriding ?
        What is Run Time Polymorphism ?
Answer :
* Function / Method Overloading -
    Function Overloading ya Method Overloading ka matlab hota hai ek class ke andar same method name hone ke baad bhi different parameters ke saath multiple methods ko define karna.
    Ex -
        class Calculator {
            int add(int a, int b) {
                return a + b;
            }
            double add(double a, double b) {
                return a + b;
            }
        }
* Compile-Time Polymorphism -
    Compile-time polymorphism ko static polymorphism bhi kehte hain.
    Yeh tab achieve hota hai jab methods compile-time pe decide ho jate hain, jaise method overloading.
* Functions that cannot be overloaded in Java -
    Java mein -
	Static methods ko overload kiya ja sakta hai, but they cannot be overridden.
	final methods ko overload kiya ja sakta hai, lekin override nahi kar sakte.
	Constructors can be overloaded but cannot be inherited or overridden.
* Operators that cannot be overloaded(C++) -
    Java mein operator overloading nahi hoti.
    Lekin C++ mein kuch operators overload nahi ho sakte, jaise -
        . (dot operator)
        :: (scope resolution)
        sizeof
        ?: (ternary operator)
* Function Overriding -
    Function Overriding ka matlab hota hai jab ek derived class (child class) apne parent class ke method ko override kar ke redefine karti hai.
    Ex -
        class Animal {
            void sound() {
                System.out.println("Animal makes a sound");
            }
        }
        class Dog extends Animal {
            @Override
            void sound() {
                System.out.println("Dog barks");
            }
        }
* Run-Time Polymorphism -
    Run-time polymorphism ko dynamic polymorphism bhi kehte hain.
    Yeh tab hota hai jab method call run-time pe decide hota hai, jaise method overriding.

4. What is Virtual Function ?
Answer :
* Java mein virtual functions ka concept nahi hota explicitly, kyunki har method implicitly virtual hota hai.
* But, agar hum C++ ki baat karein -
	A virtual function is a method in a base class that can be overridden by a derived class to provide dynamic polymorphism.

5. What is Virtual Class ?
Answer :
* Java mein virtual class ka direct concept nahi hai.
* Yeh C++ ka concept hai jisme virtual inheritance use hota hai to solve the diamond problem.
* Java mein diamond problem ko interfaces se solve kiya jaata hai.

6. What is Derived Class ?
Answer :
* Ek derived class ya sub-class ek aisi class hoti hai jo ek existing class (super-class) se inherit karti hai.
* Java mein inheritance ka use karke ek class ko derived banate hain.
* Ex -
    class Animal { } -----> Super class
    class Dog extends Animal { } -----> Derived class

7. Can Virtual Function be set "Private" ?
Answer :
* Java mein virtual function ka concept nahi hai, lekin agar hum C++ ki baat karein -
	Yes, a virtual function can be private.
    However, child classes cannot directly access private virtual functions, but can still override them.

8. What is Inline Virtual Function ?
Answer :
* Java mein inline functions ka concept nahi hota.
* Lekin C++ mein, an inline virtual function is a virtual function whose code is expanded inline to avoid function call overhead, but it’s rarely used because it defeats the purpose of virtual functions (dynamic dispatch).

9. What is Abstract Class ?
Answer :
* Ek abstract class aisi class hoti hai jisme abstract methods hote hain, jinka implementation derived class provide karti hai.
* Ek abstract class ko instantiate nahi kiya ja sakta.
Ex -
    abstract class Animal {
        abstract void sound();
    }
    class Dog extends Animal {
        void sound() {
            System.out.println("Dog barks");
        }
    }

10. What is Pure Virtual Function ?
Answer :
* Java mein pure virtual function ko equivalent abstract method kehte hain.
* Matlab, ek method jo sirf declaration provide karta hai, lekin uska implementation subclass me hota hai.
* Ex -
    abstract class Shape {
        abstract void draw(); -----> Pure virtual function (abstract in Java)
    }

11. What is Pure Virtual Destructor ?
Answer :
* Java mein destructors ka concept nahi hai because memory management garbage collection se handle hota hai.
* Lekin C++ mein pure virtual destructor hota hai jab aapko base class ka destructor bhi virtual banana padta hai, but Java mein yeh needed nahi hota.

12. How overridding works in JAVA ?
Answer :
* Method Overriding ka matlab hota hai jab child class apne parent class ke method ko same signature ke saath redefine karti hai.
* Jab child class ka object use karke method call kiya jata hai, to child class ka version run hota hai, even if method parent class me bhi defined hai.
* Important Points -
	Same Signature -
        Method name, return type, and parameters must be the same in both parent and child classes.
	@Override Annotation -
        Yeh annotation optional hai, but use karne se pata chalta hai ki hum overriding kar rahe hain.
	Access Modifier -
        Child class ka method parent ke method se same ya zyada permissive access modifier use kar sakta hai, but more restrictive nahi ho sakta.
	Runtime Polymorphism -
        Java mein overriding runtime pe decide hoti hai, yani method call object type pe depend karta hai, not reference type pe.
* Ex -
    class Animal {
        void sound() {
            System.out.println("Animal makes a sound");
        }
    }
    class Dog extends Animal {
        @Override
        void sound() {
            System.out.println("Dog barks");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal animal = new Dog(); -----> Reference of Animal, object of Dog
            animal.sound(); -----> Output: Dog barks (runtime pe decide hota hai)
        }
    }

13. How Java determines which method to run ?
Answer :
* Java determines which method to run at runtime using dynamic method dispatch.
* Iska matlab hota hai ki method call object ke actual type ke basis pe decide hota hai, even if reference type different ho.
	Jab aap method call karte ho, toh Java pehle reference type dekhta hai, but method ka execution object type ke basis pe hota hai.
	Agar child class ne method override kiya hai, toh child class ka version run hoga, even if aap reference parent class ka use kar rahe ho.
* Ex -
    Animal animal = new Dog();
    animal.sound(); -----> Even though reference is Animal, Dog's sound() is called
    Yeh runtime polymorphism ka part hota hai.

14. Can we override static Methods ?
Answer :
* No, static methods cannot be overridden in Java.
    Static methods ko method hiding kehte hain, na ki overriding.
    Jab aap static method ko child class me define karte ho jo parent class ke static method jaisa hota hai, toh yeh method hiding hota hai.
	Static methods class ke saath bound hote hain, na ki object ke saath.
    Isiliye, static methods ka method call compile-time pe decide hota hai, not runtime pe.
* Ex -
    class Parent {
        static void display() {
            System.out.println("Static method in Parent");
        }
    }
    class Child extends Parent {
        static void display() {
            System.out.println("Static method in Child");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Parent p = new Child();
            p.display(); -----> Output: Static method in Parent (no overriding)
        }
    }

-----Encapsulation-----

1. What is Encapsulation ?
Answer :
* Encapsulation ka matlab hota hai data hiding aur code ko wrap karna ek single unit me.
* Iska main goal hai ki class ke data members (variables) ko direct access se bachaya jaye, aur unhe sirf methods ke through manipulate kiya jaye.

2. What is the need of Encapsulation ?
Answer :
* Encapsulation isliye zaroori hota hai kyunki -
	Data ko protect karna - Direct access ko rokh kar hum data ki safety ensure karte hain.
	Maintainability - Code ka structure controlled aur organized rehta hai, taaki future changes aasan ho jaye.
	Controlled access - Aap data ko sirf authorized methods ke zariye access kar sakte ho.

3. What are the advantages of Encapsulation ?
Answer :
* Data Hiding -
    Data ko bahar ke users ke liye chhupa ke rakhta hai.
* Loose Coupling -
    Class ke internal implementation ko hide karta hai, jo flexibility aur maintainability provide karta hai.
* Reusability -
    Encapsulated code ko baar baar reuse kiya ja sakta hai bina uski implementation detail ke.

4. How to achieve Encapsulation ?
Answer :
* Encapsulation ko achieve karne ke liye -
	Private variables use karo taaki wo class ke andar restricted rahe.
	Public getter/setter methods use karo to control access to the private variables.

5. What are some real world examples of Encapsulation ?
Answer :
* ATM machine -
    Aapko bas input dena hai aur output lena hai, machine ka internal kaise kaam karta hai wo chhupa hota hai.
* Mobile phone -
    Aapko mobile ke internal circuitry ki knowledge nahi chahiye, bas aapko buttons ya touchscreen use karna aata hai.

6. How to Implement Encapsulation in Code (JAVA) ?
Answer :
* Implementation -
    class Account {
        -----> Private variables
        private String accountNumber;
        private double balance;
        -----> Constructor
        public Account(String accountNumber, double balance) {
            this.accountNumber = accountNumber;
            this.balance = balance;
        }
        -----> Getter for accountNumber
        public String getAccountNumber() {
            return accountNumber;
        }
        -----> Setter for balance
        public void setBalance(double balance) {
            if (balance > 0) {
                this.balance = balance;
            }
        }
        -----> Getter for balance
        public double getBalance() {
            return balance;
        }
    }
    public class TestEncapsulation {
        public static void main(String[] args) {
            Account account = new Account("123456789", 5000.0);
            System.out.println("Account Number: " + account.getAccountNumber());
            System.out.println("Balance: " + account.getBalance());
            -----> Updating balance through setter method
            account.setBalance(6000.0);
            System.out.println("Updated Balance: " + account.getBalance());
        }
    }

-----Abstraction-----

1. What is Abstraction ?
Answer :
* Abstraction ka matlab hota hai essential details ko show karna aur unnecessary details ko hide karna.
* Iska focus hota hai ki user ko bas necessary information di jaye, aur complex implementation ko hide kiya jaye.

2. What is the need of Abstraction ?
Answer :
* Abstraction isliye zaroori hai taaki -
	Complexity ko kam kiya ja sake.
	Focus sirf relevant details pe ho.
	Implementation details chhupi rahein, sirf functionality pe concentrate ho.

3. When to use Abstraction ?
Answer :
* Abstraction ka use tab hota hai jab -
	Aapko real-world objects ko represent karna ho bina unke complex internals ke.
	Jab multiple classes similar functionality implement kar rahe ho, abstraction unko simplify karta hai.

4. How to achieve Abstraction in JAVA :
    Interfaces
    Abstract Class
Answer :
* Interfaces -
    Interface ek abstract type hota hai jo sirf methods ke signature define karta hai, implementation nahi.
    Ex -
        interface Animal {
            void sound();
        }
        class Dog implements Animal {
            @Override
            public void sound() {
                System.out.println("Dog barks");
            }
        }
* Abstract Class -
    Abstract class me kuch methods abstract ho sakte hain (sirf signature) aur kuch methods concrete (with body) bhi ho sakte hain.
    Ex -
        abstract class Animal {
            abstract void sound(); -----> Abstract method
            void sleep() { -----> Concrete method
                System.out.println("Animal is sleeping");
            }
        }
        class Dog extends Animal {
            @Override
            void sound() {
                System.out.println("Dog barks");
            }
        }

5. What is the difference between Encapsulation and Abstraction ?
Answer :
* Encapsulation - Data ko hide karta hai aur class ke andar protect karta hai.
* Abstraction - Sirf essential details ko expose karta hai aur unnecessary complexity ko hide karta hai.

6. What are the differences between interfaces and abstract class ?
Answer :
* Refer to Image.

-----Data Hidding----

1. What is Data Hidding ?
Answer :
* Data Hiding ka matlab hota hai internal details ko external access se protect karna. I
* ska purpose hai ki class ke critical data members ko direct access na diya jaye, sirf trusted methods ke zariye hi unko access ya modify kiya ja sake.
* This ensures security and integrity of data.
* Ex -
    Agar aapke paas ek class hai jo bank account ko represent karti hai, to aap balance ko private rakhoge aur methods like getBalance() aur deposit() provide karoge taaki balance ko change karne ka proper tareeka rahe.
    class BankAccount {
        private double balance;  -----> Data hiding
        public void deposit(double amount) {
            if(amount > 0) {
                balance += amount;
            }
        }
        public double getBalance() {
            return balance;
        }
    }
    Is example mein, balance ko private rakha gaya hai taaki wo direct access na ho, aur usko access karne ke liye methods ka use kiya jaye.

-----Dynamic Binding-----

1. What is Dynamic Binding ?
Answer :
* Dynamic Binding ko kabhi kabhi late binding bhi kehte hain.
* Iska matlab hota hai ki method ka call run-time par resolve hota hai, jab actual object ka type pata hota hai.
* Yani jab aapke paas base class ka reference hota hai, par actual object derived class ka hota hai, to Java run-time pe decide karta hai ki kaunsa method call hoga.
* Ex -
    class Animal {
        void sound() {
            System.out.println("Animal makes a sound");
        }
    }
    class Dog extends Animal {
        @Override
        void sound() {
            System.out.println("Dog barks");
        }
    }
    class TestDynamicBinding {
        public static void main(String[] args) {
            Animal animal = new Dog(); -----> Reference is Animal, but object is Dog
            animal.sound();  -----> Dog's sound method will be called at run-time
        }
    }
    Is example mein, object Dog ka hai par reference Animal ka, aur method sound() call hone ka decision run-time pe hota hai.

2. What is the use of Dynamic Binding ?
Answer :
* Dynamic binding ka main use polymorphism ko enable karna hai -
	Flexibility -
        Aap generic code likh sakte ho jo different objects ke liye kaam kare.
	Code Reusability -
        Base class ke reference ke through derived class ke methods ko call karne ki ability deta hai without knowing the exact object type at compile time.

-----Message Binding-----

1. What is Message Binding ?
Answer :
* Message Binding concept ka matlab hota hai method call ko object ke sath bind karna taaki jab message (method call) diya jaye to wo appropriate object ke method ko invoke kare.
* Yeh concept mainly object-oriented programming ke communication ko refer karta hai, jisme objects methods ko invoke karne ke liye “messages” exchange karte hain.
* Ex -
    Jab ek object doosre object ko method call karta hai, to wo method ke naam ko message ke roop me bhejta hai, aur jis object ko call karna hai, wo respond karta hai.

2. What is the use of Message Binding ?
Answer :
* Message binding ka main use hota hai communication between objects ko facilitate karna -
	Interaction between Objects -
        Multiple objects ke beech mein communication ko allow karta hai, jo ek core concept hai OOPs ka.
	Loose Coupling -
        Message binding se objects loosely coupled hote hain, yani ek object ko doosre object ki exact implementation detail nahi pata hoti, sirf uska interface pata hota hai.

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

*/
