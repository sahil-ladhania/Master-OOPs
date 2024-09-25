public class Main {
    public static void main(String[] args) {
        System.out.println("Building Shape Area Calculator!");

        /*
            Objective - Develop an area calculator for different shapes using polymorphism and inheritance.
            Details :
                1.	Classes -
                        Shape: An abstract class with an abstract method calculateArea().
                        Circle, Rectangle, Triangle: Extend the Shape class and implement the calculateArea() method.
                2.	Inheritance -
                        Use inheritance to derive specific shapes from the Shape class.
                3.	Polymorphism -
                        Create a method that accepts a Shape reference and calculates the area for any shape.
                4.	Encapsulation -
                        Use private attributes for shape dimensions and provide public methods to access them.
                5.	Implementation -
                        Create a main method to create shape objects and calculate their areas.
        */

        /*
            Where , Why and How the OOPs 4 main properties are working in this Code ?

            1. Inheritance
                    Where it’s happening -
                        Inheritance is occurring between the Shape class (abstract class) and the specific shape classes (Circle, Rectangle, Triangle).
                        All specific shapes extend the Shape class and inherit its properties and behaviors.
                    Why it’s happening -
                        Inheritance allows the specific shape classes to reuse the Shape class structure and define their own calculateArea() method.
                        This reduces code duplication because the common concept of “shape” is shared, and only specific details (like how to calculate the area) are provided in each subclass.

            2. Polymorphism
                    Where it’s happening -
                        Polymorphism is occurring in the AreaCalculator class, specifically in the printArea() method.
                        The method accepts a Shape reference, but at runtime, it calls the calculateArea() method of the actual shape type (e.g., Circle, Triangle, Rectangle).
                    Why it’s happening -
                        Polymorphism allows the printArea() method to work with any shape (circle, triangle, rectangle) through a single interface (the Shape reference).
                        This is dynamic polymorphism, where the actual method that gets called is determined at runtime based on the object type.
                        For example, even though printArea() takes Shape as the parameter, at runtime it calls circle.calculateArea(), triangle.calculateArea(), or rectangle.calculateArea() depending on the actual object passed.
                        This enables flexibility and reusability of code.

            3. Encapsulation
                    Where it’s happening -
                        Encapsulation is used in each shape class (Circle, Rectangle, Triangle) where the dimensions of the shapes (e.g., r, l, b, a, c) are private.
                        Public methods (getR(), setR(), etc.) are provided to access and modify these private attributes.
                    Why it’s happening -
                        Encapsulation protects the shape’s internal state (like the dimensions) from being accessed or modified directly from outside the class.
                        This ensures that the shape’s properties are controlled through setter and getter methods, which adds a layer of data protection and validation if needed.
                        For example, a circle’s radius is set using circle.setR(5);, and the radius value is not directly accessed, ensuring the integrity of the data.

            4. Abstraction
                    Where it’s happening -
                        Abstraction is happening through the Shape class, which is abstract and declares an abstract method calculateArea() without providing its implementation.
                    Why it’s happening -
                        Abstraction allows you to define a generic concept of a “shape” without worrying about the specific details of each shape.
                        It forces any subclass (like Circle, Rectangle, and Triangle) to implement the calculateArea() method.
                        This means that each shape class provides its own concrete implementation of how to calculate the area, but the abstract class defines the contract that every shape must implement the calculateArea() method.

        */

        AreaCalculator areaCalculator = new AreaCalculator();

        Circle circle = new Circle();
        circle.setR(5);
        System.out.println(circle.getR());
        areaCalculator.printArea(circle);

        Triangle triangle = new Triangle();
        triangle.setA(1);
        triangle.setB(2);
        triangle.setC(3);
        System.out.println(triangle.getA());
        System.out.println(triangle.getB());
        System.out.println(triangle.getC());
        areaCalculator.printArea(triangle);

        Rectangle rectangle = new Rectangle();
        rectangle.setL(10);
        rectangle.setB(10);
        System.out.println(rectangle.getL());
        System.out.println(rectangle.getB());
        areaCalculator.printArea(rectangle);

    }
}