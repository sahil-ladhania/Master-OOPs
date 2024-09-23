package Properties_2_Polymorphism;

public class Circle extends Shapes {
    // This will run when the Object of Circle will be created
    // Hence it is overriding the Parent Method
    @Override // -----> This is called Annotation and it is used for check purposes.
    void area(){
        System.out.println("Im in Circle.");
    }
}
