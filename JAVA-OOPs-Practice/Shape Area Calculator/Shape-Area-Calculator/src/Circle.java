
public class Circle extends Shape {
    private int r;

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    @Override
    int calculateArea() {
        return (int) (2 * Math.PI * r);
    }
}
