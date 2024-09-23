package Properties_1_Inheritance;

public class BoxWeight extends Box {
    double weight;
    public BoxWeight(){
        this.weight = -1;
    }
    public BoxWeight(double l , double h , double w , double weight){
        super(l , h , w); // What is this "super" Keyword : This is calling the Parent Class Constructor. This is used to initialise values present in Parent Class.
        this.weight = weight;
    }
}
