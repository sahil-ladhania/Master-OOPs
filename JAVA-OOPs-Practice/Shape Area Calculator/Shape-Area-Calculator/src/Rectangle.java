
public class Rectangle extends Shape {
    private int l;
    private int b;

    public int getL() {
        return l;
    }

    public int getB() {
        return b;
    }

    public void setL(int l) {
        this.l = l;
    }

    public void setB(int b) {
        this.b = b;
    }

    @Override
    int calculateArea() {
        return (l * b);
    }
}
