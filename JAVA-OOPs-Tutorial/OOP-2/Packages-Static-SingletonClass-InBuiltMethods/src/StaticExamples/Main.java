package StaticExamples;

public class Main {
    public static void main(String[] args) {
        Human sahil = new Human(24 , "Sahil Ladhania" , 10000 , false);
        Human janvi = new Human(22 , "Janvi Ladhania" , 10000 , false);

        // Both will work - If we access it using Instance Variable and Class.
        // But the convention is to access it with Class.
//        System.out.println(sahil.population);
//        System.out.println(janvi.population);
        System.out.println(Human.population);
        System.out.println(Human.population);
    }
}
