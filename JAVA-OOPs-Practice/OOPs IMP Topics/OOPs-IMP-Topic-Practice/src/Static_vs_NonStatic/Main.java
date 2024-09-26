package Static_vs_NonStatic;

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Fortuner" , "Toyato" , 5000000 , 2000);
        System.out.println(car1.model);
        System.out.println(car1.brand);

        System.out.println("-----Non-Static Members inside Static Environment-----");
        car1.displayData1();

        System.out.println("-----Static Members inside Non-Static Environment-----");
        car1.displayData2();
    }
}
