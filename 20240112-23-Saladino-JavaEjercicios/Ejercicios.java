import java.util.Scanner;

public class Ejercicios {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Write 3 numbers:");
		// String myString = scanner.next(); Pedir string
		int myInt1 = scanner.nextInt();
		int myInt2 = scanner.nextInt();
		int myInt3 = scanner.nextInt();
		scanner.close();
		// System.out.println("First Number: " + myString);
		System.out.println("First Number: " + myInt1);
		System.out.println("Second Number: " + myInt2);
		System.out.println("Third Number: " + myInt3);
	}

}
