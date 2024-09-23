package Properties_1_Inheritance;

public class Box {
    double l;
    double h;
    double w;
    // Default Constructor -----> 0 Parameters
    Box(){
        this.l = -1;
        this.h = -1;
        this.w = -1;
    }
    // Parameterized Constructor -----> 1 Parameters
    Box(double side){
        this.l = side;
        this.h = side;
        this.w = side;
    }
    // Parameterized Constructor -----> 3 Parameters
    Box(double l , double h , double w){
        this.l = l;
        this.h = h;
        this.w = w;
    }
    // Copy Constructor -----> 1 Parameters
    Box(Box old){
        this.l = old.l;
        this.h = old.h;
        this.w = old.w;
    }
    /*
        Now lets say I want to make a new class by the name BoxWeight that should have a weight property and all the other property that this Box class has.
        So rather than creating a new property , we can extend it from Parent Box.
        And that property will be called Inheritance.
    */
    public void information() {
        System.out.println("Running the Box.");
    }
}
