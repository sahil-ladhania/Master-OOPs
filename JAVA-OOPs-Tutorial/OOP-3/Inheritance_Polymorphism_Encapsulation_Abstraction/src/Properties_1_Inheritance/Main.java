package Properties_1_Inheritance;

public class Main {
    public static void main(String[] args) {
        Box box1 = new Box();
        System.out.println(box1.l + " ," + box1.h + " ," + box1.w);
        Box box2 = new Box(4.6);
        System.out.println(box2.l + " ," + box2.h + " ," + box2.w);
        Box box3 = new Box(2.1 , 3.4 , 4.5);
        System.out.println(box3.l + " ," + box3.h + " ," + box3.w);
        Box box4 = new Box(box1);
        System.out.println(box4.l + " ," + box4.h + " ," + box4.w);

        System.out.println("Inheritance");

        BoxWeight box5 = new BoxWeight();
        System.out.println(box5.h + " ," + box5.weight);
        BoxWeight box6 = new BoxWeight(2 , 3 , 4 , 8);
        System.out.println(box6.l + " ," + box6.h + " ," + box6.w + " ," + box6.weight);

        Box box7 = new BoxWeight(2 , 3 , 4 , 6);
        System.out.println(box7.w);
//        System.out.println(box7.weight); -----> Can you access weight : No --> But Why : Because it is actually the type of reference variable and not the object that determines What members can be accessed.

        /*
            BoxWeight box8 = new Box();
            Why am I getting an error on the above line ?
                - Because , there are many variables in both parent and child classes.
                - You are given access to variables that are in the ref type i.e. BoxWeight.
                - Hence, you should have access to weight variable.
                - This also means, that the ones you are trying to access should be initialised.
                - But here, when the obj itself is of type parent class, how will you call the constructor.
                - This is why getting an Error.
        */

    }
}
