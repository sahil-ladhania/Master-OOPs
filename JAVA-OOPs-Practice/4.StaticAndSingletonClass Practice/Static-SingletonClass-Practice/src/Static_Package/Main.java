package Static_Package;

public class Main {
    public static void main(String[] args) {
        Counter.increment();
        Counter.increment();
        Counter.increment();
        System.out.println(Counter.count);
        Counter counter = new Counter();
        counter.displayCount();
    }
}

class Counter{
    static int count = 0;
    static void increment(){
        count++;
    }
    void displayCount(){
        System.out.println("Count: " + count);
    }
}