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
//        Student student_1 = new Student(); // We can also do the above thing in one line. Try to Debug this Line and understand How things are working.
        Student student_1 = new Student(47 , "Sahil Ladhania" , 76.5f);
        Student student_2 = new Student();

        System.out.println(student_1); // Why am I getting some random value ?

        // Putting Some Values in student_1 Object ----> "this" is not different what we did below.
//        student_1.roll_num = 47;
//        student_1.name = "Sahil Ladhania";
//        student_1.marks = 69.5f;
        // But can we add these values when we create the Object -----> Yes , we can add this value inside the Constructor(Parameterised Constructor).

        /*
        Printing the Values of student_1 ----> We will get default values below if we don't assign the values using dot operator or if we don't add the value inside the Constructor.

        System.out.println(student_1.roll_num); -----> Default Value of Primitives(Integer) is 0.
        System.out.println(student_1.name); -----> Default Value of Non-Primitives(Strings) is null.
        System.out.println(student_1.marks); -----> Default Value of Primitives(Float) is 0.0.
        */
        System.out.println(student_1.roll_num);
        System.out.println(student_1.name);
        System.out.println(student_1.marks);

//        student_1.changeName("Janvi Sunderka");
//        student_1.greeting();

        System.out.println(student_2.name);

        // Memory Allocation of "new" Keyword
        Student one = new Student();
        Student two = one;
        one.name = "Something Something";
        System.out.println(two.name);

    }

}

// Creating a Student Class for every Single Student
class Student{
    int roll_num ;
    String name ;
    float marks ;

    // Creating a Function
    void greeting() {
        // You can do either this :
        System.out.println("My name is : " + name);
        // or this :
        System.out.println("My name is : " + this.name);
        // But what is the difference between them ?
    }

    void changeName(String newName) {
        name = newName;
    }

    // Adding Student Constructor
//    Student(){
//        /*
//        We will get error under student_1 , that it is not defined.
//        So we need a way to add the above values(roll_num , name , marks ) and somehow access student_1 or may be some other way for it to work.
//        Basically we need one word to access every object.
//        */
////        student_1.roll_num = 47;
////        student_1.name = "Sahil Ladhania";
////        student_1.marks = 69.5f;
//        /*
//            If we use "this" , we can refer to current Object.
//        */
//        this.roll_num = 47;
//        this.name = "Sahil Ladhania";
//        this.marks = 69.5f;
//    }

    // Calling a Constructor From Another Constructor
    Student(){
        // This is how you call a constructor from another constructor.
        // Internally it is like ------> new Student(13 , "Default Name" , 100.0f);
        this(13 , "Default Name" , 100.0f);
    }

    /*
        -----Constructor Overloading-----
        - Jb student_1 0 arguments k sath call hoga to upar wala hoga.
        - Jb student_1 3 arguments k sath call hoga to niche wala hoga.
    */

    // Adding Student Constructor with Parameters
    // Either you change the name of the parameters you added than the local variable of class.
    Student(int roll , String naam , float mark){
        roll_num = roll;
        name = naam;
        marks = mark;
    }
    // Or you use "this" with the local variable to assign the value.
//    Student(int roll_num , String name , float marks){
//        this.roll_num = roll_num;
//        this.name = name;
//        this.marks = marks;
//    }

}