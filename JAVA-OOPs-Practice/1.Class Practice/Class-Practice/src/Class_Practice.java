public class Class_Practice {
    public static void main(String[] args) {
        // Creating an object of the Car class
        Car myCar = new Car();

        /*

        1. Do you need to create an Object to access fields and method of a Class in Java ?
        * In Java, whether you need to create an object to access fields and methods of a class depends on whether the
          fields and methods are instance members or static members.
        * Instance Members :
                            -Require an object to access fields and methods.
                            -Instance fields and methods are associated with specific instances (objects) of a class.
                            -You need to create an object of the class to access instance fields and methods.
        * Static Members :
                         -Do not require an object; can be accessed directly using the class name.
                         -Static fields and methods are associated with the class itself rather than any specific instance.
                         -They can be accessed without creating an object.
                         -You can access static fields and methods directly using the class name.
        */

        // Setting the field value
        myCar.color = "Red";
        // Calling the method
        myCar.displayColor();

        Stuudent[] student = new Stuudent[5];
        System.out.println(student); // Gives Hash Value
        System.out.println(student[0]); // Gives null

        /*
            Default Value of Primitives(Integer) is 0.
            Default Value of Primitives(Float) is 0.0.
            Default Value of Non-Primitives(Strings) is null.
        */

    }
}

class Car{
    // Fields (Variables)
    String color;
    // Methods (Functions)
    void displayColor(){
        System.out.println("The color of the car is : " + color);
    }
}

class Stuudent{
    String name;
    int standard;
}