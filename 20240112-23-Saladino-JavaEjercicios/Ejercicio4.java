import java.util.Scanner;

public class Ejercicio4 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Ingresa un numero entre 2 y 20");
		int myInt = scanner.nextInt();
		
		while (myInt < 2 || myInt > 20) {
			System.out.println("Ingresa un numero entre 2 y 20");
			myInt = scanner.nextInt();
		}
		
		scanner.close();
		
		for (int iterator = 1; iterator < 11; iterator++) {
			System.out.println(myInt + " x " + iterator + " = " + (myInt * iterator));
		}
	}

}
