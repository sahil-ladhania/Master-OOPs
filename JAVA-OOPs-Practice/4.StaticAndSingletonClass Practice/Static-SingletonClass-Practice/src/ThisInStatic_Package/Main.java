package ThisInStatic_Package;

public class Main {
    public static void main(String[] args) {
        Test.displayStatic();
        Test obj = new Test();
        obj.displayNonStatic();
    }
}

class Test{
    String instanceVar = "Im a instance variable.";
    static void displayStatic(){
//        System.out.println(this.instanceVar); -----> compile-time error
        System.out.println("Error: 'this' cannot be used in a static method.");
    }
    void displayNonStatic(){
        System.out.println(this.instanceVar);
    }
}