import java.util.Scanner;

public class Ejercicio3 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingresa un numero entre 1 y 100");
		int myInt = scanner.nextInt();
		
		while (myInt < 1 || myInt > 100) {
			System.out.println("Ingresa un numero entre 1 y 100");
			myInt = scanner.nextInt();
		}
		
		scanner.close();
		
		if (myInt % 2 != 0) {
			System.out.println("Weird");
		} else if (myInt > 1 && myInt < 6) {
			System.out.println("Not Weird");
		} else if (myInt > 5 && myInt < 21) {
			System.out.println("Weird");
		} else if (myInt > 20) {
			System.out.println("Not Weird");
		}

	}

}
