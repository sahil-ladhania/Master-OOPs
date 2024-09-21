package NonStaticInsideStatic_Package;

public class Main {
    public static void main(String[] args) {
        Test.displayStatic();
    }
}

class Test{
    String nonStaticVar = "Im a non-static variable.";
    static void displayStatic(){
//        System.out.println(nonStaticVar); ------> compile-time error
        Test obj = new Test();
        System.out.println(obj.nonStaticVar);
    }
}