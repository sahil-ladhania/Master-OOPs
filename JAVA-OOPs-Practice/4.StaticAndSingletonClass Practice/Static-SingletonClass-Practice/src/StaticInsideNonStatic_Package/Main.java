package StaticInsideNonStatic_Package;

public class Main {
    public static void main(String[] args) {
        Test obj = new Test();
        obj.nonStaticMethod();
    }
}

class Test{
    static String staticVar = "Im a Static Variable.";
    static void staticMethod(){
        System.out.println("Im a Static Method.");
    }
    void nonStaticMethod(){
        // We can directly access static variables and methods without any problem or by using with Class Name.
        System.out.println(staticVar);
        System.out.println(Test.staticVar);
        staticMethod();
        Test.staticMethod();
    }
}