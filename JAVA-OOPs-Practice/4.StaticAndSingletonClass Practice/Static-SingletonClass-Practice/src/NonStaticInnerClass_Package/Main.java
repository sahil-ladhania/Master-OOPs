package NonStaticInnerClass_Package;

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
    }
}

class Outer{
    String outerField = "Outer Field";
    class Inner{
        void display(){
            System.out.println("Accessing from Inner Class: " + outerField);
        }
    }
    void outerMethod(){
        Inner inner = new Inner();
        inner.display();
    }
}