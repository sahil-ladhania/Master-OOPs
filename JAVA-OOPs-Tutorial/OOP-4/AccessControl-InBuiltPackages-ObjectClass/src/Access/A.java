package Access;

public class A {
    private int num;
    private String name;
    private int[] arr;

    public int getNum() {
        return num;
    }

    public String getName() {
        return name;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public void setName(String name) {
        this.name = name;
    }

    public A(int num , String name){
        this.num = num;
        this.name = name;
        this.arr = new int[num];
    }
}
