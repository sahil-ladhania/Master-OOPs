public class Main {
    public static void main(String[] args) {
        /*
        1. How to create a Package ?
        Example :
        package com.example.myProject;
        public class MyClass {
            // Class members and methods here
        }
        * Packages in Java are used to organize classes and interfaces into namespaces, similar to folders on a filesystem.
        * They help in avoiding naming conflicts and provide a way to encapsulate and group related classes.
        * This declares that MyClass belongs to the package com.example.myProject.

        2. How to use import statement in Java ?
        Syntax :
        import package.name.ClassName;
        * The import statement in Java is used to make classes and interfaces from other packages available to your current source file.
        * It helps in using classes and interfaces defined in other packages without using their fully qualified names.

        3. How to use static in Java ?
        Example :
        public class MyClass {
            static int count = 0; // Static variable

            static void increment() { // Static method
                count++;
            }
        }
        * Static keyword in Java is used to create variables and methods that belong to the class rather than instances (objects)
          of the class.
        * Static members are shared among all instances of the class.
        * Static variables and methods can be accessed directly using the class name without creating an object.

        4. How to create static variable in Java ?
        Example :
        public class MyClass {
            static int count = 0; // Static variable
        }
        * Static variables are variables that belong to the class rather than instances (objects) of the class.
        * They are initialized only once at the start of the execution and shared among all instances of the class.

        5. How Non-static member inside Static works in Java ?
        Example :
        public class MyClass {
            int x = 10; // Non-static member
            public static void main(String[] args) {
                // System.out.println(x); // This will cause compilation error
                MyClass obj = new MyClass();
                System.out.println(obj.x); // Accessing non-static member using object instance
            }
        }
        * Non-static members (variables or methods) cannot be directly accessed from static contexts (static methods or static blocks)
          in Java.
        * You need an object instance to access non-static members from static contexts.

        6. How Static member inside Non-static works in Java ?
        Example :
        public class MyClass {
            static int y = 20; // Static member
            void display() {
                System.out.println(y); // Accessing static member directly from non-static method
            }
        }
        * Static members (variables or methods) can be accessed directly from non-static contexts (instance methods or constructors)
          in Java.

        7. How to use this Keyword inside static in Java ?
        * Inside a static method or static block, you cannot use this keyword because this refers to the current object instance,
          which is not available in static contexts.

        8. How to initialize static variable in Java ?
        Example :
        public class MyClass {
            static int count = 0; // Initializing directly
            static {
                count = 10; // Initializing through static block
            }
        }
        * Static variables can be initialized directly when declared or through a static block.

        9. How to create an inner class in Java ?
        Syntax :
        public class Outer {
            static class InnerStatic {
            // Static inner class
            }
            class InnerNonStatic {
                // Non-static inner class
            }
        }
        * Inner classes are classes defined within another class in Java.
        * They can be static or non-static.
        * Static inner classes can access static members of the outer class directly.

        10. How to create a Singleton class in Java ?
        Example :
        public class Singleton {
            private static Singleton instance;
            private Singleton() {} // Private constructor
            public static Singleton getInstance() {
                if (instance == null) {
                    instance = new Singleton();
                }
                return instance;
            }
        }
        * Singleton class in Java is a class that can have only one instance at a time.
        * It ensures that there is a single global point of access to that instance.

        */
    }
}