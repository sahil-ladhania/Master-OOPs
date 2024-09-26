package Access_Modifiers;

public class Main {
    public static void main(String[] args) {
        System.out.println("-----Object with 0 Parameter-----");
        Student student1 = new Student(); // Debug this Line
        System.out.println(student1.name);
        System.out.println(student1.roll_num);
        System.out.println(student1.standard);
        System.out.println(student1.marks);

        System.out.println("-----Object with 2 Parameter-----");
        Student student2 = new Student("Sahil Ladhania" , 47); // Debug this Line
        System.out.println(student2.name);
        System.out.println(student2.roll_num);
        System.out.println(student2.standard);
        System.out.println(student2.marks);

        System.out.println("-----Object with 4 Parameter-----");
        Student student3 = new Student("Sahil Ladhania" , 47 , 12 , 70); // Debug this Line
        System.out.println(student3.name);
        System.out.println(student3.roll_num);
        System.out.println(student3.standard);
        System.out.println(student3.marks);

        System.out.println("-----displayData Method-----");
        student3.displayData();
    }
}
