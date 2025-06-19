public class TestSingleton {
    public static void main(String[] args) {
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        //Test if both instance are same
        System.out.println(l1 == l2);
    }
}
