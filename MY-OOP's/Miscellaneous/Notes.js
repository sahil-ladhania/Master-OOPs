/*

1. What is the Difference Between C, C++, and Java?
Answer :
C
    Type - Procedural Programming Language
    Use Case - System programming, embedded systems
    Memory Management - Manual (using malloc and free)
    Platform Dependency - Platform-dependent (compiled for specific OS)
C++
    Type - Object-Oriented Programming Language with Procedural features
    Use Case - System software, game development, real-time simulations
    Memory Management - Manual (using new and delete)
    Platform Dependency - Platform-dependent (compiled for specific OS)
    Additional - Supports features like classes, inheritance, and polymorphism
Java
    Type - Object-Oriented Programming Language
    Use Case - Web applications, mobile applications, enterprise solutions
    Memory Management - Automatic (Garbage Collection)
    Platform Dependency - Platform-independent (JVM-based)
    Additional - Emphasizes on write-once, run-anywhere; rich standard library


2. What is the Difference Between Procedural Programming and OOP?
Answer :
Procedural Programming
    Focus - Functions and procedures
    Data Handling - Data and functions are separate
    Example - C, Pascal
    Structure - Linear, top-down approach
    Reusability - Lower than OOP
Object-Oriented Programming
    Focus - Objects and classes
    Data Handling - Data and methods are encapsulated within objects
    Example - Java, C++
    Structure - Modular, hierarchical approach
    Reusability - High, through inheritance and polymorphism


3. Why is Java Not a Purely Object-Oriented Language?
Answer :
Primitive Types - Java uses primitive data types (int, char, etc.) which are not objects.
Static Methods - Java allows static methods which are not tied to any object instance.
Static Variables - Java allows static variables that belong to the class rather than any object.


4. Is an Array a Primitive Type or an Object in Java?
Answer :
Object - In Java, arrays are objects. They are instances of a class that extends Object.


5. What is Early and Late Binding?
Answer :
Early Binding (Static Binding)
    Definition - Method call is resolved at compile time.
    Example - Method overloading
Late Binding (Dynamic Binding)
    Definition - Method call is resolved at runtime.
    Example - Method overriding in inheritance


6. What is the Default Access Modifier in a Class?
Answer :
Default (Package-Private) - If no access modifier is specified, the default access modifier is package-private, meaning it is accessible only within its own package.


7. How Many Instances Can Be Created for an Abstract Class?
Answer :
None - An abstract class cannot be instantiated directly. It must be subclassed, and its abstract methods must be implemented in the subclass.


8. What is Garbage Collection and How Does it Work?
Answer :
Definition - Automatic memory management feature in Java that reclaims memory occupied by objects that are no longer in use.
Mechanism - JVM periodically runs a garbage collector to find and remove unreachable objects from the heap.


9. What are Manipulators?
Answer :
Definition - Special functions used in C++ for formatting output, like endl, setw, setprecision.


10. What Do You Mean by finally Block?
Answer :
Definition - A block of code in Java that is always executed after a try-catch block, regardless of whether an exception is thrown or not.
Use Case - To perform cleanup operations like closing files or releasing resources.


11. What is a Final Variable?
Answer :
Definition - A variable whose value, once assigned, cannot be changed. It can be a constant.
Example - final int MAX_VALUE = 100;


12. What is Meant by an Exception?
Answer :
Definition - An unexpected event or error that disrupts the normal flow of a program's execution.
Example - NullPointerException, ArrayIndexOutOfBoundsException


13. Is an Error Basically the Same as an Exception?
Answer :
Difference - Errors are serious problems that applications should not try to catch (e.g., OutOfMemoryError). Exceptions are conditions that applications might want to catch and handle.


14. What is Exception Handling and What is try-catch Block?
Answer :
Exception Handling - Mechanism to handle runtime errors, ensuring the program's flow is maintained.
try-catch Block -
try - Wraps code that might throw an exception.
catch - Catches and handles the exception.


15. What is the Method finalize Used For?
Answer :
Definition - A method that is called by the garbage collector on an object when garbage collection determines that there are no more references to the object.
Use Case - To perform cleanup operations before the object is collected.


16. What is a Token?
Answer :
Definition: Smallest unit in a program, such as keywords, operators, identifiers, constants, and punctuation marks.


17. What are the Three Arguments of a Ternary Operator?
Answer :
Structure - condition ? expr1 : expr2;
condition - A boolean expression
expr1 - Expression returned if condition is true
expr2 - Expression returned if condition is false


18. Describe the Concept of Enum?
Answer :
Definition - A special Java type used to define collections of constants.
Example - 
    public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}


19. Is It Possible for a Class to Inherit the Constructor of Its Base Class?
Answer :
No - A subclass does not inherit constructors from its superclass, but it can call the superclass constructor using super.


20. When Should I Use a Struct Instead of a Class?
Answer :
Not Applicable in Java - Java does not have structs. Use classes for all object-oriented purposes.


21. What is the Difference Between Cohesion and Coupling?
Answer :
Cohesion
    Definition - Degree to which elements of a module belong together.
    High Cohesion - Single, well-defined responsibility.
Coupling
    Definition - Degree of interdependence between modules.
    Low Coupling - Modules can be modified with minimal impact on other modules.

*/