package Encapsulation.Data_Encapsulation;

public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Sahil" , 23);
        System.out.println(student1.getName());
        System.out.println(student1.getAge());
        student1.setName("Janvi");
        student1.setAge(21);
        System.out.println(student1.getName());
        System.out.println(student1.getAge());
    }
}