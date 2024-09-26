package Polymorphism.Compile_Time;

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(1,2));
        System.out.println(calc.add(1,2,3));
    }
}
