package Encapsulation.Data;

public class Main {
    public static void main(String[] args) {
        Student student_1 = new Student();
        student_1.setName("Sahil");
        student_1.setAge(23);
        System.out.println(student_1.getName());
        System.out.println(student_1.getAge());
    }
}
