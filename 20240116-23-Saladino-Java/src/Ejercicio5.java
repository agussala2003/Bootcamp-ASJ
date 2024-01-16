import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Ejercicio5 {

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
        
        Scanner scanner = new Scanner(System.in);
        System.out.println();
        System.out.println("Que deseas sumar de la matriz anterior?");
        System.out.println("1 - Fila");
        System.out.println("2 - Columna");
        int op = scanner.nextInt();
        int num = (int) (Math.random() * 3);
        int total = 0;
        switch (op) {
		case 1: {
			for (int i = 0; i < arr.length; i++) {
				total += arr[num][i];
			}
			System.out.println("El total de la fila " + (num+1) + " es: " + total);
			break;
		}
		case 2: { 
			for (int i = 0; i < arr[num].length; i++) {
				total += arr[i][num];
			}
			System.out.println("El total de la columna " + (num+1) + " es: " + total);
			break;
		}
		default:
			System.out.println("No es una opcion valida");
		}
        scanner.close();
	}

}
