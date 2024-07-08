public class Main {
    public static void main(String[] args) {
    /*

    1. How to create a Class in Java ?
    Syntax :
    public class ClassName {
        // Instance variables
        // Methods
    }
    * public - Access modifier allowing the class to be accessible from other classes.
    * class - Keyword to declare a class.
    * ClassName - Name of the class (should start with a capital letter by convention).

    2. How to access instance variables in Java ?
    Syntax :
    class ClassName {
        // Instance variables
        Type variableName;

        // Methods to access variables
        Type getVariableName() {
            return variableName;
        }

        void setVariableName(Type variableName) {
            this.variableName = variableName; ---------> You can access by using "this" Keyword.
        }
    }
    * Instance variables are accessed using methods called getters and setters.

    3. How to create an Object in Java ?
    Syntax :
    ClassName objectName = new ClassName();
    * ClassName - The name of the class from which the object is created.
    * objectName - The name of the object.
    * new ClassName() - Calls the constructor of the class.

    4. How to manipulate Object in Java ?
    * The object's properties are manipulated using setter methods.
    * The manipulated values are retrieved using getter methods.

    5. How to create Constructors in Java ?
    Syntax :
    public ClassName(Type parameter1, Type parameter2) {
        this.variable1 = parameter1;
        this.variable2 = parameter2;
    }
    * Constructors are special methods used to initialize objects.
    * They have the same name as the class and do not have a return type.

    6. How to use this Keyword ?
    Syntax :
    public class ClassName {
        Type variableName;

        public ClassName(Type variableName) {
            this.variableName = variableName;
        }
    }
    * this - Used to refer to the current object's instance variables.

    7. How to call a Constructor from a different Constructor ?
    Syntax :
    public ClassName(Type parameter1, Type parameter2) {
        this(parameter1, parameter2, defaultValue);
    }

    public ClassName(Type parameter1, Type parameter2, Type parameter3) {
        this.variable1 = parameter1;
        this.variable2 = parameter2;
        this.variable3 = parameter3;
    }
    * Using this() to call another constructor within the same class.

    8. How to create a Wrapper Class in Java ?
    Syntax :
    Integer num = new Integer(integer-value);
    Double d = new Double(double-value);
    Character ch = new Character(character-value);
    * Wrapper classes provide a way to use primitive data types (int, char, etc.) as objects.

    */

        // Example of How to create an Object.
//        Car1 myCar1 = new Car1();
//        myCar1.color1 = "Red";
//        myCar1.model1 = "Tesla Model S";
//        myCar1.year1 = 2021;
//        myCar1.displayInfo();

        // Example of How to create an Object using Constructor.
        Car1 myCar1 = new Car1("Red", "Tesla Model S", 2021);
        myCar1.displayInfo();

        // Example of How to create an Object and manipulate it using Constructor.
        Car2 myCar2 = new Car2();
        myCar2.setColor("Blue");
        System.out.println("Color: " + myCar2.getColor());

        // Example of How to create a Wrapper Class.
        Integer num = new Integer(5);
        Double d = new Double(5.65);
        Character ch = new Character('a');

        System.out.println("Integer: " + num);
        System.out.println("Double: " + d);
        System.out.println("Character: " + ch);

    }
}

// Example of How to create a Class with Constructor.
class Car1 {
    // Instance variables
    String color1;
    String model1;
    int year1;
    // Constructor with parameters
    public Car1(String color1, String model1, int year1) {
        this.color1 = color1;
        this.model1 = model1;
        this.year1 = year1;
    }
    // Method to display information
    void displayInfo() {
        System.out.println("Model: " + model1);
        System.out.println("Color: " + color1);
        System.out.println("Year: " + year1);
    }
}
//    Here, a Car class is created with three instance variables - color, model, and year.
//    A method displayInfo is defined to display the car's details.

// Example of How to access instance variables.
class Car2 {
    // Instance variables
    String color2;
    String model2;
    int year2;
    // Constructor with no parameters
    public Car2() {
        // Default constructor
    }
    // Constructor with parameters
    public Car2(String color2, String model2, int year2) {
        this.color2 = color2;
        this.model2 = model2;
        this.year2 = year2;
    }
    // Getter method for color
    String getColor() {
        return color2;
    }
    // Setter method for color
    void setColor(String color) {
        this.color2 = color;
    }
}
//    The getColor method returns the value of the color variable.
//    The setColor method sets the value of the color variable.

