import java.util.Scanner;

public class Ejercicio5 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Cant of queries (0-500)");
        int q = scanner.nextInt();

        while (q < 0 || q > 500) {
            System.out.println("Cant of queries (0-500)");
            q = scanner.nextInt();
        }

        for (int i = 0; i < q; i++) {
            System.out.println("Query " + (i + 1));
            System.out.println("Number a (0-50)");
            int a = scanner.nextInt();
            while (a < 0 || a > 50) {
                System.out.println("Number a (0-50)");
                a = scanner.nextInt();
            }

            System.out.println("Number b (0-50)");
            int b = scanner.nextInt();
            while (b < 0 || b > 50) {
                System.out.println("Number b (0-50)");
                b = scanner.nextInt();
            }

            System.out.println("Number n (1-15)");
            int n = scanner.nextInt();
            while (n < 1 || n > 15) {
                System.out.println("Number n (1-15)");
                n = scanner.nextInt();
            }

            int total = a;
            int subtotal = total;
            for (int j = 1; j <= n; j++) {
                subtotal += Math.pow(2, j - 1) * b;
                System.out.print(subtotal + " ");
            }
            System.out.println(); // Agregamos un salto de línea después de imprimir la serie.
        }
        
        scanner.close();
    }
}
