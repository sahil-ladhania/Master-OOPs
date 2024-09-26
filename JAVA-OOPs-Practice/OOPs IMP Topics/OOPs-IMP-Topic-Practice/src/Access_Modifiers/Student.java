package Access_Modifiers;

public class Student {

    // Default Modifier : Uncomment and Explore
    String name;
    int roll_num;
    int standard;
    double marks;

    // Public Modifier : Uncomment and Explore
//    public String name;
//    public int roll_num;
//    public int standard;
//    public double marks;

    // Private Modifier : Uncomment and Explore
//    private String name;
//    private int roll_num;
//    private int standard;
//    private double marks;

    // Protected Modifier : Uncomment and Explore
//    protected String name;
//    protected int roll_num;
//    protected int standard;
//    protected double marks;


    public Student() {

    }

    public Student(String name, int roll_num) {
        this.name = name;
        this.roll_num = roll_num;
    }

    public Student(String name, int roll_num, int standard, double marks) {
        this.name = name;
        this.roll_num = roll_num;
        this.standard = standard;
        this.marks = marks;
    }

     void displayData(){
        System.out.println(name);
        System.out.println(roll_num);
        System.out.println(standard);
        System.out.println(marks);
    }

}
