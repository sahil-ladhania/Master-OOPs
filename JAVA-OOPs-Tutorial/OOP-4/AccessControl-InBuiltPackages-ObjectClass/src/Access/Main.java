package Access;

public class Main {
    public static void main(String[] args) {
        A a = new A(10 , "Sahil");

        /*
            Need to do few things :
                1. Access the Data Members
                2. Modify the Data Members
        */

        System.out.println(a.getNum());
        System.out.println(a.getName());
        a.setNum(20);
        a.setName("Janvi");
        System.out.println(a.getNum());
        System.out.println(a.getName());
    }
}
