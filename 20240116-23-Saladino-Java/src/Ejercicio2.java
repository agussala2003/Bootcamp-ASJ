import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		int [] arr = new int [15];
		int num = 0;
		cargar(arr, num, scanner);
		ordenar(arr);
		mostrar(arr);
	}
	
	public static void cargar(int [] arr,int num, Scanner scanner) {
		for (int i = 0; i < arr.length; i++) {
			System.out.println("Ingrese el numero " + (i+1));
			num = scanner.nextInt();
			arr[i] = num;
		}
	}
	
	public static void ordenar(int[] arr) {
        int ultimoElemento = arr[arr.length - 1];
        for (int i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = ultimoElemento;
    }
	
	public static void mostrar(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
    }
}
