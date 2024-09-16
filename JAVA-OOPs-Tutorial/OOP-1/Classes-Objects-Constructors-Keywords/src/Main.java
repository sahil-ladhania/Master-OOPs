import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Introduction and Concepts : Classes , Objects , Constructors , Keywords");

//        Store 5 Roll Numbers
        int[] numbers = new int[5];
//        Store 5 Names
        String[] names = new String[5];
//        Store Data of 5 Students : (Roll No , Name , Marks)
        int[] roll_num = new int[5];
        String[] name = new String[5];
        float[] marks = new float[5];
        /*
            Note : If we want to store data of 5 students , we will have to store it in different variables and by using different datatypes.
                   But what if we want to store it in one variable like below ?
        */

        Student[] students = new Student[5]; // Student is our own Datatype that we created. So if we want all three data in a single variable or datatype , we need to create a Class !

        // System.out.println(student_1); ----> Why am I getting error when Iam trying to print it ?
        /*
            Note : Because student_1 has not been initialised yet.
        */

        System.out.println(Arrays.toString(students)); // Why are we getting this : [null, null, null, null, null] ?
        /*
            Note : When the students are not initialised , the by default value in Java is "null". It may be different for Primitives. But it is "null" for Objects.
        */

        // System.out.println(student_1.roll_num); -----> Why am I getting error when Iam trying to access the instance variable ?
        /*
            Note : Because in order to create an Object , you need to use "new" Keyword.
        */

        // Student student_1; ----> Here we are just Declaring.
        // student_1 = new Student(); ----> Here we are Instantiating.
        Student student_1 = new Student(); // We can also do the above thing in one line. Try to Debug this Line and understand How things are working.

        System.out.println(student_1); // Why am I getting some random value ?

//        System.out.println(student_1.roll_num); -----> Default Value of Primitives(Integer) is 0.
//        System.out.println(student_1.name); -----> Default Value of Non-Primitives(Strings) is null.
//        System.out.println(student_1.marks); -----> Default Value of Primitives(Float) is 0.0.

        // Putting Some Values in student_1 Object ----> "this" is not different what we did below.
//        student_1.roll_num = 47;
//        student_1.name = "Sahil Ladhania";
//        student_1.marks = 69.5f;
        // But can we add these values when we create the Object : Yes , we can.

        // Printing the Values
        System.out.println(student_1.roll_num);
        System.out.println(student_1.name);
        System.out.println(student_1.marks);
        student_1.greeting();
        student_1.changeName("Harshit Ladhania");
        student_1.greeting();

    }

}

// Creating a Student Class for every Single Student
class Student{
    int roll_num ;
    String name ;
    float marks ;

    // Creating a Function
    void greeting (){
        System.out.println("Hello my name is " + name);
        System.out.println("Hello my name is " + this.name);
        // Why is it working both ways ?
        // Is there any difference between them ?
    }

    // Creating another Function
    void changeName (String newName){
        name = newName;
    }

    Student(){
        /*
        -----> Why are we not able to access student_1 here ?
        student_1.roll_num = 47;
        student_1.name = "Sahil Ladhania";
        student_1.marks = 69.5f;
        */
        // We need a way to add the values of the above properties object by object.
        // We need one word to access every object ----> "this" Keyword
        this.roll_num = 47;
        this.name = "Sahil Ladhania";
        this.marks = 69.5f;
    }
}