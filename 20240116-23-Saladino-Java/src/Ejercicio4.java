import java.util.HashSet;
import java.util.Set;

public class Ejercicio4 {

    public static void main(String[] args) {
        int[][] arr = new int[3][3];
        Set<Integer> numerosUsados = new HashSet<>();

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                int num;
                do {
                    num = (int) (Math.random() * 100);
                } while (numerosUsados.contains(num));
                arr[i][j] = num;
                numerosUsados.add(num);
            }
        }

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}
