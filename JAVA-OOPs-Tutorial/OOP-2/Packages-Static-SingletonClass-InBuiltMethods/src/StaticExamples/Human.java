package StaticExamples;

public class Human {
    int age;
    String name;
    int salary;
    boolean married;
//    long population; -----> This is wrong , you should not do this as this won't be common then !
    // Those variables that are common to all objects , should be static ----> Like population is same for all the Humans
    static long population; // static is not related to the object
    // Constructor with 4 Parameters
    public Human(int age ,String name , int salary , boolean married){
        this.age = age;
        this.name = name;
        this.salary = salary;
        this.married = married;
        // Why I should use "this" to access the population , as this is used to access instance variables , basically "this" represents the Object.
//        this.population += 1; ----> output - 2
        // So , in order to access the static variables , we can use the Class name.
        Human.population += 1; // ----> output - 2
        // So Why am I getting the same answer with both ? Is there any difference between both of them ?
    }
}
