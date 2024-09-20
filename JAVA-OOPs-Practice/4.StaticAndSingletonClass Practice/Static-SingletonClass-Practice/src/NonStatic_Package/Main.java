package NonStatic_Package;

public class Main {
    public static void main(String[] args) {
        Counter counter1 = new Counter();
        counter1.increment();
        counter1.displayCount();
        Counter counter2 = new Counter();
        counter2.increment();
        counter2.displayCount();
    }
}

class Counter{
    int count = 0;
    void increment(){
        count++;
    }
    void displayCount(){
        System.out.println("Count: " + count);
    }
}